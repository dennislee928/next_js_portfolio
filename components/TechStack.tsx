"use client";

import { motion } from "framer-motion";

const TechStack = () => {
  const techCategories = [
    {
      title: "💻 Programming Languages",
      icons: "go,python,js,ts,bash,solidity",
    },
    {
      title: "🎨 Frontend & Frameworks",
      icons: "react,vue,next,nuxt,vuetify,threejs,tailwind,figma",
    },
    {
      title: "⚙️ Backend & APIs",
      icons: "nodejs,express,fastapi,graphql,rabbitmq,nginx",
    },
    {
      title: "☁️ Cloud & Infrastructure",
      icons: "aws,gcp,cloudflare,terraform,docker,kubernetes",
    },
    {
      title: "🗄️ Databases & Storage",
      icons: "postgres,mongodb,redis,supabase",
    },
    {
      title: "🔧 DevOps & Tools",
      icons: "git,github,githubactions,postman,grafana,prometheus",
    },
    {
      title: "🚀 Deployment Platforms",
      icons: "vercel,netlify,heroku,workers",
    },
    {
      title: "🖥️ Development Environment",
      icons: "linux,ubuntu,windows,vscode,arduino",
    },
  ];

  return (
    <div className="py-20" id="techstack">
      <h1 className="heading">
        My <span className="text-purple">Tech Stack</span>
      </h1>
      
      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-8">
        {techCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.1] p-6 bg-black-100"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
              {category.title}
            </h3>
            <div className="flex justify-center items-center">
              <img 
                src={`https://skillicons.dev/icons?i=${category.icons}&theme=dark`}
                alt={category.title}
                className="w-full max-w-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;

