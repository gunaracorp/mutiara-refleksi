// ============================================================
// MUTIARA REFLEKSI - Testimonials & FAQ Data
// ============================================================

export interface Testimonial {
  name: string;
  initials: string;
  rating: number;
  date: string;
  service: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ibu Ratna Sari",
    initials: "RS",
    rating: 5,
    date: "Januari 2025",
    service: "Pijat Refleksi Tradisional",
    text: "Sudah langganan hampir 2 tahun. Terapisnya paham banget titik yang pegal. Sakit kepala saya yang rutin sekarang jarang kambuh. Tempatnya bersih, terapisnya ramah, harganya juga masuk akal.",
  },
  {
    name: "Pak Budi Santoso",
    initials: "BS",
    rating: 5,
    date: "Februari 2025",
    service: "Pijat Terapi Otot",
    text: "Sebagai supir aktivitas di jalan terus, punggung saya sering pegal luar biasa. Setelah 3 sesi pijat terapi di Mutiara Refleksi, badan saya jauh lebih ringan. Recommended banget!",
  },
  {
    name: "Mbak Dinda Pratiwi",
    initials: "DP",
    rating: 5,
    date: "Februari 2025",
    service: "Pijat Ibu Hamil",
    text: "Hamil 7 bulan dan punggung sering sakit sekali. Terapisnya sangat hati-hati dan tahu posisi yang aman untuk ibu hamil. Tidur saya jauh lebih nyenyak setelah sesi. Terima kasih Mutiara Refleksi!",
  },
  {
    name: "Pak Andi Wijaya",
    initials: "AW",
    rating: 5,
    date: "Maret 2025",
    service: "Pijat Kursi Eksekutif",
    text: "Karyawan PGC, jadi sering mampir saat jam istirahat. 30 menit kursi eksekutif bikin badan segar lagi untuk sisa jam kerja. Harga 45rb sangat worth it!",
  },
  {
    name: "Mbak Farah Lestari",
    initials: "FL",
    rating: 5,
    date: "Maret 2025",
    service: "Pijat Aromaterapi",
    text: "Aromaterapinya juara! Suasana kamarnya tenang, minyak esensialnya enak, dan saya sampai terlelap. Ini benar-benar liburan mini di tengah kesibukan Jakarta. Pasti balik lagi!",
  },
  {
    name: "Pak Hendra Gunawan",
    initials: "HG",
    rating: 4,
    date: "April 2025",
    service: "Pijat Refleksi Tradisional",
    text: "Tempatnya strategis di PGC lantai 3, mudah dijangkau. Refleksinya mantap, terapisnya tahu titik-titik yang bermasalah di kaki saya. Sedikit antri saat akhir pekan, tapi sepadan dengan hasilnya.",
  },
  {
    name: "Mbak Siti Nurhaliza",
    initials: "SN",
    rating: 5,
    date: "April 2025",
    service: "Refleksi Wajah & Kepala",
    text: "Kerja depan laptop 9 jam sehari membuat mata saya berat sekali. Refleksi wajah dan kepala di sini seperti sulap — sakit kepala saya hilang dan wajah terlihat lebih segar.",
  },
  {
    name: "Pak Joko Susilo",
    initials: "JS",
    rating: 5,
    date: "Mei 2025",
    service: "Paket Membership",
    text: "Ambil membership 10 sesi untuk keluarga. Hemat banget dan semuanya senang. Anak saya yang remaja juga rutin refleksi setelah futsal. Pelayanan konsisten bagus dari dulu.",
  },
  {
    name: "Mbak Maya Anggraini",
    initials: "MA",
    rating: 5,
    date: "Mei 2025",
    service: "Pijat Refleksi Tradisional",
    text: "Awalnya ragu karena takut sakit saat direfleksi. Ternyata terapisnya menyesuaikan tekanan dengan kenyamanan saya. Sekarang jadi rutin tiap dua minggu sekali. Badan terasa ringan!",
  },
  {
    name: "Pak Rudi Hartono",
    initials: "RH",
    rating: 5,
    date: "Juni 2025",
    service: "Pijat Terapi Otot",
    text: "Cedera ringan dari main bulu tangkis, lutut dan paha masih pegal setelah dua minggu. Setelah pijat terapi + stretching di sini, gerakan saya kembali normal. Terapisnya benar-benar paham anatomi.",
  },
  {
    name: "Ibu Lilis Suryani",
    initials: "LS",
    rating: 5,
    date: "Juni 2025",
    service: "Pijat Refleksi Tradisional",
    text: "Sudah 68 tahun, kaki sering terasa berat dan kesemutan. Refleksi rutin di Mutiara Refleksi membantu sekali. Terapisnya sabar dan hati-hati dengan usia saya. Tempat yang layak direkomendasikan.",
  },
  {
    name: "Mbak Tiara Putri",
    initials: "TP",
    rating: 5,
    date: "Juli 2025",
    service: "Pijat Aromaterapi",
    text: "Dikadoin voucher aromaterapi sama suami, dan ini pengalaman terbaik! Kamar terapinya nyaman, aromanya bikin rileks maksimal. Cocok banget buat hadiah orang tersayang.",
  },
];

