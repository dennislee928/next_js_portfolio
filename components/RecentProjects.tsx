"use client";

import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { useTranslations } from "next-intl";

type ProjectCard = {
  id: number;
  img: string;
  thumbnailAlt?: string;
  iconLists: string[];
  link: string;
  demoVideo?: string;
  status?: string;
  value?: string;
  source?: string;
  featured?: boolean;
};

const projectNoteById: Record<number, string> = {
  11: "AI governance frontend",
  12: "Defense matrix + gateway",
  13: "API gateway service",
};

const RecentProjects = () => {
  const t = useTranslations('Projects');
  const orderedProjects = [...(projects as ProjectCard[])].sort((a, b) => {
    if (a.featured === b.featured) return a.id - b.id;
    return a.featured ? -1 : 1;
  });

  return (
    <section id="projects" className="py-16 md:py-20">
      <h1 className="heading">
        {t.rich('heading', {
          highlight: (chunks) => <span className="text-purple">{chunks}</span>
        })}
      </h1>
      <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-white-200 md:text-base">
        {t('subheading')}
      </p>
      <div className="mx-auto mt-10 grid w-full max-w-7xl grid-cols-1 gap-5 px-4 sm:px-6 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
        {orderedProjects.map((item) => (
          <a
            href={item.demoVideo ?? item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex min-h-[25.5rem] flex-col overflow-hidden rounded-lg border border-white/[0.08] bg-[#090b1a] shadow-[0_18px_48px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-purple/40 hover:bg-[#0d1024] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple/70 ${
              item.featured ? "md:col-span-2 xl:col-span-1" : ""
            }`}
            key={item.id}
          >
            <div className="relative h-48 overflow-hidden bg-[#11142a] sm:h-52">
              <Image
                src="/bg.png"
                alt=""
                fill
                sizes="(min-width: 1280px) 392px, (min-width: 768px) 50vw, 100vw"
                className="object-cover opacity-55"
              />
              <Image
                src={item.img}
                alt={item.thumbnailAlt ?? t(`project${item.id}.title`)}
                fill
                sizes="(min-width: 1280px) 392px, (min-width: 768px) 50vw, 100vw"
                className="z-10 object-contain object-bottom p-4 transition duration-300 group-hover:scale-[1.03]"
              />
              {item.featured && (
                <span className="absolute left-3 top-3 z-20 rounded-md border border-emerald-300/30 bg-emerald-400/15 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-emerald-100 backdrop-blur">
                  Must have
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col p-5">
              <div className="flex min-h-[4rem] items-start justify-between gap-4">
                <h2 className="text-lg font-bold leading-snug text-white md:text-xl">
                  {t(`project${item.id}.title`)}
                </h2>
                <FaLocationArrow className="mt-1 shrink-0 text-purple transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <p className="mt-3 min-h-[3.75rem] text-sm leading-6 text-[#BEC1DD] line-clamp-3">
                {t(`project${item.id}.desc`)}
              </p>

              {(item.status || item.value) && (
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  {item.status && (
                    <span className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-white-200">
                      {item.status.replace(", verified ", " ")}
                    </span>
                  )}
                  {item.value && (
                    <span className="rounded-md border border-purple/20 bg-purple/10 px-2.5 py-1 text-purple">
                      {projectNoteById[item.id] ?? item.value.replace(/^Must-have:\s*/i, "")}
                    </span>
                  )}
                </div>
              )}

              <div className="mt-auto flex items-end justify-between gap-4 pt-6">
                <div className="flex min-w-0 items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[.16] bg-black"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image src={icon} alt="" width={32} height={32} className="p-2" />
                    </div>
                  ))}
                </div>

                <span className="shrink-0 text-sm font-medium text-purple">
                  {item.demoVideo ? 'View Demo' : 'Live Site'}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
