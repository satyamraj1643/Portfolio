import type { MetadataRoute } from "next";
import { siteDescription } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Satyam Raj Portfolio",
    short_name: "Satyam Raj",
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#e8f2ec",
    theme_color: "#2fa36b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
