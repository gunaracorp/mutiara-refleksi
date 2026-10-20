// ============================================================
// MUTIARA REFLEKSI - /tentang-kami : Profil PT Mutiara Refleksi Group
// ============================================================
import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Leaf,
  Quote,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { Reveal, ScaleIn, Stagger, StaggerItem, CountUp } from "@/components/animation/reveal";
import { site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Tentang Kami — PT Mutiara Refleksi Group",
  description:
    "Pusat pijat refleksi Jakarta Timur sejak 2015. PT Mutiara Refleksi Group resmi & terdaftar — perusahaan spesialis layanan pijat refleksi untuk kesehatan dan kesejahteraan di Pusat Grosir Cililitan, Kramat Jati.",
  keywords: [
    "pt mutiara refleksi group",
    "pusat pijat refleksi jakarta timur",
    "pijat refleksi sejak 2015",
    "tempat pijat refleksi terpercaya jakarta",
    "pijat refleksi cililitan kramat jati",
  ],
  alternates: { canonical: "/tentang-kami" },
  openGraph: {
    type: "website",
    url: `${site.url}/tentang-kami`,
    title: "Tentang Kami — PT Mutiara Refleksi Group",
    description:
      "Pusat pijat refleksi Jakarta Timur sejak 2015. Perusahaan resmi & terdaftar yang mengutamakan kesehatan Anda.",
    images: [
      {
        url: "/images/about-interior.jpg",
        width: 1344,
        height: 768,
        alt: "Interior gerai Mutiara Refleksi di Jakarta Timur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang Kami — PT Mutiara Refleksi Group",
    description: "Pusat pijat refleksi Jakarta Timur sejak 2015. Resmi & terdaftar.",
    images: ["/images/about-interior.jpg"],
  },
};

// JSON-LD AboutPage + ringkasan organisasi
const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Tentang Kami — PT Mutiara Refleksi Group",
  url: `${site.url}/tentang-kami`,
  description:
    "Profil PT Mutiara Refleksi Group — pusat pijat refleksi Jakarta Timur sejak 2015, resmi berbadan hukum perseroan terbatas.",
  inLanguage: "id-ID",
  isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
  about: {
    "@type": "Organization",
    name: site.legalName,
    alternateName: site.name,
    foundingDate: site.founded,
    slogan: site.tagline,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.province,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
  },
};

const misiItems = [
  "Memberikan layanan berkualitas tinggi dengan harga yang terjangkau bagi semua kalangan.",
  "Menjaga standar kebersihan dan keamanan yang tinggi di setiap sesi terapi.",
  "Menghadirkan pengalaman nyaman dengan suasana tenang dan terapeutik.",
  "Mengutamakan profesionalisme dan keahlian terapis dalam setiap sesi.",
  "Terus mengembangkan diri dan memperbarui pengetahuan teknik terapi terbaru.",
];

const values = [
  {
    icon: HeartHandshake,
    title: "Kepedulian",
    desc: "Setiap pelanggan kami perlakukan seperti keluarga — keluhan Anda didengarkan, terapi disesuaikan dengan kondisi tubuh Anda.",
  },
  {
    icon: ShieldCheck,
    title: "Keamanan & Kebersihan",
    desc: "Protokol higienis ketat: handuk dan linen diganti untuk setiap pelanggan, alat terapi didisinfeksi setelah setiap sesi.",
  },
  {
    icon: Sparkles,
    title: "Profesionalisme",
    desc: "Terapis kami terlatih dan bersertifikat internal, bekerja mengikuti prosedur standar yang terukur dan konsisten.",
  },
  {
    icon: Leaf,
    title: "Perkembangan Berkelanjutan",
    desc: "Kami terus belajar teknik terapi terbaru dan menyempurnakan layanan agar hasilnya semakin baik bagi Anda.",
  },
];

const legalItems = [
  { name: "Akta Perseroan", desc: "Pendirian badan hukum PT yang sah" },
  { name: "SK Kemenkumham", desc: "Pengesahan resmi Kemenkumham RI" },
  { name: "NIB", desc: "Nomor Induk Berusaha terdaftar" },
  { name: "NPWP", desc: "Terdaftar sebagai wajib pajak" },
  { name: "Sertifikat Standar", desc: "Standar mutu layanan terjaga" },
];

const teamStats = [
  { icon: Users, value: 15, suffix: "+", label: "Terapis Profesional" },
  { icon: Briefcase, value: 5, suffix: "+ Th", label: "Rata-rata Pengalaman Terapis" },
  { icon: GraduationCap, value: null, suffix: "", label: "Sertifikasi Internal Berkelanjutan" },
];

export default function TentangKamiPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Tentang Kami", url: `${site.url}/tentang-kami` }])} />
      <JsonLd data={aboutPageJsonLd} />

      <PageHero
        title="Tentang Mutiara Refleksi"
        subtitle="Perusahaan spesialis layanan pijat refleksi untuk kesehatan dan kesejahteraan — resmi berbadan hukum PT, melayani Jakarta Timur sejak 2015."
        crumbs={[{ name: "Tentang Kami" }]}
        image="/branding/gerai-2.jpg"
        badge="Sejak 2015"
      />

      {/* ============ Cerita Kami ============ */}
      <section className="py-20 sm:py-24 bg-[#fdfbf7]" aria-label="Cerita Mutiara Refleksi">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Kolase foto */}
            <div className="relative mx-auto w-full max-w-lg pb-14">
              <ScaleIn className="relative aspect-[4/5] w-[82%] overflow-hidden rounded-[2rem] pearl-shadow">
                <Image
                  src="/images/about-interior.jpg"
                  alt="Interior bersih dan nyaman gerai Mutiara Refleksi di Pusat Grosir Cililitan"
                  fill
                  sizes="(max-width: 1024px) 80vw, 460px"
                  className="object-cover"
                />
              </ScaleIn>
              <ScaleIn
                delay={0.25}
                className="absolute bottom-0 right-0 w-[54%] overflow-hidden rounded-2xl border-4 border-white pearl-shadow"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/branding/gerai-1.jpg"
                    alt="Suasana kesibukan gerai Mutiara Refleksi dengan pelanggan menikmati terapi"
                    fill
                    sizes="(max-width: 1024px) 54vw, 300px"
                    className="object-cover"
                  />
                </div>
              </ScaleIn>
              <Reveal delay={0.4} className="absolute -top-5 right-6 sm:-left-4">
                <div className="rounded-2xl bg-emerald-900 px-5 py-4 text-white pearl-shadow">
                  <p className="font-display text-2xl font-bold text-[#e7c95a]">10+</p>
                  <p className="text-xs font-medium text-emerald-50/80">Tahun Melayani</p>
                </div>
              </Reveal>
            </div>

            {/* Narasi */}
            <div>
              <SectionHeading
                align="left"
                eyebrow="Cerita Kami"
                title="Dari Satu Gerai Kecil, Tumbuh Menjadi Pusat Terapi Terpercaya"
              />
              <Reveal delay={0.15} className="mt-6 space-y-5 text-base leading-relaxed text-emerald-950/70">
                <p>
                  <strong className="font-semibold text-emerald-950">PT Mutiara Refleksi Group</strong>{" "}
                  adalah perusahaan spesialis layanan pijat refleksi untuk kesehatan dan kesejahteraan.
                  Berawal dari satu gerai sederhana pada tahun {site.founded}, kami tumbuh bersama
                  kepercayaan ribuan pelanggan yang merasakan langsung manfaat terapi refleksi.
                </p>
                <p>
                  Terapi yang kami hadirkan menggunakan teknik pijat yang terbukti efektif meredakan
                  stres, meningkatkan sirkulasi darah, dan mengurangi ketegangan otot — dipraktikkan
                  oleh terapis terlatih dengan sentuhan yang presisi pada titik-titik refleksi tubuh.
                </p>
                <p>
                  Gerai utama kami berlokasi di{" "}
                  <strong className="font-semibold text-emerald-950">
                    Pusat Grosir Cililitan (PGC), Kramat Jati, Jakarta Timur
                  </strong>{" "}
                  — lokasi strategis yang mudah dijangkau, dilengkapi fasilitas nyaman dan higienis
                  untuk kenyamanan sesi terapi Anda.
                </p>
                <p>
                  Sebagai bukti komitmen jangka panjang, kami resmi berbadan hukum{" "}
                  <strong className="font-semibold text-emerald-950">Perseroan Terbatas (PT)</strong> —
                  segala aktivitas bisnis kami dijalankan secara legal, transparan, dan akuntabel.
                </p>
              </Reveal>
              <Reveal delay={0.3} className="mt-8 flex items-center gap-4 rounded-2xl border border-[#c9a227]/30 bg-[#c9a227]/10 p-5">
                <Quote className="w-8 h-8 shrink-0 text-[#c9a227]" aria-hidden="true" />
                <p className="font-display text-lg font-semibold italic text-emerald-950">
                  &ldquo;{site.tagline}&rdquo; — prinsip yang kami pegang di setiap sentuhan.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Visi & Misi ============ */}
      <section className="py-20 sm:py-24 bg-[#f5f0e6]" aria-label="Visi dan misi perusahaan">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Arah & Tujuan"
            title="Visi & Misi Kami"
            description="Kompas yang memandu setiap keputusan dan sentuhan terapi di Mutiara Refleksi."
          />

          {/* Visi */}
          <Reveal className="mx-auto mt-14 max-w-3xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-emerald-950 p-8 sm:p-12 text-center pearl-shadow">
              <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#c9a227]/15 blur-2xl" aria-hidden="true" />
              <span className="mx-auto flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#e7c95a]">
                Visi
              </span>
              <p className="mt-6 font-display text-xl sm:text-2xl leading-relaxed text-white">
                &ldquo;Menjadi pusat terkemuka untuk layanan pijat refleksi yang berkualitas dan
                terpercaya di wilayah ini, serta destinasi utama masyarakat Jakarta Timur untuk
                menjaga kesehatan dan kesejahteraan tubuh secara alami.&rdquo;
              </p>
            </div>
          </Reveal>

          {/* Misi — kartu bernomor */}
          <div className="mt-10">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-emerald-800/60">
              Lima Misi Kami
            </p>
            <Stagger className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {misiItems.map((misi, i) => (
                <StaggerItem
                  key={i}
                  className="group rounded-2xl border border-emerald-900/10 bg-white p-6 pearl-shadow transition-transform duration-300 hover:-translate-y-1"
                >
                  <span
                    className="font-display text-4xl font-bold text-[#c9a227]/90 transition-colors group-hover:text-[#c9a227]"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-emerald-950/75">{misi}</p>
                  <span className="sr-only">Misi ke-{i + 1}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ============ Nilai-Nilai ============ */}
      <section className="py-20 sm:py-24 bg-[#fdfbf7]" aria-label="Nilai-nilai perusahaan">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nilai Kami"
            title="Empat Nilai yang Kami Junjung"
            description="Nilai-nilai ini hidup dalam setiap interaksi — dari resepsionis hingga sentuhan terapis."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem
                key={v.title}
                className="group h-full rounded-3xl border border-emerald-900/10 bg-white p-7 pearl-shadow card-hover-lift"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-800/10 text-emerald-800 transition-colors group-hover:bg-emerald-800 group-hover:text-white">
                  <v.icon className="w-7 h-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-emerald-950">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-emerald-950/65">{v.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ Legalitas ============ */}
      <section className="py-20 sm:py-24 bg-brand-radial" aria-label="Legalitas perusahaan">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Legalitas"
            title="Resmi & Terdaftar"
            description="PT Mutiara Refleksi Group berbadan hukum resmi dengan kelengkapan perizinan yang sah — Anda beristirahat di tempat yang aman dan akuntabel."
          />
          <Reveal className="mt-12">
            <div className="rounded-[2rem] border border-[#c9a227]/25 bg-white/85 p-6 sm:p-10 pearl-shadow backdrop-blur">
              <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {legalItems.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col items-center rounded-2xl bg-[#f5f0e6]/70 px-4 py-6 text-center"
                  >
                    <BadgeCheck className="w-8 h-8 text-emerald-800" aria-hidden="true" />
                    <p className="mt-3 text-sm font-bold text-emerald-950">{item.name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-emerald-950/55">{item.desc}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-emerald-950/50">
                <Landmark className="w-4 h-4 shrink-0" aria-hidden="true" />
                Dokumen legalitas dapat diperiksa langsung di gerai kami saat jam operasional.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ Tim ============ */}
      <section className="py-20 sm:py-24 bg-[#fdfbf7]" aria-label="Tim terapis kami">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Orang di Balik Sentuhan"
            title="Tim Terapis Profesional Kami"
            description="Tangan-tangan terlatih yang siap memulihkan tubuh Anda setiap hari."
          />
          <Reveal className="mt-12">
            <figure>
              <div className="relative aspect-[16/10] sm:aspect-[21/9] overflow-hidden rounded-[2rem] pearl-shadow">
                <Image
                  src="/images/tim.jpg"
                  alt="Tim terapis profesional Mutiara Refleksi berpose bersama di gerai Pusat Grosir Cililitan"
                  fill
                  sizes="(max-width: 1152px) 100vw, 1152px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/45 via-transparent to-transparent" aria-hidden="true" />
                <figcaption className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 rounded-full bg-white/90 backdrop-blur px-5 py-2 text-sm font-semibold text-emerald-950">
                  Tim terapis profesional kami
                </figcaption>
              </div>
            </figure>
          </Reveal>

          <Stagger className="mt-8 grid gap-5 sm:grid-cols-3">
            {teamStats.map((s) => (
              <StaggerItem
                key={s.label}
                className="flex items-center gap-4 rounded-2xl border border-emerald-900/10 bg-white p-6 pearl-shadow"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-800/10 text-emerald-800">
                  <s.icon className="w-6 h-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-2xl font-bold text-emerald-900">
                    {s.value !== null ? <CountUp to={s.value} suffix={s.suffix} /> : "Berkelanjutan"}
                  </p>
                  <p className="text-xs font-medium text-emerald-950/60">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBanner
        title="Kenalan Lebih Dekat? Mampir ke Gerai Kami"
        description="Rasakan langsung bedanya terapi dari tim yang berpengalaman lebih dari 10 tahun. Reservasi online atau datang langsung ke PGC Cililitan."
      />
    </>
  );
}
