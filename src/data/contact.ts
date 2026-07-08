import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import { FiMail } from "react-icons/fi";
import type { IconType } from "react-icons"; // Tambahkan ini

export const contacts = [
  {
    title: "Email",
    value: "hamas.moxer@gmail.com",
    icon: FiMail,
    href: "mailto:hamas.moxer@gmail.com",
  },
  {
    title: "WhatsApp",
    value: "+6282136239721",
    icon: FaWhatsapp,
    href: "https://wa.me/6282136239721",
  },
  {
    title: "LinkedIn",
    value: "Hamas Izzuddin",
    icon: FaLinkedin,
    href: "https://linkedin.com/",
  },
  {
    title: "Instagram",
    value: "@izzuddinfathi",
    icon: FaInstagram,
    href: "https://instagram.com/izzuddinfathi",
  },
  {
    title: "GitHub",
    value: "Hamasif",
    icon: FaGithub,
    href: "https://github.com/Hamasif",
  },
];

// Tambahkan interface di bawah contacts
interface HeroSocial {
  icon: IconType;
  href: string;
  label: string;
}

// Lalu ganti heroSocials dengan ini
export const heroSocials: HeroSocial[] = [
  {
    icon: FiMail,
    href: "mailto:hamas.moxer@gmail.com",
    label: "Email",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Hamasif",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/hamas-izzuddin",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/izzuddinfathi",
    label: "Instagram",
  },
];