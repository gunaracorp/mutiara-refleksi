"use client";

// ============================================================
// MUTIARA REFLEKSI - Form Reservasi Online (client component)
// POST /api/booking → success card + WhatsApp confirmation
// ============================================================

import { useCallback, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarCheck,
  CheckCircle2,
  Loader2,
  MessageCircle,
  RotateCcw,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formatRupiah, getService, packages, services } from "@/lib/data/services";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const TIME_SLOTS = Array.from(
  { length: 12 },
  (_, i) => `${String(9 + i).padStart(2, "0")}:00`
);
const PACKAGE_DURATION = "Sesuai Paket";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+\-\s()]+$/;

type FieldErrors = Partial<
  Record<"name" | "phone" | "email" | "service" | "duration" | "date" | "time" | "notes", string>
>;

interface SuccessSummary {
  name: string;
  serviceLabel: string;
  packageLabel?: string;
  dateLabel: string;
  time: string;
  priceLabel: string;
}

const inputCls =
  "h-12 rounded-xl border-emerald-900/15 bg-white px-4 text-emerald-950 placeholder:text-emerald-950/35 focus-visible:border-emerald-800 focus-visible:ring-emerald-800/25";

const labelCls = "text-sm font-semibold text-emerald-950";
const errorCls = "mt-1.5 text-sm font-medium text-red-600";

