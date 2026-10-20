"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import { AnimatedWords, FloatingPearls } from "@/components/animation/reveal";

interface Crumb {
  name: string;
  url?: string;
}

export function PageHero({
  title,
  subtitle,
  crumbs = [],
  image = "/images/hero.jpg",
  badge,
}: {
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
  image?: string;
  badge?: string;
}) {
  return (
    <section className="relative min-h-[340px] sm:min-h-[400px] flex items-end overflow-hidden bg-[#0e3d20]" aria-label="Kepala halaman">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c2417] via-[#0c2417]/70 to-[#14532d]/40" aria-hidden="true" />
      <FloatingPearls count={7} />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-36">
        {/* Breadcrumbs */}
        <motion.nav
          aria-label="Breadcrumb"
          className="mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-emerald-100/75">
            <li className="flex items-center">
              <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
                <Home className="w-3.5 h-3.5" />
                Beranda
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.name} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 opacity-50" aria-hidden="true" />
                {c.url ? (
                  <Link href={c.url} className="hover:text-white transition-colors">
                    {c.name}
                  </Link>
                ) : (
                  <span className="text-white font-medium" aria-current="page">
                    {c.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </motion.nav>

        {badge && (
          <motion.span
            className="inline-block mb-3 rounded-full border border-[#c9a227]/50 bg-[#c9a227]/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#e7c95a]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {badge}
          </motion.span>
        )}

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-[1.15]">
          <AnimatedWords text={title} delay={0.15} />
        </h1>
        {subtitle && (
          <motion.p
            className="mt-4 max-w-2xl text-base sm:text-lg text-emerald-50/85 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
