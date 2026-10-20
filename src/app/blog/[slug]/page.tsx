import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { Reveal, FloatingPearls } from "@/components/animation/reveal";
import { Button } from "@/components/ui/button";
import { blogPosts, getPost } from "@/lib/data/blog";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { site } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [...post.keywords],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [site.legalName],
      section: post.category,
      tags: [...post.keywords],
      images: [{ url: post.image, width: 1344, height: 768, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = [
    ...blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ].slice(0, 3);

  return (
    <article className="bg-[#fdfbf7]">
      <JsonLd data={articleJsonLd(post.slug)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Blog", url: `${site.url}/blog` },
          { name: post.title, url: `${site.url}/blog/${post.slug}` },
        ])}
      />

      <PageHero
        title={post.title}
        crumbs={[
          { name: "Blog", url: "/blog" },
          { name: post.category },
        ]}
        image={post.image}
      />

      {/* Isi artikel */}
      <section className="py-14 sm:py-20" aria-label="Isi artikel">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Baris meta */}
          <Reveal className="flex flex-wrap items-center gap-x-4 gap-y-2.5 text-sm font-semibold text-emerald-950/55">
            <time dateTime={post.date} className="inline-flex items-center gap-1.5">
              <CalendarDays className="w-4 h-4 text-emerald-700" aria-hidden="true" />
              {formatDate(post.date)}
            </time>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="w-4 h-4 text-emerald-700" aria-hidden="true" />
              {post.readTime} menit baca
            </span>
            <span className="rounded-full bg-emerald-800/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              {post.category}
            </span>
          </Reveal>

          <div className="mt-10 sm:mt-12">
            {post.content.map((section, i) => (
              <section key={i} aria-labelledby={`bagian-${i}`} className="mt-12 first:mt-0">
                <h2
                  id={`bagian-${i}`}
                  className="font-display text-[1.55rem] sm:text-3xl font-bold leading-snug text-emerald-950"
                >
                  {section.heading}
                </h2>
                <span className="mt-3 block h-1 w-14 rounded-full bg-gradient-to-r from-[#c9a227] to-[#c9a227]/25" aria-hidden="true" />
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((para, j) => (
                    <p
                      key={j}
                      className={
                        i === 0 && j === 0
                          ? "text-[15.5px] sm:text-base leading-[1.85] text-emerald-950/75 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-5xl first-letter:font-bold first-letter:text-emerald-800"
                          : "text-[15.5px] sm:text-base leading-[1.85] text-emerald-950/75"
                      }
                    >
                      {para}
                    </p>
                  ))}
                </div>
                {section.list && (
                  <ul className="mt-6 space-y-3">
                    {section.list.map((item, k) => (
                      <li
                        key={k}
                        className="flex items-start gap-3 rounded-2xl border border-emerald-900/10 bg-white p-4 sm:px-5"
                      >
                        <CheckCircle2 className="mt-0.5 w-5 h-5 shrink-0 text-emerald-600" aria-hidden="true" />
                        <span className="text-[15px] leading-relaxed text-emerald-950/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Kesimpulan */}
          <Reveal>
            <aside
              className="mt-14 rounded-3xl border border-[#c9a227]/45 bg-[#c9a227]/10 p-7 sm:p-9"
              aria-label="Kesimpulan artikel"
            >
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#a07f14]">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                Kesimpulan
              </span>
              <p className="mt-4 text-[15.5px] sm:text-base font-medium leading-[1.8] text-emerald-950/85">
                {post.conclusion}
              </p>
            </aside>
          </Reveal>

          {/* Kotak penulis */}
          <Reveal>
            <section className="mt-8 rounded-3xl bg-white p-7 sm:p-8 pearl-shadow" aria-label="Tentang penulis">
              <div className="flex flex-col items-start gap-5 sm:flex-row">
                <Image
                  src="/branding/logo-kecil.png"
                  alt={`Logo ${site.name}`}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-2xl object-cover ring-1 ring-emerald-900/10"
                />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-950/45">Ditulis oleh</p>
                  <h3 className="mt-1.5 font-display text-xl font-bold text-emerald-950">
                    Tim Redaksi {site.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-emerald-950/60">
                    Artikel ini ditulis dan direview langsung oleh tim redaksi & terapis berpengalaman{" "}
                    {site.legalName} — berbagi wawasan terapi refleksi dan gaya hidup sehat berdasarkan pengalaman
                    menangani lebih dari 25.000 pelanggan sejak {site.founded}.
                  </p>
                  <Link
                    href="/tentang-kami"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-800 transition-all hover:gap-3"
                  >
                    Kenali tim kami
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </section>
          </Reveal>

          {/* CTA inline */}
          <Reveal>
            <section
              className="relative mt-8 overflow-hidden rounded-3xl bg-brand-gradient animate-gradient-pan p-8 text-center sm:p-12"
              aria-label="Ajakan reservasi sesi refleksi"
            >
              <FloatingPearls count={6} />
              <h3 className="relative font-display text-2xl sm:text-3xl font-bold leading-snug text-white">
                Pesan Sesi Refleksi Anda
              </h3>
              <p className="relative mx-auto mt-3.5 max-w-xl text-sm sm:text-base leading-relaxed text-emerald-50/80">
                Sudah membaca manfaatnya? Sekarang rasakan sendiri. Terapis bersertifikat kami siap membantu — buka
                setiap hari {site.hours.label.split(", ")[1]} di {site.address.city}.
              </p>
              <Button
                asChild
                size="lg"
                className="relative mt-7 h-13 rounded-full bg-red-600 px-8 font-bold text-white shadow-xl shadow-red-900/30 transition-all hover:-translate-y-0.5 hover:bg-red-700"
              >
                <Link href="/booking">
                  <CalendarCheck className="w-5 h-5" aria-hidden="true" />
                  Reservasi Online
                </Link>
              </Button>
            </section>
          </Reveal>
        </div>
      </section>

      {/* Artikel terkait */}
      <section className="border-t border-emerald-900/10 bg-sand py-16 sm:py-20" aria-label="Artikel terkait">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Lanjutkan Membaca"
            title="Artikel Terkait untuk Anda"
            description="Bacaan lain yang mungkin bermanfaat untuk kesehatan tubuh Anda."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Reveal key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full items-start gap-4 rounded-3xl bg-white p-4 pearl-shadow card-hover-lift"
                  aria-label={`Baca artikel: ${p.title}`}
                >
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl sm:h-28 sm:w-28">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="120px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="min-w-0 py-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#a07f14]">{p.category}</span>
                    <h3 className="mt-1.5 font-display text-base font-bold leading-snug text-emerald-950 line-clamp-2 transition-colors group-hover:text-emerald-700">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs font-semibold text-emerald-950/50">
                      {formatDate(p.date)} · {p.readTime} mnt baca
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-emerald-800 transition-all group-hover:gap-2">
                      Baca
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-800/30 bg-white px-7 py-3 font-bold text-emerald-800 transition-all hover:bg-emerald-800 hover:text-white min-h-[44px]"
            >
              Lihat Semua Artikel
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </article>
  );
}
