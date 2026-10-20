// ============================================================
// MUTIARA REFLEKSI - /harga : Daftar Harga Layanan & Paket
// ============================================================
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgePercent, CalendarCheck, Check, Clock, CreditCard, Info, Star } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { ServiceIcon } from "@/components/shared/service-card";
import { Reveal, Stagger, StaggerItem } from "@/components/animation/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { packages, formatRupiah, services } from "@/lib/data/services";
import { site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Daftar Harga Pijat Refleksi Jakarta Timur",
  description:
    "Daftar harga pijat refleksi Jakarta Timur di Mutiara Refleksi: mulai Rp 45.000 untuk kursi eksekutif, refleksi tradisional Rp 75.000, aromaterapi Rp 150.000. Paket hemat & membership tersedia — tanpa biaya tersembunyi.",
  keywords: [
    "harga pijat refleksi jakarta timur",
    "biaya pijat refleksi",
    "harga refleksi murah jakarta",
    "paket pijat refleksi",
    "membership pijat refleksi",
    "harga pijat terapi jakarta timur",
    "harga pijat ibu hamil",
  ],
  alternates: { canonical: "/harga" },
  openGraph: {
    type: "website",
    url: `${site.url}/harga`,
    title: "Daftar Harga Pijat Refleksi Jakarta Timur — Mutiara Refleksi",
    description:
      "Harga transparan mulai Rp 45.000. Enam layanan terapi, paket hemat & membership — tanpa biaya tersembunyi.",
    images: [
      {
        url: "/images/blog-harga.jpg",
        width: 1344,
        height: 768,
        alt: "Daftar harga layanan pijat refleksi Mutiara Refleksi Jakarta Timur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daftar Harga Pijat Refleksi Jakarta Timur — Mutiara Refleksi",
    description: "Harga transparan mulai Rp 45.000. Paket hemat & membership tersedia.",
    images: ["/images/blog-harga.jpg"],
  },
};

// JSON-LD OfferCatalog: layanan reguler (per durasi) + paket hemat
const offerCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Daftar Harga Mutiara Refleksi",
  url: `${site.url}/harga`,
  itemListElement: [
    ...services.map((s) => ({
      "@type": "OfferCatalog",
      name: s.name,
      url: `${site.url}/layanan/${s.slug}`,
      itemListElement: s.durationOptions.map((d) => ({
        "@type": "Offer",
        name: `${s.name} ${d.duration}`,
        price: d.price,
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
      })),
    })),
    ...packages.map((p) => ({
      "@type": "Offer",
      name: p.name,
      description: p.desc,
      price: p.price,
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
    })),
  ],
};

const paymentNotes = [
  {
    icon: CreditCard,
    title: "Metode Pembayaran",
    desc: "Tunai, QRIS, transfer bank, dan kartu debit — semua harga sudah final tanpa biaya tersembunyi.",
  },
  {
    icon: Info,
    title: "Harga Dapat Berubah",
    desc: "Harga dapat disesuaikan sewaktu-waktu tanpa pemberitahuan sebelumnya. Harga yang berlaku adalah harga saat reservasi dikonfirmasi.",
  },
  {
    icon: BadgePercent,
    title: "Membership 6 Bulan",
    desc: "Paket membership berlaku 6 bulan sejak tanggal pembelian dan dapat dipakai anggota keluarga Anda.",
  },
];

export default function HargaPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Harga", url: `${site.url}/harga` }])} />
      <JsonLd data={offerCatalogJsonLd} />

      <PageHero
        title="Daftar Harga Transparan"
        subtitle="Semua harga kami tampilkan terbuka — apa yang Anda lihat adalah yang Anda bayar. Tanpa biaya tersembunyi, tanpa penawaran paksa."
        crumbs={[{ name: "Harga" }]}
        image="/images/blog-harga.jpg"
        badge="Tanpa Biaya Tersembunyi"
      />

      {/* ============ Layanan Reguler ============ */}
      <section className="py-20 sm:py-24 bg-[#fdfbf7]" aria-label="Harga layanan reguler">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Layanan Reguler"
            title="Harga Per Sesi Terapi"
            description="Pilih durasi sesuai kebutuhan Anda. Harga sudah termasuk konsultasi singkat, handuk bersih, dan minuman hangat."
          />

          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem
                key={s.slug}
                className="group relative flex h-full flex-col rounded-3xl border border-emerald-900/10 bg-white p-7 pearl-shadow card-hover-lift"
              >
                {s.featured && (
                  <Badge className="absolute -top-3 right-6 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white shadow-lg hover:bg-red-600">
                    <Star className="w-3 h-3 fill-current" aria-hidden="true" /> Populer
                  </Badge>
                )}

                <div className="flex items-center gap-3.5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-800/10 text-emerald-800">
                    <ServiceIcon name={s.icon} className="w-6 h-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold leading-snug text-emerald-950">
                      {s.name}
                    </h3>
                    <p className="text-xs text-emerald-950/50">
                      Mulai{" "}
                      <span className="font-bold text-[#c9a227]">{formatRupiah(s.price)}</span>
                    </p>
                  </div>
                </div>

                <ul className="mt-5 divide-y divide-emerald-900/10 border-t border-emerald-900/10">
                  {s.durationOptions.map((d) => (
                    <li key={d.duration} className="flex items-center justify-between py-3">
                      <span className="flex items-center gap-2 text-sm text-emerald-950/70">
                        <Clock className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                        {d.duration}
                      </span>
                      <span className="text-sm font-extrabold text-emerald-900">
                        {formatRupiah(d.price)}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5">
                  <Button
                    asChild
                    className="w-full rounded-full bg-red-600 font-bold text-white hover:bg-red-700 h-11 shadow-lg shadow-red-900/20 hover:-translate-y-0.5 transition-all"
                  >
                    <Link href={`/booking?layanan=${s.slug}`} aria-label={`Reservasi ${s.name}`}>
                      <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                      Reservasi Layanan Ini
                    </Link>
                  </Button>
                  <Link
                    href={`/layanan/${s.slug}`}
                    className="mt-3 flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-700 transition-colors"
                  >
                    Lihat detail layanan
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ Paket Hemat & Membership ============ */}
      <section className="py-20 sm:py-24 bg-[#f5f0e6]" aria-label="Paket hemat dan membership">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Paket Hemat & Membership"
            title="Semakin Sering, Semakin Hemat"
            description="Nikmati harga khusus untuk kunjungan rutin, pasangan, keluarga, hingga perusahaan Anda."
          />

          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((p) => {
              const highlight = p.badge === "Best Value";
              return (
                <StaggerItem
                  key={p.name}
                  className={`relative flex h-full flex-col rounded-3xl bg-white p-7 pearl-shadow card-hover-lift ${
                    highlight ? "ring-2 ring-[#c9a227]" : "border border-emerald-900/10"
                  }`}
                >
                  <Badge
                    className={`w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                      highlight
                        ? "bg-[#c9a227] text-emerald-950 hover:bg-[#c9a227]"
                        : "border border-emerald-800/30 bg-emerald-800/10 text-emerald-800 hover:bg-emerald-800/10"
                    }`}
                  >
                    {p.badge}
                  </Badge>

                  <h3 className="mt-4 font-display text-xl font-bold text-emerald-950">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-950/60">{p.desc}</p>

                  <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-display text-3xl font-bold text-[#c9a227]">
                      {formatRupiah(p.price)}
                    </span>
                    <span className="text-sm font-medium text-emerald-950/40 line-through">
                      {formatRupiah(p.originalPrice)}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-emerald-800">
                    Hemat {formatRupiah(p.originalPrice - p.price)}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-emerald-900/10 pt-5">
                    {p.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-emerald-950/75">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <Button
                      asChild
                      variant={highlight ? "default" : "outline"}
                      className={`w-full rounded-full font-bold h-11 transition-all hover:-translate-y-0.5 ${
                        highlight
                          ? "bg-red-600 font-bold text-white hover:bg-red-700 shadow-lg shadow-red-900/20"
                          : "border-emerald-800 text-emerald-900 hover:bg-emerald-800 hover:text-white"
                      }`}
                    >
                      <Link href="/booking" aria-label={`Pesan ${p.name}`}>
                        <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                        Pesan Paket Ini
                      </Link>
                    </Button>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>

          {/* Catatan pembayaran & kebijakan harga */}
          <Reveal className="mt-12">
            <div className="grid gap-5 rounded-3xl border border-emerald-900/10 bg-white/80 p-6 sm:p-8 backdrop-blur pearl-shadow md:grid-cols-3">
              {paymentNotes.map((n) => (
                <div key={n.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-800/10 text-emerald-800">
                    <n.icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-emerald-950">{n.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-emerald-950/60">{n.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Sudah Menemukan Harga yang Pas?"
        description="Kunci jadwal terapi Anda sekarang — slot sore dan akhir pekan cepat penuh. Reservasi lebih dulu, terapi lebih nyaman."
      />
    </>
  );
}
