// ============================================================
// MUTIARA REFLEKSI - /layanan/[slug] : Detail Layanan
// Server Component + SSG (generateStaticParams)
// ============================================================
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CalendarCheck,
  Check,
  ChevronRight,
  Clock,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { CtaBanner } from "@/components/shared/cta-banner";
import { DurationPriceTable } from "@/components/shared/duration-price-table";
import { JsonLd } from "@/components/shared/json-ld";
import { Reveal, Stagger, StaggerItem } from "@/components/animation/reveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getService, services } from "@/lib/data/services";
import { serviceJsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { site, waLink, waServiceMessage } from "@/lib/site";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Layanan Tidak Ditemukan" };

  return {
    title: service.name,
    description: `${service.excerpt} Harga mulai ${service.priceLabel} di Mutiara Refleksi, Pusat Grosir Cililitan, Jakarta Timur. Reservasi online mudah & cepat.`,
    alternates: { canonical: `/layanan/${service.slug}` },
    openGraph: {
      type: "website",
      url: `${site.url}/layanan/${service.slug}`,
      title: `${service.name} — ${site.name} Jakarta Timur`,
      description: service.excerpt,
      images: [
        {
          url: service.image,
          width: 1344,
          height: 768,
          alt: `${service.name} di ${site.name} Jakarta Timur`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} — ${site.name}`,
      description: service.excerpt,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);
  const waHref = waLink(
    waServiceMessage(service.name, service.durationOptions[0]?.duration)
  );

  // FAQ JSON-LD khusus layanan ini
  const serviceFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={serviceJsonLd(service.slug)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Layanan", url: `${site.url}/layanan` },
          { name: service.name, url: `${site.url}/layanan/${service.slug}` },
        ])}
      />
      <JsonLd data={serviceFaqJsonLd} />

      <PageHero
        title={service.name}
        subtitle={service.tagline}
        crumbs={[
          { name: "Layanan", url: "/layanan" },
          { name: service.name },
        ]}
        image={service.image}
        badge={`Mulai ${service.priceLabel}`}
      />

      {/* Ikhtisar + Kartu Booking */}
      <section className="py-20 sm:py-24 bg-[#fdfbf7]" aria-label={`Ikhtisar ${service.name}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-3 lg:gap-10 items-start">
          {/* Kolom kiri: deskripsi, manfaat, cocok untuk */}
          <article className="lg:col-span-2">
            <SectionHeading
              align="left"
              eyebrow="Ikhtisar Layanan"
              title={`Apa Itu ${service.name}?`}
            />
            <div className="mt-8 space-y-5">
              {service.description.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className="text-base sm:text-lg leading-relaxed text-emerald-950/75">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            {/* Manfaat */}
            <Reveal className="mt-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-emerald-950">
                Manfaat {service.shortName}
              </h2>
              <ul className="mt-6 grid gap-3.5 sm:grid-cols-2">
                {service.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 rounded-2xl bg-white pearl-shadow p-4"
                  >
                    <span className="mt-0.5 flex w-6 h-6 shrink-0 items-center justify-center rounded-full bg-emerald-800/10">
                      <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-relaxed text-emerald-950/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Cocok untuk */}
            <Reveal className="mt-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-emerald-950">
                Cocok Untuk Siapa?
              </h2>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {service.forWho.map((who) => (
                  <li
                    key={who}
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-800/15 bg-emerald-800/5 px-4 py-2 text-sm font-semibold text-emerald-900"
                  >
                    <User className="w-3.5 h-3.5 text-[#c9a227]" aria-hidden="true" />
                    {who}
                  </li>
                ))}
              </ul>
            </Reveal>
          </article>

          {/* Kolom kanan: kartu booking sticky */}
          <Reveal delay={0.15} className="lg:sticky lg:top-24">
            <aside
              className="rounded-[2rem] bg-white pearl-shadow border border-[#c9a227]/25 p-6 sm:p-7"
              aria-label={`Reservasi ${service.name}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={`Suasana ${service.name} di ${site.name} Jakarta Timur`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-xs font-bold text-emerald-900">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                  Terapis Bersertifikat
                </span>
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-emerald-800/55">
                Harga mulai dari
              </p>
              <p className="mt-1 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-emerald-900">
                  {service.priceLabel}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-950/50">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  per sesi
                </span>
              </p>

              <h2 className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-emerald-800/70">
                Pilihan Durasi
              </h2>
              <DurationPriceTable options={service.durationOptions} className="mt-3" />

              <div className="mt-6 space-y-3">
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-full bg-red-600 hover:bg-red-700 text-white font-bold h-12 shadow-xl shadow-red-900/25 hover:-translate-y-0.5 transition-all"
                >
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Reservasi ${service.name} via WhatsApp`}
                  >
                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    Reservasi via WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full rounded-full border-emerald-800/25 bg-transparent text-emerald-900 hover:bg-emerald-800/5 font-bold h-12 transition-all"
                >
                  <Link href={`/booking?layanan=${service.slug}`} aria-label={`Isi form reservasi ${service.name}`}>
                    <CalendarCheck className="w-5 h-5" aria-hidden="true" />
                    Isi Form Online
                  </Link>
                </Button>
              </div>

              <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-emerald-950/55">
                <Sparkles className="mt-0.5 w-3.5 h-3.5 shrink-0 text-[#c9a227]" aria-hidden="true" />
                Bisa datang langsung tanpa reservasi, namun slot terbatas pada jam sibuk
                (17.00–20.00). {site.hours.label}.
              </p>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* Proses 4 langkah */}
      <section className="py-20 sm:py-24 bg-[#f5f0e6]" aria-label="Alur sesi terapi">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Alur Sesi"
            title={`4 Langkah Sesi ${service.shortName}`}
            description="Setiap sesi mengikuti protokol standar kami agar Anda mendapatkan hasil terapi yang konsisten, aman, dan menyenangkan."
          />
          <Stagger className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {service.process.map((step, i) => (
              <StaggerItem key={step.step} className="relative">
                <div className="relative h-full rounded-3xl bg-white pearl-shadow p-6 pt-10">
                  <span
                    className="absolute -top-6 left-6 flex w-12 h-12 items-center justify-center rounded-full bg-[#c9a227] font-display text-lg font-bold text-emerald-950 shadow-lg border-4 border-[#f5f0e6]"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-800/50">
                    Langkah {i + 1}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-emerald-950">
                    {step.step}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-emerald-950/65">
                    {step.detail}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ layanan */}
      <section className="py-20 sm:py-24 bg-[#fdfbf7]" aria-label="Pertanyaan umum layanan">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Tanya Jawab"
            title={`Pertanyaan Umum ${service.shortName}`}
            description="Hal yang paling sering ditanyakan pelanggan sebelum mencoba layanan ini."
          />
          <Reveal className="mt-12">
            <Accordion
              type="single"
              collapsible
              className="rounded-3xl bg-white pearl-shadow px-6 sm:px-8 py-3"
            >
              {service.faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`faq-${i}`} className="border-emerald-900/10">
                  <AccordionTrigger className="text-left text-base font-bold text-emerald-950 hover:text-emerald-700 hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base leading-relaxed text-emerald-950/70 pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 text-center">
            <p className="text-sm text-emerald-950/60">
              Pertanyaan lain seputar terapi?{" "}
              <Link
                href="/faq"
                className="inline-flex items-center gap-1 font-bold text-emerald-800 hover:gap-2 transition-all"
              >
                Lihat semua FAQ <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </Link>{" "}
              atau{" "}
              <Link
                href="/kontak"
                className="inline-flex items-center gap-1 font-bold text-emerald-800 hover:gap-2 transition-all"
              >
                hubungi kami <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Layanan terkait */}
      <section className="py-20 sm:py-24 bg-brand-radial" aria-label="Layanan terkait lainnya">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Jelajahi Lainnya"
            title="Layanan Lain yang Mungkin Anda Suka"
            description="Kombinasikan beberapa terapi dalam satu kunjungan untuk hasil relaksasi yang lebih menyeluruh."
          />
          <Stagger className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <StaggerItem key={s.slug} className="h-full">
                <ServiceCard service={s} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBanner
        title={`Siap Merasakan Manfaat ${service.shortName}?`}
        description="Amankan jadwal Anda hari ini — pilih durasi, tentukan waktu, dan biarkan terapis kami mengurus sisanya."
      />
    </>
  );
}
