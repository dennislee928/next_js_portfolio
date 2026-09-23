import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import CategoryProjects from "@/components/CategoryProjects";
import Footer from "@/components/Footer";
import SiteNav from "@/components/SiteNav";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { isProjectCategorySlug, projectCategorySlugs } from "@/data/projectCategories";

const locales = ["en", "zh-TW", "ja", "es"];

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projectCategorySlugs.map((category) => ({ locale, category })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale, category } = await params;
  if (!isProjectCategorySlug(category)) return { title: "Not found" };

  const t = await getTranslations({ locale, namespace: "ProjectCategories" });

  return {
    title: `${t(`${category}.name`)} · Dennis's Portfolio`,
    description: t(`${category}.desc`),
  };
}

export default async function ProjectCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!isProjectCategorySlug(category)) notFound();

  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
      <div className="fixed right-5 top-5 z-50">
        <LanguageSwitcher />
      </div>
      <div className="w-full max-w-7xl">
        <SiteNav variant="page" />
        <CategoryProjects slug={category} />
        <Footer />
      </div>
    </main>
  );
}
