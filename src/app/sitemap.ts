import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/data/services";
import { blogPosts } from "@/lib/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/tentang-kami`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/layanan`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/harga`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/galeri`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/testimoni`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/kontak`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/booking`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${site.url}/layanan/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
