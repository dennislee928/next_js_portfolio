"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/MovingBorders";

const certifications = [
  {
    id: 1,
    category: "AWS",
    title: "Cloud Practitioner Essentials",
    organization: "Amazon Web Services",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    category: "AWS",
    title: "Security Fundamentals",
    organization: "Amazon Web Services",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    category: "AWS",
    title: "Quantum Computing Learning Path",
    organization: "Amazon Web Services",
    thumbnail: "/exp1.svg",
  },
  {
    id: 4,
    category: "Azure",
    title: "Azure Fundamentals (AZ-900)",
    organization: "Microsoft",
    thumbnail: "/exp2.svg",
  },
  {
    id: 5,
    category: "GCP",
    title: "GKE Architecture Foundations",
    organization: "Coursera",
    thumbnail: "/exp3.svg",
  },
  {
    id: 6,
    category: "IBM",
    title: "Quantum Developer Certification",
    organization: "IBM",
    thumbnail: "/exp4.svg",
  },
  {
    id: 7,
    category: "Cloudflare",
    title: "ACE / MSP 認證",
    organization: "Cloudflare",
    thumbnail: "/exp1.svg",
  },
  {
    id: 8,
    category: "Versa",
    title: "Versa SASE for Lean IT",
    organization: "Versa Networks",
    thumbnail: "/exp2.svg",
  },
  {
    id: 9,
    category: "Security",
    title: "AI Governance & AI Audit",
    organization: "Securiti.ai",
    thumbnail: "/exp3.svg",
  },
  {
    id: 10,
    category: "Security",
    title: "Prisma Cloud Enterprise Security Essentials",
    organization: "Palo Alto Networks",
    thumbnail: "/exp4.svg",
  },
];

const Certifications = () => {
  return (
    <div className="py-20 w-full" id="certifications">
      <h1 className="heading">
        My <span className="text-purple">Certifications</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        {certifications.map((cert) => (
          <Button
            key={cert.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={cert.thumbnail}
                alt={cert.category}
                width={128}
                height={128}
                className="h-auto lg:w-32 md:w-20 w-16"
              />
              <div className="text-center">
                <div className="text-sm text-purple mb-2">{cert.category}</div>
                <h2 className="text-start text-lg md:text-xl font-bold">
                  {cert.title}
                </h2>
                <p className="text-start text-white-100 mt-2 text-sm">
                  {cert.organization}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
