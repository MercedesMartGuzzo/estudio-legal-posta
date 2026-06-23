"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Clapperboard,
  Cloud,
  Radio,
  Users,
  Megaphone,
  Globe,
} from "lucide-react";

const LIST_ITEMS = [
  { icon: Clapperboard, text: "Contratos de producción audiovisual y musical" },
  { icon: Cloud, text: "Licencias de contenido para plataformas OTT" },
  { icon: Radio, text: "Regulación de medios de comunicación (ENACOM)" },
  { icon: Users, text: "Contratos con artistas, actores y creadores" },
  { icon: Megaphone, text: "Acuerdos de patrocinio y publicidad" },
  { icon: Globe, text: "Gestión de derechos en plataformas digitales" },
];

const GREEN_SHADES = [
  "#0F6E45",
  "#178F52",
  "#1FA85E",
  "#0D5C39",
  "#2BBF6B",
  "#0A4730",
];

const leftItems = LIST_ITEMS.slice(0, 3);
const rightItems = LIST_ITEMS.slice(3);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function DigitalSectionMedia() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-[120px] md:px-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=" max-w-[800px] text-start"
      >
        <p className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--secondary)]">
          Área Especializada
        </p>

        <h2 className="mt-3 text-[32px] leading-[40px] text-[var(--on-surface)] md:text-[40px] md:leading-[48px] font-[500]">
          Medios, Entretenimiento{" "}
          <span className="text-[var(--primary)]">& Cultura Digital</span>
        </h2>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Columna izquierda */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="order-2 flex flex-col gap-6 lg:order-1"
        >
          <p className="text-base leading-[28px] text-[var(--foreground)] md:text-lg">
            La industria de los medios y el entretenimiento opera en una
            intersección única entre el derecho de autor, los contratos
            artísticos, la regulación de radiodifusión y el derecho digital.
            Asesoramos a productoras, artistas, sellos discográficos, medios
            de comunicación y plataformas de streaming.
          </p>

          <p className="text-base leading-[28px] text-[var(--foreground)] md:text-lg">
            En un entorno donde el contenido digital se monetiza a escala
            global, contar con una estructura jurídica adecuada es clave para
            proteger creaciones, negociar contratos equitativos y cumplir con
            la regulación local e internacional.
          </p>

          {/* Desktop: primeros 3 */}
        <ul className="hidden flex-col gap-3 lg:mt-[72px] lg:flex">
            {leftItems.map((item, index) => {
              const Icon = item.icon;
              const color = GREEN_SHADES[index];

              return (
                <motion.li
                  key={item.text}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeUp}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.06,
                  }}
                  className="group flex items-center gap-3 rounded-lg p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(31,77,61,0.15)]"
                  style={{ backgroundColor: `${color}33` }}
                >
                  <Icon
                    className="h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ color }}
                    strokeWidth={2}
                  />

                  <p className="text-[15px] leading-[24px] text-[var(--foreground)]">
                    {item.text}
                  </p>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>

        {/* Columna derecha */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="order-1 flex flex-col gap-8 lg:order-2"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image
              src="/media-section.png"
              alt="Equipo de producción audiovisual: claqueta y luces de filmación"
              fill
              className="object-cover"
            />
          </div>

          {/* Desktop: últimos 3 */}
          <ul className="hidden flex-col gap-3 lg:flex">
            {rightItems.map((item, index) => {
              const Icon = item.icon;
              const color = GREEN_SHADES[index + 3];

              return (
                <motion.li
                  key={item.text}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeUp}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.06,
                  }}
                  className="group flex items-center gap-3 rounded-lg p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(31,77,61,0.15)]"
                  style={{ backgroundColor: `${color}33` }}
                >
                  <Icon
                    className="h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ color }}
                    strokeWidth={2}
                  />

                  <p className="text-[15px] leading-[24px] text-[var(--foreground)]">
                    {item.text}
                  </p>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>

        {/* Mobile: los 6 items juntos */}
        <ul className="order-3 flex flex-col gap-3 lg:hidden">
          {LIST_ITEMS.map((item, index) => {
            const Icon = item.icon;
            const color = GREEN_SHADES[index];

            return (
              <motion.li
                key={item.text}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: index * 0.06,
                }}
                className="group flex items-center gap-3 rounded-lg p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(31,77,61,0.15)]"
                style={{ backgroundColor: `${color}33` }}
              >
                <Icon
                  className="h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ color }}
                  strokeWidth={2}
                />

                <p className="text-[15px] leading-[24px] text-[var(--foreground)]">
                  {item.text}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}