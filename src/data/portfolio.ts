import project1 from "../assets/projects/project1.png";
import project3 from "../assets/projects/project3.png";
import project2 from "../assets/projects/project2.png";
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
};

export const portfolioItems = [
  {
    id: 1,
    category: "project",
    title: "DB Finance",
    image: project1,
    description:
      "DBFinance adalah aplikasi ERP yang digunakan untuk mencatat dan mengelola pengeluaran operasional kantor.",
    tech: ["React", "JavaScript", "Tailwind", "MySQL"],
    link: "http://66.96.229.251:20526/",
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
  },
  {
    id: 4,
    category: "certificate",
    title: "React Developer Certificate",
    image: cert1,
    description:
      "Sertifikat penyelesaian pelatihan React Developer.",
    tech: [],
    github: "",
    demo: "",
  },

  {
    id: 5,
    category: "certificate",
    title: "UI/UX Design Certificate",
    image: cert2,
    description:
      "Sertifikat pelatihan UI/UX Design dan prototyping menggunakan Figma.",
    tech: [],
    github: "",
    demo: "",
  },
];