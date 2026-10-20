"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Clock, Menu, MessageCircle, Phone, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { site, navLinks, waLink } from "@/lib/site";
import { services } from "@/lib/data/services";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns when route changes (adjust state during render — React recommended pattern)
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    if (servicesOpen) setServicesOpen(false);
    if (mobileOpen) setMobileOpen(false);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-[0_4px_30px_-12px_rgba(20,83,45,0.25)] border-b border-emerald-900/10"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20"
        aria-label="Navigasi utama"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Mutiara Refleksi - Beranda">
          <span className="relative w-10 h-10 lg:w-11 lg:h-11 rounded-full overflow-hidden ring-2 ring-emerald-800/20 group-hover:ring-[#c9a227]/60 transition-all group-hover:scale-105">
            <Image
              src="/branding/logo-kecil.png"
              alt="Logo Mutiara Refleksi"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span
              className={cn(
                "font-display font-bold text-base lg:text-lg tracking-tight transition-colors",
                scrolled ? "text-emerald-950" : "text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]"
              )}
            >
              Mutiara Refleksi
            </span>
            <span
              className={cn(
                "text-[10px] lg:text-[11px] font-medium uppercase tracking-[0.14em] transition-colors",
                scrolled ? "text-emerald-700/70" : "text-emerald-50/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
              )}
            >
              Jakarta Timur
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0.5" role="menubar">
          {navLinks.map((link) =>
            link.href === "/layanan" ? (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={cn(
                    "px-3 py-2 rounded-full text-sm font-medium flex items-center gap-1 transition-colors",
                    isActive(link.href)
                      ? "text-emerald-800 bg-emerald-100/70"
                      : scrolled
                        ? "text-emerald-950/80 hover:text-emerald-800 hover:bg-emerald-50"
                        : "text-white hover:text-white hover:bg-white/15 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]"
                  )}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => setServicesOpen(true)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setServicesOpen(false);
                    if (e.key === "Enter" || e.key === " ") setServicesOpen(true);
                  }}
                  role="menuitem"
                >
                  {link.label}
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", servicesOpen && "rotate-180")} />
                </button>
                {/* Mega dropdown */}
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                    >
                      <div className="w-[560px] rounded-2xl bg-white shadow-2xl border border-emerald-900/10 p-3 grid grid-cols-2 gap-1">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/layanan/${s.slug}`}
                            className="group flex gap-3 items-start rounded-xl p-3 hover:bg-emerald-50 transition-colors"
                          >
                            <span className="mt-0.5 w-9 h-9 shrink-0 rounded-lg bg-emerald-800/10 flex items-center justify-center text-emerald-800 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                              <Sparkles className="w-4 h-4" />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold text-emerald-950">{s.name}</span>
                              <span className="block text-xs text-emerald-950/55 line-clamp-1">{s.tagline}</span>
                              <span className="mt-0.5 block text-xs font-bold text-red-700">{s.priceLabel}</span>
                            </span>
                          </Link>
                        ))}
                        <Link
                          href="/layanan"
                          className="col-span-2 mt-1 text-center text-sm font-semibold text-emerald-800 bg-emerald-100/70 rounded-xl py-2.5 hover:bg-emerald-800 hover:text-white transition-colors"
                        >
                          Lihat Semua Layanan →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={link.href} role="none">
                <Link
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-full text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "text-emerald-800 bg-emerald-100/70"
                      : scrolled
                        ? "text-emerald-950/80 hover:text-emerald-800 hover:bg-emerald-50"
                        : "text-white hover:text-white hover:bg-white/15 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]"
                  )}
                  role="menuitem"
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA + mobile trigger */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phone}`}
            className={cn(
              "hidden md:flex items-center gap-2 text-sm font-semibold mr-1 transition-colors",
              scrolled ? "text-emerald-900" : "text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]"
            )}
          >
            <Phone className="w-4 h-4" />
            {site.phoneDisplay}
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hidden sm:inline-flex rounded-full font-semibold shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 px-4 py-2 text-sm items-center gap-2",
              scrolled
                ? "bg-emerald-800 hover:bg-emerald-900 text-white"
                : "bg-red-600 hover:bg-red-700 text-white"
            )}
            aria-label="Reservasi via WhatsApp"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            Reservasi
          </a>

          {/* Mobile sheet */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className={cn(
                  "lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                  scrolled ? "text-emerald-950 bg-emerald-100/70" : "text-white bg-white/15 backdrop-blur"
                )}
                aria-label="Buka menu navigasi"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] bg-[#fdfbf7] p-0 overflow-y-auto">
              <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
              <div className="p-5">
                <div className="flex items-center gap-3 pb-5 border-b border-emerald-900/10">
                  <span className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-emerald-800/20">
                    <Image src="/branding/logo-kecil.png" alt="Logo Mutiara Refleksi" fill sizes="44px" className="object-cover" />
                  </span>
                  <div>
                    <p className="font-display font-bold text-emerald-950">Mutiara Refleksi</p>
                    <p className="text-xs text-emerald-700/70">Mengutamakan Kesehatan Anda</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                          isActive(link.href)
                            ? "bg-emerald-800 text-white"
                            : "text-emerald-950/80 hover:bg-emerald-100"
                        )}
                      >
                        {link.label}
                        {isActive(link.href) && <span className="w-2 h-2 rounded-full bg-[#c9a227]" />}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 space-y-3 rounded-2xl bg-emerald-900 text-white p-4">
                  <p className="flex items-center gap-2 text-sm font-semibold">
                    <Clock className="w-4 h-4 text-[#c9a227]" /> {site.hours.label}
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-[#c9a227]" /> {site.phoneDisplay}
                  </p>
                  <Button asChild className="w-full rounded-full bg-red-600 hover:bg-red-700 font-semibold">
                    <a
                      href={waLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Reservasi Sekarang via WhatsApp"
                    >
                      Reservasi via WhatsApp
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-full border-white/30 bg-white/10 text-white hover:bg-white hover:text-emerald-950 font-semibold"
                  >
                    <Link href="/booking">Isi Form Online</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
