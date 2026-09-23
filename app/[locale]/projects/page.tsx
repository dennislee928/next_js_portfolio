import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Footer from "@/components/Footer";
import ProjectsIndex from "@/components/ProjectsIndex";
import SiteNav from "@/components/SiteNav";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const locales = ["en", "zh-TW", "ja", "es"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });

  return {
    title: `${t("title")} · Dennis's Portfolio`,
    description: t("subtitle"),
  };
}

export default function ProjectsPage() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
      <div className="fixed right-5 top-5 z-50">
        <LanguageSwitcher />
      </div>
      <div className="w-full max-w-7xl">
        <SiteNav variant="page" />
        <ProjectsIndex />
        <Footer />
      </div>
    </main>
  );
}