function todayStr() {
  const n = new Date();
  return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(
    n.getDate()
  ).padStart(2, "0")}`;
}

function formatTanggal(iso: string) {
  try {
    return new Date(`${iso}T00:00:00`).toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export function BookingForm() {
  const searchParams = useSearchParams();
  const preSlug = searchParams.get("layanan");
  const [serviceValue, setServiceValue] = useState(() =>
    preSlug && getService(preSlug) ? `svc:${preSlug}` : ""
  );
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    notes: "",
  });
  const [duration, setDuration] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [success, setSuccess] = useState<SuccessSummary | null>(null);

  // Set atribut min tanggal via ref callback (aman dari hydration mismatch)
  const setDateMin = useCallback((el: HTMLInputElement | null) => {
    if (!el) return;
    el.min = todayStr();
  }, []);

  // ---- turunan dari serviceValue ----
  const isPkg = serviceValue.startsWith("pkg:");
  const pkgIndex = isPkg ? Number(serviceValue.slice(4)) : -1;
  const selectedPkg =
    pkgIndex >= 0 && pkgIndex < packages.length ? packages[pkgIndex] : undefined;
  const selectedSvc = !serviceValue || isPkg ? undefined : getService(serviceValue.slice(4));
  const durationOptions = selectedSvc
    ? selectedSvc.durationOptions
    : selectedPkg
      ? [{ duration: PACKAGE_DURATION, price: selectedPkg.price }]
      : [];
  const price = durationOptions.find((d) => d.duration === duration)?.price ?? 0;

  const clearError = (key: keyof FieldErrors) =>
    setErrors((prev) => {
      if (!(key in prev)) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });

  const handleServiceChange = (v: string) => {
    setServiceValue(v);
    setApiError(null);
    clearError("service");
    if (v.startsWith("svc:")) {
      const s = getService(v.slice(4));
      setDuration(s?.durationOptions[0]?.duration ?? "");
    } else if (v.startsWith("pkg:")) {
      setDuration(PACKAGE_DURATION);
    } else {
      setDuration("");
    }
  };

  const update = (key: "name" | "phone" | "email" | "date" | "time" | "notes", value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    clearError(key);
    setApiError(null);
  };

  const validate = (): boolean => {
    const e: FieldErrors = {};
    if (form.name.trim().length < 2) e.name = "Nama minimal 2 karakter.";
    const phone = form.phone.trim();
    const digits = phone.replace(/\D/g, "");
    if (!phone) e.phone = "Nomor HP/WhatsApp wajib diisi.";
    else if (!PHONE_RE.test(phone) || digits.length < 9 || digits.length > 15)
      e.phone = "Masukkan nomor yang valid (9–15 digit), contoh: 0812 3456 7890.";
    if (form.email.trim() && !EMAIL_RE.test(form.email.trim()))
      e.email = "Format email tidak valid.";
    if (!serviceValue) e.service = "Pilih layanan atau paket terlebih dahulu.";
    if (!duration) e.duration = "Pilih durasi terapi.";
    if (!form.date) e.date = "Pilih tanggal kunjungan.";
    else if (form.date < todayStr()) e.date = "Tanggal tidak boleh di masa lalu.";
    if (!form.time) e.time = "Pilih jam kedatangan.";
    if (form.notes.trim().length > 500) e.notes = "Catatan maksimal 500 karakter.";
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

    const serviceLabel = selectedSvc
      ? `${selectedSvc.name} (${duration})`
      : selectedPkg
        ? selectedPkg.name
        : "";
    const notes = [form.notes.trim(), `Estimasi biaya: ${formatRupiah(price)}`]
      .filter(Boolean)
      .join(" • ");

    setSubmitting(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          service: serviceLabel,
          package: selectedPkg ? "Paket Hemat" : "",
          date: form.date,
          time: form.time,
          notes,
        }),
      });
      const data = (await res.json()) as { ok: boolean; message?: string; error?: string };
      if (!res.ok || !data.ok) {
        const msg = data.error ?? "Reservasi gagal dikirim. Silakan coba lagi.";
        setApiError(msg);
        toast.error(msg);
        return;
      }
      toast.success(data.message ?? "Reservasi berhasil dikirim!");
      setSuccess({
        name: form.name.trim(),
        serviceLabel,
        packageLabel: selectedPkg ? `Paket Hemat — ${selectedPkg.badge}` : undefined,
        dateLabel: formatTanggal(form.date),
        time: form.time,
        priceLabel: formatRupiah(price),
      });
    } catch {
      const msg = "Koneksi bermasalah. Coba lagi atau hubungi kami via WhatsApp.";
      setApiError(msg);
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setForm({ name: "", phone: "", email: "", date: "", time: "", notes: "" });
    setServiceValue("");
    setDuration("");
    setErrors({});
    setApiError(null);
    setSuccess(null);
  };

  const waText = success
    ? encodeURIComponent(
        `Halo Mutiara Refleksi! Saya baru saja membuat reservasi online:\n\n• Nama: ${success.name}\n• Layanan: ${success.serviceLabel}${success.packageLabel ? `\n• ${success.packageLabel}` : ""}\n• Tanggal: ${success.dateLabel}\n• Jam: ${success.time} WIB\n• Estimasi biaya: ${success.priceLabel}\n\nMohon konfirmasi ketersediaannya. Terima kasih!`
      )
    : "";

  return (
    <div>
      <Toaster position="top-center" richColors closeButton />

      <AnimatePresence mode="wait" initial={false}>
        {success ? (
          // ---------- KARTU SUKSES ----------
          <motion.div
            key="sukses"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl bg-white pearl-shadow p-7 text-center sm:p-10"
            role="status"
          >
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 16 }}
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100"
            >
              <CheckCircle2 className="h-10 w-10 text-emerald-700" aria-hidden="true" />
            </motion.div>
            <h2 className="mt-6 font-display text-2xl font-bold text-emerald-950 sm:text-3xl">
              Reservasi Berhasil Dikirim!
            </h2>
            <p className="mt-3 text-emerald-950/65">
              Terima kasih, {success.name}. Tim kami akan mengonfirmasi ketersediaan terapis
              melalui WhatsApp Anda.
            </p>

            <dl className="mt-7 space-y-3 rounded-2xl bg-[#f5f0e6] p-5 text-left text-sm sm:p-6">
              <div className="flex justify-between gap-4">
                <dt className="text-emerald-950/55">Nama</dt>
                <dd className="text-right font-semibold text-emerald-950">{success.name}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-emerald-950/55">Layanan</dt>
                <dd className="text-right font-semibold text-emerald-950">
                  {success.serviceLabel}
                </dd>
              </div>
              {success.packageLabel && (
                <div className="flex justify-between gap-4">
                  <dt className="text-emerald-950/55">Kategori</dt>
                  <dd className="text-right font-semibold text-emerald-950">
                    {success.packageLabel}
                  </dd>
                </div>
              )}
              <div className="flex justify-between gap-4">
                <dt className="text-emerald-950/55">Tanggal</dt>
                <dd className="text-right font-semibold text-emerald-950">{success.dateLabel}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-emerald-950/55">Jam</dt>
                <dd className="text-right font-semibold text-emerald-950">{success.time} WIB</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-emerald-900/10 pt-3">
                <dt className="text-emerald-950/55">Estimasi Biaya</dt>
                <dd className="text-right font-bold text-emerald-800">{success.priceLabel}</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-full bg-emerald-800 px-7 font-bold text-white shadow-lg shadow-emerald-900/25 hover:bg-emerald-900"
              >
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Konfirmasi via WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                onClick={reset}
                className="h-12 rounded-full border-emerald-900/20 px-7 font-bold text-emerald-950 hover:bg-emerald-950 hover:text-white"
              >
                <RotateCcw className="h-5 w-5" aria-hidden="true" />
                Buat Reservasi Lain
              </Button>
            </div>
          </motion.div>
        ) : (
          // ---------- FORMULIR ----------
          <motion.form
            key="form"
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl bg-white pearl-shadow p-6 sm:p-8 lg:p-10"
            aria-label="Formulir reservasi online"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a227]">
              Reservasi
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-emerald-950 sm:text-3xl">
              Isi Formulir Reservasi
            </h2>
            <p className="mt-2 text-sm text-emerald-950/60 sm:text-base">
              Lengkapi data di bawah — konfirmasi dikirim ke WhatsApp Anda dalam hitungan menit
              pada jam operasional.
            </p>

            {/* Data Pemesan */}
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800/70">
              Data Pemesan
            </p>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="bk-nama" className={labelCls}>
                  Nama Lengkap <span className="text-red-600" aria-hidden="true">*</span>
                </Label>
                <Input
                  id="bk-nama"
                  type="text"
                  autoComplete="name"
                  placeholder="cth. Budi Santoso"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "bk-nama-err" : undefined}
                  className={cn(inputCls, "mt-2", errors.name && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20")}
                />
                {errors.name && (
                  <p id="bk-nama-err" className={errorCls}>
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="bk-telepon" className={labelCls}>
                  No. HP / WhatsApp <span className="text-red-600" aria-hidden="true">*</span>
                </Label>
                <Input
                  id="bk-telepon"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="0812 3456 7890"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "bk-telepon-err" : "bk-telepon-hint"}
                  className={cn(inputCls, "mt-2", errors.phone && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20")}
                />
                {errors.phone ? (
                  <p id="bk-telepon-err" className={errorCls}>
                    {errors.phone}
                  </p>
                ) : (
                  <p id="bk-telepon-hint" className="mt-1.5 text-xs text-emerald-950/50">
                    Gunakan nomor WhatsApp aktif agar konfirmasi lebih cepat.
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="bk-email" className={labelCls}>
                  Email <span className="font-normal text-emerald-950/45">(opsional)</span>
                </Label>
                <Input
                  id="bk-email"
                  type="email"
                  autoComplete="email"
                  placeholder="nama@email.com"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "bk-email-err" : undefined}
                  className={cn(inputCls, "mt-2", errors.email && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20")}
                />
                {errors.email && (
                  <p id="bk-email-err" className={errorCls}>
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Detail Terapi */}
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800/70">
              Detail Terapi
            </p>
            <div className="mt-4 space-y-5">
              <div>
                <Label htmlFor="bk-layanan" className={labelCls}>
                  Pilih Layanan <span className="text-red-600" aria-hidden="true">*</span>
                </Label>
                <Select value={serviceValue} onValueChange={handleServiceChange}>
                  <SelectTrigger
                    id="bk-layanan"
                    aria-invalid={!!errors.service}
                    aria-describedby={errors.service ? "bk-layanan-err" : undefined}
                    className={cn(
                      "mt-2 h-12 w-full rounded-xl border-emerald-900/15 bg-white text-emerald-950 focus-visible:border-emerald-800 focus-visible:ring-emerald-800/25",
                      errors.service && "border-red-500 focus-visible:border-red-500"
                    )}
                  >
                    <SelectValue placeholder="Pilih layanan atau paket hemat…" />
                  </SelectTrigger>
                  <SelectContent className="max-h-80 overflow-y-auto rounded-xl border-emerald-900/10">
                    <SelectGroup>
                      <SelectLabel className="text-emerald-800/70">Layanan</SelectLabel>
                      {services.map((s) => (
                        <SelectItem key={s.slug} value={`svc:${s.slug}`} className="rounded-lg">
                          {s.name} — {s.priceLabel}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel className="text-emerald-800/70">Paket Hemat</SelectLabel>
                      {packages.map((p, i) => (
                        <SelectItem key={p.name} value={`pkg:${i}`} className="rounded-lg">
                          {p.name} — {formatRupiah(p.price)}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p id="bk-layanan-err" className={errorCls}>
                    {errors.service}
                  </p>
                )}
              </div>

              <div role="group" aria-label="Pilihan durasi terapi">
                <span className={cn(labelCls, "block")}>
                  Durasi <span className="text-red-600" aria-hidden="true">*</span>
                </span>
                {durationOptions.length === 0 ? (
                  <p className="mt-2 rounded-xl border border-dashed border-emerald-900/20 bg-[#f5f0e6] px-4 py-3 text-sm text-emerald-950/55">
                    Pilih layanan terlebih dahulu untuk melihat pilihan durasi dan harganya.
                  </p>
                ) : (
                  <RadioGroup
                    value={duration}
                    onValueChange={(v) => {
                      setDuration(v);
                      clearError("duration");
                    }}
                    className="mt-2 grid gap-3 sm:grid-cols-2"
                  >
                    {durationOptions.map((d) => (
                      <Label
                        key={d.duration}
                        htmlFor={`bk-dur-${d.duration}`}
                        className={cn(
                          "flex min-h-[64px] cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors",
                          duration === d.duration
                            ? "border-emerald-800 bg-emerald-800/5 ring-1 ring-emerald-800/30"
                            : "border-emerald-900/15 bg-white hover:border-emerald-800/40"
                        )}
                      >
                        <RadioGroupItem
                          value={d.duration}
                          id={`bk-dur-${d.duration}`}
                          className="border-emerald-900/30 text-emerald-800"
                        />
                        <span className="flex-1">
                          <span className="block font-semibold text-emerald-950">
                            {d.duration}
                          </span>
                          <span className="block text-sm font-bold text-emerald-800">
                            {formatRupiah(d.price)}
                          </span>
                        </span>
                      </Label>
                    ))}
                  </RadioGroup>
                )}
                {errors.duration && <p className={errorCls}>{errors.duration}</p>}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="bk-tanggal" className={labelCls}>
                    Tanggal Kunjungan <span className="text-red-600" aria-hidden="true">*</span>
                  </Label>
                  <Input
                    id="bk-tanggal"
                    type="date"
                    ref={setDateMin}
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    aria-invalid={!!errors.date}
                    aria-describedby={errors.date ? "bk-tanggal-err" : undefined}
                    className={cn(inputCls, "mt-2 [&::-webkit-calendar-picker-indicator]:cursor-pointer", errors.date && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20")}
                  />
                  {errors.date ? (
                    <p id="bk-tanggal-err" className={errorCls}>
                      {errors.date}
                    </p>
                  ) : (
                    <p className="mt-1.5 text-xs text-emerald-950/50">
                      Kami buka {site.hours.label.toLowerCase()}.
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="bk-jam" className={labelCls}>
                    Jam Kedatangan <span className="text-red-600" aria-hidden="true">*</span>
                  </Label>
                  <Select
                    value={form.time}
                    onValueChange={(v) => {
                      update("time", v);
                    }}
                  >
                    <SelectTrigger
                      id="bk-jam"
                      aria-invalid={!!errors.time}
                      aria-describedby={errors.time ? "bk-jam-err" : undefined}
                      className={cn(
                        "mt-2 h-12 w-full rounded-xl border-emerald-900/15 bg-white text-emerald-950 focus-visible:border-emerald-800 focus-visible:ring-emerald-800/25",
                        errors.time && "border-red-500 focus-visible:border-red-500"
                      )}
                    >
                      <SelectValue placeholder="Pilih jam…" />
                    </SelectTrigger>
                    <SelectContent className="max-h-72 overflow-y-auto rounded-xl border-emerald-900/10">
                      {TIME_SLOTS.map((t) => (
                        <SelectItem key={t} value={t} className="rounded-lg">
                          {t} WIB
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.time && (
                    <p id="bk-jam-err" className={errorCls}>
                      {errors.time}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="bk-catatan" className={labelCls}>
                  Catatan <span className="font-normal text-emerald-950/45">(opsional)</span>
                </Label>
                <Textarea
                  id="bk-catatan"
                  placeholder="cth. Saya punya keluhan pegal di pundak, mohon terapis yang berpengalaman."
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  maxLength={460}
                  rows={4}
                  aria-invalid={!!errors.notes}
                  aria-describedby={errors.notes ? "bk-catatan-err" : undefined}
                  className={cn(
                    "mt-2 min-h-[110px] rounded-xl border-emerald-900/15 bg-white text-emerald-950 placeholder:text-emerald-950/35 focus-visible:border-emerald-800 focus-visible:ring-emerald-800/25",
                    errors.notes && "border-red-500 focus-visible:border-red-500"
                  )}
                />
                {errors.notes ? (
                  <p id="bk-catatan-err" className={errorCls}>
                    {errors.notes}
                  </p>
                ) : (
                  <p className="mt-1.5 text-xs text-emerald-950/50">
                    Ceritakan keluhan atau permintaan khusus Anda (maks. 460 karakter).
                  </p>
                )}
              </div>
            </div>

            {/* Footer: error + submit */}
            <div className="mt-8 border-t border-emerald-900/10 pt-6">
              {apiError && (
                <p
                  role="alert"
                  className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                >
                  {apiError}
                </p>
              )}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Button
                  type="submit"
                  disabled={submitting}
                  className="h-12 rounded-full bg-red-600 px-8 text-base font-bold text-white shadow-lg shadow-red-900/25 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                      Kirim Reservasi
                    </>
                  )}
                </Button>
                <p className="max-w-xs text-xs leading-relaxed text-emerald-950/55">
                  Dengan mengirim formulir, Anda setuju dihubungi tim kami via WhatsApp atau
                  telepon untuk konfirmasi jadwal.
                </p>
              </div>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
