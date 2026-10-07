/**
 * Generate thumbnail cards for projects that have no page to screenshot:
 * repository-only work, and the panel that sits behind Cloudflare Access.
 *
 * Output matches the 1280x800 framing of the real captures so the two kinds of
 * thumbnail sit together in the same grid without jumping.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";

import { readProjects } from "./lib/read-projects.mjs";

const OUTPUT_DIR = "public/thumbnails";
const WIDTH = 1280;
const HEIGHT = 800;

/** Matches the accents in data/projectCategories.ts. */
const CATEGORY_ACCENTS = {
  "ai-security": "#8b5cf6",
  "web3-fintech": "#22d3ee",
  "quantum-simulation": "#f472b6",
  "business-platforms": "#34d399",
  "developer-tools": "#fbbf24",
  "extensions-plugins": "#60a5fa",
  "labs-experiments": "#a78bfa",
};

const escapeXml = (value) =>
  value.replace(/[<>&"']/g, (character) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" })[character],
  );

function wrap(text, maxChars, maxLines) {
  const lines = [];
  let line = "";

  for (const word of text.split(" ")) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > maxChars && line) {
      lines.push(line);
      line = word;
      if (lines.length === maxLines - 1) break;
    } else {
      line = candidate;
    }
  }
  if (line && lines.length < maxLines) lines.push(line);

  // Anything that did not fit is signalled rather than silently dropped.
  const used = lines.join(" ");
  if (used.length < text.length && lines.length > 0) {
    lines[lines.length - 1] = `${lines[lines.length - 1]}…`;
  }
  return lines;
}

function buildCard({ title, subtitle, label, accent }) {
  const titleLines = wrap(title, 22, 3);
  const titleStart = 360 - (titleLines.length - 1) * 38;

  const titleTspans = titleLines
    .map(
      (line, index) =>
        `<tspan x="88" y="${titleStart + index * 76}">${escapeXml(line)}</tspan>`,
    )
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" role="img" aria-label="${escapeXml(title)}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#090b1a"/>
      <stop offset="60%" stop-color="#0d1024"/>
      <stop offset="100%" stop-color="#141935"/>
    </linearGradient>
    <radialGradient id="glow" cx="82%" cy="18%" r="62%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#ffffff" stroke-opacity="0.045" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grid)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>

  <rect x="88" y="132" width="76" height="6" rx="3" fill="${accent}"/>

  <g font-family="Inter, 'Helvetica Neue', Arial, sans-serif">
    <text x="88" y="196" font-size="26" font-weight="600" letter-spacing="3.4" fill="${accent}" fill-opacity="0.92">${escapeXml(label.toUpperCase())}</text>
    <text font-size="64" font-weight="700" fill="#ffffff" letter-spacing="-1">${titleTspans}</text>
    <text x="88" y="${titleStart + titleLines.length * 76 + 18}" font-size="28" fill="#9aa0c3" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">${escapeXml(subtitle)}</text>
  </g>

  <rect x="0" y="${HEIGHT - 8}" width="${WIDTH}" height="8" fill="${accent}" fill-opacity="0.5"/>
</svg>
`;
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const messages = JSON.parse(await readFile("messages/en.json", "utf8"));
  const items = messages.Projects?.items ?? {};

  const projects = (await readProjects()).filter((project) =>
    project.thumbnail.endsWith(".svg"),
  );

  const LABELS = { ztna: "Cloudflare Access", marketplace: "Marketplace", repo: "Repository" };

  for (const project of projects) {
    const title = items[project.slug]?.title ?? project.slug;
    // Repository-only work is named by its repo; anything with a page by its host.
    const subtitle =
      project.badge === "repo" ? project.repo ?? "" : new URL(project.link).host;

    const svg = buildCard({
      title,
      label: LABELS[project.badge] ?? "Repository",
      subtitle,
      accent: CATEGORY_ACCENTS[project.category] ?? "#8b5cf6",
    });

    await writeFile(`${OUTPUT_DIR}/${project.slug}.svg`, svg);
    console.log(`generated  ${project.slug}.svg  (${title})`);
  }

  console.log(`\n${projects.length} fallback cards generated.`);
}

await main();
