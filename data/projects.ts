import type { ProjectCategorySlug } from "./projectCategories";

export type Project = {
  /** Stable key used for i18n lookups (`Projects.items.<slug>`) and thumbnail filenames. */
  slug: string;
  category: ProjectCategorySlug;
  /** Where the card links. Live site when there is one, otherwise the repository. */
  link: string;
  /** Hostname to screenshot. Absent for repository-only work, which gets a generated card. */
  captureUrl?: string;
  thumbnail: string;
  iconLists: string[];
  /** Surfaced on the homepage as one of the three highlight blocks. */
  featured?: boolean;
  /** Shown as a badge; used for the Cloudflare Access entry. */
  badge?: "ztna" | "repo" | "marketplace";
  repo?: string;
  demoVideo?: string;
};

const THUMB = (slug: string, ext: "jpg" | "svg" = "jpg") => `/thumbnails/${slug}.${ext}`;

export const projects: Project[] = [
  /* ------------------------------------------------------ AI & Security */
  {
    slug: "inclusive-ai-trust-gateway",
    category: "ai-security",
    link: "https://inclusive-ai-trust-gateway.dennisleehappy.org/",
    captureUrl: "https://inclusive-ai-trust-gateway.dennisleehappy.org/",
    thumbnail: THUMB("inclusive-ai-trust-gateway"),
    iconLists: ["/next.svg", "/ts.svg", "/vercel.svg"],
    featured: true,
  },
  {
    slug: "agentic-defense-matrix",
    category: "ai-security",
    link: "https://jest-test-team.github.io/Agentic-Defense-Matrix-ADM/?api=https://api.dennisleehappy.org&gw=https://api.dennisleehappy.org",
    captureUrl:
      "https://jest-test-team.github.io/Agentic-Defense-Matrix-ADM/?api=https://api.dennisleehappy.org&gw=https://api.dennisleehappy.org",
    thumbnail: THUMB("agentic-defense-matrix"),
    iconLists: ["/github.svg", "/ts.svg", "/cloud.svg"],
    featured: true,
  },
  {
    slug: "hexstrike-attack-dashboard",
    category: "ai-security",
    link: "https://hexstrike-self.dennisleehappy.org/",
    captureUrl: "https://hexstrike-self.dennisleehappy.org/",
    thumbnail: THUMB("hexstrike-attack-dashboard"),
    iconLists: ["/ts.svg", "/cloud.svg"],
  },
  {
    slug: "iot-knowledge-search",
    category: "ai-security",
    link: "https://rag.dennisleehappy.org/",
    captureUrl: "https://rag.dennisleehappy.org/",
    thumbnail: THUMB("iot-knowledge-search"),
    iconLists: ["/next.svg", "/ts.svg", "/cloud.svg"],
  },
  {
    slug: "mcp-remote-auth",
    category: "ai-security",
    link: "https://custom-mcp.dennisleehappy.org/",
    captureUrl: "https://custom-mcp.dennisleehappy.org/",
    thumbnail: THUMB("mcp-remote-auth"),
    iconLists: ["/ts.svg", "/cloud.svg"],
  },
  {
    slug: "pqc-digital-twin",
    category: "ai-security",
    link: "https://pqc-digital-twin.dennisleehappy.org/",
    captureUrl: "https://pqc-digital-twin.dennisleehappy.org/",
    thumbnail: THUMB("pqc-digital-twin"),
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg"],
  },
  {
    slug: "ztna-ops-panel",
    category: "ai-security",
    link: "https://panel.dennisleehappy.org/",
    thumbnail: THUMB("ztna-ops-panel", "svg"),
    iconLists: ["/cloud.svg", "/ts.svg"],
    badge: "ztna",
  },
  {
    slug: "cloudflare-dns-failover",
    category: "ai-security",
    link: "https://github.com/dennislee928/Cloudflare_Developer_Labs",
    thumbnail: THUMB("cloudflare-dns-failover", "svg"),
    iconLists: ["/vue.svg", "/nuxt3.svg", "/ts.svg"],
    badge: "repo",
    repo: "dennislee928/Cloudflare_Developer_Labs",
    demoVideo: "https://youtu.be/vWDmq0GiCo4",
  },
  {
    slug: "firmware-analysis-lab",
    category: "ai-security",
    link: "https://github.com/dennislee928/firmware-research-demo",
    thumbnail: THUMB("firmware-analysis-lab", "svg"),
    iconLists: ["/ts.svg", "/c.svg"],
    badge: "repo",
    repo: "dennislee928/firmware-research-demo",
    demoVideo: "https://youtu.be/rHVcB-mxKB8",
  },

  /* ----------------------------------------------------- Web3 & Fintech */
  {
    slug: "web3-interaction-platform",
    category: "web3-fintech",
    link: "https://web3.dennisleehappy.org/",
    captureUrl: "https://web3.dennisleehappy.org/",
    thumbnail: THUMB("web3-interaction-platform"),
    iconLists: ["/re.svg", "/tail.svg"],
  },
  {
    slug: "mirage-exchange",
    category: "web3-fintech",
    link: "https://mirage-exchange.dennisleehappy.org/",
    captureUrl: "https://mirage-exchange.dennisleehappy.org/",
    thumbnail: THUMB("mirage-exchange"),
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg"],
  },
  {
    slug: "bitcoin24",
    category: "web3-fintech",
    link: "https://btc24.dennisleehappy.org/",
    captureUrl: "https://btc24.dennisleehappy.org/",
    thumbnail: THUMB("bitcoin24"),
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg"],
  },
  {
    slug: "crypto-info-site",
    category: "web3-fintech",
    link: "https://all-coin.dennisleehappy.org/",
    captureUrl: "https://all-coin.dennisleehappy.org/",
    thumbnail: THUMB("crypto-info-site"),
    iconLists: ["/re.svg", "/ts.svg"],
  },
  {
    slug: "noir-zk-recovery",
    category: "web3-fintech",
    link: "https://noir-zk.dennisleehappy.org/",
    captureUrl: "https://noir-zk.dennisleehappy.org/",
    thumbnail: THUMB("noir-zk-recovery"),
    iconLists: ["/ts.svg", "/cloud.svg"],
  },
  {
    slug: "ksn-sovereign-asset",
    category: "web3-fintech",
    link: "https://ksn.dennisleehappy.org/",
    captureUrl: "https://ksn.dennisleehappy.org/",
    thumbnail: THUMB("ksn-sovereign-asset"),
    iconLists: ["/next.svg", "/ts.svg", "/three.svg"],
  },
  {
    slug: "carbon-trading-platform",
    category: "web3-fintech",
    link: "https://carbontrading.dennisleehappy.org/",
    captureUrl: "https://carbontrading.dennisleehappy.org/",
    thumbnail: THUMB("carbon-trading-platform"),
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg"],
    repo: "dennislee928/carboon-trade-backend",
    demoVideo: "https://youtu.be/_iW3o3_Lvzs",
  },
  {
    slug: "stock-payment-sandbox",
    category: "web3-fintech",
    link: "https://stock-pay.dennisleehappy.org/",
    captureUrl: "https://stock-pay.dennisleehappy.org/",
    thumbnail: THUMB("stock-payment-sandbox"),
    iconLists: ["/vue.svg", "/nuxt3.svg", "/ts.svg"],
  },
  {
    slug: "bitfinex-funding-bot",
    category: "web3-fintech",
    link: "https://github.com/dennislee928/fundbot-go",
    thumbnail: THUMB("bitfinex-funding-bot", "svg"),
    iconLists: ["/ts.svg", "/dock.svg"],
    badge: "repo",
    repo: "dennislee928/fundbot-go",
  },

  /* ----------------------------------------------- Quantum & Simulation */
  {
    slug: "qcaas",
    category: "quantum-simulation",
    link: "https://www.zekequiskitz.dpdns.org/",
    captureUrl: "https://www.zekequiskitz.dpdns.org/",
    thumbnail: THUMB("qcaas"),
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg"],
  },
  {
    slug: "essentia-quantum-audio",
    category: "quantum-simulation",
    link: "https://essentia.dennisleehappy.org/",
    captureUrl: "https://essentia.dennisleehappy.org/",
    thumbnail: THUMB("essentia-quantum-audio"),
    iconLists: ["/next.svg", "/three.svg", "/ts.svg"],
  },
  {
    slug: "life-3-0-doomsday-clock",
    category: "quantum-simulation",
    link: "https://life-3-0.dennisleehappy.org/",
    captureUrl: "https://life-3-0.dennisleehappy.org/",
    thumbnail: THUMB("life-3-0-doomsday-clock"),
    iconLists: ["/re.svg", "/ts.svg", "/cloud.svg"],
  },
  {
    slug: "datacenter-builder-simulator",
    category: "quantum-simulation",
    link: "https://datacenter-building-simulator.dennisleehappy.org/",
    captureUrl: "https://datacenter-building-simulator.dennisleehappy.org/",
    thumbnail: THUMB("datacenter-builder-simulator"),
    iconLists: ["/next.svg", "/three.svg", "/ts.svg"],
  },
  {
    slug: "feeder-ide-digital-twin",
    category: "quantum-simulation",
    link: "https://feeder-of-the-future-prize.dennisleehappy.org/",
    captureUrl: "https://feeder-of-the-future-prize.dennisleehappy.org/",
    thumbnail: THUMB("feeder-ide-digital-twin"),
    iconLists: ["/re.svg", "/ts.svg", "/three.svg"],
  },

  /* ----------------------------------------------- Business Platforms */
  {
    slug: "cityinsight-360",
    category: "business-platforms",
    link: "https://shipeng-dev.dennisleehappy.org/login",
    captureUrl: "https://shipeng-dev.dennisleehappy.org/login",
    thumbnail: THUMB("cityinsight-360"),
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg"],
    featured: true,
  },
  {
    slug: "livehouse-aas",
    category: "business-platforms",
    link: "https://livehouse-aas.dennisleehappy.org/",
    captureUrl: "https://livehouse-aas.dennisleehappy.org/",
    thumbnail: THUMB("livehouse-aas"),
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg"],
  },
  {
    slug: "government-data-hub",
    category: "business-platforms",
    link: "https://government.dennisleehappy.org/",
    captureUrl: "https://government.dennisleehappy.org/",
    thumbnail: THUMB("government-data-hub"),
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg"],
  },
  {
    slug: "fermy",
    category: "business-platforms",
    link: "https://cafe.dennisleehappy.org/",
    captureUrl: "https://cafe.dennisleehappy.org/",
    thumbnail: THUMB("fermy"),
    iconLists: ["/next.svg", "/tail.svg"],
  },
  {
    slug: "academy-central",
    category: "business-platforms",
    link: "https://academy.dennisleehappy.org/",
    captureUrl: "https://academy.dennisleehappy.org/",
    thumbnail: THUMB("academy-central"),
    iconLists: ["/next.svg", "/ts.svg"],
  },

  /* -------------------------------------------------- Developer Tools */
  {
    slug: "nthing-ui",
    category: "developer-tools",
    link: "https://nothingx-components.dennisleehappy.org/",
    captureUrl: "https://nothingx-components.dennisleehappy.org/",
    thumbnail: THUMB("nthing-ui"),
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg"],
  },
  {
    slug: "chipwhisperer-workbench",
    category: "developer-tools",
    link: "https://chip-whisper-lab.dennisleehappy.org/",
    captureUrl: "https://chip-whisper-lab.dennisleehappy.org/",
    thumbnail: THUMB("chipwhisperer-workbench"),
    iconLists: ["/next.svg", "/c.svg", "/ts.svg"],
  },
  {
    slug: "qu-lab",
    category: "developer-tools",
    link: "https://qu-lab.dennisleehappy.org/",
    captureUrl: "https://qu-lab.dennisleehappy.org/",
    thumbnail: THUMB("qu-lab"),
    iconLists: ["/vue.svg", "/ts.svg"],
  },

  /* --------------------------------------------- Extensions & Plugins */
  {
    slug: "jest-security-extension-guard",
    category: "extensions-plugins",
    link: "https://github.com/marketplace/actions/jest-security-extension-guard",
    captureUrl: "https://github.com/marketplace/actions/jest-security-extension-guard",
    thumbnail: THUMB("jest-security-extension-guard"),
    iconLists: ["/github.svg", "/ts.svg"],
    badge: "marketplace",
    repo: "Jest-Test-Team/ide-extension",
  },
  {
    slug: "vscode-security-extension-pack",
    category: "extensions-plugins",
    link: "https://marketplace.visualstudio.com/publishers/jest-test-team",
    captureUrl: "https://marketplace.visualstudio.com/items?itemName=jest-test-team.security-pack",
    thumbnail: THUMB("vscode-security-extension-pack"),
    iconLists: ["/ts.svg", "/github.svg"],
    badge: "marketplace",
  },
  {
    slug: "jest-ide-extension-monorepo",
    category: "extensions-plugins",
    link: "https://github.com/Jest-Test-Team/ide-extension",
    thumbnail: THUMB("jest-ide-extension-monorepo", "svg"),
    iconLists: ["/github.svg", "/ts.svg", "/c.svg"],
    badge: "repo",
    repo: "Jest-Test-Team/ide-extension",
  },

  /* ------------------------------------------------ Labs & Experiments */
  {
    slug: "ielts-writing-error-tester",
    category: "labs-experiments",
    link: "https://ielts-test-game.dennisleehappy.org/",
    captureUrl: "https://ielts-test-game.dennisleehappy.org/",
    thumbnail: THUMB("ielts-writing-error-tester"),
    iconLists: ["/re.svg", "/tail.svg"],
  },
  {
    slug: "life-design-8bit",
    category: "labs-experiments",
    link: "https://devsecops-x-life-design.dennisleehappy.org/",
    captureUrl: "https://devsecops-x-life-design.dennisleehappy.org/",
    thumbnail: THUMB("life-design-8bit"),
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg"],
  },
  {
    slug: "mission-dao",
    category: "labs-experiments",
    link: "https://dao-citizen-space-exploration.dennisleehappy.org/",
    captureUrl: "https://dao-citizen-space-exploration.dennisleehappy.org/",
    thumbnail: THUMB("mission-dao"),
    iconLists: ["/next.svg", "/three.svg", "/ts.svg"],
  },
  {
    slug: "cloudflare-ai-image-generation",
    category: "labs-experiments",
    link: "https://github.com/dennislee928/firmware-research-demo/tree/tsse",
    thumbnail: THUMB("cloudflare-ai-image-generation", "svg"),
    iconLists: ["/re.svg", "/cloud.svg"],
    badge: "repo",
    repo: "dennislee928/firmware-research-demo",
    demoVideo: "https://youtu.be/43sSu1Ve55s",
  },
  {
    slug: "side-project-backend",
    category: "labs-experiments",
    link: "https://github.com/dennislee928/side-project-1-backend",
    thumbnail: THUMB("side-project-backend", "svg"),
    iconLists: ["/gcp.svg", "/dock.svg"],
    badge: "repo",
    repo: "dennislee928/side-project-1-backend",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function projectsByCategory(category: ProjectCategorySlug): Project[] {
  return projects.filter((project) => project.category === category);
}

export function countByCategory(): Record<string, number> {
  return projects.reduce<Record<string, number>>((counts, project) => {
    counts[project.category] = (counts[project.category] ?? 0) + 1;
    return counts;
  }, {});
}
