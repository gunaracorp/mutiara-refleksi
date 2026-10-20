// ============================================================
// MUTIARA REFLEKSI - /testimoni : Testimoni Pelanggan
// ============================================================
import type { Metadata } from "next";
import { HeartHandshake, ShieldCheck, Star, Users } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { TestimonialCarousel } from "@/components/shared/testimonial-carousel";
import { Reveal } from "@/components/animation/reveal";
import { StatsStrip } from "@/components/testimoni/stats-strip";
import { ReviewForm } from "@/components/testimoni/review-form";
import { testimonials, type Testimonial } from "@/lib/data/content";
import { site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Testimoni Pelanggan",
  description:
    "Testimoni asli pelanggan Mutiara Refleksi Jakarta Timur — rating 4,9/5 dari 400+ ulasan. Pengalaman nyata refleksi tradisional, pijat terapi, aromaterapi, pijat ibu hamil & kursi eksekutif.",
  keywords: [
    "testimoni mutiara refleksi",
    "review pijat refleksi jakarta timur",
    "pengalaman pijat refleksi kramat jati",
    "ulasan pijat refleksi cililitan",
    "rating pijat refleksi terbaik jakarta",
  ],
  alternates: { canonical: "/testimoni" },
  openGraph: {
    type: "website",
    url: `${site.url}/testimoni`,
    title: "Testimoni Pelanggan — Mutiara Refleksi Jakarta Timur",
    description:
      "Rating 4,9/5 dari 400+ ulasan. Baca pengalaman nyata pelanggan kami seputar terapi refleksi & pijat di Jakarta Timur.",
    images: [
      {
        url: "/images/service-aromaterapi.jpg",
        width: 1344,
        height: 768,
        alt: "Sesi pijat aromaterapi di Mutiara Refleksi Jakarta Timur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimoni Pelanggan — Mutiara Refleksi",
    description:
      "Rating 4,9/5 dari 400+ ulasan pelanggan pijat refleksi di Jakarta Timur.",
    images: ["/images/service-aromaterapi.jpg"],
  },
};

const whyReview = [
  {
    icon: Users,
    title: "Membantu Pelanggan Lain",
    desc: "Cerita Anda membantu orang lain memilih terapi yang paling cocok untuk keluhannya.",
  },
  {
    icon: HeartHandshake,
    title: "Masukan bagi Terapis",
    desc: "Setiap ulasan kami sampaikan ke tim terapis untuk terus meningkatkan kualitas layanan.",
  },
  {
    icon: ShieldCheck,
    title: "Ditinjau Sebelum Tampil",
    desc: "Ulasan dimoderasi ringan untuk menjaga kualitas — tanpa mengubah isi tulisan Anda.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Rating ${rating} dari 5 bintang`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < rating ? "fill-[#c9a227] text-[#c9a227]" : "text-emerald-900/15"
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="mb-6 break-inside-avoid rounded-2xl bg-white pearl-shadow p-6 transition-transform duration-300 hover:-translate-y-1">
      <Stars rating={t.rating} />
      <p className="mt-3 text-[15px] leading-relaxed text-emerald-950/75">“{t.text}”</p>
      <footer className="mt-5 flex items-center gap-3 border-t border-emerald-900/10 pt-4">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-800 text-sm font-bold text-white"
          aria-hidden="true"
        >
          {t.initials}
        </span>
        <span className="min-w-0">
          <span className="block truncate font-bold text-emerald-950">{t.name}</span>
          <span className="block truncate text-xs text-emerald-950/55">
            {t.service} · {t.date}
          </span>
        </span>
      </footer>
    </article>
  );
}

export default function TestimoniPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Testimoni", url: `${site.url}/testimoni` }])}
      />

      <PageHero
        title="Testimoni Pelanggan"
        badge="Rating 4.9/5"
        crumbs={[{ name: "Testimoni" }]}
        image="/images/service-aromaterapi.jpg"
        subtitle="Lebih dari 25.000 pelanggan telah merasakan sentuhan pulih terapis kami. Berikut kata mereka tentang Mutiara Refleksi."
      />

      {/* Strip statistik */}
      <section className="bg-[#fdfbf7] pb-4" aria-label="Statistik kepuasan pelanggan">
        <StatsStrip />
      </section>

      {/* Carousel testimoni */}
      <section className="bg-[#fdfbf7] py-14 sm:py-20" aria-label="Testimoni pilihan">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Cerita Pelanggan"
            title="Mereka Datang Pegal, Pulang Ringan"
            description="Dari supir, ibu hamil, pekerja kantoran, hingga lansia — dengarkan langsung pengalaman mereka."
          />
          <Reveal className="mt-12" delay={0.1}>
            <TestimonialCarousel items={testimonials.slice(0, 6)} />
          </Reveal>
        </div>
      </section>

      {/* Grid semua testimoni (masonry) */}
      <section className="bg-[#f5f0e6] py-14 sm:py-20" aria-label="Semua testimoni pelanggan">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Semua Ulasan"
            title="Testimoni Asli, Tanpa Edit"
            description={`Seluruh ${testimonials.length} ulasan ditulis oleh pelanggan yang benar-benar merasakan terapi di gerai kami.`}
          />
          <Reveal className="mt-12" delay={0.05}>
            <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
              {testimonials.map((t) => (
                <TestimonialCard key={`${t.name}-${t.date}`} t={t} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form tulis ulasan */}
      <section className="bg-[#fdfbf7] py-14 sm:py-20" aria-label="Tulis ulasan Anda">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Bagikan Pengalaman"
            title="Tulis Ulasan Anda"
            description="Sudah merasakan terapi di Mutiara Refleksi? Ceritakan pengalaman Anda — ulasan Anda sangat berarti."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-5">
            <Reveal className="lg:col-span-2">
              <div className="relative h-full overflow-hidden rounded-3xl bg-emerald-950 p-6 text-white shadow-xl shadow-emerald-950/20 sm:p-8">
                <h3 className="relative font-display text-xl font-bold">
                  Kenapa Ulasan Anda Berarti?
                </h3>
                <ul className="relative mt-6 space-y-5">
                  {whyReview.map((r) => (
                    <li key={r.title} className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c9a227]/15 text-[#e7c95a]">
                        <r.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block font-bold">{r.title}</span>
                        <span className="mt-0.5 block text-sm leading-relaxed text-emerald-50/70">
                          {r.desc}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="relative mt-7 rounded-2xl bg-white/10 p-4 text-sm leading-relaxed text-emerald-50/85">
                  Sudah terapi bersama kami? Butuh waktu kurang dari 1 menit untuk berbagi — dan
                  sangat berarti bagi kami.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12} className="lg:col-span-3">
              <ReviewForm />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Siap Menulis Cerita Anda Sendiri?"
        description="Reservasi sesi terapi pertama Anda sekarang — dan rasakan sendiri mengapa ratusan pelanggan memberi kami bintang lima."
      />
    </>
  );
}
