"use client";

// ============================================================
// MUTIARA REFLEKSI - Form Kontak (client component)
// POST /api/contact → toast + inline success + reset
// ============================================================

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
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
import { cn } from "@/lib/utils";

const SUBJECTS = [
  "Pertanyaan Layanan",
  "Reservasi",
  "Kerja Sama Korporat",
  "Kritik & Saran",
  "Lainnya",
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+\-\s()]+$/;

type FieldErrors = Partial<
  Record<"name" | "email" | "phone" | "subject" | "message", string>
>;

const inputCls =
  "h-12 rounded-xl border-emerald-900/15 bg-white px-4 text-emerald-950 placeholder:text-emerald-950/35 focus-visible:border-emerald-800 focus-visible:ring-emerald-800/25";
const labelCls = "text-sm font-semibold text-emerald-950";
const errorCls = "mt-1.5 text-sm font-medium text-red-600";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const clearError = (key: keyof FieldErrors) =>
    setErrors((prev) => {
      if (!(key in prev)) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });

  const update = (
    key: "name" | "email" | "phone" | "subject" | "message",
    value: string
  ) => {
    setForm((f) => ({ ...f, [key]: value }));
    clearError(key);
    setApiError(null);
  };

  const validate = (): boolean => {
    const e: FieldErrors = {};
    if (form.name.trim().length < 2) e.name = "Nama minimal 2 karakter.";
    if (!form.email.trim()) e.email = "Email wajib diisi.";
    else if (!EMAIL_RE.test(form.email.trim())) e.email = "Format email tidak valid.";
    if (form.phone.trim()) {
      const digits = form.phone.trim().replace(/\D/g, "");
      if (!PHONE_RE.test(form.phone.trim()) || digits.length < 9 || digits.length > 15)
        e.phone = "Masukkan nomor yang valid (9–15 digit).";
    }
    if (!form.subject) e.subject = "Pilih subjek pesan.";
    if (form.message.trim().length < 10)
      e.message = "Pesan minimal 10 karakter agar kami memahami kebutuhan Anda.";
    else if (form.message.trim().length > 2000) e.message = "Pesan maksimal 2000 karakter.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setApiError(null);
    setSuccessMsg(null);
    if (!validate()) {
      toast.error("Periksa kembali data yang bertanda merah.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          subject: form.subject,
          message: form.message.trim(),
        }),
      });
      const data = (await res.json()) as { ok: boolean; message?: string; error?: string };
      if (!res.ok || !data.ok) {
        const msg = data.error ?? "Pesan gagal terkirim. Silakan coba lagi.";
        setApiError(msg);
        toast.error(msg);
        return;
      }
      const msg = data.message ?? "Pesan Anda terkirim!";
      toast.success(msg);
      setSuccessMsg(msg);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      const msg = "Koneksi bermasalah. Coba lagi atau hubungi kami via WhatsApp.";
      setApiError(msg);
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl bg-white pearl-shadow p-6 sm:p-8 lg:p-10">
      <Toaster position="top-center" richColors closeButton />

      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a227]">Formulir</p>
      <h2 className="mt-2 font-display text-2xl font-bold text-emerald-950 sm:text-3xl">
        Kirim Pesan kepada Kami
      </h2>
      <p className="mt-2 text-sm text-emerald-950/60 sm:text-base">
        Isi formulir berikut — tim kami membalas maksimal 1×24 jam kerja.
      </p>

      <AnimatePresence>
        {successMsg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            role="status"
            className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4"
          >
            <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-700" aria-hidden="true" />
            <div>
              <p className="font-bold text-emerald-900">Pesan berhasil terkirim!</p>
              <p className="mt-0.5 text-sm text-emerald-900/70">{successMsg}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={onSubmit} noValidate className="mt-7 space-y-5" aria-label="Formulir kontak">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="kf-nama" className={labelCls}>
              Nama <span className="text-red-600" aria-hidden="true">*</span>
            </Label>
            <Input
              id="kf-nama"
              type="text"
              autoComplete="name"
              placeholder="cth. Sari Wulandari"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "kf-nama-err" : undefined}
              className={cn(inputCls, "mt-2", errors.name && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20")}
            />
            {errors.name && (
              <p id="kf-nama-err" className={errorCls}>
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="kf-email" className={labelCls}>
              Email <span className="text-red-600" aria-hidden="true">*</span>
            </Label>
            <Input
              id="kf-email"
              type="email"
              autoComplete="email"
              placeholder="nama@email.com"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "kf-email-err" : undefined}
              className={cn(inputCls, "mt-2", errors.email && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20")}
            />
            {errors.email && (
              <p id="kf-email-err" className={errorCls}>
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="kf-telepon" className={labelCls}>
              No. HP <span className="font-normal text-emerald-950/45">(opsional)</span>
            </Label>
            <Input
              id="kf-telepon"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="0812 3456 7890"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "kf-telepon-err" : undefined}
              className={cn(inputCls, "mt-2", errors.phone && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20")}
            />
            {errors.phone && (
              <p id="kf-telepon-err" className={errorCls}>
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="kf-subjek" className={labelCls}>
              Subjek <span className="text-red-600" aria-hidden="true">*</span>
            </Label>
            <Select
              value={form.subject}
              onValueChange={(v) => update("subject", v)}
            >
              <SelectTrigger
                id="kf-subjek"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "kf-subjek-err" : undefined}
                className={cn(
                  "mt-2 h-12 w-full rounded-xl border-emerald-900/15 bg-white text-emerald-950 focus-visible:border-emerald-800 focus-visible:ring-emerald-800/25",
                  errors.subject && "border-red-500 focus-visible:border-red-500"
                )}
              >
                <SelectValue placeholder="Pilih subjek…" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-emerald-900/10">
                {SUBJECTS.map((s) => (
                  <SelectItem key={s} value={s} className="rounded-lg">
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.subject && (
              <p id="kf-subjek-err" className={errorCls}>
                {errors.subject}
              </p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="kf-pesan" className={labelCls}>
            Pesan <span className="text-red-600" aria-hidden="true">*</span>
          </Label>
          <Textarea
            id="kf-pesan"
            placeholder="Tulis pertanyaan, saran, atau kebutuhan Anda di sini…"
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            maxLength={2000}
            rows={5}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "kf-pesan-err" : undefined}
            className={cn(
              "mt-2 min-h-[130px] rounded-xl border-emerald-900/15 bg-white text-emerald-950 placeholder:text-emerald-950/35 focus-visible:border-emerald-800 focus-visible:ring-emerald-800/25",
              errors.message && "border-red-500 focus-visible:border-red-500"
            )}
          />
          {errors.message ? (
            <p id="kf-pesan-err" className={errorCls}>
              {errors.message}
            </p>
          ) : (
            <p className="mt-1.5 text-xs text-emerald-950/50">
              Semakin jelas pesan Anda, semakin cepat kami membantu.
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
              <Send className="h-5 w-5" aria-hidden="true" />
              Kirim Pesan
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
