"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock3, RotateCcw, Search, SearchX } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/lib/data/blog";

const easing = [0.22, 1, 0.36, 1] as const;

/** Deterministic Indonesian date format (hydration-safe across timezones) */
function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white pearl-shadow card-hover-lift focus-visible:outline-2 focus-visible:outline-emerald-700"
      aria-label={`Baca artikel: ${post.title}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute top-4 left-4 rounded-full bg-emerald-800/90 backdrop-blur px-3 py-1 text-xs font-bold text-white">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-emerald-950/45">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="w-3.5 h-3.5" aria-hidden="true" />
            {formatDate(post.date)}
          </span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="w-3.5 h-3.5" aria-hidden="true" />
            {post.readTime} menit baca
          </span>
        </p>
        <h3 className="mt-3 font-display text-lg font-bold leading-snug text-emerald-950 group-hover:text-emerald-700 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-emerald-950/55 line-clamp-3">{post.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-800 transition-all group-hover:gap-3">
          Baca selengkapnya
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

export function BlogBrowser({ posts, categories }: { posts: BlogPost[]; categories: string[] }) {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const inCategory = activeCategory === "Semua" || post.category === activeCategory;
      const inQuery =
        q === "" ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q);
      return inCategory && inQuery;
    });
  }, [posts, activeCategory, query]);

  return (
    <div>
      {/* Toolbar: search + category filter */}
      <div className="flex flex-col gap-5">
        <div className="relative mx-auto w-full max-w-xl">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 w-4.5 h-4.5 -translate-y-1/2 text-emerald-950/40"
            aria-hidden="true"
          />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari artikel… (mis. stres, sirkulasi darah)"
            aria-label="Cari artikel blog"
            className="h-12 rounded-full border-emerald-900/15 bg-white pl-11 pr-5 text-[15px] text-emerald-950 placeholder:text-emerald-950/40 focus-visible:ring-emerald-700/40"
          />
        </div>

        <motion.div
          role="group"
          aria-label="Filter kategori artikel"
          className="flex flex-wrap items-center justify-center gap-2.5"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {["Semua", ...categories].map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-bold transition-all duration-300 min-h-[44px]",
                  isActive
                    ? "border-emerald-800 bg-emerald-800 text-white shadow-lg shadow-emerald-900/25"
                    : "border-emerald-900/15 bg-white text-emerald-950/65 hover:border-emerald-700/50 hover:text-emerald-800"
                )}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>
      </div>

      <p className="mt-8 text-center text-sm font-medium text-emerald-950/50" role="status" aria-live="polite">
        Menampilkan <span className="font-bold text-emerald-800">{filtered.length}</span> dari {posts.length} artikel
        {activeCategory !== "Semua" ? ` dalam kategori "${activeCategory}"` : ""}
        {query.trim() !== "" ? ` untuk pencarian "${query.trim()}"` : ""}
      </p>

      {/* Posts grid — SSR renders the default (all posts) state for SEO */}
      {filtered.length > 0 ? (
        <motion.div layout className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((post) => (
              <motion.article
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 26, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, ease: easing }}
              >
                <PostCard post={post} />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: easing }}
          className="mt-10 rounded-3xl border border-dashed border-emerald-900/20 bg-white/70 px-6 py-16 text-center"
        >
          <span className="mx-auto flex w-14 h-14 items-center justify-center rounded-full bg-emerald-800/10" aria-hidden="true">
            <SearchX className="w-7 h-7 text-emerald-800" />
          </span>
          <h3 className="mt-5 font-display text-xl font-bold text-emerald-950">Artikel Tidak Ditemukan</h3>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-emerald-950/55">
            Coba kata kunci lain, atau lihat kembali seluruh koleksi artikel kesehatan kami.
          </p>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setQuery("");
              setActiveCategory("Semua");
            }}
            className="mt-6 rounded-full border-emerald-800/30 px-6 font-bold text-emerald-800 hover:bg-emerald-800 hover:text-white"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            Reset Pencarian
          </Button>
        </motion.div>
      )}
    </div>
  );
}
