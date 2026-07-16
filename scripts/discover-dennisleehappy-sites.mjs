import { mkdir, readFile, writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const ROOT_DOMAIN = "dennisleehappy.org";
const PORTFOLIO_URL = "https://www.dennisleehappy.org/en";
const REQUIRED_URLS = [
  "https://inclusive-ai-trust-gateway-web.vercel.app/",
  "https://jest-test-team.github.io/Agentic-Defense-Matrix-ADM/?api=https://api.dennisleehappy.org&gw=https://api.dennisleehappy.org",
];

const SEEDED_URLS = [
  PORTFOLIO_URL,
  "https://web3.dennisleehappy.org/",
  "https://shipeng-dev.dennisleehappy.org/login",
  "https://essentia.dennisleehappy.org/",
  "https://api.dennisleehappy.org/",
  ...REQUIRED_URLS,
];

const VALUE_NOTES = new Map([
  ["web3.dennisleehappy.org", "Keep: live Web3 UI, useful for frontend and smart-contract credibility."],
  ["shipeng-dev.dennisleehappy.org", "Keep: live construction/project-management product surface; strongest business-app example."],
  ["essentia.dennisleehappy.org", "Keep: distinctive audio/AI interface, visually different from other cards."],
  ["api.dennisleehappy.org", "Keep: API gateway target used by AI trust and ADM demos."],
  ["inclusive-ai-trust-gateway-web.vercel.app", "Must have: primary AI trust and governance frontend."],
  ["jest-test-team.github.io", "Must have: ADM defense matrix preconfigured with api.dennisleehappy.org."],
  ["www.dennisleehappy.org", "Root portfolio: source page for domain-link discovery."],
]);

function normalizeUrl(rawUrl) {
  try {
    const url = new URL(rawUrl.replaceAll("&amp;", "&"));
    url.hash = "";
    return url.toString();
  } catch {
    return null;
  }
}

function extractUrls(text) {
  const matches = text.match(/https?:\/\/[^\s"'<>),]+/g) ?? [];
  return matches.map(normalizeUrl).filter(Boolean);
}

async function fetchText(url) {
  try {
    const { stdout } = await execFileAsync("curl", [
      "-fsSL",
      "--max-time",
      "15",
      "-A",
      "dennisleehappy-site-discovery/1.0",
      url,
    ]);
    return stdout;
  } catch {
    return "";
  }
}

async function checkUrl(url) {
  const startedAt = Date.now();
  const curlFormat = "%{http_code}\\n%{url_effective}\\n%{content_type}";

  try {
    let result = await execFileAsync("curl", [
      "-sSIL",
      "--max-time",
      "15",
      "-A",
      "dennisleehappy-site-discovery/1.0",
      "-o",
      "/dev/null",
      "-w",
      curlFormat,
      url,
    ]);

    let [statusText, finalUrl, contentType] = result.stdout.trim().split("\n");
    let status = Number(statusText);

    if (status === 405 || status === 403 || status === 0) {
      result = await execFileAsync("curl", [
        "-sSL",
        "--max-time",
        "15",
        "-A",
        "dennisleehappy-site-discovery/1.0",
        "-o",
        "/dev/null",
        "-w",
        curlFormat,
        url,
      ]);
      [statusText, finalUrl, contentType] = result.stdout.trim().split("\n");
      status = Number(statusText);
    }

    return {
      url,
      host: new URL(url).host,
      ok: status >= 200 && status < 400,
      status,
      finalUrl,
      contentType: contentType || null,
      latencyMs: Date.now() - startedAt,
      required: REQUIRED_URLS.includes(url),
      containsRootDomain: url.includes(ROOT_DOMAIN),
      value: VALUE_NOTES.get(new URL(url).host) ?? "Review: discovered URL should be assessed before adding a card.",
    };
  } catch (error) {
    return {
      url,
      host: new URL(url).host,
      ok: false,
      status: 0,
      finalUrl: null,
      contentType: null,
      latencyMs: Date.now() - startedAt,
      required: REQUIRED_URLS.includes(url),
      containsRootDomain: url.includes(ROOT_DOMAIN),
      value: VALUE_NOTES.get(new URL(url).host) ?? "Review: discovered URL should be assessed before adding a card.",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

async function main() {
  const dataIndex = await readFile("data/index.ts", "utf8");
  const portfolioHtml = await fetchText(PORTFOLIO_URL);
  const discovered = new Set(
    [
      ...SEEDED_URLS,
      ...extractUrls(dataIndex),
      ...extractUrls(portfolioHtml),
    ]
      .map(normalizeUrl)
      .filter(Boolean)
      .filter((url) => url.includes(ROOT_DOMAIN) || REQUIRED_URLS.includes(url)),
  );

  const checked = await Promise.all([...discovered].sort().map(checkUrl));
  const report = {
    generatedAt: new Date().toISOString(),
    rootDomain: ROOT_DOMAIN,
    portfolioUrl: PORTFOLIO_URL,
    summary: {
      totalUrls: checked.length,
      liveUrls: checked.filter((item) => item.ok).length,
      requiredUrls: REQUIRED_URLS.length,
      requiredLiveUrls: checked.filter((item) => item.required && item.ok).length,
    },
    urls: checked,
  };

  await mkdir("data", { recursive: true });
  await writeFile("data/site-discovery-report.json", `${JSON.stringify(report, null, 2)}\n`);

  const failedRequired = checked.filter((item) => item.required && !item.ok);
  if (failedRequired.length > 0) {
    console.error("Required URLs failed:", failedRequired.map((item) => item.url).join(", "));
    process.exitCode = 1;
  }

  console.log(
    `Checked ${report.summary.totalUrls} URLs; ${report.summary.liveUrls} live; ` +
      `${report.summary.requiredLiveUrls}/${report.summary.requiredUrls} required live.`,
  );
}

await main();
