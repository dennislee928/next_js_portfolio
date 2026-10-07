"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import ProjectCard from "@/components/ProjectCard";
import { projectsByCategory } from "@/data/projects";
import { projectCategories } from "@/data/projectCategories";

/** Every project, grouped under the seven purpose categories. */
const ProjectsIndex = () => {
  const t = useTranslations("ProjectsPage");
  const tCategories = useTranslations("ProjectCategories");
  const locale = useLocale();

  return (
    <div className="w-full pb-16 pt-32 md:pt-36">
      <h1 className="heading">{t("title")}</h1>
      <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-white-200 md:text-base">
        {t("subtitle")}
      </p>

      <div className="mt-14 space-y-16">
        {projectCategories.map((category) => {
          const projects = projectsByCategory(category.slug);

          return (
            <section key={category.slug} id={category.slug} className="scroll-mt-32">
              <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-4 px-4 sm:px-6">
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="h-6 w-1 rounded-full"
                      style={{ backgroundColor: category.accent }}
                    />
                    <h2 className="text-xl font-bold text-white md:text-2xl">
                      {tCategories(`${category.slug}.name`)}
                    </h2>
                  </div>
                  <p className="mt-2 text-sm text-[#BEC1DD]">
                    {tCategories(`${category.slug}.desc`)}
                  </p>
                </div>

                <Link
                  href={`/${locale}/projects/${category.slug}`}
                  className="shrink-0 rounded-md border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 text-xs text-white-200 transition hover:border-purple/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple/70"
                >
                  {projects.length}
                </Link>
              </div>

              <div className="mx-auto mt-6 grid w-full max-w-7xl grid-cols-1 gap-5 px-4 sm:px-6 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsIndex;
