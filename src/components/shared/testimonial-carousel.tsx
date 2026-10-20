"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import type { Testimonial } from "@/lib/data/content";
import { cn } from "@/lib/utils";

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (d: number) => {
      setDir(d);
      setIndex((i) => (i + d + items.length) % items.length);
    },
    [items.length]
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 5200);
    return () => clearInterval(t);
  }, [go, paused]);

  const t = items[index];

  return (
    <div
      className="relative max-w-3xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Testimoni pelanggan"
    >
      <div className="relative min-h-[300px] sm:min-h-[260px]">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.figure
            key={index}
            custom={dir}
            initial={{ opacity: 0, x: dir * 60, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: dir * -60, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl bg-white pearl-shadow p-8 sm:p-10"
          >
            <Quote className="absolute top-6 right-8 w-12 h-12 text-emerald-100" aria-hidden="true" />
            <div className="flex gap-1" aria-label={`Rating ${t.rating} dari 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-5 h-5",
                    i < t.rating ? "fill-[#c9a227] text-[#c9a227]" : "text-emerald-100"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <blockquote className="mt-4 text-base sm:text-lg text-emerald-950/80 leading-relaxed">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-800 text-white font-bold">
                {t.initials}
              </span>
              <span>
                <span className="block font-bold text-emerald-950">{t.name}</span>
                <span className="block text-sm text-emerald-950/55">
                  {t.service} · {t.date}
                </span>
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-7 flex items-center justify-center gap-4">
        <button
          onClick={() => go(-1)}
          className="w-11 h-11 rounded-full bg-white pearl-shadow flex items-center justify-center text-emerald-900 hover:bg-emerald-800 hover:text-white transition-colors"
          aria-label="Testimoni sebelumnya"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2" role="tablist" aria-label="Pilih testimoni">
          {items.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Testimoni ${i + 1}`}
              onClick={() => {
                setDir(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={cn(
                "h-2.5 rounded-full transition-all",
                i === index ? "w-8 bg-emerald-800" : "w-2.5 bg-emerald-800/25 hover:bg-emerald-800/50"
              )}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          className="w-11 h-11 rounded-full bg-white pearl-shadow flex items-center justify-center text-emerald-900 hover:bg-emerald-800 hover:text-white transition-colors"
          aria-label="Testimoni berikutnya"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
