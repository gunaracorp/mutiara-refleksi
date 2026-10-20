"use client";

import { motion } from "framer-motion";
import { AnimatedWords } from "@/components/animation/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {eyebrow && (
        <motion.span
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-4",
            dark ? "bg-white/10 text-[#e7c95a]" : "bg-emerald-800/10 text-emerald-800"
          )}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />
          {eyebrow}
        </motion.span>
      )}
      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] tracking-tight",
          dark ? "text-white" : "text-emerald-950"
        )}
      >
        <AnimatedWords text={title} />
      </h2>
      {description && (
        <motion.p
          className={cn("mt-4 text-base sm:text-lg leading-relaxed", dark ? "text-white/70" : "text-emerald-950/65")}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
