"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Halo Mutiara Refleksi, saya ingin reservasi pijat refleksi.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 group"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      aria-label="Reservasi via WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-red-500 animate-pulse-ring" aria-hidden="true" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white shadow-2xl shadow-red-600/40">
        <MessageCircle className="w-7 h-7" aria-hidden="true" />
      </span>
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap rounded-full bg-emerald-950 px-4 py-2 text-xs font-semibold text-white opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none">
        Reservasi via WhatsApp
      </span>
    </motion.a>
  );
}

export function CallStrip() {
  return (
    <a
      href={`tel:${site.phone}`}
      className="fixed bottom-5 left-5 z-50 sm:hidden flex items-center gap-2 rounded-full bg-emerald-800 px-4 py-3 text-sm font-semibold text-white shadow-xl"
      aria-label={`Telepon ${site.phoneDisplay}`}
    >
      <Phone className="w-4 h-4" aria-hidden="true" />
      Telepon
    </a>
  );
}
