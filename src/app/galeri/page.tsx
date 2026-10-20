// ============================================================
// MUTIARA REFLEKSI - /galeri : Galeri Gerai & Suasana
// ============================================================
import type { Metadata } from "next";
import { Armchair, Car, Flower2, Moon, Sofa } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { Reveal } from "@/components/animation/reveal";
import { GalleryGrid } from "@/components/galeri/gallery-grid";
import { galleryItems } from "@/lib/data/content";
import { site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Galeri Gerai & Suasana",
  description:
    "Lihat suasana gerai Mutiara Refleksi di Jakarta Timur — interior bersih, kursi terapi ergonomis, kamar aromaterapi, dan momen pelanggan menikmati terapi pijat refleksi profesional.",
  keywords: [
    "galeri mutiara refleksi",
    "suasana tempat pijat refleksi jakarta timur",
    "interior spa refleksi jakarta",
    "fasilitas pijat refleksi cililitan",
  ],
  alternates: { canonical: "/galeri" },
  openGraph: {
    type: "website",
    url: `${site.url}/galeri`,
    title: "Galeri Gerai & Suasana — Mutiara Refleksi Jakarta Timur",
    description:
      "Lihat langsung suasana gerai kami: interior nyaman, fasilitas lengkap, dan pelanggan yang puas.",
    images: [
      {
        url: "/branding/gerai-3.jpg",
        width: 1200,
        height: 800,
        alt: "Pelanggan menikmati sesi refleksi di gerai Mutiara Refleksi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galeri Gerai & Suasana — Mutiara Refleksi",
    description: "Lihat langsung suasana gerai kami di Jakarta Timur.",
    images: ["/branding/gerai-3.jpg"],
  },
};

const facilities = [
  { icon: Armchair, label: "Kursi terapi ergonomis" },
  { icon: Flower2, label: "Kamar aromaterapi" },
  { icon: Sofa, label: "Area tunggu nyaman" },
  { icon: Moon, label: "Mushola" },
  { icon: Car, label: "Parkir luas" },
];

export default function GaleriPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Galeri", url: `${site.url}/galeri` }])} />

      <PageHero
        title="Galeri Mutiara Refleksi"
        subtitle="Lihat langsung suasana gerai kami — interior bersih, fasilitas nyaman, dan pelanggan yang pulang dengan tubuh ringan."
        crumbs={[{ name: "Galeri" }]}
        image="/branding/gerai-3.jpg"
        badge="Lihat Suasana Kami"
      />

      {/* ============ Grid Galeri ============ */}
      <section className="py-20 sm:py-24 bg-[#fdfbf7]" aria-label="Galeri foto gerai dan layanan">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Momen & Suasana"
            title="Seperti Apa Gerai Kami?"
            description="Dari kursi terapi ergonomis hingga kamar aromaterapi — telusuri foto-foto asli gerai dan layanan kami."
          />

          <div className="mt-12">
            <GalleryGrid items={[...galleryItems]} />
          </div>
        </div>
      </section>

      {/* ============ Fasilitas ============ */}
      <section className="pb-20 sm:pb-24 bg-[#fdfbf7]" aria-label="Fasilitas gerai">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl border border-emerald-900/10 bg-[#f5f0e6]/70 p-7 sm:p-9 text-center">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-emerald-950">
                Fasilitas Gerai Kami
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-emerald-950/60">
                Semua yang Anda butuhkan untuk sesi terapi yang tenang dan nyaman sudah tersedia di
                gerai kami di Pusat Grosir Cililitan.
              </p>
              <ul className="mt-7 flex flex-wrap items-center justify-center gap-3">
                {facilities.map((f) => (
                  <li
                    key={f.label}
                    className="flex items-center gap-2.5 rounded-full border border-emerald-900/10 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-900 pearl-shadow"
                  >
                    <f.icon className="w-4.5 h-4.5 text-emerald-700" aria-hidden="true" />
                    {f.label}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Sudah Kebayang Suasananya?"
        description="Rasakan sendiri kenyamanan gerai kami. Reservasi sekarang dan nikmati terapi refleksi di tempat yang bersih dan tenang."
      />
    </>
  );
}
