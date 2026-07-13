"use client";

import { motion } from "framer-motion";
import {
  Handshake,
  Building2,
  Users,
  Plane,
  Clapperboard,
  Plus,
} from "lucide-react";

const AREAS = [
  {
    icon: Handshake,
    title: "Derecho Comercial",
    description:
      "Contratos comerciales, operaciones de compraventa, distribución, franquicias y relaciones entre empresas.",
    targetId: "comercial-y-societario",
  },
  {
    icon: Building2,
    title: "Derecho Societario",
    description:
      "Constitución y transformación de sociedades, gobierno corporativo, acuerdos de accionistas, fusiones y adquisiciones. Asesoramiento integral en todo el ciclo de vida empresarial.",
    targetId: "comercial-y-societario",
  },
  {
    icon: Users,
    title: "Cooperativas",
    description:
      "Constitución, reforma estatutaria, asesoramiento en asambleas y relaciones con el INAES. Especialización en cooperativas de trabajo, consumo, cultura, turismo crédito y servicios.",
    targetId: "cooperativas",
  },
  {
    icon: Plane,
    title: "Empresas de Turismo",
    description:
      "El sector turístico presenta desafíos jurídicos propios que requieren asesoramiento especializado. Acompañamos a empresas y emprendedores del rubro en cada etapa de su actividad, desde la constitución del negocio hasta la resolución de conflictos, con foco en la seguridad jurídica y la protección de sus intereses.",
    targetId: "turismo",
  },
  {
    icon: Clapperboard,
    title: "Medios y Entretenimiento",
    description:
      "Intersección única entre el derecho de autor, los contratos artísticos, la regulación de radiodifusión y el derecho digital.",
    targetId: "medios-y-entretenimiento",
  },
  {
    icon: Clapperboard,
    title: "Propiedad Intelectual",
    description:
      "Asesoramiento completo en todas las ramas de la propiedad intelectual en Argentina y registros internacionales.",
    targetId: "propiedad-intelectual",
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function PracticeAreasOverview() {
  const handleCardClick = (targetId: string) => {
    const element = document.getElementById(targetId);

    if (!element) return;

    const offset = 100;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      id="areas"
      className="max-w-[1200px] px-4  md:px-16 mx-auto"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=" max-w-[760px] text-start"
      >
        <p className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--secondary)]">
          Áreas de Práctica
        </p>
        <h2 className="mt-3 text-[32px] leading-[40px] text-[var(--on-surface)] md:text-[40px] md:leading-[48px] font-[500] lg:text-nowrap">
          Especialización en los sectores{" "}
          <span className="text-[var(--primary)]">que más crecen</span>
        </h2>
        <p className="mt-5 text-base leading-[28px] text-[var(--foreground)] md:text-lg">
        Nuestro estudio concentra su práctica en cinco áreas estratégicas donde la complejidad jurídica exige conocimiento especializado y actualización permanente.
        </p>
      </motion.div>

      <div className="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-6">
        {AREAS.map((area, index) => {
          const Icon = area.icon;
          return (
            <motion.div
              key={area.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: (index % 3) * 0.1,
              }}
              className="group flex w-full flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/20 hover:shadow-[0_12px_32px_rgba(31,77,61,0.1)] sm:w-[calc(50%-24px)] lg:w-[calc(33.333%-32px)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--secondary)]/10 transition-colors duration-300 group-hover:bg-[var(--secondary)]/15">
                  <Icon
                    className="h-6 w-6 text-[var(--secondary)]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl text-[var(--primary)]">
                  {area.title}
                </h3>
              </div>
              <p className="text-[15px] leading-[24px] text-[var(--foreground)]">
                {area.description}
              </p>

              <button
                type="button"
                onClick={() => handleCardClick(area.targetId)}
                className="inline-flex w-fit items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-alt)] px-3 py-2 text-sm font-semibold text-[var(--primary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)]/20 hover:bg-[var(--primary)] hover:text-[var(--surface-alt)]"
                aria-label={`Ver más sobre ${area.title}`}
              >
                <span>Ver más</span>
                <Plus className="h-4 w-4" strokeWidth={2} />
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}