import project1 from "../assets/projects/project1.png";
import project3 from "../assets/projects/project3.png";
import project2 from "../assets/projects/project2.png";
import project4 from "../assets/projects/project4.png";
import project11 from "../assets/projects/project11.png";
import project22 from "../assets/projects/project22.png";
import project33 from "../assets/projects/project33.png";
import cert1 from "../assets/certificates/cert1.png";
import cert2 from "../assets/certificates/cert2.png";

export type PortfolioItem = {
  id: number;
  title: string;
  category: "project" | "certificate";
  image: string;
  description: string;
  tech: string[];
  link?: string;
  /* ==== TEMPLATE DETAIL MODAL (ganti dengan punyamu) ==== */
  overview?: string;   // deskripsi panjang yang tampil di modal
  gallery?: string[];  // foto-foto screenshot project (ganti dengan fotomu, import dulu di atas)
  features?: string[]; // daftar fitur project
  role?: string;       // peranmu dalam project
  year?: string;       // tahun pengerjaan
  github?: string;     // link repository (opsional, kosongkan jika tidak ada)
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: "project",
    title: "DB Finance",
    image: project1,
    description:
      "DBFinance adalah aplikasi ERP yang digunakan untuk mencatat dan mengelola pengeluaran operasional kantor.",
    tech: ["React", "JavaScript", "Tailwind", "MySQL"],
    link: "http://66.96.229.251:20526/",
    overview:
      "DBFinance adalah aplikasi ERP internal yang membantu perusahaan mencatat, memantau, dan mengelola seluruh pengeluaran operasional kantor dalam satu dashboard terpusat — mulai dari input transaksi, persetujuan (approval), hingga pelaporan bulanan.",
    gallery: [project1, project11],
    features: [
      "Dashboard ringkasan pengeluaran real-time",
      "Input & approval pengeluaran bertingkat",
      "Rekap dan export laporan (Excel / PDF)",
      "Manajemen user, role, dan hak akses",
    ],
    role: "Full-Stack Developer",
    year: "2024",
  },
  {
    id: 2,
    category: "project",
    title: "Data Bumi Profil",
    image: project2,
    description:
      "e-BPHTB adalah website untuk mengelola layanan pembayaran pajak secara online.",
    tech: ["Laravel", "Tailwind", "Oracle"],
    link: "https://databumi.id/",
    overview:
      "Data Bumi Profil adalah website company profile yang menampilkan layanan, portofolio, dan informasi perusahaan secara profesional, dilengkapi CMS agar konten mudah diperbarui tanpa menyentuh kode.",
    gallery: [project2, project22],
    features: [
      "Company profile & halaman layanan",
      "CMS untuk mengelola konten website",
      "Form kontak dan inquiry terintegrasi",
      "Optimasi SEO dan kecepatan loading",
    ],
    role: "Full-Stack Developer",
    year: "2024",
  },
  {
    id: 3,
    category: "project",
    title: "E-BPHTB Kota Batam",
    image: project3,
    description:
      "e-BPHTB adalah website untuk mengelola layanan pembayaran pajak secara online.",
    tech: ["Laravel", "Tailwind", "Oracle"],
    link: "https://ebphtb.batam.go.id/",
    overview:
      "E-BPHTB Kota Batam adalah sistem layanan pembayaran pajak perolehan hak atas tanah dan bangunan secara online, memudahkan wajib pajak menghitung, mendaftar, dan memverifikasi dokumen tanpa harus datang ke kantor.",
    gallery: [project3, project33],
    features: [
      "Kalkulator BPHTB online",
      "Pendaftaran & unggah dokumen pajak",
      "Verifikasi dan validasi dokumen",
      "Dashboard monitoring untuk petugas",
    ],
    role: "Full-Stack Developer",
    year: "2023",
  },
  {
    id: 4,
    category: "certificate",
    title: "React Developer Certificate",
    image: cert1,
    description:
      "Sertifikat penyelesaian pelatihan React Developer.",
    tech: [],
  },
  {
    id: 5,
    category: "certificate",
    title: "UI/UX Design Certificate",
    image: cert2,
    description:
      "Sertifikat pelatihan UI/UX Design dan prototyping menggunakan Figma.",
    tech: [],
  },
  {
    id: 6,
    category: "project",
    title: "ICMA SURE",
    image: project4,
    description:
      "Konferensi Internasional The 8th ICMA-SURE (International Conference on Multidisciplinary Approaches for Sustainable Rural Development) yang diselenggarakan oleh LPPM Universitas Jenderal Soedirman (Unsoed)",
    tech: ["Laravel", "Tailwind", "Oracle"],
    link: "https://icma8.lppm.unsoed.ac.id/about-the-8th",
    overview:
      "Website resmi The 8th ICMA-SURE, konferensi internasional yang diselenggarakan oleh LPPM Universitas Jenderal Soedirman (Unsoed). Website menangani publikasi informasi konferensi hingga pengelolaan partisipasi peserta.",
    gallery: [project4],
    features: [
      "Informasi agenda, pembicara, dan topik",
      "Registrasi dan submit abstrak online",
      "Manajemen review abstrak",
      "Publikasi prosiding dan dokumentasi",
    ],
    role: "Web Developer",
    year: "2023",
  },
];
