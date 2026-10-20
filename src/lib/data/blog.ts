// ============================================================
// MUTIARA REFLEKSI - Blog Data (10 artikel SEO)
// ============================================================

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  image: string;
  keywords: string[];
  content: { heading: string; paragraphs: string[]; list?: string[] }[];
  conclusion: string;
}

export const blogCategories = ["Manfaat", "Tips Kesehatan", "Edukasi", "Panduan", "Kehamilan"];

export const blogPosts: BlogPost[] = [
  {
    slug: "manfaat-pijat-refleksi-untuk-kesehatan-tubuh",
    title: "10 Manfaat Pijat Refleksi untuk Kesehatan Tubuh yang Jarang Diketahui",
    excerpt:
      "Pijat refleksi bukan sekadar pijat kaki biasa. Kenali 10 manfaat luar biasa pijat refleksi bagi kesehatan tubuh — dari melancarkan sirkulasi darah hingga meningkatkan imunitas.",
    category: "Manfaat",
    date: "2025-01-06",
    readTime: 7,
    image: "/images/service-refleksi-kaki.jpg",
    keywords: ["manfaat pijat refleksi", "pijat refleksi untuk kesehatan", "terapi refleksi"],
    content: [
      {
        heading: "Apa Itu Pijat Refleksi?",
        paragraphs: [
          "Pijat refleksi adalah teknik terapi yang dilakukan dengan memberikan tekanan pada titik-titik tertentu di telapak kaki, tangan, atau tubuh yang dipercaya terhubung dengan organ-organ dalam. Prinsip dasarnya, setiap zona refleksi pada kaki mewakili organ tubuh tertentu — ibu jari kaki mewakili kepala dan otak, bagian tengah telapak mewakili organ perut, dan tumit mewakili panggul.",
          "Di Indonesia, pijat refleksi telah menjadi bagian dari budaya kesehatan masyarakat. Teknik ini populer karena tidak memerlukan obat-obatan, aman untuk hampir semua usia, dan memberikan efek relaksasi yang mendalam sejak sesi pertama.",
        ],
      },
      {
        heading: "1. Melancarkan Sirkulasi Darah",
        paragraphs: [
          "Tekanan terarah pada titik refleksi membantu mengaktifkan aliran darah ke jaringan yang selama ini kurang tersentuh sirkulasi optimal. Sirkulasi yang lancar berarti setiap sel tubuh mendapatkan oksigen dan nutrisi lebih baik, sekaligus limbah metabolisme lebih cepat terbuang.",
          "Penelitian menunjukkan bahwa pijat refleksi dapat meningkatkan aliran darah ke ginjal dan usus, organ penting dalam sistem detoksifikasi tubuh.",
        ],
      },
      {
        heading: "2. Mengurangi Stres dan Kecemasan",
        paragraphs: [
          "Saat titik refleksi ditekan, tubuh melepaskan endorfin — hormon bahagia alami — sekaligus menurunkan hormon stres kortisol. Inilah sebabnya banyak orang tertidur nyenyak di kursi refleksi.",
          "Satu sesi pijat refleksi 60 menit setara dengan 'reset' mental: pikiran menjadi jernih, emosi lebih stabil, dan tubuh terasa ringan kembali.",
        ],
      },
      {
        heading: "3. Meningkatkan Kualitas Tidur",
        paragraphs: ["Bagi penderita insomnia ringan, pijat refleksi membantu tubuh memasuki kondisi relaksasi parasympatik — kondisi alami tubuh untuk tidur. Teknik pijatan pada titik-titik keseimbangan membantu mengatur ritme sirkadian secara alami."],
      },
      {
        heading: "4-10: Manfaat Lainnya dalam Daftar Lengkap",
        paragraphs: ["Selain tiga manfaat utama di atas, pijat refleksi secara rutin juga memberikan manfaat berikut:"],
        list: [
          "Meredakan nyeri kepala dan migrain",
          "Membantu pencernaan lebih lancar",
          "Meredakan pegal-pegal dan nyeri sendi",
          "Meningkatkan energi dan vitalitas harian",
          "Mendukung sistem imun tubuh",
          "Membantu mengurangi bengkak pada kaki",
          "Memperbaiki suasana hati dan fokus kerja",
        ],
      },
      {
        heading: "Berapa Sering Sebaiknya Pijat Refleksi?",
        paragraphs: [
          "Untuk pemeliharaan kesehatan umum, satu hingga dua kali per minggu adalah ideal. Untuk keluhan tertentu seperti insomnia atau nyeri kronis, konsultasikan dengan terapis Anda untuk jadwal terapi yang lebih intensif.",
          "Di Mutiara Refleksi Jakarta Timur, terapis kami akan membantu menyusun jadwal terapi yang sesuai dengan kondisi dan target kesehatan Anda.",
        ],
      },
    ],
    conclusion:
      "Pijat refleksi adalah investasi kesehatan yang terjangkau dengan manfaat jangka panjang. Rasakan sendiri manfaatnya — reservasi sesi refleksi Anda di Mutiara Refleksi sekarang.",
  },
  {
    slug: "titik-titik-refleksi-pada-kaki-dan-fungsinya",
    title: "Peta Titik Refleksi pada Kaki dan Fungsinya untuk Setiap Organ",
    excerpt:
      "Telapak kaki Anda menyimpan 'peta' kesehatan seluruh tubuh. Pelajari zona-zona refleksi kaki, organ yang terwakili, dan cara membacanya.",
    category: "Edukasi",
    date: "2025-01-13",
    readTime: 8,
    image: "/images/blog-titik-refleksi.jpg",
    keywords: ["titik refleksi kaki", "peta refleksi", "zona refleksi kaki"],
    content: [
      {
        heading: "Konsep Dasar Zona Terapi",
        paragraphs: [
          "Teori refleksi membagi tubuh menjadi 10 zona vertikal, lima di setiap sisi. Setiap titik di telapak kaki sesuai dengan organ yang berada di zona yang sama. Ketika ada gangguan pada organ tertentu, titik refleksinya sering terasa nyeri atau berdebu saat ditekan.",
          "Terapis refleksi berpengalaman dapat 'membaca' kondisi tubuh pelanggan hanya dari sensitivitas titik-titik refleksi — inilah yang membuat setiap sesi refleksi terasa personal.",
        ],
      },
      {
        heading: "Zona Depan: Ibu Jari hingga Pangkal Jari",
        paragraphs: [
          "Ibu jari kaki adalah area refleksi kepala, otak, sinus, dan leher. Tekanan pada bagian ini sering membantu meredakan sakit kepala dan hidung tersumbat. Pangkal jari-jari kaki mewakili mata dan telinga.",
          "Banyak pekerja yang menatap layar seharian merasakan nyeri ringan di area ini — sinyal bahwa mata mereka kelelahan.",
        ],
      },
      {
        heading: "Zona Tengah: Bola Kaki hingga Lengkung",
        paragraphs: ["Bola kaki (pangkal telapak) mewakili dada, paru-paru, dan bahu. Lengkung kaki tengah adalah wilayah organ penting: lambung di sisi kiri kaki, hati dan kantong empedu di sisi kanan, ginjal serta pankreas di tengah."],
      },
      {
        heading: "Zona Tumit dan Pergelangan",
        paragraphs: ["Tumit mewakili organ panggul: usus besar dan kecil menempati tepi dalam telapak, sementara kandung kemih serta saluran reproduksi berada di area tumit dan pergelangan dalam."],
      },
      {
        heading: "Tanda-Tanda Tubuh Anda Butuh Refleksi",
        paragraphs: ["Perhatikan sinyal-sinyal kecil berikut dari tubuh Anda:"],
        list: [
          "Titik refleksi terasa nyeri atau benjol saat ditekan",
          "Sering pegal-pegal tanpa penyebab jelas",
          "Tubuh terasa lelah meski cukup tidur",
          "Pencernaan tidak lancar",
          "Sering sakit kepala di sore hari",
          "Tidur tidak nyenyak",
        ],
      },
      {
        heading: "Coba Sendiri atau Serahkan ke Ahlinya?",
        paragraphs: [
          "Meski Anda bisa melakukan pijatan ringan sendiri di rumah, terapi optimal memerlukan pengetahuan tekanan, durasi, dan urutan zona yang benar. Tekanan yang salah justru bisa membuat otot semakin tegang.",
          "Terapis Mutiara Refleksi terlatih membaca peta refleksi secara akurat dan menyesuaikan tekanan dengan kondisi tubuh Anda. Datang dan rasakan bedanya.",
        ],
      },
    ],
    conclusion:
      "Memahami peta refleksi kaki adalah langkah pertama mengenal tubuh Anda lebih dalam. Serahkan pembacaan detailnya kepada terapis profesional kami — reservasi sekarang.",
  },
  {
    slug: "cara-meredakan-stres-dengan-pijat-refleksi",
    title: "Cara Meredakan Stres dengan Pijat Refleksi: Panduan Lengkap",
    excerpt:
      "Stres menumpuk karena pekerjaan? Temukan bagaimana pijat refleksi bekerja mengurangi hormon stres, plus teknik sederhana yang bisa Anda lakukan di rumah.",
    category: "Tips Kesehatan",
    date: "2025-01-20",
    readTime: 6,
    image: "/images/blog-stres.jpg",
    keywords: ["cara meredakan stres", "pijat refleksi untuk stres", "terapi stres alami"],
    content: [
      {
        heading: "Stres: Musuh Senyap Kesehatan Modern",
        paragraphs: [
          "Stres kronis terbukti menjadi pemicu berbagai masalah kesehatan: tekanan darah tinggi, gangguan pencernaan, insomnia, hingga menurunnya imunitas. Di tengah hiruk-pikuk Jakarta, hampir semua orang mengalami tekanan mental harian yang jarang dikelola dengan benar.",
          "Kabar baiknya, Anda tidak selalu membutuhkan liburan mahal untuk memulihkan diri. Terapi sentuhan seperti pijat refleksi terbukti secara ilmiah menurunkan hormon stres dalam hitungan menit.",
        ],
      },
      {
        heading: "Bagaimana Pijat Refleksi Meredakan Stres?",
        paragraphs: [
          "Saat titik-titik refleksi ditekan dengan benar, tubuh merespons dengan tiga mekanisme: pertama, pelepasan endorfin dan serotonin sebagai penenang alami; kedua, penurunan kortisol (hormon stres); ketiga, aktivasi sistem saraf parasimpatis — mode 'istirahat dan pemulihan' tubuh.",
          "Kombinasi ini menghasilkan rasa tenang mendalam yang sulit didapat hanya dengan berlibur atau scrolling media sosial.",
        ],
      },
      {
        heading: "Titik Refleksi Anti-Stres yang Bisa Anda Coba di Rumah",
        paragraphs: ["Sebelum sesi profesional, coba tekan titik-titik berikut saat stres menyerang:"],
        list: [
          "Titik solar plexus — lengkung di bawah ibu jari kaki: tekan lembut 30 detik sambil menarik napas dalam",
          "Titik kepala — ujung ibu jari kaki: pijat memutar searah jarum jam 1 menit",
          "Titik ginjal — tengah telapak kaki: tekan perlahan untuk menyeimbangkan energi",
          "Pelipis dan titik antara alis — pijat memutar untuk kejernihan pikiran",
        ],
      },
      {
        heading: "Membangun Rutinitas Anti-Stres Mingguan",
        paragraphs: [
          "Kami merekomendasikan kombinasi: satu sesi refleksi profesional per minggu, dilengkapi pijatan mandiri 10 menit setiap malam sebelum tidur. Banyak pelanggan kami melaporkan tidur lebih nyenyak dan mood lebih stabil dalam 2 minggu pertama.",
          "Paket Hemat Pagi kami (Rp 60.000) dirancang agar rutinitas kesehatan ini tetap ramah di kantong.",
        ],
      },
    ],
    conclusion:
      "Stres tidak akan hilang sendiri — kelola sebelum mengelola Anda. Jadwalkan sesi relaksasi mingguan di Mutiara Refleksi dan rasakan perbedaannya.",
  },
  {
    slug: "pijat-refleksi-ibu-hamil-aman-atau-tidak",
    title: "Pijat Refleksi untuk Ibu Hamil: Aman atau Tidak?",
    excerpt:
      "Banyak ibu hamil ragu apakah boleh dipijat. Inilah penjelasan lengkap mengenai keamanan pijat refleksi selama kehamilan, trimester yang tepat, dan teknik yang aman.",
    category: "Kehamilan",
    date: "2025-01-27",
    readTime: 7,
    image: "/images/service-ibu-hamil.jpg",
    keywords: ["pijat ibu hamil", "pijat refleksi ibu hamil", "pijat prenatal jakarta"],
    content: [
      {
        heading: "Pertanyaan yang Sering Diajukan Ibu Hamil",
        paragraphs: [
          "“Aku hamil 5 bulan, bolehkah dipijat refleksi?” Ini salah satu pertanyaan paling sering kami terima. Jawabannya: ya, aman — dengan syarat dilakukan oleh terapis yang terlatih teknik prenatal dan pada waktu kehamilan yang tepat.",
          "Kehamilan mengubah banyak hal pada tubuh ibu: pusat gravitasi bergeser menyebabkan nyeri punggung, volume darah meningkat menyebabkan kaki bengkak, dan hormon membuat tidur tidak nyaman. Pijat prenatal yang benar justru membantu mengatasi semua keluhan ini.",
        ],
      },
      {
        heading: "Kapan Waktu yang Aman?",
        paragraphs: [
          "Trimester pertama (0–12 minggu) adalah masa pengembangan organ janin yang paling krusial. Umumnya, terapis menyarankan menunggu hingga memasuki trimester kedua sebelum melakukan terapi pijat apa pun.",
          "Dari trimester kedua hingga menjelang persalinan, pijat prenatal justru sangat dianjurkan untuk kenyamanan ibu — dengan penyesuaian posisi dan intensitas.",
        ],
      },
      {
        heading: "Titik yang Harus Dihindari dan Cara Aman Kami",
        paragraphs: ["Protokol pijat ibu hamil di Mutiara Refleksi mengikuti kaidah keamanan berikut:"],
        list: [
          "Menghindari titik akupresur kontraindikasi (antara tumit dan mata kaki, area sakrum dalam)",
          "Posisi menyamping dengan bantal penyangga — tidak pernah telentang dalam waktu lama",
          "Tekanan lembut hingga sedang, tanpa deep tissue pada area sensitif",
          "Tidak menggunakan minyak esensial tertentu yang tidak dianjurkan untuk kehamilan",
          "Durasi 60 menit dengan jeda komunikasi kenyamanan",
        ],
      },
      {
        heading: "Manfaat yang Dirasakan Ibu Hamil",
        paragraphs: ["Ibu-ibu yang rutin pijat prenatal di gerai kami melaporkan manfaat berikut:"],
        list: [
          "Nyeri punggung dan pinggul berkurang signifikan",
          "Bengkak kaki membaik karena sirkulasi lebih lancar",
          "Lebih mudah tidur di trimester akhir",
          "Kram kaki malam hari berkurang",
          "Suasana hati lebih stabil",
        ],
      },
      {
        heading: "Kapan Harus Konsultasi Dokter Dulu?",
        paragraphs: [
          "Meski aman, ada kondisi yang memerlukan izin dokter kandungan terlebih dahulu: kehamilan berisiko tinggi, riwayat persalinan prematur, plasenta previa, tekanan darah tinggi, atau diabetes gestasional. Selalu informasikan kondisi kehamilan Anda kepada terapis sebelum sesi.",
        ],
      },
    ],
    conclusion:
      "Kehamilan Anda layak mendapatkan sentuhan terbaik. Layanan Pijat Ibu Hamil kami dirancang khusus untuk keamanan dan kenyamanan ibu — reservasi sekarang.",
  },
  {
    slug: "perbedaan-pijat-refleksi-dan-pijat-terapi",
    title: "Perbedaan Pijat Refleksi dan Pijat Terapi: Mana yang Cocok untuk Anda?",
    excerpt:
      "Bingung memilih pijat refleksi atau pijat terapi? Kenali perbedaan teknik, target, dan manfaat keduanya agar Anda tidak salah pilih layanan.",
    category: "Edukasi",
    date: "2025-02-03",
    readTime: 6,
    image: "/images/service-terapi.jpg",
    keywords: ["perbedaan pijat refleksi dan terapi", "pijat terapi", "jenis pijat"],
    content: [
      {
        heading: "Dua Nama yang Sering Tertukar",
        paragraphs: [
          "Banyak orang mengira pijat refleksi dan pijat terapi adalah hal yang sama. Faktanya, keduanya memiliki tujuan, teknik, dan area kerja yang berbeda. Memahami perbedaannya membantu Anda memilih terapi yang tepat sesuai keluhan.",
        ],
      },
      {
        heading: "Pijat Refleksi: Terapi dari Kaki ke Seluruh Tubuh",
        paragraphs: [
          "Pijat refleksi bekerja pada prinsip zona terapi — tekanan di telapak kaki merangsang organ-organ terkait. Targetnya bukan otot, melainkan sistem organ dan keseimbangan energi tubuh. Tekanannya terpusat pada titik-titik refleksi dengan durasi singkat per titik.",
          "Refleksi paling cocok untuk: kelelahan umum, gangguan tidur, pencernaan tidak lancar, detoksifikasi, dan pemeliharaan kesehatan rutin.",
        ],
      },
      {
        heading: "Pijat Terapi: Menyasar Otot dan Nyeri Langsung",
        paragraphs: [
          "Pijat terapi (sering disebut deep tissue atau terapeutik) bekerja langsung pada otot, fasia, dan simpul ketegangan. Terapis memetakan area nyeri, lalu bekerja berlapis melepas ketegangan dari otot permukaan hingga otot dalam.",
          "Pijat terapi paling cocok untuk: nyeri punggung kronis, leher kaku, cedera olahraga, postur kerja buruk, dan pemulihan setelah aktivitas fisik berat.",
        ],
      },
      {
        heading: "Tabel Perbandingan Cepat",
        paragraphs: ["Ringkasan perbedaan keduanya:"],
        list: [
          "Area kerja: refleksi = titik telapak kaki; terapi = otot seluruh tubuh",
          "Target: refleksi = organ dalam & energi; terapi = otot & sendi",
          "Teknik: refleksi = tekanan titik; terapi = usapan, tekanan berlapis, stretching",
          "Sensasi: refleksi = nyeri titik singkat; terapi = nyeri otot terkonsentrasi",
          "Hasil: refleksi = tubuh seimbang & segar; terapi = nyeri hilang & gerak lancar",
        ],
      },
      {
        heading: "Kombinasi Terbaik: Keduanya!",
        paragraphs: [
          "Kabar baiknya, Anda tidak harus memilih. Banyak pelanggan kami mengambil paket kombinasi: pijat terapi untuk meluruhkan otot punggung, dilanjutkan refleksi kaki untuk menyeimbangkan organ. Hasilnya? Relaksasi dua lapis yang sulit dilupakan.",
          "Tanyakan paket kombinasi ini kepada resepsionis kami saat reservasi.",
        ],
      },
    ],
    conclusion:
      "Masih bingung memilih? Terapis kami akan membantu menentukan terapi terbaik berdasarkan keluhan Anda — gratis saat konsultasi awal.",
  },
  {
    slug: "mengatasi-nyeri-punggung-pekerja-kantoran",
    title: "Mengatasi Nyeri Punggung untuk Pekerja Kantoran: 7 Langkah Efektif",
    excerpt:
      "Duduk 8 jam sehari membuat punggung Anda protes? Terapkan 7 langkah ini — termasuk teknik pijat terapi yang menargetkan akar masalah nyeri punggung pekerja kantoran.",
    category: "Tips Kesehatan",
    date: "2025-02-10",
    readTime: 7,
    image: "/images/blog-olahraga.jpg",
    keywords: ["nyeri punggung pekerja kantoran", "pegal punggung duduk lama", "pijat punggung"],
    content: [
      {
        heading: "Mengapa Punggung Anda Sering Sakit?",
        paragraphs: [
          "Tubuh manusia dirancang untuk bergerak, bukan duduk berjam-jam. Saat duduk, tekanan pada cakram tulang belakang meningkat hingga 40% dibanding berdiri. Ditambah postur membungkuk menatap layar, otot punggung atas dan leher bekerja ekstra tanpa henti — inilah resep nyeri punggung kronis.",
          "Keluhan paling umum pekerja kantoran: kaku di leher-bahu, nyeri di antara tulang belikat, dan pegal menjalar ke pinggang.",
        ],
      },
      {
        heading: "Langkah 1-3: Perbaiki Kebiasaan Duduk",
        paragraphs: ["Mulai dari akar masalah — postur dan lingkungan kerja Anda:"],
        list: [
          "Atur tinggi layar sejajar mata agar leher tidak menunduk",
          "Duduk dengan punggung menempel sandaran, kaki menapak penuh",
          "Aturan 30-30: setiap 30 menit kerja, berdiri dan bergerak 30 detik",
        ],
      },
      {
        heading: "Langkah 4-5: Gerakan Peregangan Harian",
        paragraphs: ["Lakukan peregangan sederhana ini di meja kerja: putar bahu ke belakang 10 kali, sentakkan dagu ke belakang (chin tuck) 10 kali, dan tegakkan dada sambil merentangkan lengan 5 kali setiap 2 jam."],
      },
      {
        heading: "Langkah 6: Pijat Terapi Rutin",
        paragraphs: [
          "Peregangan saja tidak cukup untuk simpul otot yang sudah terbentuk. Pijat terapi bekerja pada lapisan otot dalam — melepas trigger point di leher, bahu, dan punggung yang menjadi sumber nyeri.",
          "Di Mutiara Refleksi, pijat terapi 60 menit (Rp 100.000) telah membantu ratusan pekerja kantoran kembali bekerja tanpa nyeri. Terapis kami memahami anatomi pekerja kantoran: area leher-atas-punggung mendapat perhatian khusus.",
        ],
      },
      {
        heading: "Langkah 7: Jaga Jarak Ideal dengan Refleksi",
        paragraphs: ["Lengkapi rutinitas dengan refleksi kaki 2 kali sebulan untuk melancarkan sirkulasi — kaki adalah bagian yang paling terabaikan saat duduk seharian, padahal inilah pompa sirkulasi tubuh."],
      },
    ],
    conclusion:
      "Jangan biarkan punggung Anda menjadi alarm yang terus berbunyi. Book sesi Pijat Terapi Otot kami dan rasakan punggung ringan kembali.",
  },
  {
    slug: "manfaat-pijat-refleksi-untuk-sirkulasi-darah",
    title: "Manfaat Pijat Refleksi untuk Sirkulasi Darah dan Jantung",
    excerpt:
      "Sirkulasi darah yang lancar adalah fondasi kesehatan. Pelajari bagaimana pijat refleksi membantu memperbaiki aliran darah dan mendukung kesehatan jantung Anda.",
    category: "Manfaat",
    date: "2025-02-17",
    readTime: 6,
    image: "/images/blog-sirkulasi.jpg",
    keywords: ["pijat refleksi sirkulasi darah", "melancarkan peredaran darah", "kesehatan jantung"],
    content: [
      {
        heading: "Kaki: Pompa Kedua Tubuh Anda",
        paragraphs: [
          "Jantung memompa darah ke seluruh tubuh, namun mengembalikan darah dari kaki ke jantung mengandalkan otot tungkai — itulah mengapa kaki disebut 'pompa kedua'. Duduk atau berdiri terlalu lama membuat pompa ini lemah, darah menggenang di kaki, dan muncul keluhan: bengkak, kesemutan, hingga varises.",
          "Pijat refleksi membantu 'menyalakan' kembali pompa alami ini melalui stimulasi tekanan terarah pada tungkai dan telapak kaki.",
        ],
      },
      {
        heading: "Apa yang Terjadi pada Pembuluh Darah Saat Direfleksi?",
        paragraphs: [
          "Tekanan dan pelepasan berulang pada titik refleksi menciptakan efek pompa mekanis: pembuluh vena dangkal terkompresi lalu terisi kembali, mendorong darah balik ke jantung. Secara bersamaan, kapiler di kulit dan otot melebar sehingga jaringan mendapat oksigen lebih banyak.",
          "Efek tambahan yang dirasakan: kaki terasa hangat, warna kulit lebih cerah, dan rasa berat di kaki menghilang.",
        ],
      },
      {
        heading: "Refleksi dan Kesehatan Jantung",
        paragraphs: ["Relaksasi mendalam selama refleksi menurunkan denyut jantung istirahat dan tekanan darah pada banyak orang. Meski bukan pengganti pengobatan, terapi rutin menjadi pelengkap gaya hidup sehat jantung: bergizi seimbang, olahraga, tidur cukup, dan manajemen stres."],
      },
      {
        heading: "Tanda Sirkulasi Anda Perlu 'Diservis'",
        paragraphs: ["Waspadai tanda-tanda berikut:"],
        list: [
          "Kaki mudah bengkak di sore/malam hari",
          "Kesemutan sering tanpa penyebab",
          "Kaki terasa dingin meski cuaca hangat",
          "Sakit kaki setelah berjalan jarak pendek",
          "Warna kulit kaki keunguan atau pucat",
        ],
      },
      {
        heading: "Rutinitas Sirkulasi Sehat",
        paragraphs: [
          "Kami merekomendasikan: refleksi 1–2x per minggu untuk pemula dengan keluhan, lalu 1x per minggu atau dua minggu untuk pemeliharaan. Kombinasikan dengan jalan kaki 30 menit harian dan hidrasi cukup untuk hasil optimal.",
        ],
      },
    ],
    conclusion:
      "Berikan 'servis rutin' untuk pompa kedua tubuh Anda. Reservasi sesi refleksi sirkulasi di Mutiara Refleksi hari ini.",
  },
  {
    slug: "mengatasi-insomnia-dengan-pijat-refleksi",
    title: "Mengatasi Insomnia dengan Pijat Refleksi: Metode Alami Tanpa Obat",
    excerpt:
      "Sulit tidur setiap malam? Sebelum mengandalkan obat tidur, coba dulu pijat refleksi — metode alami yang membantu tubuh kembali menemukan ritme tidurnya.",
    category: "Tips Kesehatan",
    date: "2025-02-24",
    readTime: 6,
    image: "/images/blog-insomnia.jpg",
    keywords: ["mengatasi insomnia", "sulit tidur", "pijat refleksi untuk insomnia"],
    content: [
      {
        heading: "Mengapa Anda Tidak Bisa Tidur?",
        paragraphs: [
          "Insomnia jarang berdiri sendiri — ia adalah gejala dari sesuatu yang lain: pikiran yang tak berhenti berputar, kafein yang menumpuk, kebiasaan layar sebelum tidur, hingga ketegangan fisik yang belum terurai. Obat tidur mungkin membantu sementara, tetapi tidak mengatasi akar masalahnya.",
          "Pijat refleksi mendekati insomnia dari dua arah sekaligus: menenangkan sistem saraf dan melepas ketegangan fisik yang menghalangi tidur.",
        ],
      },
      {
        heading: "Mekanisme Refleksi untuk Tidur",
        paragraphs: [
          "Penekanan pada titik-titik refleksi tertentu merangsang pelepasan melatonin alami dan serotonin, sekaligus mengaktifkan mode parasimpatis — kondisi di mana detak jantung melambat, napas mendalam, dan tubuh bersiap tidur.",
          "Titik-titik kunci: ujung ibu jari kaki (kepala/otak), titik solar plexus di lengkung kaki (pusat emosi), dan titik ginjal di tengah telapak (keseimbangan energi).",
        ],
      },
      {
        heading: "Ritual Tidur Mandiri 10 Menit",
        paragraphs: ["Coba rutinitas ini setiap malam sebelum tidur:"],
        list: [
          "Rendam kaki dalam air hangat 5 menit (boleh tambah garam)",
          "Keringkan, lalu pijat ujung ibu jari kaki memutar 1 menit per kaki",
          "Tekan titik tengah telapak perlahan 30 detik per kaki",
          "Usap telapak kaki dari tumit ke jari 10 kali",
          "Minum air hangat, matikan layar, atur lampu redup",
        ],
      },
      {
        heading: "Kapan Harus Ke Terapis?",
        paragraphs: [
          "Jika insomnia berlangsung lebih dari 2 minggu, pijatan mandiri perlu didukung terapi profesional. Sesi refleksi 90 menit di Mutiara Refleksi dirancang untuk relaksasi maksimal — suasana terapeutik, teknik pernapasan terpandu, dan pijatan menyeluruh hingga kepala.",
          "Banyak pelanggan kami tertidur sebelum sesi selesai — bukti efektivitasnya. Jadwalkan sesi Anda di sore atau malam hari untuk efek tidur optimal.",
        ],
      },
    ],
    conclusion:
      "Tidur nyenyak adalah hak Anda. Biarkan tangan ahli kami membantu tubuh Anda mengingat cara tidur — reservasi malam hari di Mutiara Refleksi.",
  },
  {
    slug: "pijat-refleksi-untuk-pemulihan-olahraga",
    title: "Pijat Refleksi untuk Pemulihan Olahraga: Rahasia Atlet yang Terlupakan",
    excerpt:
      "Latihan keras tanpa pemulihan = kemajuan mandek. Pelajari bagaimana pijat refleksi dan terapi mempercepat recovery otot serta meningkatkan performa latihan Anda.",
    category: "Tips Kesehatan",
    date: "2025-03-03",
    readTime: 6,
    image: "/images/blog-olahraga.jpg",
    keywords: ["pemulihan olahraga", "pijat recovery", "pijat refleksi atlet"],
    content: [
      {
        heading: "Pemulihan: Bagian Latihan yang Paling Sering Dilupakan",
        paragraphs: [
          "Banyak penggemar olahraga fokus pada latihan dan nutrisi, namun mengabaikan pemulihan. Padahal, otot tidak tumbuh saat berlatih — ia tumbuh saat pulih. DOMS (nyeri otot onset tertunda) yang berhari-hari adalah tanda pemulihan Anda tidak optimal.",
          "Terapi pijat terbukti mempercepat pemulihan dengan tiga cara: melancarkan aliran darah ke otot yang lelah, mengurangi inflamasi ringan, dan meredakan ketegangan saraf pasca latihan.",
        ],
      },
      {
        heading: "Refleksi Kaki: Fondasi Recovery yang Terlupakan",
        paragraphs: [
          "Setiap langkah lari atau squat menempatkan beban berlipat pada telapak kaki — namun kaki jarang mendapat perawatan. Refleksi kaki melepas ketegangan plantar fasia, melancarkan sirkulasi tungkai, dan membantu kembali keseimbangan tubuh setelah latihan intens.",
          "Untuk pelari dan pecinta senam, refleksi rutin terbukti mengurangi keluhan nyeri tumit dan kaku kaki pagi hari.",
        ],
      },
      {
        heading: "Protokol Recovery Mingguan yang Efektif",
        paragraphs: ["Susun pemulihan Anda seperti susunan latihan:"],
        list: [
          "H-0 pasca latihan berat: pendinginan, hidrasi, peregangan ringan",
          "H+1: pijat terapi ringan untuk melancarkan sirkulasi (bukan deep tissue)",
          "H+2/3: pijat terapi mendalam untuk simpul otot yang terbentuk",
          "Setiap minggu: refleksi kaki 60 menit untuk keseimbangan dan kaki sehat",
        ],
      },
      {
        heading: "Paket Spesial Atlet Akhir Pekan",
        paragraphs: [
          "Kami memahami ritme pekerja Jakarta yang berolahraga di akhir pekan. Paket kombo Pijat Terapi + Refleksi kami dirancang untuk memulihkan tubuh Anda dalam satu kunjungan — siap kembali beraktivitas Senin pagi tanpa keluhan.",
          "Atlet dengan cedera tertentu sebaiknya menunggu fase inflamasi akut berlalu (24–72 jam) sebelum menerima pijatan mendalam.",
        ],
      },
    ],
    conclusion:
      "Latih keras, pulih lebih keras. Jadwalkan sesi recovery Anda di Mutiara Refleksi dan rasakan performa latihan yang naik konsisten.",
  },
  {
    slug: "harga-pijat-refleksi-jakarta-timur-panduan",
    title: "Harga Pijat Refleksi di Jakarta Timur: Panduan Lengkap 2025",
    excerpt:
      "Berapa harga pijat refleksi yang wajar di Jakarta Timur? Panduan lengkap kisaran harga, faktor yang memengaruhi biaya, dan cara memilih tempat terbaik sesuai budget.",
    category: "Panduan",
    date: "2025-03-10",
    readTime: 7,
    image: "/images/blog-harga.jpg",
    keywords: ["harga pijat refleksi jakarta timur", "biaya refleksi", "refleksi murah jakarta"],
    content: [
      {
        heading: "Kisaran Harga Pijat Refleksi di Jakarta Timur",
        paragraphs: [
          "Harga pijat refleksi di Jakarta Timur bervariasi tergantung lokasi, fasilitas, dan keahlian terapis. Secara umum:"],
        list: [
          "Refleksi kaki 60 menit: Rp 50.000 – Rp 150.000",
          "Pijat terapi/deep tissue 60 menit: Rp 80.000 – Rp 250.000",
          "Pijat kursi 30 menit: Rp 30.000 – Rp 70.000",
          "Aromaterapi 90 menit: Rp 120.000 – Rp 350.000",
          "Pijat ibu hamil 60 menit: Rp 100.000 – Rp 250.000",
        ],
      },
      {
        heading: "Faktor yang Memengaruhi Harga",
        paragraphs: [
          "Mengapa ada refleksi Rp 50.000 dan ada Rp 150.000? Beberapa faktor utama: lokasi (mall vs ruko), kualitas dan sertifikasi terapis, kebersihan fasilitas, durasi sebenarnya (perhatikan apakah '60 menit' benar-benar 60 menit terapi), dan kelengkapan perlengkapan higienis.",
          "Harga terlalu murah di bawah standar sering berarti kompromi di salah satu faktor tersebut.",
        ],
      },
      {
        heading: "Harga Transparan di Mutiara Refleksi",
        paragraphs: [
          "Di Mutiara Refleksi, kami percaya kesehatan berkualitas tidak harus mahal. Harga kami transparan tanpa biaya tersembunyi: refleksi tradisional 60 menit Rp 75.000, pijat terapi Rp 100.000, refleksi wajah Rp 65.000, aromaterapi 90 menit Rp 150.000, pijat ibu hamil Rp 120.000, dan kursi eksekutif 30 menit hanya Rp 45.000.",
          "Setiap sesi mencakup handuk bersih, konsultasi singkat, dan minuman hangat.",
        ],
      },
      {
        heading: "Cara Hemat Tanpa Kompromi Kualitas",
        paragraphs: ["Beberapa strategi cerdas untuk rutinitas refleksi ramah kantong:"],
        list: [
          "Paket Hemat Pagi — refleksi Rp 60.000 untuk kunjungan Senin–Kamis pagi",
          "Membership 10 sesi — hemat Rp 75.000 plus gratis refleksi wajah",
          "Paket keluarga dan pasangan — hemat hingga 17% untuk kunjungan bersama",
          "Program korporat — harga khusus bila perusahaan Anda memfasilitasi wellness karyawan",
        ],
      },
      {
        heading: "Yang Anda Bayar Bukan Sekadar Pijat",
        paragraphs: [
          "Saat memilih tempat refleksi, Anda membeli keamanan dan hasil. Terapis kami berpengalaman lebih dari 10 tahun, perlengkapan selalu higienis, dan setiap sesi diawali konsultasi kesehatan. Itulah nilai yang tidak selalu Anda dapat di tempat termurah.",
        ],
      },
    ],
    conclusion:
      "Kesehatan adalah investasi terbaik. Lihat halaman Harga kami untuk daftar lengkap dan pilih paket yang sesuai budget Anda.",
  },
];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
