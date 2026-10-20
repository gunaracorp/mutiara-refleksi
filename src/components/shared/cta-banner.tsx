"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { FloatingPearls } from "@/components/animation/reveal";

export function CtaBanner({
  title = "Tubuh Anda Berbisnis — Dengarkan Dia Hari Ini",
  description = "Jangan tunggu pegal menjadi nyeri dan stres menjadi sakit. Reservasi sekarang, rasakan sentuhan pulih dari tangan terapis berpengalaman kami.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-gradient animate-gradient-pan" aria-label="Ajakan reservasi">
      <FloatingPearls count={10} />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.h2
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="mt-5 text-emerald-50/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 h-13 shadow-xl shadow-red-900/30 hover:-translate-y-0.5 transition-all"
          >
            <Link href="/booking">
              <CalendarCheck className="w-5 h-5" />
              Reservasi Online
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/40 bg-white/10 backdrop-blur text-white hover:bg-white hover:text-emerald-950 font-bold px-8 h-13 transition-all"
          >
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Halo Mutiara Refleksi, saya ingin reservasi.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Chat WhatsApp
            </a>
          </Button>
        </motion.div>
        <motion.p
          className="mt-6 text-sm text-emerald-100/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          Buka setiap hari 09.00–21.00 WIB · {site.phoneDisplay}
          <Link href="/harga" className="hidden sm:inline-flex items-center gap-1 text-[#e7c95a] hover:underline ml-2">
            Lihat daftar harga <ArrowRight className="w-3 h-3" />
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
