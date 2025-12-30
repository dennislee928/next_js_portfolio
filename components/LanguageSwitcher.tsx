"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
     // router.replace // This might be tricky with path preservation if not using next-intl navigation
     // next-intl suggests using its own Link or useRouter if we want to preserve path easily. 
     // But essentially we are just changing the first segment.
     // Let's manually construct the path for now or just replace.
     // Actually, simplest way for now:
     const currentPath = window.location.pathname;
     const segments = currentPath.split('/');
     segments[1] = nextLocale;
     const newPath = segments.join('/');
     router.replace(newPath);
    });
  };

  return (
    <label className="border-2 rounded bg-black-100/80 backdrop-blur-sm border-white/20">
      <p className="sr-only">change language</p>
      <select
        defaultValue={localActive}
        className="bg-transparent py-2 px-4 rounded focus:outline-none text-white cursor-pointer"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en" className="bg-black-100 text-white">English</option>
        <option value="zh-TW" className="bg-black-100 text-white">繁體中文</option>
        <option value="ja" className="bg-black-100 text-white">日本語</option>
        <option value="es" className="bg-black-100 text-white">Español</option>
      </select>
    </label>
  );
}
