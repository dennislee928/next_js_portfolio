"use client";

import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { useTranslations } from "next-intl";

const Grid = () => {
  const t = useTranslations('Grid');
  
  // Mapping keys based on index since IDs are not unique/sequential perfectly
  const keys = ['item3', 'item2', 'item4', 'itemEd', 'item5', 'item6'];

  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={t(`${keys[i]}.title`)}
            description={t.has(`${keys[i]}.description`) ? t(`${keys[i]}.description`) : ""}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
