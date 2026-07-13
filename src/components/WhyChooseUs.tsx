"use client";

import { motion } from "framer-motion";
import { Target, MessageSquare, Zap, HandHeart } from "lucide-react";

const CARDS = [
  {
    icon: Target,
    title: "Especialización real, no generalismo",
    description:
      "Nos concentramos en sectores específicos, conociendo a fondo la regulación y problemáticas de cada industria.",
  },
  {
    icon: MessageSquare,
    title: "Lenguaje claro y accesible",
    description:
      "Traducimos el derecho a un lenguaje transparente y aplicable, sin tecnicismos innecesarios.",
  },
  {
    icon: Zap,
    title: "Respuesta ágil y compromiso real",
    description:
      "Actuamos con rapidez y sentido de urgencia, priorizando la prevención de conflictos.",
  },
  {
    icon: HandHeart,
    title: "Acompañamiento a largo plazo",
    description:
      "Construimos relaciones duraderas generando un asesoramiento estratégico de confianza.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyChooseUs() {
  return (
    <section
      id="por-que-elegirnos"
      className="mx-auto max-w-[1200px] px-4 py-[120px] md:px-16"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[800px] text-start"
      >
        <p className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--secondary)]">
          ¿Por qué elegirnos?
        </p>
        <h2 className="mt-3 text-[32px] leading-[40px] text-[var(--on-surface)] md:text-[40px] md:leading-[48px] font-[500]">
          La diferencia está en el{" "}
          <span className="text-[var(--primary)]">enfoque</span>
        </h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
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
                delay: (index % 2) * 0.1,
              }}
              className="group flex flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-[0_12px_32px_rgba(184,142,35,0.12)] [border-left:4px_solid_var(--primary)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10 transition-colors duration-300 group-hover:bg-[var(--primary)]/20">
                  <Icon
                    className="h-5 w-5 text-[var(--primary)]"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="font-heading text-xl text-[var(--on-surface)]">
                  {card.title}
                </h3>
              </div>
              <p className="text-[15px] leading-[26px] text-[var(--foreground)]">
                {card.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}