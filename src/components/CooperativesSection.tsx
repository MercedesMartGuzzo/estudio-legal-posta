"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FEATURES = [
  {
    title: "Constitución",
    description: "Estatutos, acto cooperativo y trámites ante INAES",
  },
  {
    title: "Gestión",
    description: "Asambleas, consejos y libros sociales obligatorios",
  },
  {
    title: "Reforma",
    description: "Modificación estatutaria y adecuaciones normativas",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function CooperativesSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-[120px] md:px-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-[800px] text-center"
      >
        <p className="font-body text-sm font-bold uppercase tracking-[0.1em] text-[var(--secondary)]">
          Área Especializada
        </p>
        <h2 className="font-heading mt-3 text-[32px] leading-[40px] text-[var(--on-surface)] md:text-[40px] md:leading-[48px]">
          Cooperativas:{" "}
          <span className="text-[var(--primary)]">
            Asesoramiento integral
          </span>{" "}
          desde la constitución
        </h2>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-xl"
        >
          <Image
            src="/cooperative-section2.png"
            alt="Reunión de asociados de una cooperativa"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <p className="font-body text-base leading-[28px] text-[var(--foreground)] md:text-lg">
            Las cooperativas requieren un conocimiento jurídico específico
            que va más allá del derecho societario tradicional. Asesoramos en
            todo el ciclo de vida de la cooperativa, con especial atención al
            marco normativo de la <span className="font-bold">Ley 20.337</span>{" "}
            y las disposiciones del INAES.
          </p>
          <p className="font-body text-base leading-[28px] text-[var(--foreground)] md:text-lg">
            Acompañamos cooperativas de trabajo, de consumo, de crédito, de
            vivienda y de servicios, entendiendo las particularidades de cada
            tipo y las necesidades concretas de sus asociados.
          </p>

          <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.25 + index * 0.1,
                }}
                className={`group rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)]/20 hover:shadow-[0_8px_20px_rgba(31,77,61,0.1)] ${
                  index === 2 ? "sm:col-span-2" : ""
                }`}
              >
                <h3 className="font-heading text-lg text-[var(--primary)]">
                  {feature.title}
                </h3>
                <p className="font-body mt-2 text-sm leading-[22px] text-[var(--foreground)]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}