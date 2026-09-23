"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import ProjectCard from "@/components/ProjectCard";
import { projectsByCategory } from "@/data/projects";
import { getProjectCategory, type ProjectCategorySlug } from "@/data/projectCategories";

const CategoryProjects = ({ slug }: { slug: ProjectCategorySlug }) => {
  const t = useTranslations("ProjectsPage");
  const tCategories = useTranslations("ProjectCategories");
  const locale = useLocale();

  const category = getProjectCategory(slug);
  const projects = projectsByCategory(slug);

  return (
    <div className="w-full pb-16 pt-32 md:pt-36">
      <nav className="mx-auto flex max-w-7xl items-center gap-2 px-4 text-sm text-white-200 sm:px-6">
        <Link href={`/${locale}`} className="transition hover:text-white">
          {t("backHome")}
        </Link>
        <span aria-hidden="true" className="text-white/30">
          /
        </span>
        <Link href={`/${locale}/projects`} className="transition hover:text-white">
          {t("backToProjects")}
        </Link>
      </nav>

      <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="h-9 w-1.5 rounded-full"
            style={{ backgroundColor: category?.accent ?? "#8b5cf6" }}
          />
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            {tCategories(`${slug}.name`)}
          </h1>
        </div>
        <p className="mt-3 max-w-2xl text-sm text-[#BEC1DD] md:text-base">
          {tCategories(`${slug}.desc`)}
        </p>
      </div>

      <div className="mx-auto mt-10 grid w-full max-w-7xl grid-cols-1 gap-5 px-4 sm:px-6 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProjects;
