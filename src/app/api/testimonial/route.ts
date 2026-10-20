import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const testimonialSchema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter").max(100),
  service: z.string().trim().min(2).max(120),
  rating: z.number().int().min(1).max(5),
  message: z.string().trim().min(15, "Ceritakan pengalaman minimal 15 karakter").max(1000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = testimonialSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: parsed.error.issues[0]?.message ?? "Data tidak valid" },
        { status: 400 }
      );
    }

    const saved = await db.testimonial.create({
      data: parsed.data,
    });

    return NextResponse.json({
      ok: true,
      message: "Terima kasih! Testimoni Anda akan tampil setelah kami tinjau.",
      id: saved.id,
    });
  } catch (err) {
    console.error("[TESTIMONIAL_API]", err);
    return NextResponse.json(
      { ok: false, error: "Terjadi kesalahan server. Coba lagi nanti." },
      { status: 500 }
    );
  }
}
