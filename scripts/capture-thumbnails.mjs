/**
 * Screenshot every project that has a live URL.
 *
 * The portfolio previously shipped thumbnails inherited from a template, so
 * cards showed pages belonging to entirely different projects. These captures
 * are the real pages, taken from data/projects.ts `captureUrl`.
 *
 *   node scripts/capture-thumbnails.mjs            # only what is missing
 *   node scripts/capture-thumbnails.mjs --force    # re-capture everything
 *   node scripts/capture-thumbnails.mjs --only=qcaas,mirage-exchange
 */
import { access, mkdir } from "node:fs/promises";
import { chromium } from "playwright";

import { readProjects } from "./lib/read-projects.mjs";

const OUTPUT_DIR = "public/thumbnails";
const VIEWPORT = { width: 1280, height: 800 };
const NAVIGATION_TIMEOUT_MS = 45000;
/** Animations and late-mounting charts need a beat after the network settles. */
const SETTLE_MS = 1800;
const CONCURRENCY = 4;

const args = process.argv.slice(2);
const force = args.includes("--force");
const onlyArg = args.find((arg) => arg.startsWith("--only="));
const only = onlyArg ? new Set(onlyArg.slice("--only=".length).split(",")) : null;

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function capture(context, project) {
  const outputPath = `${OUTPUT_DIR}/${project.slug}.jpg`;

  if (!force && (await exists(outputPath))) {
    return { slug: project.slug, status: "skipped" };
  }

  const page = await context.newPage();
  try {
    await page.goto(project.captureUrl, {
      waitUntil: "networkidle",
      timeout: NAVIGATION_TIMEOUT_MS,
    });
    await page.waitForTimeout(SETTLE_MS);
    await page.screenshot({ path: outputPath, type: "jpeg", quality: 82 });
    return { slug: project.slug, status: "captured" };
  } catch (error) {
    // A slow site can miss `networkidle` while still having painted. Take what
    // is on screen rather than leaving the card without a thumbnail.
    try {
      await page.waitForTimeout(SETTLE_MS);
      await page.screenshot({ path: outputPath, type: "jpeg", quality: 82 });
      return { slug: project.slug, status: "captured-after-timeout" };
    } catch {
      return {
        slug: project.slug,
        status: "failed",
        error: error instanceof Error ? error.message.split("\n")[0] : String(error),
      };
    }
  } finally {
    await page.close();
  }
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const projects = (await readProjects()).filter(
    (project) => project.captureUrl && (!only || only.has(project.slug)),
  );

  if (projects.length === 0) {
    console.log("Nothing to capture.");
    return;
  }

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 2,
    // Some of these sites are authored in Traditional Chinese or Japanese;
    // asking for them explicitly avoids capturing a machine-translated view.
    locale: "zh-TW",
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36",
  });

  const results = [];
  let cursor = 0;
  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, projects.length) }, async () => {
      while (cursor < projects.length) {
        const project = projects[cursor++];
        const result = await capture(context, project);
        results.push(result);
        console.log(`${result.status.padEnd(24)} ${result.slug}${result.error ? ` — ${result.error}` : ""}`);
      }
    }),
  );

  await context.close();
  await browser.close();

  const failed = results.filter((result) => result.status === "failed");
  const captured = results.filter((result) => result.status.startsWith("captured"));
  console.log(
    `\n${captured.length} captured, ${results.length - captured.length - failed.length} skipped, ${failed.length} failed.`,
  );
  if (failed.length > 0) {
    console.error("Failed:", failed.map((result) => result.slug).join(", "));
    process.exitCode = 1;
  }
}

await main();
