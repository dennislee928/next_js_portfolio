import { readFile } from "node:fs/promises";

const PROJECTS_FILE = "data/projects.ts";

/**
 * Read the project roster out of data/projects.ts.
 *
 * The file is plain data with no runtime imports, but it is TypeScript, and the
 * discovery/thumbnail scripts have to run on whatever Node the CI image
 * provides. Parsing the literal keeps these scripts free of a TS loader.
 */
export async function readProjects() {
  const source = await readFile(PROJECTS_FILE, "utf8");
  const arrayStart = source.indexOf("export const projects: Project[] = [");
  if (arrayStart === -1) throw new Error(`Could not find the projects array in ${PROJECTS_FILE}`);

  const body = source.slice(arrayStart);
  const projects = [];

  for (const block of body.split(/\n  \{\n/).slice(1)) {
    const entry = block.split(/\n  \},?/)[0];
    const read = (key) => {
      const match = entry.match(new RegExp(`\\b${key}:\\s*\\n?\\s*"([^"]*)"`));
      return match ? match[1] : undefined;
    };

    const slug = read("slug");
    if (!slug) continue;

    const thumbMatch = entry.match(/thumbnail:\s*THUMB\("([^"]+)"(?:,\s*"(jpg|svg)")?\)/);

    projects.push({
      slug,
      category: read("category"),
      link: read("link"),
      captureUrl: read("captureUrl"),
      badge: read("badge"),
      repo: read("repo"),
      iconLists: [...entry.matchAll(/"(\/[a-z0-9-]+\.svg)"/g)].map((match) => match[1]),
      thumbnail: thumbMatch
        ? `/thumbnails/${thumbMatch[1]}.${thumbMatch[2] ?? "jpg"}`
        : `/thumbnails/${slug}.jpg`,
    });
  }

  if (projects.length === 0) throw new Error(`Parsed 0 projects from ${PROJECTS_FILE}`);
  return projects;
}
