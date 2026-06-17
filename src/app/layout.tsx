import type { Metadata } from "next";
import { Libre_Baskerville, DM_Sans } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Estudio de Abogados Posta | Asesoramiento Legal Especializado",
  description:
    "Asesoramiento legal de excelencia en derecho comercial, societario, turismo, medios y propiedad intelectual. Soluciones jurídicas concretas para personas y empresas en Argentina.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${libreBaskerville.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}