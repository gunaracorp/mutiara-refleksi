"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Clock,
  HeartHandshake,
  Leaf,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, stats, waLink } from "@/lib/site";
import { AnimatedWords, FloatingPearls, CountUp } from "@/components/animation/reveal";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0e3d20]" aria-label="Beranda">
      {/* Background */}
      <Image
        src="/images/hero.jpg"
        alt="Terapi pijat refleksi profesional di Mutiara Refleksi Jakarta Timur"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0a2e18]/95 via-[#0e3d20]/80 to-[#14532d]/35"
        aria-hidden="true"
      />
      <FloatingPearls count={12} />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-28 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        {/* Left: copy */}
        <div>
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-[#c9a227]/40 bg-[#c9a227]/15 backdrop-blur px-4 py-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-[#e7c95a]" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-semibold text-[#f3e3a8] tracking-wide">
              Pusat Pijat Refleksi Terpercaya di Jakarta Timur sejak {site.founded}
            </span>
          </motion.div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[3.9rem] font-bold text-white leading-[1.08] tracking-tight max-w-2xl">
            <AnimatedWords text="Pulihkan Energi Tubuh dengan Sentuhan Mutiara" delay={0.2} />
          </h1>

          <motion.p
            className="mt-6 max-w-xl text-base sm:text-lg text-emerald-50/85 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Pijat refleksi, terapi otot, dan relaksasi premium oleh terapis bersertifikat.
            Meredakan stres, melancarkan sirkulasi darah, dan mengembalikan vitalitas Anda —
            mulai dari <span className="font-bold text-[#e7c95a]">Rp 45.000</span>.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 h-13 shadow-xl shadow-red-950/40 hover:-translate-y-0.5 transition-all"
              aria-label="Reservasi via WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
              Reservasi via WhatsApp
            </a>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/35 bg-white/10 backdrop-blur text-white hover:bg-white hover:text-emerald-950 font-bold px-8 h-13 transition-all"
            >
              <Link href="/layanan">
                Lihat Layanan Kami
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.ul
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {[
              { icon: BadgeCheck, label: "Terapis Bersertifikat" },
              { icon: ShieldCheck, label: "Higienis & Aman" },
              { icon: Star, label: "Rating 4.9/5 dari 400+ Pelanggan" },
              { icon: Clock, label: site.hours.label },
            ].map((b) => (
              <li key={b.label} className="flex items-center gap-2 text-sm text-emerald-50/80">
                <b.icon className="w-4 h-4 text-[#e7c95a]" aria-hidden="true" />
                {b.label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right: floating booking card */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 48, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#c9a227]/30 to-transparent blur-xl" aria-hidden="true" />
            <div className="relative glass-card rounded-3xl p-8 pearl-shadow animate-float-pearl">
              <div className="flex items-center gap-3">
                <span className="relative w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-[#c9a227]/50">
                  <Image src="/branding/logo-kecil.png" alt="Logo Mutiara Refleksi" fill sizes="56px" className="object-cover" />
                </span>
                <div>
                  <p className="font-display font-bold text-xl text-emerald-950">{site.name}</p>
                  <p className="text-xs font-semibold text-emerald-700/80">{site.tagline}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-emerald-800 shrink-0" aria-hidden="true" />
                  <p className="text-emerald-950/80 leading-snug">
                    PGC Cililitan Lt. 3A Zona Hijau No.99, Jl. Dewi Sartika, Kramat Jati, Jakarta Timur
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emerald-800 shrink-0" aria-hidden="true" />
                  <p className="text-emerald-950/80">{site.hours.label}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-800 shrink-0" aria-hidden="true" />
                  <a href={`tel:${site.phone}`} className="text-emerald-950/80 font-semibold hover:text-emerald-700">
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>

              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex items-center justify-center gap-2 w-full rounded-full bg-red-600 hover:bg-red-700 h-12 font-bold text-white shadow-lg shadow-red-900/25 transition-all"
                aria-label="Booking via WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                Booking via WhatsApp
              </a>
              <Button
                asChild
                variant="outline"
                className="mt-3 w-full rounded-full border-emerald-800/25 h-12 font-semibold text-emerald-900 hover:bg-emerald-50"
              >
                <Link href="/booking">
                  <CalendarCheck className="w-5 h-5" />
                  Isi Form Online
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <svg
        className="absolute bottom-0 left-0 w-full text-[#fdfbf7]"
        viewBox="0 0 1440 74"
        fill="currentColor"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,32 C240,74 480,74 720,48 C960,22 1200,10 1440,42 L1440,74 L0,74 Z" />
      </svg>
    </section>
  );
}

/** Marquee strip of benefits */
export function MarqueeStrip() {
  const items = [
    "Pijat Refleksi Tradisional",
    "Terapi Otot Mendalam",
    "Aromaterapi Premium",
    "Pijat Ibu Hamil",
    "Refleksi Wajah & Kepala",
    "Kursi Eksekutif 30 Menit",
    "Terapis Bersertifikat",
    "Harga Transparan",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="bg-emerald-950 py-4 overflow-hidden" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-10">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-emerald-100/80">
            <Leaf className="w-4 h-4 text-[#c9a227]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Animated stats band */
export function StatsBand() {
  return (
    <section className="bg-[#fdfbf7] py-16" aria-label="Pencapaian kami">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="relative rounded-3xl bg-white pearl-shadow p-8 text-center overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-emerald-100 to-transparent opacity-70 group-hover:scale-150 transition-transform duration-700"
                aria-hidden="true"
              />
              <p className="relative font-display text-4xl lg:text-5xl font-extrabold text-gradient-brand">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="relative mt-2 text-sm font-semibold text-emerald-950/60">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Why choose us — feature list */
export function WhyUs() {
  const features = [
    {
      icon: BadgeCheck,
      title: "Terapis Profesional Bersertifikat",
      desc: "Setiap terapis kami melewati pelatihan intensif dan memiliki pengalaman lebih dari 5 tahun membaca titik refleksi tubuh.",
    },
    {
      icon: ShieldCheck,
      title: "Standar Kebersihan Tertinggi",
      desc: "Handuk, kimono, dan alat terapi selalu baru untuk setiap pelanggan. Kursi didisinfeksi setelah setiap sesi tanpa kecuali.",
    },
    {
      icon: HeartHandshake,
      title: "Sentuhan yang Personal",
      desc: "Konsultasi singkat sebelum terapi — tekanan, durasi, dan teknik disesuaikan dengan kondisi tubuh Anda, bukan sekadar template.",
    },
    {
      icon: Users,
      title: "25.000+ Pelanggan Puas",
      desc: "Dari pekerja kantor, ibu hamil, hingga lansia — ribuan Jakarta Timur mempercayakan kesehatan mereka kepada kami.",
    },
  ];

  return (
    <section className="relative bg-brand-radial py-24" aria-label="Keunggulan Mutiara Refleksi">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        {/* Image collage */}
        <div className="relative order-2 lg:order-1">
          <motion.div
            className="relative rounded-[2rem] overflow-hidden pearl-shadow aspect-[4/3]"
            initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -1.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/about-interior.jpg"
              alt="Interior pusat pijat refleksi Mutiara Refleksi yang nyaman dan bersih"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute -bottom-8 -right-2 sm:right-8 w-44 sm:w-56 rounded-3xl overflow-hidden pearl-shadow aspect-square border-4 border-white"
            initial={{ opacity: 0, y: 40, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/branding/gerai-1.jpg"
              alt="Suasana terapi di gerai Mutiara Refleksi"
              fill
              sizes="224px"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute -top-5 -left-3 sm:-left-6 bg-emerald-800 text-white rounded-2xl px-5 py-4 pearl-shadow animate-breathe"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="font-display text-3xl font-extrabold">10+</p>
            <p className="text-xs font-medium text-emerald-100/80">Tahun Melayani</p>
          </motion.div>
        </div>

        {/* Copy + features */}
        <div className="order-1 lg:order-2">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full bg-emerald-800/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800 mb-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />
            Mengapa Mutiara Refleksi
          </motion.span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-emerald-950 leading-[1.15]">
            <AnimatedWords text="Kesehatan Anda, Prioritas Kami" />
          </h2>
          <p className="mt-4 text-emerald-950/65 leading-relaxed max-w-xl">
            Kami percaya pijat refleksi bukan sekadar perawatan tubuh — ini investasi kesehatan
            jangka panjang. Itulah mengapa setiap detail pengalaman di gerai kami dirancang untuk
            memberikan hasil terbaik bagi tubuh Anda.
          </p>

          <div className="mt-9 grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="rounded-2xl bg-white p-5 pearl-shadow card-hover-lift"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              >
                <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-emerald-800 text-white shadow-md">
                  <f.icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3.5 font-bold text-emerald-950">{f.title}</h3>
                <p className="mt-1.5 text-sm text-emerald-950/60 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** How it works — 4 steps */
export function ProcessSteps() {
  const steps = [
    { n: "01", title: "Reservasi", desc: "Pesan online, WhatsApp, atau datang langsung ke gerai kami di PGC Cililitan." },
    { n: "02", title: "Konsultasi", desc: "Ceritakan keluhan Anda. Terapis memetakan kondisi tubuh sebelum terapi dimulai." },
    { n: "03", title: "Terapi", desc: "Nikmati sesi terapi dengan teknik dan tekanan yang presisi sesuai kebutuhan tubuh." },
    { n: "04", title: "Pulih", desc: "Pulang dengan tubuh ringan, pikiran jernih, dan rekomendasi perawatan lanjutan." },
  ];
  return (
    <section className="py-24 bg-[#f5f0e6]" aria-label="Alur reservasi">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-800/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />
            Mudah & Praktis
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-emerald-950">
            <AnimatedWords text="4 Langkah Menuju Tubuh Ringan" />
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* connector line */}
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-px bg-gradient-to-r from-emerald-800/10 via-emerald-800/40 to-emerald-800/10" aria-hidden="true" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              className="relative text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="relative mx-auto w-[104px] h-[104px]">
                <span className="absolute inset-0 rounded-full bg-white pearl-shadow flex items-center justify-center">
                  <span className="font-display text-2xl font-extrabold text-gradient-brand">{s.n}</span>
                </span>
                <span className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-800/25 animate-[spin_18s_linear_infinite]" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-bold text-lg text-emerald-950">{s.title}</h3>
              <p className="mt-2 text-sm text-emerald-950/60 leading-relaxed px-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
