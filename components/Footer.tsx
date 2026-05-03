"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          {t.rich('heading', {
            highlight: (chunks) => <span className="text-purple">{chunks}</span>
          })}
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          {t('subheading')}
        </p>

        {/* Contact Links */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
          <a href="mailto:security-admin@dennisleehappy.org">
            <MagicButton
              title={t('cta')}
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a
            href="https://app.simplymeet.me/dennislee-rootcicd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="Schedule Meeting"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a
            href="https://hub.docker.com/u/dennisleetw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="DockerHub"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          {t('copyright')}
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            ><a href={info.url}>
              <img src={info.img} alt="icons" width={20} height={20} />
              </a></div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
