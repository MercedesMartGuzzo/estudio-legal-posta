import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { nombre, email, telefono, area, mensaje } = await req.json();

        await resend.emails.send({
            from: "Estudio Posta <onboarding@resend.dev>",
            to: ["tucorreo@gmail.com"], // ← reemplazá con tu email real
            subject: `Nueva consulta de ${nombre} — ${area}`,
            html: `
        <h2>Nueva consulta desde el sitio web</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Área:</strong> ${area}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ ok: false }, { status: 500 });
    }
}