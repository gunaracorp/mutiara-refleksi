// ============================================================
// MUTIARA REFLEKSI - /kontak : Kontak & Lokasi
// ============================================================
import type { Metadata } from "next";
import { Clock, Info, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { FloatingPearls, Reveal, Stagger, StaggerItem } from "@/components/animation/reveal";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/kontak/contact-form";
import { site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Kontak & Lokasi",
  description:
    "Hubungi Mutiara Refleksi — pusat pijat refleksi di Pusat Grosir Cililitan, Jl. Dewi Sartika, Kramat Jati, Jakarta Timur. Telepon/WhatsApp 0851-6267-4977, email mutiararefleksigroup@gmail.com. Buka setiap hari 09.00–21.00 WIB.",
  keywords: [
    "kontak mutiara refleksi",
    "alamat pijat refleksi jakarta timur",
    "no telp pijat refleksi kramat jati",
    "whatsapp pijat refleksi cililitan",
    "lokasi pijat refleksi dewi sartika",
  ],
  alternates: { canonical: "/kontak" },
  openGraph: {
    type: "website",
    url: `${site.url}/kontak`,
    title: "Kontak & Lokasi — Mutiara Refleksi Jakarta Timur",
    description:
      "Telepon/WhatsApp 0851-6267-4977. Pusat Grosir Cililitan Lantai 3A, Jl. Dewi Sartika, Kramat Jati, Jakarta Timur. Buka setiap hari 09.00–21.00 WIB.",
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
    title: "Kontak & Lokasi — Mutiara Refleksi",
    description:
      "Hubungi kami via WhatsApp 0851-6267-4977 atau kunjungi gerai kami di Pusat Grosir Cililitan, Jakarta Timur.",
    images: ["/images/about-interior.jpg"],
  },
};

const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Halo Mutiara Refleksi, saya ingin bertanya."
)}`;

export default function KontakPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Kontak", url: `${site.url}/kontak` }])}
      />

      <PageHero
        title="Hubungi Kami"
        badge="Kami Siap Membantu"
        crumbs={[{ name: "Kontak" }]}
        image="/images/about-interior.jpg"
        subtitle="Ada pertanyaan sebelum reservasi? Butuh paket korporat? Tim Mutiara Refleksi siap membalas dengan cepat dan ramah."
      />

      {/* Kartu info kontak */}
      <section className="bg-[#fdfbf7] py-14 sm:py-20" aria-label="Informasi kontak">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Kontak & Lokasi"
            title="Tiga Cara Cepat Menghubungi Kami"
            description="Pilih cara yang paling nyaman untuk Anda — telepon, WhatsApp, email, atau datang langsung ke gerai kami."
          />

          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            <StaggerItem>
              <div className="card-hover-lift flex h-full flex-col rounded-3xl bg-white pearl-shadow p-6 sm:p-7">
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-emerald-800/10 text-emerald-800">
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-emerald-950">
                  Telepon & WhatsApp
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-emerald-950/60">
                  Respon tercepat via WhatsApp pada jam operasional{" "}
                  {site.hours.label.toLowerCase()}.
                </p>
                <a
                  href={`tel:${site.phone}`}
                  className="mt-3 text-lg font-bold text-emerald-900 underline-offset-4 hover:underline"
                >
                  {site.phoneDisplay}
                </a>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-full border-emerald-900/20 px-5 font-bold text-emerald-950 hover:bg-emerald-950 hover:text-white"
                  >
                    <a href={`tel:${site.phone}`}>
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      Telepon
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="h-11 rounded-full bg-emerald-800 px-5 font-bold text-white hover:bg-emerald-900"
                  >
                    <a href={waLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="card-hover-lift flex h-full flex-col rounded-3xl bg-white pearl-shadow p-6 sm:p-7">
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-emerald-800/10 text-emerald-800">
                  <Mail className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-emerald-950">Email</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-emerald-950/60">
                  Untuk kerja sama korporat, invoice, atau pertanyaan tertulis — kami balas
                  maksimal 1×24 jam kerja.
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-3 break-all text-base font-bold text-emerald-900 underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
                <div className="mt-5">
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-full border-emerald-900/20 px-5 font-bold text-emerald-950 hover:bg-emerald-950 hover:text-white"
                  >
                    <a
                      href={`mailto:${site.email}?subject=${encodeURIComponent(
                        "Pertanyaan — Mutiara Refleksi"
                      )}`}
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      Kirim Email
                    </a>
                  </Button>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="card-hover-lift flex h-full flex-col rounded-3xl bg-white pearl-shadow p-6 sm:p-7">
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-emerald-800/10 text-emerald-800">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-emerald-950">
                  Alamat Gerai
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-emerald-950/60">
                  {site.address.full}
                </p>
                <p className="mt-3 text-sm font-semibold text-emerald-800">
                  PGC Lantai 3A · Zona Hijau · Parkir luas tersedia
                </p>
                <div className="mt-5">
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-full border-emerald-900/20 px-5 font-bold text-emerald-950 hover:bg-emerald-950 hover:text-white"
                  >
                    <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer">
                      <Navigation className="h-4 w-4" aria-hidden="true" />
                      Petunjuk Arah
                    </a>
                  </Button>
                </div>
              </div>
            </StaggerItem>
          </Stagger>

          {/* Formulir + Jam Operasional */}
          <div className="mt-14 grid gap-8 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <ContactForm />
            </Reveal>

            <Reveal delay={0.12} className="lg:col-span-2">
              <div className="relative h-full overflow-hidden rounded-3xl bg-emerald-950 p-6 text-white shadow-xl shadow-emerald-950/20 sm:p-8">
                <FloatingPearls count={5} />
                <div className="relative">
                  <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#c9a227]/15 text-[#e7c95a]">
                    <Clock className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-bold">Jam Operasional</h2>
                  <p className="mt-4 inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-[#e7c95a]">
                    {site.hours.label}
                  </p>
                  <dl className="mt-6 space-y-3 text-sm">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <dt className="text-emerald-50/70">{site.hours.days}</dt>
                      <dd className="font-semibold">
                        {site.hours.open} – {site.hours.close} WIB
                      </dd>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <dt className="text-emerald-50/70">Hari Libur Nasional</dt>
                      <dd className="font-semibold">Tetap Buka</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-emerald-50/70">Reservasi Terakhir</dt>
                      <dd className="font-semibold">20.00 WIB</dd>
                    </div>
                  </dl>

                  <div className="mt-6 rounded-2xl bg-white/10 p-4">
                    <p className="flex items-start gap-2.5 text-sm leading-relaxed text-emerald-50/85">
                      <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#e7c95a]" aria-hidden="true" />
                      <span>
                        <strong className="text-white">Datang langsung?</strong> Pijat Kursi
                        Eksekutif bisa langsung datang tanpa reservasi. Untuk layanan lain, kami
                        sarankan reservasi terlebih dahulu agar terapis siap menyambut Anda.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Peta */}
          <Reveal className="mt-14">
            <div className="overflow-hidden rounded-3xl bg-white pearl-shadow">
              <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <h2 className="font-display text-xl font-bold text-emerald-950 sm:text-2xl">
                    Lokasi Mutiara Refleksi
                  </h2>
                  <p className="mt-1.5 flex items-start gap-2 text-sm text-emerald-950/60">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-800" aria-hidden="true" />
                    {site.address.full}
                  </p>
                </div>
                <Button
                  asChild
                  className="h-12 shrink-0 rounded-full bg-red-600 px-6 font-bold text-white shadow-lg shadow-red-900/25 hover:bg-red-700"
                >
                  <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="h-5 w-5" aria-hidden="true" />
                    Buka di Google Maps
                  </a>
                </Button>
              </div>
              <iframe
                src={site.address.mapsEmbed}
                title="Peta lokasi Mutiara Refleksi — Pusat Grosir Cililitan, Jl. Dewi Sartika, Kramat Jati, Jakarta Timur"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[340px] w-full border-0 sm:h-[420px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Sudah Tahu Arahnya? Kami Tunggu di Gerai"
        description="Amankan kursi terapi Anda sekarang — pilih layanan, tanggal, dan jam kedatangan dalam hitungan detik."
      />
    </>
  );
}
