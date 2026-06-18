"use client";

import { motion } from "framer-motion";
import { BadgeCheck, BookOpen, Lightbulb, ShieldOff } from "lucide-react";

const CARDS = [
  {
    icon: BadgeCheck,
    title: "Marcas y Signos Distintivos",
    description:
      "Registro y renovación ante el INPI, búsqueda de antecedentes, oposiciones, licencias de marca y defensa frente a infracciones.",
  },
  {
    icon: BookOpen,
    title: "Derechos de Autor",
    description:
      "Registro de obras literarias, artísticas y digitales. Contratos de cesión, licencias, protección de software y contenidos en plataformas digitales.",
  },
  {
    icon: Lightbulb,
    title: "Patentes y Modelos",
    description:
      "Asesoramiento en patentes de invención, modelos de utilidad y diseños industriales. Trámites ante el INPI y estrategia de protección internacional.",
  },
  {
    icon: ShieldOff,
    title: "Secretos Industriales",
    description:
      "Redacción de acuerdos de confidencialidad (NDA), protección de know-how, información técnica y estrategias de negocio frente a empleados y socios.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function IntProperty() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-[120px] md:px-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="font-heading text-[32px] leading-[40px] text-[var(--on-surface)] md:text-[40px] md:leading-[48px]">
          Propiedad{" "}
          <span className="text-[var(--primary)]">Intelectual</span>
        </h2>
        <p className="font-body mt-5 max-w-[860px] text-base leading-[28px] text-[var(--foreground)] md:text-lg">
          Los activos intangibles son hoy el principal valor de muchas
          empresas. Proteger marcas, obras, patentes y secretos industriales
          no es solo una cuestión legal: es una decisión estratégica de
          negocio. Nuestro estudio ofrece asesoramiento completo en todas las
          ramas de la propiedad intelectual en Argentina y en registros
          internacionales.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="group flex flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--secondary)]/30 hover:shadow-[0_12px_32px_rgba(184,142,35,0.12)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--secondary)]/10 transition-colors duration-300 group-hover:bg-[var(--secondary)]/20">
                <Icon
                  className="h-6 w-6 text-[var(--secondary)]"
                  strokeWidth={1.75}
                />
              </div>
              <div>
                <h3 className="font-heading text-xl text-[var(--primary)]">
                  {card.title}
                </h3>
                <p className="font-body mt-3 text-[15px] leading-[24px] text-[var(--foreground)]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}