import Link from "next/link";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { site, navLinks } from "@/lib/site";
import { services } from "@/lib/data/services";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-[#0c2417] text-emerald-50" role="contentinfo">
      {/* Top strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid gap-6 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-[#c9a227] shrink-0" aria-hidden="true" />
            <div>
              <p className="font-semibold text-sm">Jam Operasional</p>
              <p className="text-sm text-emerald-100/70">{site.hours.label}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-[#c9a227] shrink-0" aria-hidden="true" />
            <div>
              <p className="font-semibold text-sm">Telepon / WhatsApp</p>
              <a href={`tel:${site.phone}`} className="text-sm text-emerald-100/70 hover:text-white">
                {site.phoneDisplay} · {site.phoneAltDisplay}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-[#c9a227] shrink-0" aria-hidden="true" />
            <div>
              <p className="font-semibold text-sm">Lokasi Gerai</p>
              <p className="text-sm text-emerald-100/70">PGC Cililitan Lt. 3A, Jakarta Timur</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#c9a227]/40">
              <Image src="/branding/logo-kecil.png" alt="Logo Mutiara Refleksi" fill sizes="48px" className="object-cover" />
            </span>
            <div>
              <p className="font-display font-bold text-lg">Mutiara Refleksi</p>
              <p className="text-xs text-[#c9a227]">{site.tagline}</p>
            </div>
          </div>
          <p className="text-sm text-emerald-100/70 leading-relaxed">
            Pusat pijat refleksi & terapi profesional di Jakarta Timur sejak {site.founded}.
            Terapis bersertifikat, fasilitas higienis, dan harga transparan untuk kesehatan keluarga Anda.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-emerald-100/60">
            <ShieldCheck className="w-4 h-4 text-[#c9a227]" />
            Resmi & terdaftar — {site.legalName}
          </div>
        </div>

        <nav aria-label="Navigasi footer - halaman">
          <h3 className="font-semibold text-sm uppercase tracking-wider text-[#c9a227] mb-4">Jelajahi</h3>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-emerald-100/70 hover:text-white hover:pl-1 transition-all">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/booking" className="text-emerald-100/70 hover:text-white hover:pl-1 transition-all">
                Reservasi Online
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Navigasi footer - layanan">
          <h3 className="font-semibold text-sm uppercase tracking-wider text-[#c9a227] mb-4">Layanan Kami</h3>
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/layanan/${s.slug}`} className="text-emerald-100/70 hover:text-white hover:pl-1 transition-all">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-semibold text-sm uppercase tracking-wider text-[#c9a227] mb-4">Hubungi Kami</h3>
          <address className="not-italic space-y-3 text-sm text-emerald-100/70">
            <p className="flex gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#c9a227]" aria-hidden="true" />
              <span>{site.address.full}</span>
            </p>
            <p className="flex gap-2.5">
              <Phone className="w-4 h-4 mt-0.5 shrink-0 text-[#c9a227]" aria-hidden="true" />
              <span>
                <a href={`tel:${site.phone}`} className="hover:text-white">{site.phoneDisplay}</a>
                {" · "}
                <a href={`tel:${site.phoneAlt}`} className="hover:text-white">{site.phoneAltDisplay}</a>
              </span>
            </p>
            <p className="flex gap-2.5">
              <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[#c9a227]" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="hover:text-white break-all">{site.email}</a>
            </p>
          </address>
          <div className="mt-5 flex flex-col gap-2">
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Halo Mutiara Refleksi, saya ingin reservasi pijat refleksi.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
            >
              WhatsApp Reservasi
            </a>
            <a
              href={site.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-100/25 px-5 py-2.5 text-sm font-semibold text-emerald-50 hover:bg-white/10 transition-colors"
            >
              Petunjuk Arah (Maps)
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-100/50">
          <p>
            © {year} {site.legalName}. Seluruh hak cipta dilindungi.
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span>Pijat Refleksi Jakarta Timur</span>
            <span aria-hidden="true">·</span>
            <span>Kramat Jati · Cililitan · Dewi Sartika</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
