import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes Somos", href: "#quienes-somos" },
  { label: "Áreas", href: "#areas" },
  { label: "Por qué elegirnos", href: "#por-que-elegirnos" },
  { label: "Contacto", href: "#contacto" },
];

const CONTACT_INFO = [
  { icon: MapPin, text: "Buenos Aires, Argentina" },
  { icon: Mail, text: "estudiopostalegal@gmail.com" },
  { icon: Phone, text: "+54 11 XXXX-XXXX" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-[1200px] px-4 py-8 md:px-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Logo y descripción */}
          <div className="flex flex-col gap-4">
            <Link
              href="#inicio"
              className="text-2xl font-bold text-[var(--primary)]"
            >
              Estudio Posta
            </Link>
            <p className="max-w-[280px] text-sm leading-[22px] text-[var(--foreground)]/70">
              Asesoramiento jurídico especializado en derecho comercial, societario, cooperativas, turismo, medios y propiedad intelectual.
            </p>
          </div>

          {/* Links de navegación */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--secondary)]">
              Navegación
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--foreground)]/70 transition-colors duration-200 hover:text-[var(--primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info de contacto */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--secondary)]">
              Contacto
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {CONTACT_INFO.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--secondary)]"
                    strokeWidth={1.75}
                  />
                  <span className="text-sm text-[var(--foreground)]/70">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-[var(--border)] pt-6 md:flex-row">
          <p className="text-xs text-[var(--foreground)]/50">
            © {new Date().getFullYear()} Estudio de Abogados Posta. Todos los derechos reservados.
          </p>
          <p className="text-xs text-[var(--foreground)]/40">
            Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}