"use client";

// ============================================================
// MUTIARA REFLEKSI - Statistik rating testimoni (client)
// CountUp untuk angka bulat + DecimalCountUp untuk 4.9
// ============================================================

import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { CountUp } from "@/components/animation/reveal";

/** Count-up dengan satu desimal untuk rating 4.9 */
function DecimalCountUp({
  to,
  duration = 2,
  className,
}: {
  to: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (v) => v.toFixed(1));

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => spring.set(to), 80);
      return () => clearTimeout(t);
    }
  }, [inView, spring, to]);

  return (
    <span ref={ref} className={className}>
      {inView ? <motion.span>{display}</motion.span> : "0.0"}
    </span>
  );
}

const statCardCls =
  "rounded-3xl bg-white pearl-shadow p-6 text-center transition-transform hover:-translate-y-1 sm:p-7";
const statValueCls =
  "mt-2 block font-display text-4xl font-bold text-emerald-900 sm:text-[2.75rem] leading-none";
const statLabelCls = "mt-2.5 block text-sm font-medium text-emerald-950/60";

export function StatsStrip() {
  return (
    <div className="relative z-10 -mt-14 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3 sm:gap-6">
        <div className={statCardCls}>
          <div
            className="flex items-center justify-center gap-1"
            aria-label="Rating 4,9 dari 5 bintang"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-[#c9a227] text-[#c9a227]"
                aria-hidden="true"
              />
            ))}
          </div>
          <span className={statValueCls}>
            <DecimalCountUp to={4.9} />
          </span>
          <span className={statLabelCls}>Rating Rata-rata</span>
        </div>

        <div className={statCardCls}>
          <span
            className="mx-auto mt-1 block h-4 w-4 rounded-full bg-[#c9a227]/25"
            aria-hidden="true"
          />
          <span className={statValueCls}>
            <CountUp to={400} suffix="+" duration={2.2} />
          </span>
          <span className={statLabelCls}>Ulasan Pelanggan</span>
        </div>

        <div className={statCardCls}>
          <span
            className="mx-auto mt-1 block h-4 w-4 rounded-full bg-[#c9a227]/25"
            aria-hidden="true"
          />
          <span className={statValueCls}>
            <CountUp to={98} suffix="%" duration={2.2} />
          </span>
          <span className={statLabelCls}>Puas & Merekomendasikan</span>
        </div>
      </div>
    </div>
  );
}
