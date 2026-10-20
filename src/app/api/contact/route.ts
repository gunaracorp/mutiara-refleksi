import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter").max(100),
  email: z.string().trim().email("Email tidak valid").max(120),
  phone: z
    .string()
    .trim()
    .max(20)
    .regex(/^[0-9+\-\s()]*$/, "Nomor telepon tidak valid")
    .optional()
    .or(z.literal("")),
  subject: z.string().trim().min(3, "Subjek minimal 3 karakter").max(150),
  message: z.string().trim().min(10, "Pesan minimal 10 karakter").max(2000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: parsed.error.issues[0]?.message ?? "Data tidak valid" },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = parsed.data;

    const saved = await db.contactMessage.create({
      data: {
        name,
        email,
        phone: phone || null,
        subject,
        message,
      },
    });

    return NextResponse.json({
      ok: true,
      message: "Pesan Anda terkirim! Kami akan membalas maksimal 1x24 jam kerja.",
      id: saved.id,
    });
  } catch (err) {
    console.error("[CONTACT_API]", err);
    return NextResponse.json(
      { ok: false, error: "Terjadi kesalahan server. Coba lagi atau hubungi kami via WhatsApp." },
      { status: 500 }
    );
  }
}
