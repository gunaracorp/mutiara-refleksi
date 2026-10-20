import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter").max(100),
  phone: z
    .string()
    .trim()
    .min(9, "Nomor telepon tidak valid")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Nomor telepon hanya boleh berisi angka"),
  email: z.string().trim().email("Email tidak valid").max(120).optional().or(z.literal("")),
  service: z.string().trim().min(2).max(120),
  package: z.string().trim().max(120).optional().or(z.literal("")),
  date: z.string().trim().min(8, "Tanggal tidak valid").max(20),
  time: z.string().trim().min(3).max(10),
  notes: z.string().trim().max(500).optional().or(z.literal("")),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = bookingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: parsed.error.issues[0]?.message ?? "Data tidak valid" },
        { status: 400 }
      );
    }

    const { name, phone, email, service, package: pkg, date, time, notes } = parsed.data;

    const booking = await db.booking.create({
      data: {
        name,
        phone,
        email: email || null,
        service,
        package: pkg || null,
        date,
        time,
        notes: notes || null,
      },
    });

    return NextResponse.json({
      ok: true,
      message: "Reservasi berhasil diterima! Tim kami akan mengonfirmasi via WhatsApp.",
      booking: { id: booking.id },
    });
  } catch (err) {
    console.error("[BOOKING_API]", err);
    return NextResponse.json(
      { ok: false, error: "Terjadi kesalahan server. Coba lagi atau hubungi kami via WhatsApp." },
      { status: 500 }
    );
  }
}
