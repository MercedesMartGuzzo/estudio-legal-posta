"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section
      ref={sectionRef}
      id="quienes-somos"
      className="relative z-10 -mt-20 overflow-x-hidden pb-[120px]"
    >
      <motion.div
        style={{ scale, opacity, y }}
        className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden rounded-[3rem] bg-[var(--primary)] px-6 py-16 md:px-16 md:py-20"
      >
        <div className="mx-auto max-w-[1200px] px-4 md:px-12">
          <div className="max-w-[800px] text-start">
            <p className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--surface)]">
              Quiénes Somos
            </p>

            <h2 className="mt-3 text-[32px] leading-[40px] text-[var(--surface)] md:text-[40px] md:leading-[48px] lg:text-nowrap font-[500]">
              Un estudio con{" "}
              <span className="text-[var(--secondary)]">
                visión estratégica
              </span>{" "}
              y trayectoria comprobada
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="flex flex-col gap-6">
              <p className="text-base leading-[28px] text-[var(--surface)] md:text-lg md:mt-10">
                Somos un estudio jurídico dedicado a brindar asesoramiento
                legal integral a empresas, emprendedores, cooperativas y
                personas físicas que operan en sectores dinámicos de la
                economía argentina. Nuestra práctica combina el rigor técnico
                del derecho con una comprensión profunda de los desafíos reales
                del mundo de los negocios.
              </p>

              <p className="text-base leading-[28px] text-[var(--surface)] md:text-lg">
                Trabajamos de manera cercana con nuestros clientes,
                entendiendo que cada situación requiere soluciones a medida.
                No ofrecemos respuestas genéricas: analizamos cada caso con
                dedicación, claridad y enfoque estratégico, priorizando la
                prevención de conflictos y la seguridad jurídica en cada
                operación.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-2xl text-[var(--surface)]">
                Nuestros Valores
              </h3>

              <ul className="mt-4 flex flex-col gap-3">
                {VALUES.map((value) => {
                  const Icon = value.icon;

                  return (
                    <li
                      key={value.label}
                      className="group flex items-center gap-3 rounded-lg bg-[var(--primary-light)] p-1 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(31,77,61,0.15)]"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#BD6E31]">
                        <Icon
                          className="h-5 w-5 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110"
                          strokeWidth={1.75}
                        />
                      </div>

                      <p className="text-[15px] leading-[24px] text-[var(--surface)]">
                        <span className="font-bold">{value.label}</span>{" "}
                        {value.text}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}