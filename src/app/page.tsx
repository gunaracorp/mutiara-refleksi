import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarCheck, MapPin } from "lucide-react";
import { Hero, MarqueeStrip, StatsBand, WhyUs, ProcessSteps } from "@/components/shared/home-sections";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { TestimonialCarousel } from "@/components/shared/testimonial-carousel";
import { CtaBanner } from "@/components/shared/cta-banner";
import { Reveal, Stagger, StaggerItem } from "@/components/animation/reveal";
import { services } from "@/lib/data/services";
import { testimonials } from "@/lib/data/content";
import { blogPosts } from "@/lib/data/blog";
import { faqJsonLd, itemListJsonLd } from "@/lib/json-ld";
import { JsonLd } from "@/components/shared/json-ld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mutiara Refleksi — Pijat Refleksi Profesional di Jakarta Timur",
  description:
    "Pusat pijat refleksi & terapi profesional di Kramat Jati, Jakarta Timur. Refleksi tradisional mulai Rp 45.000, terapis bersertifikat, buka setiap hari 09.00–21.00. Reservasi online mudah!",
  alternates: { canonical: "/" },
};

const featured = services.filter((s) => s.featured);

export default function HomePage() {
  const latestPosts = blogPosts.slice(0, 3);
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <JsonLd data={itemListJsonLd(latestPosts.map((p) => ({ slug: p.slug, title: p.title })), "Artikel Terbaru")} />

      <Hero />
      <MarqueeStrip />
      <StatsBand />

      {/* Layanan Unggulan */}
      <section className="py-24 bg-[#fdfbf7]" aria-label="Layanan unggulan">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Layanan Unggulan"
            title="Terapi yang Dirancang untuk Setiap Kebutuhan"
            description="Dari refleksi tradisional hingga aromaterapi premium — pilih perawatan yang paling dibutuhkan tubuh Anda hari ini."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {featured.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-800 px-8 py-3.5 font-bold text-white hover:bg-emerald-900 hover:-translate-y-0.5 shadow-lg transition-all"
            >
              Lihat Semua 6 Layanan
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <WhyUs />

      {/* Testimoni */}
      <section className="py-24 bg-brand-radial" aria-label="Testimoni pelanggan">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Kata Mereka"
            title="Ribuan Pelanggan Sudah Membuktikan"
            description="Cerita nyata dari pelanggan yang merasakan manfaat terapi di Mutiara Refleksi."
          />
          <div className="mt-12">
            <TestimonialCarousel items={testimonials.slice(0, 8)} />
          </div>
          <Reveal className="mt-10 text-center">
            <Link href="/testimoni" className="inline-flex items-center gap-2 font-bold text-emerald-800 hover:gap-3 transition-all">
              Baca semua testimoni <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <ProcessSteps />

      {/* Blog Preview */}
      <section className="py-24 bg-[#fdfbf7]" aria-label="Artikel kesehatan terbaru">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <SectionHeading
              align="left"
              eyebrow="Blog Kesehatan"
              title="Wawasan Terbaru Seputar Refleksi & Kesehatan"
            />
            <Reveal>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-bold text-emerald-800 hover:gap-3 transition-all shrink-0"
              >
                Semua artikel <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <Stagger className="mt-12 grid md:grid-cols-3 gap-7">
            {latestPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-3xl bg-white overflow-hidden pearl-shadow card-hover-lift h-full"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute top-4 left-4 rounded-full bg-emerald-800/90 backdrop-blur px-3 py-1 text-xs font-bold text-white">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold text-emerald-950/45">
                      {new Date(post.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}{" "}
                      · {post.readTime} menit baca
                    </p>
                    <h3 className="mt-2 font-display text-lg font-bold text-emerald-950 leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-emerald-950/55 line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Lokasi teaser */}
      <section className="py-20 bg-emerald-950" aria-label="Lokasi gerai">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#e7c95a] mb-4">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" /> Kunjungi Kami
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
              Mudah Ditemukan di Jantung Jakarta Timur
            </h2>
            <p className="mt-4 text-emerald-50/70 leading-relaxed">
              Gerai kami berada di Pusat Grosir Cililitan Lantai 3A — strategis, mudah dijangkau,
              dan dilengkapi area parkir luas. Datang langsung tanpa reservasi juga bisa!
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c9a227] px-7 py-3.5 font-bold text-emerald-950 hover:bg-[#dbb53c] transition-all hover:-translate-y-0.5"
              >
                Lihat Peta & Kontak
              </Link>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-bold text-white hover:bg-white/10 transition-all"
              >
                <CalendarCheck className="w-4 h-4" aria-hidden="true" /> Reservasi Dulu
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-3xl overflow-hidden pearl-shadow aspect-[4/3] lg:aspect-auto lg:h-[380px]">
              <iframe
                title="Lokasi Mutiara Refleksi di Pusat Grosir Cililitan, Jakarta Timur"
                src={site.address.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
