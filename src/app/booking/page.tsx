// ============================================================
// MUTIARA REFLEKSI - /booking : Halaman Reservasi Online
// ============================================================
import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, MapPin, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { JsonLd } from "@/components/shared/json-ld";
import { FloatingPearls, Reveal } from "@/components/animation/reveal";
import { BookingForm } from "@/components/booking/booking-form";
import { site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Reservasi Online",
  description:
    "Reservasi online pijat refleksi di Mutiara Refleksi Jakarta Timur. Pilih layanan, durasi, tanggal & jam kunjungan — tanpa antri, konfirmasi cepat via WhatsApp. Buka setiap hari 09.00–21.00 WIB.",
  keywords: [
    "reservasi pijat refleksi",
    "booking pijat refleksi jakarta timur",
    "pesan pijat refleksi online",
    "pijat refleksi cililitan reservasi",
    "jadwal pijat refleksi kramat jati",
    "reservasi mutiara refleksi",
  ],
  alternates: { canonical: "/booking" },
  openGraph: {
    type: "website",
    url: `${site.url}/booking`,
    title: "Reservasi Online — Mutiara Refleksi Jakarta Timur",
    description:
      "Pesan sesi pijat refleksi tanpa antri. Pilih layanan, durasi, tanggal & jam — konfirmasi cepat via WhatsApp.",
    images: [
      {
        url: "/images/service-kursi.jpg",
        width: 1344,
        height: 768,
        alt: "Pijat kursi eksekutif di Mutiara Refleksi Jakarta Timur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reservasi Online — Mutiara Refleksi",
    description:
      "Pesan sesi pijat refleksi tanpa antri. Konfirmasi cepat via WhatsApp, buka setiap hari 09.00–21.00 WIB.",
    images: ["/images/service-kursi.jpg"],
  },
};

const reasons = [
  {
    icon: ShieldCheck,
    title: "Tanpa Antri",
    desc: "Kursi dan terapis kami sudah siap menyambut Anda tepat pada jam yang dipilih.",
  },
  {
    icon: Clock,
    title: "Konfirmasi Cepat",
    desc: "Tim kami membalas konfirmasi via WhatsApp maksimal 15 menit pada jam operasional.",
  },
  {
    icon: Sparkles,
    title: "Gratis Konsultasi",
    desc: "Diskusikan keluhan Anda sebelum sesi dimulai — terapis menyesuaikan tekanan & teknik.",
  },
];

function FormFallback() {
  return (
    <div className="rounded-3xl bg-white pearl-shadow p-6 sm:p-8 lg:p-10" aria-hidden="true">
      <div className="h-5 w-32 animate-pulse rounded bg-emerald-900/10" />
      <div className="mt-3 h-8 w-64 animate-pulse rounded-lg bg-emerald-900/10" />
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-16 animate-pulse rounded-xl bg-emerald-900/[0.07]",
              i >= 4 && "sm:col-span-2"
            )}
          />
        ))}
      </div>
      <div className="mt-8 h-12 w-52 animate-pulse rounded-full bg-red-600/15" />
    </div>
  );
}

export default function BookingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Reservasi", url: `${site.url}/booking` }])}
      />

      <PageHero
        title="Reservasi Online"
        badge="Tanpa Antri"
        crumbs={[{ name: "Reservasi" }]}
        image="/images/service-kursi.jpg"
        subtitle="Pilih layanan favorit Anda, tentukan tanggal & jam — kursi terapi kami siap menyambut tanpa perlu menunggu."
      />

      <section className="bg-[#fdfbf7] py-14 sm:py-20" aria-label="Formulir reservasi online">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Suspense fallback={<FormFallback />}>
                <BookingForm />
              </Suspense>
            </div>

            <Reveal delay={0.15} className="lg:col-span-1">
              <aside aria-label="Informasi reservasi" className="lg:sticky lg:top-24">
                <div className="relative overflow-hidden rounded-3xl bg-emerald-950 p-6 text-white shadow-xl shadow-emerald-950/20 sm:p-8">
                  <FloatingPearls count={5} />
                  <div className="relative">
                    <h2 className="font-display text-xl font-bold">Kenapa Reservasi Online?</h2>
                    <ul className="mt-6 space-y-5">
                      {reasons.map((r) => (
                        <li key={r.title} className="flex gap-4">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c9a227]/15 text-[#e7c95a]">
                            <r.icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <span>
                            <span className="block font-bold">{r.title}</span>
                            <span className="mt-0.5 block text-sm leading-relaxed text-emerald-50/70">
                              {r.desc}
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="my-7 h-px bg-white/15" aria-hidden="true" />

                    <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#e7c95a]">
                      Informasi Gerai
                    </h3>
                    <ul className="mt-4 space-y-4 text-sm">
                      <li className="flex gap-3">
                        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#e7c95a]" aria-hidden="true" />
                        <span>
                          <span className="block font-semibold">Jam Operasional</span>
                          <span className="text-emerald-50/75">{site.hours.label}</span>
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#e7c95a]" aria-hidden="true" />
                        <span>
                          <span className="block font-semibold">Telepon / WhatsApp</span>
                          <a
                            href={`tel:${site.phone}`}
                            className="text-emerald-50/75 underline-offset-2 transition-colors hover:text-white hover:underline"
                          >
                            {site.phoneDisplay}
                          </a>
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#e7c95a]" aria-hidden="true" />
                        <span>
                          <span className="block font-semibold">Alamat</span>
                          <span className="text-emerald-50/75">{site.address.full}</span>
                          <a
                            href={site.address.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 inline-block font-semibold text-[#e7c95a] underline-offset-2 hover:underline"
                          >
                            Lihat di Google Maps
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
