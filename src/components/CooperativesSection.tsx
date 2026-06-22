"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

export default function CooperativesSection() {
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
      className="overflow-x-hidden pb-[120px]"
    >
      <motion.div
        style={{ scale, opacity, y }}
        className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden rounded-[2rem] bg-[var(--surface-alt)] px-6 py-16 md:px-16 md:py-20"
      >
        <div className="mx-auto max-w-[1200px] px-4 md:px-12">
          <div className="max-w-[800px] text-start">
            <p className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--secondary)]">
              Área Especializada
            </p>

            <h2 className="mt-3 text-[32px] leading-[40px] text-[var(--on-surface)] md:text-[40px] md:leading-[48px]">
              Cooperativas:{" "}
              <span className="text-[var(--primary)]">
                Asesoramiento integral
              </span>{" "}
              desde la constitución
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/cooperative-s.png"
                alt="Reunión de asociados de una cooperativa"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-base leading-[28px] text-[var(--foreground)] md:text-lg">
                Las cooperativas requieren un conocimiento jurídico específico
                que va más allá del derecho societario tradicional. Asesoramos
                en todo el ciclo de vida de la cooperativa, con especial
                atención al marco normativo de la{" "}
                <span className="font-bold">Ley 20.337</span> y las
                disposiciones del INAES.
              </p>

              <p className="text-base leading-[28px] text-[var(--foreground)] md:text-lg">
                Acompañamos cooperativas de trabajo, de consumo, de crédito, de
                vivienda y de servicios, entendiendo las particularidades de
                cada tipo y las necesidades concretas de sus asociados.
              </p>

              <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {FEATURES.map((feature, index) => (
                  <div
                    key={feature.title}
                    className={`group rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)]/20 hover:shadow-[0_8px_20px_rgba(31,77,61,0.1)] ${
                      index === 2 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <h3 className="text-lg text-[var(--primary)]">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-[22px] text-[var(--foreground)]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}