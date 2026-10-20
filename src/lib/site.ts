// ============================================================
// MUTIARA REFLEKSI GROUP - Site Configuration
// Single source of truth for brand, contact, SEO & socials
// ============================================================

export const site = {
  name: "Mutiara Refleksi",
  legalName: "PT Mutiara Refleksi Group",
  tagline: "Mengutamakan Kesehatan Anda",
  description:
    "Mutiara Refleksi — Pusat pijat refleksi profesional di Jakarta Timur. Terapi titik refleksi tradisional, pijat terapi, aromaterapi & pijat ibu hamil oleh terapis bersertifikat. Reservasi: 0851-6267-4977.",
  url: "https://mutiararefleksi.web.id",
  ogImage: "/images/og-image.jpg",
  locale: "id_ID",
  language: "id",
  founded: "2015",
  priceRange: "Rp45.000 – Rp250.000",
  currenciesAccepted: "IDR",
  paymentAccepted: "Cash, QRIS, Transfer Bank, Debit",
  address: {
    street: "Pusat Grosir Cililitan, Lantai 3A Zona Hijau No.99, Jl. Dewi Sartika RT 001 RW 013",
    district: "Kramat Jati",
    city: "Jakarta Timur",
    province: "DKI Jakarta",
    postalCode: "13640",
    country: "ID",
    full: "Pusat Grosir Cililitan, Lantai 3A Zona Hijau No.99, Jl. Dewi Sartika RT 001 RW 013, Kramat Jati, Jakarta Timur 13640",
    lat: -6.2672,
    lng: 106.8723,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pusat+Grosir+Cililitan+Jl.+Dewi+Sartika+Kramat+Jati+Jakarta+Timur",
    mapsEmbed:
      "https://www.google.com/maps?q=Pusat+Grosir+Cililitan,+Jl.+Dewi+Sartika,+Kramat+Jati,+Jakarta+Timur&output=embed",
  },
  phone: "+6285162674977",
  phoneDisplay: "0851-6267-4977",
  phoneAlt: "+6285863628516",
  phoneAltDisplay: "0858-6362-8516",
  whatsapp: "6285162674977",
  whatsappDisplay: "0851-6267-4977",
  email: "mutiararefleksigroup@gmail.com",
  hours: {
    open: "09:00",
    close: "21:00",
    days: "Senin – Minggu",
    label: "Setiap Hari, 09.00 – 21.00 WIB",
  },
  keywords: [
    "pijat refleksi jakarta timur",
    "pijat refleksi terdekat",
    "refleksi kramat jati",
    "pijat refleksi cililitan",
    "pijat refleksi murah jakarta",
    "pijat refleksi profesional",
    "terapi refleksi jakarta",
    "spa refleksi jakarta timur",
    "pijat terapi jakarta timur",
    "pijat ibu hamil jakarta",
    "pijat aromaterapi jakarta",
    "mutiara refleksi",
    "mutiararefleksi.web.id",
    "tempat pijat refleksi jakarta timur",
    "pijat punggung jakarta timur",
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/layanan", label: "Layanan" },
  { href: "/harga", label: "Harga" },
  { href: "/galeri", label: "Galeri" },
  { href: "/blog", label: "Blog" },
  { href: "/testimoni", label: "Testimoni" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontak", label: "Kontak" },
] as const;

export const stats = [
  { value: 10, suffix: "+", label: "Tahun Pengalaman" },
  { value: 25000, suffix: "+", label: "Pelanggan Puas" },
  { value: 15, suffix: "", label: "Terapis Profesional" },
  { value: 98, suffix: "%", label: "Rating Kepuasan" },
] as const;

// ============================================================
// WhatsApp conversion helper — SEMUA CTA utama mengarah ke WA
// ============================================================

export const waNumber = site.whatsapp; // 6285162674977

/** Bangun link WhatsApp dengan pesan terisi otomatis (kontekstual) */
export function waLink(message?: string): string {
  const base = `https://wa.me/${waNumber}`;
  const text =
    message ??
    `Halo ${site.name}! Saya ingin reservasi pijat refleksi. Mohon info jadwal yang tersedia. Terima kasih.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

/** Pesan WA untuk layanan tertentu */
export function waServiceMessage(serviceName: string, duration?: string): string {
  return `Halo ${site.name}! Saya ingin reservasi *${serviceName}${duration ? ` (${duration})` : ""}*. Mohon info ketersediaan jadwalnya. Terima kasih.`;
}

/** Pesan WA untuk paket tertentu */
export function waPackageMessage(packageName: string): string {
  return `Halo ${site.name}! Saya tertarik dengan *${packageName}*. Boleh info lebih lanjut dan cara pemesanannya? Terima kasih.`;
}
