"use client";

import { motion } from "framer-motion";
import { Briefcase, FileText, Building, Scale } from "lucide-react";

const FEATURES = [
  {
    icon: Briefcase,
    title: "Agencias de Viajes",
    description:
      "Habilitación, categorización y requisitos legales para agencias minoristas, mayoristas y de viajes y turismo según la normativa vigente.",
  },
  {
    icon: FileText,
    title: "Contratos Turísticos",
    description:
      "Redacción de contratos de paquete turístico, condiciones generales, políticas de cancelación y responsabilidad frente al pasajero.",
  },
  {
    icon: Building,
    title: "Alojamientos y Plataformas",
    description:
      "Marco jurídico para hoteles, apart-hoteles y plataformas digitales de alojamiento. Contratos de intermediación y responsabilidad frente al usuario.",
  },
  {
    icon: Scale,
    title: "Resolución de Conflictos",
    description:
      "Representación ante organismos de defensa del consumidor, reclamaciones de pasajeros y litigios vinculados a la prestación de servicios turísticos.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function TourismSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-[120px] md:px-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-[32px] leading-[40px] text-[var(--on-surface)] md:text-[40px] md:leading-[48px]">
          Empresas de <span className="text-[var(--primary)]">Turismo</span>
        </h2>
        <p className="mt-5 max-w-[760px] text-base leading-[28px] text-[var(--foreground)] md:text-lg">
          El sector turístico en Argentina está regulado por un conjunto
          normativo específico que incluye la{" "}
          <span className="font-bold">Ley Nacional de Turismo 25.997</span>,
          el Decreto 2182/72 y las disposiciones del MINTUR. Las empresas del
          sector necesitan asesoramiento especializado para operar con
          seguridad jurídica.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {FEATURES.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: (index % 2) * 0.1,
              }}
              className="group rounded-xl border border-[var(--secondary)]/20 bg-[var(--surface-alt)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--secondary)]/40 hover:shadow-[0_12px_28px_rgba(184,142,35,0.15)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[var(--secondary)]/15 transition-colors duration-300 group-hover:bg-[var(--secondary)]/25">
                  <Icon
                    className="h-5 w-5 text-[var(--secondary)]"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="font-heading text-xl text-[var(--primary)]">
                  {feature.title}
                </h3>
              </div>
              <p className="mt-4 text-[15px] leading-[24px] text-[var(--foreground)]">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}