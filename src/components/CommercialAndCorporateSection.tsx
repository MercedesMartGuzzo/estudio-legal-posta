"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const COMMERCIAL_ITEMS = [
  "Redacción, revisión y negociación de acuerdos comerciales complejos",
  "Redacción y revisión de contratos comerciales",
  "Contratos de distribución y agencia",
  "Franquicias y licencias de marca",
  "Financiamiento y garantías comerciales",
  "Resolución de conflictos comerciales",
  "Due diligence en compraventa de empresas",
];

const CORPORATE_ITEMS = [
  "Constitución de SRL, SA, SAS y otras formas",
  "Reforma de estatutos y reglamentos",
  "Acuerdos de accionistas y socios",
  "Prevención y gestión de conflictos societarios.",
  "Gobierno corporativo y compliance",
  "Fusiones, escisiones y adquisiciones",
  "Liquidación y disolución societaria",
];

// Paleta de verdes vibrantes dentro de la familia "bottle green" para dar variación tonal a cada bullet
const GREEN_SHADES = ["#0F6E45", "#178F52", "#1FA85E", "#0D5C39", "#2BBF6B", "#0A4730"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function PracticeList({
  items,
  title,
}: {
  items: string[];
  title: string;
}) {
  return (
    <div>
      <h3 className="text-xl text-[var(--primary)]">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3.5">
        {items.map((item, index) => {
          const color = GREEN_SHADES[index % GREEN_SHADES.length];
          return (
            <motion.li
              key={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.06,
              }}
              className="group flex items-start gap-3 rounded-lg p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(31,77,61,0.15)]"
              style={{ backgroundColor: `${color}33` }}
            >
              <Check
                className="mt-0.5 h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ color }}
                strokeWidth={2.5}
              />
              <p className="text-[15px] leading-[24px] text-[var(--foreground)]">
                {item}
              </p>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}

export default function CommercialAndCorporateSection() {
  return (
    <section id="comercial-y-societario" className="mx-auto max-w-[1200px] px-4 py-[60px] md:px-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12"
      >
        <h2 className="text-[28px] leading-[36px] text-[var(--on-surface)] md:text-[36px] md:leading-[48px] font-[500]">
          Derecho Comercial y{" "}
          <span className="text-[var(--primary)]">Societario</span>
        </h2>
        <p className="mt-4 max-w-[760px] text-base leading-[28px] text-[var(--foreground)] md:text-lg">
          La base jurídica sólida es el pilar de toda operación comercial
          exitosa. Nuestro equipo acompaña a empresas en cada etapa de su
          desarrollo, desde la elección del tipo societario más conveniente
          hasta la estructuración de operaciones complejas.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <PracticeList title="Derecho Comercial" items={COMMERCIAL_ITEMS} />
          <PracticeList title="Derecho Societario" items={CORPORATE_ITEMS} />
        </div>
      </motion.div>
    </section>
  );
}