import Link from "next/link";
import { PhoneCall, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata = {
  title: "Halaman Tidak Ditemukan",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-brand-radial px-4">
      <div className="text-center max-w-xl">
        <div className="mx-auto w-20 h-20 rounded-full bg-white pearl-shadow flex items-center justify-center">
          <SearchX className="w-10 h-10 text-emerald-800" aria-hidden="true" />
        </div>
        <p className="mt-8 font-display text-7xl font-extrabold text-gradient-brand">404</p>
        <h1 className="mt-3 font-display text-2xl font-bold text-emerald-950">
          Halaman Tidak Ditemukan
        </h1>
        <p className="mt-3 text-emerald-950/60 leading-relaxed">
          Sepertinya halaman yang Anda cari sudah dipindahkan atau tidak pernah ada.
          Tapi tenang — kesehatan Anda tetap bisa kami bantu.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="rounded-full bg-emerald-800 hover:bg-emerald-900 font-bold h-12 px-8">
            <Link href="/">Kembali ke Beranda</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full font-bold h-12 px-8 border-emerald-800/30">
            <a href={`tel:${site.phone}`}>
              <PhoneCall className="w-4 h-4" />
              {site.phoneDisplay}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
