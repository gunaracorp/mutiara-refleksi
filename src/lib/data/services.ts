// ============================================================
// MUTIARA REFLEKSI - Services Data (6 layanan utama)
// ============================================================

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  excerpt: string;
  description: string[];
  price: number;
  priceLabel: string;
  durationOptions: { duration: string; price: number }[];
  image: string;
  icon: string; // lucide icon name
  benefits: string[];
  forWho: string[];
  process: { step: string; detail: string }[];
  faqs: { q: string; a: string }[];
  featured: boolean;
}

export const services: Service[] = [
  {
    slug: "pijat-refleksi-tradisional",
    name: "Pijat Refleksi Tradisional",
    shortName: "Refleksi Tradisional",
    tagline: "Sentuhan lembut di titik refleksi kaki untuk keseimbangan tubuh secara menyeluruh",
    excerpt:
      "Terapi lembut pada titik-titik refleksi kaki yang merangsang fungsi organ vital, melancarkan sirkulasi darah, dan memulihkan energi tubuh.",
    description: [
      "Pijat refleksi tradisional adalah metode terapi alami yang telah dipraktikkan selama ribuan tahun. Di Mutiara Refleksi, terapis kami menekan titik-titik refleksi spesifik di telapak kaki yang terhubung dengan organ-organ vital tubuh Anda — mulai dari kepala, mata, bahu, lambung, hingga ginjal.",
      "Setiap sesi dimulai dengan konsultasi singkat mengenai kondisi kesehatan Anda, dilanjutkan dengan peregangan lembut, pemanasan kaki dengan handuk hangat, dan terapi tekanan bertahap di seluruh zona refleksi. Tekanan disesuaikan dengan tingkat toleransi masing-masing pelanggan.",
      "Setelah terapi, Anda akan merasakan tubuh lebih ringan, tidur lebih nyenyak, dan energi terpulihkan. Pijat refleksi tradisional juga membantu detoksifikasi alami tubuh melalui stimulasi sistem limfatik.",
    ],
    price: 75000,
    priceLabel: "Rp 75.000",
    durationOptions: [
      { duration: "60 Menit", price: 75000 },
      { duration: "90 Menit", price: 105000 },
    ],
    image: "/images/service-refleksi-kaki.jpg",
    icon: "Footprints",
    benefits: [
      "Melancarkan sirkulasi darah dan oksigen ke seluruh tubuh",
      "Merangsang fungsi organ vital secara alami",
      "Meredakan stres dan kelelahan fisik",
      "Membantu detoksifikasi racun dalam tubuh",
      "Meningkatkan kualitas tidur",
      "Memperkuat sistem imun tubuh",
    ],
    forWho: [
      "Pekerja yang aktif berjalan seharian",
      "Penderita pegal-pegal dan mata lelah",
      "Lansia yang ingin menjaga vitalitas",
      "Siapa pun yang ingin relaksasi menyeluruh",
    ],
    process: [
      { step: "Konsultasi", detail: "Terapis memahami keluhan dan kondisi kesehatan Anda." },
      { step: "Pemanasan", detail: "Kaki dibalut handuk hangat untuk melentaskan otot." },
      { step: "Terapi Zona", detail: "Penekanan bertahap pada titik-titik refleksi kaki." },
      { step: "Penutup", detail: "Pijatan penyeimbang dan minuman hangat penyegar." },
    ],
    faqs: [
      {
        q: "Apakah pijat refleksi terasa sakit?",
        a: "Tekanan disesuaikan dengan toleransi Anda. Sensasi nyeri ringan pada titik tertentu menandakan adanya keluhan pada organ terkait, namun terapis kami selalu mengutamakan kenyamanan.",
      },
      {
        q: "Berapa lama satu sesi refleksi?",
        a: "Paket standar 60 menit, dan paket menyeluruh 90 menit termasuk pijat tungkai dan peregangan.",
      },
    ],
    featured: true,
  },
  {
    slug: "pijat-terapi-otot",
    name: "Pijat Terapi Otot",
    shortName: "Pijat Terapi",
    tagline: "Meluruhkan ketegangan otot, nyeri punggung, dan pegal linu dalam satu sesi",
    excerpt:
      "Pijat terapi mendalam yang menargetkan titik nyeri (trigger points) untuk meredakan nyeri punggung, leher kaku, dan otot tegang.",
    description: [
      "Pijat terapi di Mutiara Refleksi dirancang khusus untuk Anda yang mengalami nyeri otot kronis, cedera akibat aktivitas, atau ketegangan akibat postur kerja yang buruk. Terapis kami menggunakan teknik deep tissue, trigger point release, dan myofascial release.",
      "Berbeda dengan pijat relaksasi biasa, pijat terapi bekerja pada lapisan otot dalam untuk meluruhkan simpul-simpul ketegangan (knots) yang menyebabkan nyeri menjalar. Setiap pergerakan disertai teknik pernapasan yang membantu tubuh menerima tekanan dengan nyaman.",
      "Cocok untuk pekerja kantoran dengan keluhan leher kaku, pengendara sepeda motor, atlet akhir pekan, hingga ibu rumah tangga yang aktif. Banyak pelanggan kami merasakan perbaikan signifikan setelah 2–3 sesi.",
    ],
    price: 100000,
    priceLabel: "Rp 100.000",
    durationOptions: [
      { duration: "60 Menit", price: 100000 },
      { duration: "90 Menit", price: 140000 },
    ],
    image: "/images/service-terapi.jpg",
    icon: "Hand",
    benefits: [
      "Meredakan nyeri punggung, leher, dan bahu",
      "Meluruhkan simpul otot (trigger points)",
      "Meningkatkan fleksibilitas dan rentang gerak",
      "Mempercepat pemulihan cedera olahraga",
      "Memperbaiki postur tubuh",
      "Mengurangi sakit kepala tegang",
    ],
    forWho: [
      "Pekerja kantorian dengan nyeri leher & punggung",
      "Penderita pegal linu kronis",
      "Atlet dan penggemar olahraga",
      "Pengendara sepeda motor harian",
    ],
    process: [
      { step: "Asesmen", detail: "Pemetaan area nyeri dan postur tubuh Anda." },
      { step: "Deep Tissue", detail: "Pijatan kuat berlapis pada otot yang tegang." },
      { step: "Trigger Point", detail: "Pelunakan simpul nyeri dengan tekanan terarah." },
      { step: "Stretching", detail: "Peregangan assisted untuk hasil tahan lama." },
    ],
    faqs: [
      {
        q: "Apakah pijat terapi aman untuk hernia?",
        a: "Untuk kondisi medis tertentu seperti hernia, kami sarankan konsultasi dokter terlebih dahulu. Terapis kami akan menyesuaikan intensitas dan area pijat.",
      },
      {
        q: "Berapa kali perlu terapi sampai merasakan hasil?",
        a: "Sebagian besar pelanggan merasakan perbaikan setelah sesi pertama, namun untuk nyeri kronis kami merekomendasikan 3–5 sesi rutin.",
      },
    ],
    featured: true,
  },
  {
    slug: "refleksi-wajah-kepala",
    name: "Refleksi Wajah & Kepala",
    shortName: "Refleksi Wajah",
    tagline: "Perawatan istimewa untuk wajah, kepala, dan mata yang lelah",
    excerpt:
      "Terapi titik refleksi wajah, kepala, dan mata untuk meredakan sakit kepala, mata lelah dari layar gawai, serta mencerahkan wajah.",
    description: [
      "Refleksi wajah & kepala adalah perawatan favorit untuk Anda yang pekerjaan atau kebiasaan sehari-hari menatap layar berjam-jam. Terapi ini berfokus pada titik-titik refleksi di wajah, pelipis, kulit kepala, dan sekitar mata.",
      "Tekanan lembut pada titik-titik tertentu membantu meredakan sakit kepala migrain, mengurangi pembengkakan di sekitar mata, melancarkan peredaran darah wajah sehingga kulit tampak lebih segar, serta memberikan rasa tenang yang mendalam hingga terlelap.",
      "Sesi ini juga termasuk pijat leher dan bahu ringan, karena sebagian besar sakit kepala tegang berawal dari ketegangan otot leher. Ideal dikombinasikan dengan refleksi kaki untuk relaksasi menyeluruh.",
    ],
    price: 65000,
    priceLabel: "Rp 65.000",
    durationOptions: [
      { duration: "45 Menit", price: 65000 },
      { duration: "60 Menit", price: 85000 },
    ],
    image: "/images/service-wajah.jpg",
    icon: "Sparkles",
    benefits: [
      "Meredakan sakit kepala dan migrain",
      "Mengatasi mata lelah akibat layar",
      "Melancarkan sirkulasi darah wajah",
      "Kulit wajah tampak lebih segar",
      "Meredakan kelopak mata yang berat",
      "Membantu tidur lebih cepat",
    ],
    forWho: [
      "Pekerja depan komputer & pengguna gawai intens",
      "Penderita migrain berulang",
      "Siswa/mahasiswa saat ujian",
      "Anda yang ingin wajah segar alami",
    ],
    process: [
      { step: "Pembersihan", detail: "Wajah dibersihkan lembut dengan handuk hangat." },
      { step: "Titik Wajah", detail: "Penekanan lembut pada titik refleksi wajah." },
      { step: "Kulit Kepala", detail: "Pijat kepala dan pelipis untuk melonggarkan tegangan." },
      { step: "Leher & Mata", detail: "Perawatan mata lelah dan leher penutup." },
    ],
    faqs: [
      {
        q: "Apakah cocok untuk kulit sensitif?",
        a: "Ya, terapis menggunakan tekanan ringan tanpa bahan kimia. Informasikan jika Anda memiliki alergi atau kondisi kulit tertentu.",
      },
      {
        q: "Apakah bisa dikombinasikan dengan layanan lain?",
        a: "Sangat disarankan! Kombinasi paling populer adalah refleksi wajah + refleksi kaki 60 menit.",
      },
    ],
    featured: false,
  },
  {
    slug: "pijat-aromaterapi",
    name: "Pijat Aromaterapi",
    shortName: "Aromaterapi",
    tagline: "Perjalanan aroma eksotis yang menenangkan jiwa dan menyegarkan raga",
    excerpt:
      "Pijat relaksasi dengan minyak esensial pilihan — lavender, frangipani, atau peppermint — untuk ketenangan pikiran maksimal.",
    description: [
      "Pijat aromaterapi menggabungkan seni pijat lembut dengan kekuatan terapeutik minyak esensial alami. Pilih aroma favorit Anda: lavender untuk menenangkan, peppermint untuk menyegarkan, atau frangipani khas Indonesia untuk ketenangan ekstrem.",
      "Terapis kami menggunakan teknik effleurage (usapan panjang) dan petrissage (kneading) dengan minyak hangat yang diserap kulit. Aroma yang terhirup bekerja langsung pada sistem limbik otak — pusat emosi dan memori — sehingga stres melepas jauh lebih cepat.",
      "Kamar terapi kami dengan pencahayaan hangat dan musik lembut melengkapi pengalaman. Banyak pelanggan menyebut sesi ini sebagai 'liburan mini di tengah kesibukan Jakarta'. Pulanglah dengan pikiran jernih dan tubuh enteng.",
    ],
    price: 150000,
    priceLabel: "Rp 150.000",
    durationOptions: [
      { duration: "90 Menit", price: 150000 },
      { duration: "120 Menit", price: 200000 },
    ],
    image: "/images/service-aromaterapi.jpg",
    icon: "Flower2",
    benefits: [
      "Meredakan stres dan kecemasan mendalam",
      "Meningkatkan suasana hati",
      "Melembutkan dan menutrisi kulit",
      "Meningkatkan kualitas tidur",
      "Meredakan sakit kepala ringan",
      "Menguatkan imunitas melalui relaksasi",
    ],
    forWho: [
      "Profesional dengan stres tinggi",
      "Penderita insomnia ringan",
      "Pasangan yang ingin momen relaksasi bersama",
      "Hadiah istimewa untuk orang tercinta",
    ],
    process: [
      { step: "Pilih Aroma", detail: "Konsultasi kondisi & pilih minyak esensial." },
      { step: "Sesi Mulai", detail: "Usapan panjang lembut dengan minyak hangat." },
      { step: "Relaksasi", detail: "Teknik kneading menyeluruh ke seluruh tubuh." },
      { step: "Tenang", detail: "Penutup tenang dengan teh herbal hangat." },
    ],
    faqs: [
      {
        q: "Apakah aman untuk ibu hamil?",
        a: "Beberapa minyak esensial tidak dianjurkan untuk ibu hamil. Kami memiliki protokol khusus — silakan pilih layanan Pijat Ibu Hamil kami.",
      },
      {
        q: "Boleh memilih minyak sendiri?",
        a: "Tentu! Kami menyediakan lavender, peppermint, frangipani, dan tea tree. Terapis akan membantu memilih sesuai kebutuhan Anda.",
      },
    ],
    featured: true,
  },
  {
    slug: "pijat-ibu-hamil",
    name: "Pijat Ibu Hamil",
    shortName: "Pijat Ibu Hamil",
    tagline: "Sentuhan lembut dan aman untuk menemani kehamilan Anda",
    excerpt:
      "Pijat prenatal khusus oleh terapis terlatih — meredakan nyeri punggung, bengkak kaki, dan membantu ibu hamil tidur lebih nyenyak.",
    description: [
      "Kehamilan adalah perjalanan indah yang sering datang dengan nyeri punggung, kaki bengkak, dan sulit tidur. Pijat ibu hamil di Mutiara Refleksi dirancang khusus untuk kenyamanan dan keamanan ibu serta janin.",
      "Terapis kami terlatih dalam teknik prenatal: posisi menyamping dengan bantal penyangga khusus, menghindari titik-titik kontraindikasi, serta tekanan lembut yang meningkatkan sirkulasi tanpa merangsang kontraksi.",
      "Layanan ini aman untuk ibu hamil trimester 2 dan 3 (setelah usia kehamilan 12 minggu). Kami sangat menyarankan ibu hamil dengan kondisi kehamilan berisiko untuk berkonsultasi dengan dokter kandungan terlebih dahulu.",
    ],
    price: 120000,
    priceLabel: "Rp 120.000",
    durationOptions: [{ duration: "60 Menit", price: 120000 }],
    image: "/images/service-ibu-hamil.jpg",
    icon: "Baby",
    benefits: [
      "Meredakan nyeri punggung dan pinggul",
      "Mengurangi bengkak pada kaki dan pergelangan",
      "Membantu tidur lebih nyenyak",
      "Meredakan kram kaki",
      "Menurunkan tingkat hormon stres",
      "Meningkatkan sirkulasi untuk ibu & janin",
    ],
    forWho: [
      "Ibu hamil trimester 2 & 3",
      "Ibu dengan keluh punggung & kaki bengkak",
      "Ibu hamil yang sulit tidur",
      "Hadiah hangat untuk istri tersayang",
    ],
    process: [
      { step: "Konsultasi", detail: "Cek usia kehamilan & kondisi kesehatan." },
      { step: "Posisi Aman", detail: "Posisi menyamping dengan bantal penyangga." },
      { step: "Terapi Lembut", detail: "Pijatan lembut punggung, kaki & tangan." },
      { step: "Penutup", detail: "Teh hangat dan rekomendasi rumah." },
    ],
    faqs: [
      {
        q: "Trimester berapa yang aman dipijat?",
        a: "Kami menerima ibu hamil mulai trimester 2 (usia kehamilan 12 minggu ke atas) hingga menjelang persalinan.",
      },
      {
        q: "Apakah pijat bisa memicu kontraksi?",
        a: "Tidak. Terapis kami terlatih menghindari titik-titik kontraindikasi dan menggunakan tekanan yang aman untuk kehamilan.",
      },
    ],
    featured: false,
  },
  {
    slug: "pijat-kursi-eksekutif",
    name: "Pijat Kursi Eksekutif",
    shortName: "Kursi Eksekutif",
    tagline: "Kilatkan relaksasi 30 menit untuk pekerja yang sibuk",
    excerpt:
      "Pijat cepat di kursi ergonomis — leher, bahu, dan punggung — cocok untuk jeda istirahat kerja atau sambil menunggu belanjaan.",
    description: [
      "Pijat kursi eksekutif adalah solusi cerdas untuk Anda yang sibuk namun butuh menyegarkan tubuh. Tanpa perlu berganti pakaian, Anda cukup duduk di kursi ergonomis kami sementara terapis memfokuskan pijatan pada leher, bahu, punggung atas, tangan, dan kepala.",
      "Format 30 menit ini sangat populer di kalangan pekerja Pusat Grosir Cililitan dan pengunjung mal. Banyak pelanggan kami datang saat jam istirahat makan siang dan kembali bekerja dengan pikiran segar seperti baru bangun tidur.",
      "Meski singkat, pijatan kami tetap presisi — mengikuti protokol teknik akupresur dan trigger point ringan untuk mengurai ketegangan pada titik-titik paling sering pegal.",
    ],
    price: 45000,
    priceLabel: "Rp 45.000",
    durationOptions: [
      { duration: "30 Menit", price: 45000 },
      { duration: "45 Menit", price: 65000 },
    ],
    image: "/images/service-kursi.jpg",
    icon: "Armchair",
    benefits: [
      "Cepat, praktis, tanpa ganti pakaian",
      "Meredakan leher & bahu kaku",
      "Menyegarkan kembali fokus kerja",
      "Cocok untuk jam istirahat makan siang",
      "Harga paling terjangkau",
      "Bisa datang tanpa reservasi",
    ],
    forWho: [
      "Pekerja kios & karyawan mal",
      "Pengunjung Pusat Grosir Cililitan",
      "Profesional dengan waktu terbatas",
      "Pemula yang ingin mencoba pijat",
    ],
    process: [
      { step: "Duduk Nyaman", detail: "Bersandar di kursi ergonomis kami." },
      { step: "Leher & Bahu", detail: "Tekanan akupresur pada titik tegang." },
      { step: "Punggung & Tangan", detail: "Pelurusan punggung atas dan tangan." },
      { step: "Segar", detail: "Tepukan ringan penutup — siap kembali aktif!" },
    ],
    faqs: [
      {
        q: "Apakah perlu reservasi?",
        a: "Tidak perlu. Cukup datang langsung ke gerai kami di Pusat Grosir Cililitan Lantai 3A. Namun pada jam sibuk, reservasi telepon membantu Anda menghindari antrian.",
      },
      {
        q: "Apakah ada paket membership?",
        a: "Ada! Paket 5 sesi kursi eksekutif hanya Rp 200.000 (hemat Rp 25.000). Tanyakan di resepsionis kami.",
      },
    ],
    featured: true,
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

// Paket hemat (untuk halaman harga)
export const packages = [
  {
    name: "Paket Hemat Pagi",
    desc: "Refleksi kaki 60 menit untuk kunjungan sebelum jam 12 siang, Senin–Kamis.",
    price: 60000,
    originalPrice: 75000,
    includes: ["Refleksi kaki 60 menit", "Teh hangat", "Berlaku Senin–Kamis s.d. 12.00"],
    badge: "Hemat 20%",
  },
  {
    name: "Paket Pasangan",
    desc: "Momen romantis relaksasi bersama pasangan — dua kursi berdampingan.",
    price: 280000,
    originalPrice: 300000,
    includes: ["2x Aromaterapi 90 menit", "Minuman hangat", "Handuk & kimono bersih"],
    badge: "Favorit Pasangan",
  },
  {
    name: "Paket Keluarga 4 Orang",
    desc: "Libur akhir pekan bersama keluarga? Nikmati refleksi seru untuk 4 orang.",
    price: 400000,
    originalPrice: 480000,
    includes: ["4x Refleksi 60 menit", "Bebas pilih jadwal", "Berlaku Sabtu–Minggu"],
    badge: "Hemat 17%",
  },
  {
    name: "Membership 10 Sesi",
    desc: "Paling populer untuk langganan — berlaku 6 bulan, bisa dipakai siapa pun di keluarga.",
    price: 675000,
    originalPrice: 750000,
    includes: ["10x Refleksi 60 menit", "Berlaku 6 bulan", "Gratis 1x refleksi wajah"],
    badge: "Best Value",
  },
  {
    name: "Paket Korporat",
    desc: "Wellness program khusus perusahaan — terapis datang ke kantor Anda (min. 10 orang).",
    price: 40000,
    originalPrice: 45000,
    includes: ["Kursi eksekutif per orang", "Terapis datang ke lokasi", "Invoice resmi perusahaan"],
    badge: "On-Site",
  },
  {
    name: "Paket Wisatawan",
    desc: "Segarkan kaki setelah berkeliling Jakarta — kombinasi refleksi + wajah.",
    price: 125000,
    originalPrice: 140000,
    includes: ["Refleksi kaki 45 menit", "Refleksi wajah & mata 30 menit", "Minuman segar"],
    badge: "Kombo",
  },
] as const;

export const formatRupiah = (n: number) =>
  "Rp " + n.toLocaleString("id-ID", { maximumFractionDigits: 0 });
