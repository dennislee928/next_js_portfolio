"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { useTranslations } from "next-intl";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="gray"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="gray" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* Status Badges */}
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            <img
              src="https://img.shields.io/badge/currently-online-00C853?style=flat-square"
              alt="Currently Online"
              className="h-5"
            />
            <img
              src="https://img.shields.io/badge/coding-cybersecurity_project-FF6F00?style=flat-square"
              alt="Current Project"
              className="h-5"
            />
            <img
              src="https://img.shields.io/badge/listening_to-UN%20AVEC%20DEUX-green?style=for-the-badge&logo=spotify"
              alt="Listening to"
              className="h-5"
            />
          </div>

          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 mb-4">
            {t('welcome')}
          </p>

          {/* Dynamic SVG Typing Effect */}
          <div className="flex flex-col items-center gap-2 mb-6">
            <img
              src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&width=435&lines=God+throws+dices"
              alt="Typing SVG 1"
            />
            <img
              src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=78F77F&random=true&width=435&lines=and+we+try+to+catch+them"
              alt="Typing SVG 2"
            />
            <img
              src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=500&color=7684F7&random=true&width=435&lines=via+holy+languages%2C+code+that+is."
              alt="Typing SVG 3"
            />
          </div>

          {/* Bilingual Introduction */}
          <h1 className="text-center text-[32px] md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            {t('title')}
          </h1>

          <p className="text-center md:tracking-wider mb-6 text-sm md:text-base lg:text-lg text-white-200 max-w-3xl">
            {t('desc')}
          </p>

          <a href="#about">
            <MagicButton
              title={t('cta')}
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
