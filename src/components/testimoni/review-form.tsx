"use client";

// ============================================================
// MUTIARA REFLEKSI - Form Tulis Ulasan (client component)
// POST /api/testimonial → success panel + reset
// ============================================================

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, PenLine, Star } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

const RATING_TEXT: Record<number, string> = {
  1: "Kurang",
  2: "Cukup",
  3: "Baik",
  4: "Sangat Baik",
  5: "Luar Biasa!",
};

type FieldErrors = Partial<Record<"name" | "service" | "message", string>>;

const inputCls =
  "h-12 rounded-xl border-emerald-900/15 bg-white px-4 text-emerald-950 placeholder:text-emerald-950/35 focus-visible:border-emerald-800 focus-visible:ring-emerald-800/25";
const labelCls = "text-sm font-semibold text-emerald-950";
const errorCls = "mt-1.5 text-sm font-medium text-red-600";

export function ReviewForm() {
  const [form, setForm] = useState({ name: "", service: "", message: "" });
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [successName, setSuccessName] = useState<string | null>(null);

  const clearError = (key: keyof FieldErrors) =>
    setErrors((prev) => {
      if (!(key in prev)) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });

  const validate = (): boolean => {
    const e: FieldErrors = {};
    if (form.name.trim().length < 2) e.name = "Nama minimal 2 karakter.";
    if (!form.service) e.service = "Pilih layanan yang Anda rasakan.";
    if (form.message.trim().length < 15)
      e.message = "Ceritakan pengalaman Anda minimal 15 karakter.";
    else if (form.message.trim().length > 1000)
      e.message = "Ulasan maksimal 1000 karakter.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setApiError(null);
    if (!validate()) {
      toast.error("Periksa kembali data yang bertanda merah.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/testimonial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          service: form.service,
          rating,
          message: form.message.trim(),
        }),
      });
      const data = (await res.json()) as { ok: boolean; message?: string; error?: string };
      if (!res.ok || !data.ok) {
        const msg = data.error ?? "Ulasan gagal terkirim. Silakan coba lagi.";
        setApiError(msg);
        toast.error(msg);
        return;
      }
      toast.success(data.message ?? "Terima kasih atas ulasan Anda!");
      setSuccessName(form.name.trim());
    } catch {
      const msg = "Koneksi bermasalah. Coba lagi nanti.";
      setApiError(msg);
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setForm({ name: "", service: "", message: "" });
    setRating(5);
    setHoverRating(0);
    setErrors({});
    setApiError(null);
    setSuccessName(null);
  };

  return (
    <div className="rounded-3xl bg-white pearl-shadow p-6 sm:p-8 lg:p-10">
      <Toaster position="top-center" richColors closeButton />

      <AnimatePresence mode="wait" initial={false}>
        {successName ? (
          // ---------- PANEL SUKSES ----------
          <motion.div
            key="sukses"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="py-6 text-center"
            role="status"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 16 }}
              className="mx-auto flex h-18 w-18 items-center justify-center rounded-full bg-emerald-100"
            >
              <CheckCircle2 className="h-9 w-9 text-emerald-700" aria-hidden="true" />
            </motion.div>
            <div className="mt-5 flex items-center justify-center gap-1" aria-hidden="true">
              {Array.from({ length: rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#c9a227] text-[#c9a227]" />
              ))}
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold text-emerald-950">
              Terima kasih, {successName}!
            </h3>
            <p className="mx-auto mt-3 max-w-md text-emerald-950/65">
              Ulasan Anda sudah kami terima dan <strong>akan tampil setelah kami tinjau</strong>.
              Tim kami memeriksa setiap ulasan agar tetap bermanfaat bagi pelanggan lain.
            </p>
            <Button
              variant="outline"
              onClick={reset}
              className="mt-7 h-12 rounded-full border-emerald-900/20 px-7 font-bold text-emerald-950 hover:bg-emerald-950 hover:text-white"
            >
              <PenLine className="h-5 w-5" aria-hidden="true" />
              Tulis Ulasan Lain
            </Button>
          </motion.div>
        ) : (
          // ---------- FORMULIR ----------
          <motion.form
            key="form"
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="space-y-5"
            aria-label="Formulir tulis ulasan"
          >
            <div>
              <Label htmlFor="rv-nama" className={labelCls}>
                Nama <span className="text-red-600" aria-hidden="true">*</span>
              </Label>
              <Input
                id="rv-nama"
                type="text"
                autoComplete="name"
                placeholder="cth. Dewi Anggraini"
                value={form.name}
                onChange={(e) => {
                  setForm((f) => ({ ...f, name: e.target.value }));
                  clearError("name");
                }}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "rv-nama-err" : undefined}
                className={cn(inputCls, "mt-2", errors.name && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20")}
              />
              {errors.name && (
                <p id="rv-nama-err" className={errorCls}>
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="rv-layanan" className={labelCls}>
                Layanan <span className="text-red-600" aria-hidden="true">*</span>
              </Label>
              <Select
                value={form.service}
                onValueChange={(v) => {
                  setForm((f) => ({ ...f, service: v }));
                  clearError("service");
                }}
              >
                <SelectTrigger
                  id="rv-layanan"
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? "rv-layanan-err" : undefined}
                  className={cn(
                    "mt-2 h-12 w-full rounded-xl border-emerald-900/15 bg-white text-emerald-950 focus-visible:border-emerald-800 focus-visible:ring-emerald-800/25",
                    errors.service && "border-red-500 focus-visible:border-red-500"
                  )}
                >
                  <SelectValue placeholder="Layanan yang Anda rasakan…" />
                </SelectTrigger>
                <SelectContent className="max-h-72 overflow-y-auto rounded-xl border-emerald-900/10">
                  {services.map((s) => (
                    <SelectItem key={s.slug} value={s.name} className="rounded-lg">
                      {s.name}
                    </SelectItem>
                  ))}
                  <SelectItem value="Paket Hemat" className="rounded-lg">
                    Paket Hemat / Membership
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.service && (
                <p id="rv-layanan-err" className={errorCls}>
                  {errors.service}
                </p>
              )}
            </div>

            <div role="radiogroup" aria-label="Pilih rating bintang">
              <span className={cn(labelCls, "block")}>
                Rating <span className="text-red-600" aria-hidden="true">*</span>
              </span>
              <div className="mt-2 flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((v) => {
                  const active = v <= (hoverRating || rating);
                  return (
                    <motion.button
                      key={v}
                      type="button"
                      role="radio"
                      aria-checked={rating === v}
                      aria-label={`${v} bintang — ${RATING_TEXT[v]}`}
                      whileHover={{ scale: 1.18 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setRating(v)}
                      onMouseEnter={() => setHoverRating(v)}
                      onMouseLeave={() => setHoverRating(0)}
                      onFocus={() => setHoverRating(v)}
                      onBlur={() => setHoverRating(0)}
                      className="rounded-lg p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800/40"
                    >
                      <Star
                        className={cn(
                          "h-8 w-8 transition-colors duration-150",
                          active
                            ? "fill-[#c9a227] text-[#c9a227]"
                            : "text-emerald-900/20"
                        )}
                        aria-hidden="true"
                      />
                    </motion.button>
                  );
                })}
                <motion.span
                  key={hoverRating || rating}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="ml-2 text-sm font-bold text-emerald-800"
                >
                  {RATING_TEXT[hoverRating || rating]}
                </motion.span>
              </div>
            </div>

            <div>
              <Label htmlFor="rv-pesan" className={labelCls}>
                Ulasan <span className="text-red-600" aria-hidden="true">*</span>
              </Label>
              <Textarea
                id="rv-pesan"
                placeholder="Ceritakan pengalaman terapi Anda — apa yang paling berkesan, bagaimana pelayanan terapisnya…"
                value={form.message}
                onChange={(e) => {
                  setForm((f) => ({ ...f, message: e.target.value }));
                  clearError("message");
                }}
                maxLength={1000}
                rows={5}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "rv-pesan-err" : undefined}
                className={cn(
                  "mt-2 min-h-[130px] rounded-xl border-emerald-900/15 bg-white text-emerald-950 placeholder:text-emerald-950/35 focus-visible:border-emerald-800 focus-visible:ring-emerald-800/25",
                  errors.message && "border-red-500 focus-visible:border-red-500"
                )}
              />
              {errors.message ? (
                <p id="rv-pesan-err" className={errorCls}>
                  {errors.message}
                </p>
              ) : (
                <p className="mt-1.5 text-xs text-emerald-950/50">
                  Minimal 15 karakter (maks. 1000). Ulasan tidak akan diedit oleh tim kami.
                </p>
              )}
            </div>

            {apiError && (
              <p
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
              >
                {apiError}
              </p>
            )}

            <Button
              type="submit"
              disabled={submitting}
              className="h-12 w-full rounded-full bg-red-600 px-8 text-base font-bold text-white shadow-lg shadow-red-900/25 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                  Mengirim...
                </>
              ) : (
                <>
                  <PenLine className="h-5 w-5" aria-hidden="true" />
                  Kirim Ulasan
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
