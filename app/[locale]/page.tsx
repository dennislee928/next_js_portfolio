"use client";

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
import SiteNav from "@/components/SiteNav";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export const dynamic = 'force-dynamic';

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="fixed top-5 right-5 z-50">
        <LanguageSwitcher />
      </div>
      <div className="max-w-7xl w-full">
        <SiteNav />
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
