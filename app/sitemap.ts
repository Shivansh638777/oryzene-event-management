import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap { return ["", "/services", "/about", "/contact", "/cities/kanpur", "/cities/lucknow", "/cities/gorakhpur"].map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : 0.8 })); }
