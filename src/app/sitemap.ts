import type { MetadataRoute } from "next";

const SITE_URL = "https://portfolio-bryam.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/cv/print?lang=es`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/cv/print?lang=en`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}