"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaLocationArrow } from "react-icons/fa6";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  /** Category pages already say which category you are in, so they hide the chip. */
  showCategory?: boolean;
};

const ProjectCard = ({ project, showCategory = false }: ProjectCardProps) => {
  const t = useTranslations("Projects");
  const tCategories = useTranslations("ProjectCategories");

  const title = t(`items.${project.slug}.title`);
  const href = project.demoVideo ?? project.link;
  const isGated = project.badge === "ztna";

  const cta = isGated
    ? t("liveSite")
    : project.badge === "repo"
      ? t("repository")
      : project.badge === "marketplace"
        ? t("marketplace")
        : project.demoVideo && project.demoVideo !== project.link
          ? t("viewDemo")
          : t("liveSite");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-h-[25.5rem] flex-col overflow-hidden rounded-lg border border-white/[0.08] bg-[#090b1a] shadow-[0_18px_48px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-purple/40 hover:bg-[#0d1024] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple/70"
    >
      <div className="relative h-48 overflow-hidden bg-[#11142a] sm:h-52">
        <Image
          src={project.thumbnail}
          alt={title}
          fill
          sizes="(min-width: 1280px) 392px, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-top transition duration-300 group-hover:scale-[1.03]"
        />
        {/* Screenshots range from near-black to white, so badges get their own scrim. */}
        {(project.featured || isGated) && (
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-black/55 to-transparent"
          />
        )}
        {project.featured && (
          <span className="absolute left-3 top-3 z-20 rounded-md border border-emerald-300/30 bg-emerald-400/15 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-emerald-100 backdrop-blur">
            {t("featuredBadge")}
          </span>
        )}
        {isGated && (
          <span className="absolute left-3 top-3 z-20 rounded-md border border-amber-300/30 bg-amber-400/15 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-amber-100 backdrop-blur">
            {t("ztnaBadge")}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex min-h-[4rem] items-start justify-between gap-4">
          <h2 className="text-lg font-bold leading-snug text-white md:text-xl">{title}</h2>
          <FaLocationArrow className="mt-1 shrink-0 text-purple transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        <p className="mt-3 min-h-[3.75rem] text-sm leading-6 text-[#BEC1DD] line-clamp-3">
          {t(`items.${project.slug}.desc`)}
        </p>

        {(showCategory || isGated) && (
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            {showCategory && (
              <span className="rounded-md border border-purple/20 bg-purple/10 px-2.5 py-1 text-purple">
                {tCategories(`${project.category}.name`)}
              </span>
            )}
            {isGated && (
              <span className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-white-200">
                {t("gatedNote")}
              </span>
            )}
          </div>
        )}

        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <div className="flex min-w-0 items-center">
            {project.iconLists.map((icon, index) => (
              <div
                key={icon}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[.16] bg-black"
                style={{ transform: `translateX(-${5 * index + 2}px)` }}
              >
                <Image src={icon} alt="" width={32} height={32} className="p-2" />
              </div>
            ))}
          </div>

          <span className="shrink-0 text-sm font-medium text-purple">{cta}</span>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
