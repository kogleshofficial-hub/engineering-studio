import type { MetadataRoute } from "next";
import { labs } from "@/features/labs/data";
import { systems } from "@/features/systems/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://engineering-studio.vercel.app";
  const routes = ["/", "/labs", "/systems", "/architecture", "/team"];
  return [
    ...routes.map((route) => ({ url: `${baseUrl}${route}`, changeFrequency: "monthly" as const, priority: route === "/" ? 1 : 0.7 })),
    ...labs.map((lab) => ({ url: `${baseUrl}/labs/${lab.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...systems.map((system) => ({ url: `${baseUrl}/systems/${system.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
