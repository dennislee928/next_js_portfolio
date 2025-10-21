"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import GitHubStats from "@/components/GitHubStats";
import TechStack from "@/components/TechStack";
import Certifications from "@/components/Certifications";
import CryptoReferrals from "@/components/CryptoReferrals";

import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

export const dynamic = 'force-dynamic';

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
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
        <CryptoReferrals />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
