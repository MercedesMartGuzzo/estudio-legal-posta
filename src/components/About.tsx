"use client";

import { motion } from "framer-motion";
import {
  Award,
  MessageCircle,
  Target,
  ShieldCheck,
  Users,
} from "lucide-react";

const VALUES = [
  {
    icon: Award,
    label: "Excelencia técnica",
    text: "en cada área de práctica",
  },
  {
    icon: MessageCircle,
    label: "Transparencia",
    text: "y comunicación clara con el cliente",
  },
  {
    icon: Target,
    label: "Compromiso",
    text: "con los resultados y plazos",
  },
  {
    icon: ShieldCheck,
    label: "Confidencialidad",
    text: "absoluta en todo momento",
  },
  {
    icon: Users,
    label: "Accesibilidad",
    text: "para empresas de todos los tamaños",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      id="quienes-somos"
      className="mx-auto max-w-[1200px] px-4 py-[120px] md:px-16"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-[800px] text-center"
      >
        <p className="font-body text-sm font-bold uppercase tracking-[0.1em] text-[var(--secondary)]">
          Quiénes Somos
        </p>

        <h2 className="font-heading mt-3 text-[32px] leading-[40px] text-[var(--on-surface)] md:text-[40px] md:leading-[48px]">
          Un estudio con{" "}
          <span className="text-[var(--primary)]">visión estratégica</span> y
          trayectoria comprobada
        </h2>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <p className="font-body text-base leading-[28px] text-[var(--foreground)] md:text-lg md:mt-10">
            Somos un estudio jurídico dedicado a brindar asesoramiento legal
            integral a empresas, emprendedores, cooperativas y personas
            físicas que operan en sectores dinámicos de la economía
            argentina. Nuestra práctica combina el rigor técnico del derecho
            con una comprensión profunda de los desafíos reales del mundo de
            los negocios.
          </p>

          <p className="font-body text-base leading-[28px] text-[var(--foreground)] md:text-lg">
            Trabajamos de manera cercana con nuestros clientes, entendiendo
            que cada situación requiere soluciones a medida. No ofrecemos
            respuestas genéricas: analizamos cada caso con dedicación,
            claridad y enfoque estratégico, priorizando la prevención de
            conflictos y la seguridad jurídica en cada operación.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="font-heading font-bold text-2xl text-[var(--primary)]">
            Nuestros Valores
          </h3>

          <ul className="mt-4 flex flex-col gap-3">
            {VALUES.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.li
                  key={value.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeUp}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.25 + index * 0.08,
                  }}
                  className="group flex items-center gap-3 rounded-lg bg-[#0F6E451A] p-1 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(31,77,61,0.15)]"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#0F6E4520]">
                    <Icon
                      className="h-5 w-5 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.75}
                    />
                  </div>

                  <p className="font-body text-[15px] leading-[24px] text-[var(--foreground)]">
                    <span className="font-bold">{value.label}</span>{" "}
                    {value.text}
                  </p>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}