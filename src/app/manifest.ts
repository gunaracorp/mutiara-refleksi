import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — Pijat Refleksi Profesional Jakarta Timur`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fdfbf7",
    theme_color: "#14532d",
    lang: "id",
    icons: [
      {
        src: "/branding/logo-kecil.png",
        sizes: "350x280",
        type: "image/png",
      },
    ],
  };
}
