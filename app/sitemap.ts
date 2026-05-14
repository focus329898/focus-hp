import { getAllPosts } from "@/lib/posts";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const baseUrl = "https://llc-focus.com";

  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/company`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/works`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/flow`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/area`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/faq`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: "daily" as const },
    { url: `${baseUrl}/contact`, priority: 0.6, changeFrequency: "monthly" as const },
  ];

  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...blogPages];
}
