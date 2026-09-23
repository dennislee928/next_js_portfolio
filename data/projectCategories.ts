/**
 * The six buckets the Projects dropdown and the /projects sub-pages are built
 * from. Ordering here is the ordering everywhere: nav, index page, chips.
 */
export type ProjectCategorySlug =
  | "ai-security"
  | "web3-fintech"
  | "quantum-simulation"
  | "business-platforms"
  | "developer-tools"
  | "labs-experiments";

export type ProjectCategory = {
  slug: ProjectCategorySlug;
  /** Accent used for the category chip and the sub-page heading rule. */
  accent: string;
};

export const projectCategories: ProjectCategory[] = [
  { slug: "ai-security", accent: "#8b5cf6" },
  { slug: "web3-fintech", accent: "#22d3ee" },
  { slug: "quantum-simulation", accent: "#f472b6" },
  { slug: "business-platforms", accent: "#34d399" },
  { slug: "developer-tools", accent: "#fbbf24" },
  { slug: "labs-experiments", accent: "#a78bfa" },
];

export const projectCategorySlugs = projectCategories.map((category) => category.slug);

export function isProjectCategorySlug(value: string): value is ProjectCategorySlug {
  return projectCategorySlugs.includes(value as ProjectCategorySlug);
}

export function getProjectCategory(slug: string): ProjectCategory | undefined {
  return projectCategories.find((category) => category.slug === slug);
}
