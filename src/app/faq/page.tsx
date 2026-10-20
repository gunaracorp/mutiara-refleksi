// ============================================================
// MUTIARA REFLEKSI - /faq : Pertanyaan yang Sering Diajukan
// ============================================================
import type { Metadata } from "next";
import { CircleHelp, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { Reveal, Stagger, StaggerItem } from "@/components/animation/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/data/content";
import { site } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Pertanyaan yang Sering Diajukan (FAQ)",
  description:
    "Jawaban lengkap seputar Mutiara Refleksi: lokasi pijat refleksi di Jakarta Timur, jam buka, harga, keamanan pijat ibu hamil, higienitas, hingga metode pembayaran tunai, QRIS, dan transfer.",
  keywords: [
    "faq pijat refleksi",
    "pertanyaan pijat refleksi jakarta timur",
    "apakah pijat refleksi aman",
    "lokasi mutiara refleksi",
    "jam buka pijat refleksi cililitan",
  ],
  alternates: { canonical: "/faq" },
  openGraph: {
    type: "website",
    url: `${site.url}/faq`,
    title: "Pertanyaan yang Sering Diajukan — Mutiara Refleksi Jakarta Timur",
    description:
      "Semua yang perlu Anda tahu sebelum berkunjung: lokasi, jam buka, harga, keamanan, dan pembayaran.",
    images: [
      {
        url: "/images/service-wajah.jpg",
        width: 1344,
        height: 768,
        alt: "Terapis Mutiara Refleksi memberikan terapi refleksi wajah dan kepala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pertanyaan yang Sering Diajukan — Mutiara Refleksi",
    description: "Semua yang perlu Anda tahu sebelum berkunjung ke gerai kami.",
    images: ["/images/service-wajah.jpg"],
  },
};

// Kategori dikelompokkan secara deterministik (urutan tampil tetap)
const faqCategories = ["Umum", "Layanan", "Keamanan", "Pembayaran"] as const;

const groupedFaqs = faqCategories
  .map((cat) => ({ category: cat, items: faqs.filter((f) => f.category === cat) }))
  .filter((g) => g.items.length > 0);

export default function FaqPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "FAQ", url: `${site.url}/faq` }])} />
      <JsonLd data={faqJsonLd()} />

      <PageHero
        title="Punya Pertanyaan?"
        subtitle="Kami rangkum semua pertanyaan yang paling sering diajukan pelanggan — dari lokasi dan jam buka hingga keamanan dan pembayaran."
        crumbs={[{ name: "FAQ" }]}
        image="/images/service-wajah.jpg"
        badge={`${faqs.length} Jawaban Berguna`}
      />

      {/* ============ Daftar FAQ per kategori ============ */}
      <section className="py-20 sm:py-24 bg-[#fdfbf7]" aria-label="Daftar pertanyaan dan jawaban">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {groupedFaqs.map((group, gi) => (
            <div
              key={group.category}
              className={gi > 0 ? "mt-16" : undefined}
              aria-label={`Pertanyaan kategori ${group.category}`}
            >
              {/* Kepala kategori */}
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-emerald-950">
                  {group.category}
                </h2>
                <span className="rounded-full bg-emerald-800/10 px-3 py-1 text-xs font-bold text-emerald-800">
                  {group.items.length} pertanyaan
                </span>
                <span className="hidden h-px flex-1 bg-emerald-900/10 sm:block" aria-hidden="true" />
              </div>

              {/* Accordion jawaban */}
              <Accordion type="multiple" className="rounded-3xl border border-emerald-900/10 bg-white px-5 sm:px-7 pearl-shadow">
                {group.items.map((f, i) => (
                  <AccordionItem
                    key={f.q}
                    value={`${group.category}-${i}`}
                    className="border-emerald-900/10 last:border-b-0"
                  >
                    <AccordionTrigger className="py-5 text-left text-[15px] sm:text-base font-bold text-emerald-950 hover:no-underline hover:text-emerald-800 [&>svg]:text-emerald-800 [&[data-state=open]]:text-emerald-800">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-sm sm:text-[15px] leading-relaxed text-emerald-950/70">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {/* Kartu bantuan */}
          <Reveal className="mt-16">
            <div className="relative overflow-hidden rounded-[2rem] bg-emerald-950 p-8 sm:p-12 text-center pearl-shadow">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c9a227]/15 text-[#e7c95a]">
                <CircleHelp className="w-7 h-7" aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-display text-2xl sm:text-3xl font-bold text-white">
                Masih Ada Pertanyaan?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-emerald-50/75">
                Tim kami siap membantu Anda setiap hari pukul 09.00–21.00 WIB. Tanyakan apa saja
                seputar layanan, harga, atau kondisi kesehatan Anda sebelum sesi dimulai.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-13 w-full sm:w-auto rounded-full bg-red-600 px-8 font-bold text-white shadow-xl shadow-red-900/30 hover:bg-red-700 hover:-translate-y-0.5 transition-all"
                >
                  <a
                    href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Halo Mutiara Refleksi, saya ingin bertanya.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat WhatsApp Mutiara Refleksi"
                  >
                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    Chat WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-13 w-full sm:w-auto rounded-full border-white/40 bg-white/10 px-8 font-bold text-white backdrop-blur hover:bg-white hover:text-emerald-950 transition-all"
                >
                  <a href={`tel:${site.phone}`} aria-label={`Telepon ${site.phoneDisplay}`}>
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    {site.phoneDisplay}
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ Ajakan menjelajah ============ */}
      <section className="pb-20 sm:pb-24 bg-[#fdfbf7]" aria-label="Tautan informasi lainnya">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Stagger className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "Lihat Layanan", desc: "Enam program terapi pilihan", href: "/layanan" },
              { title: "Cek Daftar Harga", desc: "Mulai Rp 45.000, transparan", href: "/harga" },
              { title: "Lihat Galeri", desc: "Suasana & fasilitas gerai", href: "/galeri" },
            ].map((c) => (
              <StaggerItem key={c.href}>
                <a
                  href={c.href}
                  className="group block h-full rounded-2xl border border-emerald-900/10 bg-white p-6 pearl-shadow card-hover-lift"
                >
                  <h3 className="font-display text-lg font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm text-emerald-950/60">{c.desc}</p>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBanner
        title="Pertanyaan Sudah Terjawab? Saatnya Terapi"
        description="Reservasi sekarang dan rasakan manfaat pijat refleksi profesional oleh terapis berpengalaman kami."
      />
    </>
  );
}
