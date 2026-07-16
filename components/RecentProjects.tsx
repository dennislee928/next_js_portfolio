"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
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

const RecentProjects = () => {
  const t = useTranslations('Projects');

  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        {t.rich('heading', {
          highlight: (chunks) => <span className="text-purple">{chunks}</span>
        })}
      </h1>
      <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-white-200 md:text-base">
        {t('subheading')}
      </p>
      <div className="grid grid-cols-1 justify-items-center gap-x-12 gap-y-20 p-4 mt-10 md:grid-cols-2 xl:grid-cols-3">
        {(projects as ProjectCard[]).map((item) => (
          <div
            className="min-h-[32rem] flex items-center justify-center sm:w-96 w-[84vw]"
            key={item.id}
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[14rem] lg:h-[16rem] mb-8">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="" loading="lazy" />
                </div>
                <img
                  src={item.img}
                  alt={item.thumbnailAlt ?? t(`project${item.id}.title`)}
                  loading="lazy"
                  className="z-10 absolute bottom-0 max-h-full max-w-full object-contain"
                />
              </div>

              <div className="flex min-h-[3.5rem] items-start justify-between gap-3">
                <h1 className="font-bold lg:text-2xl md:text-xl text-base leading-tight">
                  {t(`project${item.id}.title`)}
                </h1>
                {item.featured && (
                  <span className="shrink-0 rounded-md border border-emerald-300/30 bg-emerald-400/10 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-emerald-200">
                    Must have
                  </span>
                )}
              </div>

              <p
                className="min-h-[3.5rem] lg:text-lg lg:font-normal font-light text-sm line-clamp-3"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {t(`project${item.id}.desc`)}
              </p>

              {(item.status || item.value) && (
                <div className="mb-4 space-y-2 rounded-lg border border-white/[0.08] bg-white/[0.03] p-3 text-xs text-white-200">
                  {item.status && <p>{item.status}</p>}
                  {item.value && <p>{item.value}</p>}
                  {item.source && <p className="text-white-100/70">Source: {item.source}</p>}
                </div>
              )}

              <div className="flex items-center justify-between mt-5 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="" loading="lazy" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    {item.demoVideo ? 'View Demo' : 'Check Live Site'}
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>

              {item.demoVideo && (
                <div className="mt-2 text-center">
                  <a
                    href={item.demoVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white-200 hover:text-purple transition-colors"
                  >
                    Open demo
                  </a>
                </div>
              )}
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
