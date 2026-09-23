export const navItems = [
  { name: "About", link: "#about" },
  { name: "Stats", link: "#stats" },
  { name: "Tech Stack", link: "#techstack" },
  { name: "Projects", link: "#projects" },
  { name: "Certifications", link: "#certifications" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 3,
    title: "",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] color:black",
    imgClassName: "w-full h-full",
    titleClassName: "justify-en color:black",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 4,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/gcp.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// Project cards moved to data/projects.ts so each entry can carry a category
// and a slug. Re-exported here to keep existing `@/data` imports working.
export { projects, featuredProjects, projectsByCategory, countByCategory } from "./projects";
export type { Project } from "./projects";
export * from "./projectCategories";

export const workExperience = [
  {
    id: 1,
    title: "",
    desc: "",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "",
    desc: "",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "",
    desc: "",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "",
    desc: "",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/dennislee928",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/lee66876613",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/pf-frog-4a3a352a2/",
  },
];
