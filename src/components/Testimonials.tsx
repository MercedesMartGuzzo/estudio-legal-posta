"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "El estudio nos acompañó desde la constitución de la cooperativa hasta las primeras asambleas. Su conocimiento del marco normativo del INAES fue clave para evitar errores costosos desde el inicio.",
    name: "Mariana Gómez",
    role: "Presidenta",
    company: "Cooperativa de Trabajo Raíces",
  },
  {
    quote:
      "Necesitábamos estructurar contratos con plataformas internacionales de streaming. La claridad con la que nos explicaron cada cláusula y los riesgos involucrados nos dio una seguridad que no habíamos tenido antes.",
    name: "Sebastián Mora",
    role: "Productor Ejecutivo",
    company: "Mora Producciones",
  },
  {
    quote:
      "Llevamos años trabajando con el estudio para todo lo relacionado con nuestras marcas y patentes. Responden rápido, explican bien y siempre están un paso adelante en la estrategia de protección.",
    name: "Carolina Vidal",
    role: "Directora de Operaciones",
    company: "Vidal & Asociados S.A.",
  },
  {
    quote:
      "Registrar nuestra marca parecía un trámite sencillo hasta que surgieron oposiciones. El equipo manejó todo con una precisión y calma que nos transmitió confianza desde el primer momento.",
    name: "Tomás Herrera",
    role: "Fundador",
    company: "Herrera Retail Group",
  },
  {
    quote:
      "Como agencia de viajes necesitábamos actualizar todos nuestros contratos con la nueva normativa. El asesoramiento fue completo, preciso y lo recibimos en tiempo récord.",
    name: "Lucía Pereyra",
    role: "Gerente General",
    company: "Viajes Sur Turismo",
  },
  {
    quote:
      "Lo que más valoro es que no hablan en 'idioma jurídico'. Cada consulta tiene una respuesta clara, con opciones concretas. Eso cambia completamente la relación con el abogado.",
    name: "Federico Almada",
    role: "Director",
    company: "Almada Estudio Creativo",
  },
];

const CARD_WIDTH = 300;
const CARD_GAP = 20;
const SCROLL_AMOUNT = CARD_WIDTH + CARD_GAP;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: "left" | "right") => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({
      left: direction === "right" ? SCROLL_AMOUNT : -SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[var(--surface-alt)] py-[120px]">
      <div className="mx-auto max-w-[1200px] px-4 md:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[560px] text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--secondary)]">
            Testimonios
          </p>
          <h2 className="mt-3 text-[32px] leading-[40px] text-[var(--on-surface)] md:text-[40px] md:leading-[48px]">
            Lo que dicen{" "}
            <span className="text-[var(--primary)]">nuestros clientes</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="group/slider relative mt-10"
        >
          {/* Botón izquierda */}
          <button
            type="button"
            onClick={() => scrollBy("left")}
            aria-label="Anterior"
            className="absolute -left-5 top-1/2 z-10 hidden -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-sm opacity-0 transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)] group-hover/slider:opacity-100 md:flex"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2} />
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ cursor: "grab" }}
            onMouseDown={(e) => {
              const el = trackRef.current;
              if (!el) return;
              el.style.cursor = "grabbing";
              const startX = e.pageX - el.offsetLeft;
              const scrollLeft = el.scrollLeft;
              const onMove = (ev: MouseEvent) => {
                const x = ev.pageX - el.offsetLeft;
                el.scrollLeft = scrollLeft - (x - startX);
              };
              const onUp = () => {
                el.style.cursor = "grab";
                window.removeEventListener("mousemove", onMove);
                window.removeEventListener("mouseup", onUp);
              };
              window.addEventListener("mousemove", onMove);
              window.addEventListener("mouseup", onUp);
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="group flex w-[300px] flex-shrink-0 flex-col justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/20 hover:shadow-[0_8px_10px_rgba(31,77,61,0.1)]"
              >
                <div>
                  <Quote
                    className="h-6 w-6 text-[var(--secondary)]"
                    strokeWidth={1.5}
                  />
                  <p className="mt-3 text-[13px] leading-[22px] text-[var(--foreground)]">
                    {t.quote}
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-3 border-t border-[var(--border)] pt-4">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-heading text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[var(--on-surface)]">
                      {t.name}
                    </p>
                    <p className="text-[11px] text-[var(--foreground)]/70">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón derecha */}
          <button
            type="button"
            onClick={() => scrollBy("right")}
            aria-label="Siguiente"
            className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-sm opacity-0 transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)] group-hover/slider:opacity-100 md:flex"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={2} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}