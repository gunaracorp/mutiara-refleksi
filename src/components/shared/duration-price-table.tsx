// ============================================================
// MUTIARA REFLEKSI - Duration & Price Table (reusable)
// Tabel pilihan durasi & harga untuk kartu booking layanan
// ============================================================
import { Clock } from "lucide-react";
import { formatRupiah } from "@/lib/data/services";
import { cn } from "@/lib/utils";

export function DurationPriceTable({
  options,
  className,
}: {
  options: { duration: string; price: number }[];
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-emerald-900/10 bg-white", className)}>
      <table className="w-full text-sm">
        <caption className="sr-only">Daftar pilihan durasi dan harga layanan</caption>
        <thead>
          <tr className="bg-emerald-900/5 text-left">
            <th scope="col" className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-emerald-900/70">
              Durasi
            </th>
            <th scope="col" className="px-4 py-2.5 text-right text-xs font-bold uppercase tracking-wider text-emerald-900/70">
              Harga
            </th>
          </tr>
        </thead>
        <tbody>
          {options.map((option, i) => (
            <tr
              key={option.duration}
              className={cn("border-t border-emerald-900/10", i % 2 === 1 && "bg-emerald-950/[0.025]")}
            >
              <td className="px-4 py-3">
                <span className="flex items-center gap-2 font-semibold text-emerald-950">
                  <Clock className="w-4 h-4 shrink-0 text-[#c9a227]" aria-hidden="true" />
                  {option.duration}
                </span>
              </td>
              <td className="px-4 py-3 text-right font-extrabold text-emerald-900">
                {formatRupiah(option.price)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
