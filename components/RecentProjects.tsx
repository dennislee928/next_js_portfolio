"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "@/components/MagicButton";
import ProjectCard from "@/components/ProjectCard";
import { countByCategory, featuredProjects } from "@/data/projects";
import { projectCategories } from "@/data/projectCategories";

/**
 * The homepage shows only the three highlights. Everything else lives on
 * /projects, grouped by what each site was built for.
 */
const RecentProjects = () => {
  const t = useTranslations("Projects");
  const tCategories = useTranslations("ProjectCategories");
  const locale = useLocale();

  const counts = countByCategory();

  return (
    <section id="projects" className="py-16 md:py-20">
      <h1 className="heading">
        {t.rich("heading", {
          highlight: (chunks) => <span className="text-purple">{chunks}</span>,
        })}
      </h1>
      <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-white-200 md:text-base">
        {t("subheading")}
      </p>

      <div className="mx-auto mt-10 grid w-full max-w-7xl grid-cols-1 gap-5 px-4 sm:px-6 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} showCategory />
        ))}
      </div>

      <div className="mx-auto mt-14 w-full max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-white-200">
          {t("browseByCategory")}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {projectCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/${locale}/projects/${category.slug}`}
              className="group flex items-center justify-between gap-4 rounded-lg border border-white/[0.08] bg-[#090b1a] px-4 py-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-purple/40 hover:bg-[#0d1024] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple/70"
            >
              <span className="flex min-w-0 items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-8 w-1 shrink-0 rounded-full"
                  style={{ backgroundColor: category.accent }}
                />
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium text-white">
                    {tCategories(`${category.slug}.name`)}
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-[#BEC1DD]">
                    {tCategories(`${category.slug}.desc`)}
                  </span>
                </span>
              </span>
              <span className="shrink-0 rounded-md border border-white/[0.1] bg-white/[0.04] px-2 py-0.5 text-xs text-white-200">
                {counts[category.slug] ?? 0}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href={`/${locale}/projects`} className="w-full md:w-auto">
            <MagicButton
              title={t("viewAll")}
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="!bg-[#161a31]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
