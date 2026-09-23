"use client";

import { useLocale, useTranslations } from "next-intl";

import { FloatingNav, type NavItem } from "@/components/ui/FloatingNavbar";
import { countByCategory } from "@/data/projects";
import { projectCategories } from "@/data/projectCategories";

type SiteNavProps = {
  /**
   * The homepage scrolls to its own sections, so it uses bare hash links.
   * Every other route has to send the visitor back to `/{locale}` first.
   */
  variant?: "home" | "page";
};

const SiteNav = ({ variant = "home" }: SiteNavProps) => {
  const t = useTranslations("Nav");
  const tCategories = useTranslations("ProjectCategories");
  const locale = useLocale();

  const counts = countByCategory();
  const section = (hash: string) => (variant === "home" ? hash : `/${locale}${hash}`);

  const navItems: NavItem[] = [
    { name: t("about"), link: section("#about") },
    { name: t("stats"), link: section("#stats") },
    { name: t("techStack"), link: section("#techstack") },
    {
      name: t("projects"),
      link: `/${locale}/projects`,
      children: projectCategories.map((category) => ({
        name: tCategories(`${category.slug}.name`),
        link: `/${locale}/projects/${category.slug}`,
        count: counts[category.slug] ?? 0,
      })),
    },
    { name: t("certifications"), link: section("#certifications") },
    { name: t("contact"), link: section("#contact") },
  ];

  return <FloatingNav navItems={navItems} />;
};

export default SiteNav;