export interface FaqItem {
  q: string;
  a: string;
  category: string;
}

export const faqs: FaqItem[] = [
  {
    category: "Umum",
    q: "Di mana lokasi Mutiara Refleksi?",
    a: "Kami berada di Pusat Grosir Cililitan, Lantai 3A Zona Hijau No.99, Jl. Dewi Sartika RT 001 RW 013, Kramat Jati, Jakarta Timur 13640. Lokasi strategis dan mudah dijangkau kendaraan pribadi maupun transportasi umum.",
  },
  {
    category: "Umum",
    q: "Jam operasional Mutiara Refleksi?",
    a: "Kami buka setiap hari (Senin–Minggu) pukul 09.00 – 21.00 WIB. Reservasi terakhir kami sarankan pukul 20.00 agar sesi Anda tidak terburu-buru.",
  },
  {
    category: "Umum",
    q: "Apakah perlu reservasi sebelum datang?",
    a: "Anda bisa datang langsung tanpa reservasi, namun pada jam sibuk (malam hari, akhir pekan) kami sarankan reservasi via WhatsApp 0851-6267-4977 agar tidak perlu menunggu antrian.",
  },
  {
    category: "Layanan",
    q: "Berapa harga pijat refleksi di Mutiara Refleksi?",
    a: "Harga kami transparan: Refleksi Tradisional mulai Rp 75.000 (60 menit), Pijat Terapi Rp 100.000, Refleksi Wajah & Kepala Rp 65.000, Aromaterapi Rp 150.000 (90 menit), Pijat Ibu Hamil Rp 120.000, dan Kursi Eksekutif Rp 45.000 (30 menit). Tersedia juga paket hemat & membership.",
  },
  {
    category: "Layanan",
    q: "Layanan apa saja yang tersedia?",
    a: "Kami menyediakan: Pijat Refleksi Tradisional (kaki), Pijat Terapi Otot, Refleksi Wajah & Kepala, Pijat Aromaterapi, Pijat Ibu Hamil, dan Pijat Kursi Eksekutif. Lihat halaman Layanan untuk detail lengkap masing-masing.",
  },
  {
    category: "Layanan",
    q: "Apakah pijat refleksi terasa sakit?",
    a: "Tekanan disesuaikan dengan toleransi setiap pelanggan. Sensasi nyeri ringan pada titik tertentu normal dan menandakan area yang memerlukan perhatian. Terapis kami selalu memastikan Anda tetap nyaman selama sesi.",
  },
  {
    category: "Keamanan",
    q: "Apakah aman untuk ibu hamil?",
    a: "Ya, kami memiliki layanan Pijat Ibu Hamil khusus dengan terapis terlatih teknik prenatal. Layanan ini tersedia untuk ibu hamil trimester 2 dan 3 (usia kehamilan 12 minggu ke atas). Kondisi kehamilan berisiko disarankan konsultasi dokter terlebih dahulu.",
  },
  {
    category: "Keamanan",
    q: "Apakah ada kondisi kesehatan yang tidak boleh dipijat?",
    a: "Beberapa kondisi memerlukan kehati-hatian: demam, infeksi kulit terbuka, patah tulang baru, trombosis, kanker aktif, dan trimester pertama kehamilan. Selalu informasikan kondisi kesehatan Anda saat konsultasi awal — terapis kami akan memberikan rekomendasi terbaik.",
  },
  {
    category: "Keamanan",
    q: "Apakah perlengkapan dan tempatnya higienis?",
    a: "Kebersihan adalah prioritas kami. Handuk, sarung bantal, dan kimono dicuci dan diganti untuk setiap pelanggan. Kursi dan alat terapi dibersihkan dengan disinfektan setelah setiap sesi.",
  },
  {
    category: "Pembayaran",
    q: "Metode pembayaran apa saja yang diterima?",
    a: "Kami menerima pembayaran tunai, QRIS, transfer bank, dan kartu debit. Semua harga sudah final tanpa biaya tersembunyi.",
  },
  {
    category: "Pembayaran",
    q: "Apakah ada paket atau membership?",
    a: "Ada! Tersedia Paket Hemat Pagi (Rp 60.000), Paket Pasangan, Paket Keluarga 4 Orang, Membership 10 Sesi (hemat Rp 75.000 + gratis refleksi wajah), dan Paket Korporat on-site untuk perusahaan. Lihat halaman Harga untuk detail.",
  },
  {
    category: "Layanan",
    q: "Apakah bisa dipesan untuk acara atau ke kantor (on-site)?",
    a: "Ya, kami menyediakan Paket Korporat — terapis kami datang ke kantor atau acara Anda (minimal 10 orang). Cocok untuk wellness program karyawan, seminar, atau bazar kesehatan. Hubungi kami untuk penawaran.",
  },
  {
    category: "Layanan",
    q: "Berapa kali sebaiknya refleksi per bulan?",
    a: "Untuk pemeliharaan kesehatan umum, 2–4 kali per bulan ideal. Untuk keluhan tertentu (insomnia, nyeri kronis), terapis kami akan merekomendasikan jadwal yang lebih intensif saat konsultasi.",
  },
  {
    category: "Umum",
    q: "Apakah ada parkir di lokasi?",
    a: "Ya, Pusat Grosir Cililitan memiliki area parkir luas untuk motor dan mobil. Kami juga mudah dijangkau TransJakarta dan KRL (turun di stasiun Cawang, lanjut ojek online ±10 menit).",
  },
];

