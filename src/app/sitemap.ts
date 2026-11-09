import type { MetadataRoute } from "next";

const siteUrl = "https://gsabouzeid-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl },
    { url: `${siteUrl}/about` },
    { url: `${siteUrl}/skills` },
  ];
}
