"use client";

import { motion } from "framer-motion";
import { Target, MessageSquare, Zap, HandHeart } from "lucide-react";

const CARDS = [
  {
    icon: Target,
    title: "Especialización real, no generalismo",
    description:
      "Nos concentramos en sectores específicos. Eso nos permite conocer en profundidad la regulación, los usos y las problemáticas concretas de cada industria, brindando asesoramiento de mayor calidad y eficiencia.",
  },
  {
    icon: MessageSquare,
    title: "Lenguaje claro y accesible",
    description:
      "Traducimos el derecho a un lenguaje que nuestros clientes puedan entender y aplicar. Explicamos cada decisión, cada riesgo y cada opción de manera transparente, sin tecnicismos innecesarios.",
  },
  {
    icon: Zap,
    title: "Respuesta ágil y compromiso real",
    description:
      "Entendemos que los tiempos del negocio no siempre coinciden con los tiempos judiciales. Respondemos con rapidez, priorizamos la prevención y actuamos con sentido de urgencia cuando la situación lo requiere.",
  },
  {
    icon: HandHeart,
    title: "Acompañamiento a largo plazo",
    description:
      "No buscamos resolver un problema puntual y desaparecer. Construimos relaciones duraderas con nuestros clientes, funcionando como asesores estratégicos de confianza a lo largo del tiempo.",
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
        <h2 className="mt-3 text-[32px] leading-[40px] text-[var(--on-surface)] md:text-[40px] md:leading-[48px]">
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
              className="group flex flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--secondary)]/30 hover:shadow-[0_12px_32px_rgba(184,142,35,0.12)] [border-left:4px_solid_var(--secondary)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[var(--secondary)]/10 transition-colors duration-300 group-hover:bg-[var(--secondary)]/20">
                  <Icon
                    className="h-5 w-5 text-[var(--secondary)]"
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