export const galleryItems = [
  { src: "/images/hero.jpg", alt: "Terapi pijat refleksi kaki profesional di Mutiara Refleksi Jakarta Timur", title: "Terapi Refleksi Premium", tag: "Layanan" },
  { src: "/branding/gerai-1.jpg", alt: "Suasana gerai Mutiara Refleksi dengan pelanggan yang menikmati terapi", title: "Kesibukan Gerai Kami", tag: "Gerai" },
  { src: "/images/about-interior.jpg", alt: "Interior modern pusat pijat refleksi Mutiara Refleksi", title: "Interior Nyaman & Bersih", tag: "Fasilitas" },
  { src: "/images/service-refleksi-kaki.jpg", alt: "Detail teknik pijat refleksi telapak kaki tradisional", title: "Teknik Refleksi Tradisional", tag: "Layanan" },
  { src: "/branding/gerai-2.jpg", alt: "Kursi pijat ergonomis Mutiara Refleksi dengan terapis profesional", title: "Kursi Terapi Ergonomis", tag: "Fasilitas" },
  { src: "/images/service-aromaterapi.jpg", alt: "Perawatan pijat aromaterapi dengan minyak esensial pilihan", title: "Aromaterapi Eksotis", tag: "Layanan" },
  { src: "/images/service-terapi.jpg", alt: "Pijat terapi otot untuk meredakan nyeri punggung dan bahu", title: "Pijat Terapi Otot", tag: "Layanan" },
  { src: "/branding/gerai-3.jpg", alt: "Pelanggan puas menikmati sesi refleksi di Mutiara Refleksi", title: "Pelanggan Puas", tag: "Pelanggan" },
  { src: "/images/tim.jpg", alt: "Tim terapis profesional Mutiara Refleksi Jakarta Timur", title: "Tim Terapis Kami", tag: "Tim" },
  { src: "/images/service-wajah.jpg", alt: "Terapi refleksi wajah dan kepala untuk meredakan mata lelah", title: "Refleksi Wajah & Kepala", tag: "Layanan" },
  { src: "/branding/logo-master.jpg", alt: "Logo resmi Mutiara Refleksi - Mengutamakan Kesehatan Anda", title: "Identitas Brand Kami", tag: "Brand" },
  { src: "/images/service-ibu-hamil.jpg", alt: "Pijat prenatal aman untuk ibu hamil trimester 2 dan 3", title: "Pijat Ibu Hamil", tag: "Layanan" },
] as const;
