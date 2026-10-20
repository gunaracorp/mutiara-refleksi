// ============================================================
// MUTIARA REFLEKSI - /layanan : Daftar Semua Layanan
// ============================================================
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarCheck, Compass, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { CtaBanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { Reveal, Stagger, StaggerItem } from "@/components/animation/reveal";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";
import { site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Layanan Pijat Refleksi & Terapi",
  description:
    "Layanan pijat refleksi Jakarta Timur di Mutiara Refleksi: refleksi tradisional, pijat terapi, aromaterapi, refleksi wajah & kepala, pijat ibu hamil, serta pijat kursi eksekutif. Terapis bersertifikat, harga mulai Rp 45.000, buka setiap hari 09.00–21.00.",
  keywords: [
    "layanan pijat refleksi jakarta timur",
    "pijat terapi",
    "aromaterapi",
    "pijat refleksi tradisional jakarta",
    "pijat ibu hamil jakarta timur",
    "refleksi wajah dan kepala",
    "pijat kursi eksekutif",
  ],
  alternates: { canonical: "/layanan" },
  openGraph: {
    type: "website",
    url: `${site.url}/layanan`,
    title: "Layanan Pijat Refleksi & Terapi — Mutiara Refleksi Jakarta Timur",
    description:
      "Enam program terapi pilihan: refleksi tradisional, pijat terapi, aromaterapi, refleksi wajah, pijat ibu hamil & kursi eksekutif. Harga mulai Rp 45.000.",
    images: [
      {
        url: "/images/service-refleksi-kaki.jpg",
        width: 1344,
        height: 768,
        alt: "Terapi pijat refleksi kaki di Mutiara Refleksi Jakarta Timur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Layanan Pijat Refleksi & Terapi — Mutiara Refleksi",
    description:
      "Enam program terapi pilihan di Jakarta Timur. Terapis bersertifikat, harga mulai Rp 45.000.",
    images: ["/images/service-refleksi-kaki.jpg"],
  },
};

// JSON-LD daftar layanan (ItemList berisi Service)
const serviceListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Daftar Layanan Pijat & Terapi Mutiara Refleksi",
  description:
    "Enam layanan pijat refleksi dan terapi profesional di Mutiara Refleksi, Jakarta Timur.",
  numberOfItems: services.length,
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.name,
      description: s.excerpt,
      url: `${site.url}/layanan/${s.slug}`,
      image: `${site.url}${s.image}`,
      provider: { "@type": "DaySpa", name: site.name, url: site.url },
      offers: { "@type": "Offer", price: s.price, priceCurrency: "IDR" },
    },
  })),
};

// Panduan cepat memilih layanan berdasarkan keluhan
const quickGuide = [
  {
    complaint: "Punggung & leher sering pegal",
    pick: "Pijat Terapi Otot",
    href: "/layanan/pijat-terapi-otot",
  },
  {
    complaint: "Mata lelah & sering migrain",
    pick: "Refleksi Wajah & Kepala",
    href: "/layanan/refleksi-wajah-kepala",
  },
  {
    complaint: "Stres & sulit tidur nyenyak",
    pick: "Pijat Aromaterapi",
    href: "/layanan/pijat-aromaterapi",
  },
  {
    complaint: "Waktu istirahat mepet",
    pick: "Pijat Kursi Eksekutif",
    href: "/layanan/pijat-kursi-eksekutif",
  },
  {
    complaint: "Sedang hamil & butuh relaksasi aman",
    pick: "Pijat Ibu Hamil",
    href: "/layanan/pijat-ibu-hamil",
  },
  {
    complaint: "Baru pertama kali mencoba pijat",
    pick: "Refleksi Tradisional",
    href: "/layanan/pijat-refleksi-tradisional",
  },
];

export default function LayananPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Layanan", url: `${site.url}/layanan` }])} />
      <JsonLd data={serviceListJsonLd} />

      <PageHero
        title="Layanan Kami"
        subtitle="Enam program terapi pilihan yang dirancang untuk meluruhkan pegal, menenangkan pikiran, dan memulihkan energi tubuh Anda — semuanya oleh terapis bersertifikat."
        crumbs={[{ name: "Layanan" }]}
        image="/images/service-refleksi-kaki.jpg"
        badge="6 Terapi Pilihan"
      />

      {/* Daftar layanan */}
      <section className="py-20 sm:py-24 bg-[#fdfbf7]" aria-label="Daftar layanan terapi">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Menu Terapi"
            title="Pilih Terapi yang Tepat untuk Tubuh Anda"
            description="Setiap layanan dijalankan dengan protokol higienis, alat steril, dan sentuhan terapis berpengalaman lebih dari 10 tahun. Harga transparan tanpa biaya tersembunyi."
          />
          <Stagger className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.slug} className="h-full">
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Panduan memilih layanan */}
      <section className="py-20 sm:py-24 bg-brand-radial" aria-label="Panduan memilih layanan">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-white pearl-shadow border border-[#c9a227]/25 overflow-hidden">
              <div className="grid lg:grid-cols-5">
                {/* Intro */}
                <div className="lg:col-span-2 p-8 sm:p-10 lg:p-12 bg-emerald-950 text-white flex flex-col justify-center">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#e7c95a]">
                    <Compass className="w-3.5 h-3.5" aria-hidden="true" /> Panduan Cepat
                  </span>
                  <h2 className="mt-5 font-display text-2xl sm:text-3xl font-bold leading-tight">
                    Bingung Pilih Layanan?
                  </h2>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-emerald-50/75">
                    Tenang — Anda tidak sendirian. Gunakan panduan singkat di samping untuk mencocokkan
                    keluhan Anda dengan terapi yang paling sesuai. Masih ragu? Terapis kami siap
                    memberi rekomendasi gratis sebelum sesi dimulai.
                  </p>
                  <div className="mt-8 flex flex-col gap-3">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full bg-red-600 hover:bg-red-700 text-white font-bold px-7 shadow-xl shadow-red-900/30 hover:-translate-y-0.5 transition-all"
                    >
                      <Link href="/booking">
                        <CalendarCheck className="w-5 h-5" aria-hidden="true" />
                        Reservasi Sekarang
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="rounded-full border-white/40 bg-white/10 backdrop-blur text-white hover:bg-white hover:text-emerald-950 font-bold px-7 transition-all"
                    >
                      <Link href="/kontak">
                        <MessageCircle className="w-5 h-5" aria-hidden="true" />
                        Konsultasi Gratis
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Quick picks */}
                <div className="lg:col-span-3 p-6 sm:p-10 lg:p-12">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-800/60">
                    Cocokkan keluhan Anda
                  </p>
                  <ul className="mt-4 divide-y divide-emerald-900/10">
                    {quickGuide.map((g) => (
                      <li key={g.href}>
                        <Link
                          href={g.href}
                          className="group flex items-center justify-between gap-4 rounded-xl px-3 py-3.5 sm:px-4 transition-colors hover:bg-emerald-800/5 focus-visible:bg-emerald-800/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700/40"
                          aria-label={`${g.complaint} — lihat ${g.pick}`}
                        >
                          <span className="min-w-0">
                            <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-950/45">
                              {g.complaint}
                            </span>
                            <span className="mt-0.5 block font-bold text-emerald-900 group-hover:text-emerald-700 transition-colors">
                              {g.pick}
                            </span>
                          </span>
                          <ArrowRight
                            className="w-5 h-5 shrink-0 text-[#c9a227] transition-transform group-hover:translate-x-1.5"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
