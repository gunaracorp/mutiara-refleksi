import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, Sparkles } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { Reveal } from "@/components/animation/reveal";
import { BlogBrowser } from "@/components/blog/blog-browser";
import { blogPosts, blogCategories } from "@/lib/data/blog";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/json-ld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog Kesehatan & Refleksi",
  description:
    "Kumpulan artikel pijat refleksi, tips kesehatan, dan manfaat refleksi dari terapis berpengalaman Mutiara Refleksi Jakarta Timur — panduan terapi alami untuk tubuh yang lebih sehat setiap hari.",
  keywords: [
    "artikel pijat refleksi",
    "tips kesehatan",
    "manfaat refleksi",
    "blog kesehatan",
    "terapi refleksi",
    "pijat refleksi jakarta timur",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Blog Kesehatan & Refleksi | Mutiara Refleksi",
    description:
      "Artikel edukatif seputar pijat refleksi, tips kesehatan, dan manfaat terapi refleksi dari para terapis Mutiara Refleksi Jakarta Timur.",
    images: [{ url: "/images/blog-stres.jpg", width: 1344, height: 768, alt: "Blog Kesehatan Mutiara Refleksi" }],
  },
};

const featured = blogPosts[0];

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Blog", url: `${site.url}/blog` }])} />
      <JsonLd data={itemListJsonLd(blogPosts.map((p) => ({ slug: p.slug, title: p.title })), "Blog Mutiara Refleksi")} />

      <PageHero
        title="Blog Kesehatan"
        subtitle="Artikel edukatif seputar pijat refleksi, tips kesehatan alami, dan panduan terapi — ditulis langsung oleh tim terapis berpengalaman kami untuk membantu Anda hidup lebih sehat."
        crumbs={[{ name: "Blog" }]}
        image="/images/blog-stres.jpg"
        badge={`${blogPosts.length} Artikel Edukatif`}
      />

      {/* Artikel Unggulan */}
      <section className="py-16 sm:py-20 bg-[#fdfbf7]" aria-label="Artikel unggulan">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Pilihan Redaksi"
            title="Artikel Unggulan Bulan Ini"
            description="Mulailah dari sini — panduan paling lengkap dan paling banyak dibaca pembaca kami."
          />
          <Reveal className="mt-12">
            <article className="group grid overflow-hidden rounded-[2rem] bg-white pearl-shadow card-hover-lift lg:grid-cols-2">
              <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[440px] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-5 left-5 rounded-full bg-emerald-800/90 backdrop-blur px-4 py-1.5 text-xs font-bold text-white">
                  {featured.category}
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#c9a227]/50 bg-[#c9a227]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#a07f14]">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  Artikel Unggulan
                </span>
                <h2 className="mt-5 font-display text-2xl sm:text-3xl lg:text-[2.4rem] font-bold leading-[1.2] text-emerald-950">
                  <Link href={`/blog/${featured.slug}`} className="transition-colors hover:text-emerald-700">
                    {featured.title}
                  </Link>
                </h2>
                <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-emerald-950/60">{featured.excerpt}</p>
                <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-emerald-950/45">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="w-4 h-4" aria-hidden="true" />
                    {new Date(`${featured.date}T00:00:00Z`).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      timeZone: "UTC",
                    })}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="w-4 h-4" aria-hidden="true" />
                    {featured.readTime} menit baca
                  </span>
                </p>
                <div className="mt-8">
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3.5 font-bold text-white shadow-xl shadow-red-900/25 transition-all hover:bg-red-700 hover:-translate-y-0.5 min-h-[44px]"
                  >
                    Baca Artikel Lengkap
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Semua artikel + filter */}
      <section className="py-16 sm:py-24 bg-sand" aria-label="Semua artikel blog">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Jelajahi Semua Artikel"
            title="Temukan Bacaan Sesuai Kebutuhan Anda"
            description="Gunakan pencarian atau filter kategori untuk menemukan artikel yang paling relevan dengan kondisi kesehatan Anda."
          />
          <div className="mt-12">
            <BlogBrowser posts={blogPosts} categories={[...blogCategories]} />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
