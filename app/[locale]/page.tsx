"use client";

import { useTranslations } from "next-intl";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import GitHubStats from "@/components/GitHubStats";
import TechStack from "@/components/TechStack";
import Certifications from "@/components/Certifications";
//import CryptoReferrals from "@/components/CryptoReferrals";

import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export const dynamic = 'force-dynamic';

const Home = () => {
  const t = useTranslations('Nav');
  const navItems = [
    { name: t('about'), link: "#about" },
    { name: t('stats'), link: "#stats" },
    { name: t('techStack'), link: "#techstack" },
    { name: t('projects'), link: "#projects" },
    { name: t('certifications'), link: "#certifications" },
    { name: t('contact'), link: "#contact" },
  ];

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="fixed top-5 right-5 z-50">
        <LanguageSwitcher />
      </div>
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <GitHubStats />
        <Grid />
        <TechStack />
        <RecentProjects />
        <Experience />
        <Certifications />
        <Approach />
        {/* <CryptoReferrals /> */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;
