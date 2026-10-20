"use client";

// ============================================================
// MUTIARA REFLEKSI - Galeri: filter tag + masonry grid + lightbox
// ============================================================
import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Expand, ImageOff } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  tag: string;
}

/** Pola tinggi aspek untuk kesan masonry alami */
const aspectPatterns = [
  "aspect-[4/5]",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[3/4]",
];

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState("Semua");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const tags = useMemo(
    () => ["Semua", ...Array.from(new Set(items.map((i) => i.tag)))],
    [items]
  );

  const filtered = useMemo(
    () => (filter === "Semua" ? items : items.filter((i) => i.tag === filter)),
    [items, filter]
  );

  return (
    <div>
      {/* Filter tag */}
      <div
        className="flex flex-wrap items-center justify-center gap-2.5"
        role="group"
        aria-label="Filter galeri berdasarkan kategori"
      >
        {tags.map((tag) => {
          const isActive = filter === tag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setFilter(tag)}
              aria-pressed={isActive}
              className={cn(
                "min-h-11 rounded-full border px-5 text-sm font-bold transition-all duration-300",
                isActive
                  ? "border-emerald-800 bg-emerald-800 text-white shadow-lg shadow-emerald-900/20"
                  : "border-emerald-900/15 bg-white text-emerald-900 hover:border-emerald-800/40 hover:bg-emerald-800/5"
              )}
            >
              {tag}
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-center text-xs font-medium text-emerald-950/50" aria-live="polite">
        Menampilkan {filtered.length} dari {items.length} foto
        {filter !== "Semua" ? ` — kategori ${filter}` : ""}
      </p>

      {/* Masonry grid */}
      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.div
              key={item.src}
              layout
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
              className="mb-5 break-inside-avoid"
            >
              <button
                type="button"
                onClick={() => setActive(item)}
                aria-label={`Perbesar foto: ${item.title}`}
                className="group relative block w-full overflow-hidden rounded-2xl pearl-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
              >
                <div
                  className={cn("relative w-full", aspectPatterns[i % aspectPatterns.length])}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  {/* Selalu tampil: chip tag */}
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-900 backdrop-blur">
                    {item.tag}
                  </span>
                  {/* Overlay hover */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-emerald-950/85 via-emerald-950/25 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="font-display text-lg font-bold text-white">{item.title}</span>
                    <span className="mt-0.5 flex items-center gap-1.5 text-xs text-emerald-100/80">
                      <Expand className="w-3.5 h-3.5" aria-hidden="true" />
                      Klik untuk perbesar
                    </span>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-3xl gap-0 overflow-hidden rounded-2xl p-0 sm:max-w-2xl lg:max-w-3xl">
          <DialogTitle className="sr-only">{active?.title ?? "Foto galeri"}</DialogTitle>
          {active && (
            <figure>
              <div className="relative aspect-[4/3] w-full bg-emerald-950">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-contain"
                  priority
                />
              </div>
              <figcaption className="flex flex-wrap items-center justify-between gap-3 bg-white px-5 py-4">
                <div className="min-w-0">
                  <p className="font-display text-base font-bold text-emerald-950">{active.title}</p>
                  <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-emerald-950/60">
                    {active.alt}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-emerald-800/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                  {active.tag}
                </span>
              </figcaption>
            </figure>
          )}
        </DialogContent>
      </Dialog>

      {/* Empty state (jaga-jaga bila kategori kosong) */}
      {filtered.length === 0 && (
        <div className="mt-10 flex flex-col items-center rounded-3xl border border-dashed border-emerald-900/20 py-16 text-center">
          <ImageOff className="w-10 h-10 text-emerald-900/30" aria-hidden="true" />
          <p className="mt-4 text-sm font-semibold text-emerald-950/60">
            Belum ada foto pada kategori ini.
          </p>
          <button
            type="button"
            onClick={() => setFilter("Semua")}
            className="mt-4 min-h-11 rounded-full bg-emerald-800 px-6 text-sm font-bold text-white transition-colors hover:bg-emerald-900"
          >
            Tampilkan Semua Foto
          </button>
        </div>
      )}
    </div>
  );
}
