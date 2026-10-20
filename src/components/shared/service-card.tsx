"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, Footprints, Hand, Sparkles, Flower2, Baby, Armchair, Star } from "lucide-react";
import type { Service } from "@/lib/data/services";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Footprints,
  Hand,
  Sparkles,
  Flower2,
  Baby,
  Armchair,
};

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = iconMap[service.icon] ?? Sparkles;
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.12 }}
      className="group"
    >
      <Link
        href={`/layanan/${service.slug}`}
        className="block rounded-3xl bg-white overflow-hidden pearl-shadow card-hover-lift h-full"
        aria-label={`Lihat detail ${service.name}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={service.image}
            alt={`${service.name} di Mutiara Refleksi Jakarta Timur`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" aria-hidden="true" />
          <span className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-xs font-bold text-emerald-900">
            <Icon className="w-3.5 h-3.5" aria-hidden="true" />
            {service.durationOptions[0].duration}
          </span>
          {service.featured && (
            <span className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-red-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
              <Star className="w-3 h-3 fill-current" aria-hidden="true" /> Populer
            </span>
          )}
          <span className="absolute bottom-4 right-4 rounded-full bg-[#c9a227] px-4 py-1.5 text-sm font-extrabold text-emerald-950 shadow-lg">
            {service.priceLabel}
          </span>
        </div>
        <div className="p-6">
          <h3 className="font-display text-xl font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors">
            {service.name}
          </h3>
          <p className="mt-2 text-sm text-emerald-950/60 leading-relaxed line-clamp-2">{service.excerpt}</p>
          <ul className="mt-4 space-y-1.5">
            {service.benefits.slice(0, 2).map((b) => (
              <li key={b} className="flex items-start gap-2 text-xs text-emerald-950/70">
                <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 text-emerald-700" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-800 group-hover:gap-3 transition-all">
            Selengkapnya <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Sparkles;
  return <Icon className={cn(className)} />;
}
