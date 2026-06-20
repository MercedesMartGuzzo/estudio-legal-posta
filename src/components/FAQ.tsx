"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "¿En qué áreas del derecho se especializa el estudio?",
    answer:
      "Nos especializamos en derecho comercial y societario, cooperativas, empresas de turismo, medios y entretenimiento, y propiedad intelectual. Trabajamos exclusivamente en sectores donde la complejidad normativa exige conocimiento profundo y actualización permanente.",
  },
  {
    question: "¿Atienden a personas físicas o solo a empresas?",
    answer:
      "Atendemos tanto a personas físicas como a empresas, emprendedores, cooperativas y organizaciones. Lo importante es que la consulta esté vinculada a nuestras áreas de especialización.",
  },
  {
    question: "¿Cómo es el proceso para iniciar una consulta?",
    answer:
      "Podés contactarnos por el formulario de contacto o agendar una consulta inicial directamente desde nuestra agenda. En esa primera reunión analizamos tu situación y te explicamos las opciones disponibles, sin compromiso.",
  },
  {
    question: "¿Trabajan con clientes de todo el país?",
    answer:
      "Sí. Atendemos clientes de todo el territorio argentino de manera remota. Para quienes están en Buenos Aires también ofrecemos reuniones presenciales.",
  },
  {
    question: "¿Cuánto tiempo lleva constituir una cooperativa?",
    answer:
      "El plazo varía según el tipo de cooperativa y la documentación disponible. En general, el proceso ante el INAES puede llevar entre 3 y 6 meses. Acompañamos todo el proceso para asegurar que cada paso se complete correctamente y sin demoras evitables.",
  },
  {
    question: "¿Ofrecen servicios de asesoramiento continuo?",
    answer:
      "Sí. Muchos de nuestros clientes trabajan con nosotros de manera continua como asesores jurídicos externos. Esta modalidad permite anticipar riesgos, revisar contratos y tomar decisiones con respaldo legal permanente, sin necesidad de contratar un departamento legal interno.",
  },
];

const LEFT = FAQS.filter((_, i) => i % 2 === 0);
const RIGHT = FAQS.filter((_, i) => i % 2 !== 0);

function FAQColumn({ items }: { items: typeof FAQS }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        const isHovered = hoveredIndex === index;
        return (
          <div key={faq.question} className="border-b border-[var(--border)]">
            <div
              className="relative overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Fondo verde botella que se desliza de izquierda a derecha en hover — solo si está cerrada */}
              {!isOpen && (
                <motion.div
                  className="absolute inset-0 bg-[var(--primary)]/80"
                  initial={false}
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />
              )}

              <button
                type="button"
                onClick={() => toggle(index)}
                className="relative z-10 flex w-full items-center justify-between gap-6 px-4 py-5 text-left"
              >
                <span
                  className={`font-heading text-[17px] leading-snug transition-colors duration-200 ${
                    isHovered && !isOpen ? "text-white" : "text-[var(--on-surface)]"
                  }`}
                >
                  {faq.question}
                </span>
                {isOpen ? (
                  <Minus className="h-4 w-4 flex-shrink-0 text-[var(--primary)]" strokeWidth={2} />
                ) : (
                  <Plus
                    className={`h-4 w-4 flex-shrink-0 transition-colors duration-200 ${
                      isHovered ? "text-white" : "text-[var(--foreground)]/50"
                    }`}
                    strokeWidth={2}
                  />
                )}
              </button>
            </div>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="font-body px-2 pb-5 text-[14px] leading-[24px] text-[var(--foreground)]">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-[120px] md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-[680px] text-center"
      >
        <p className="font-body text-sm font-bold uppercase tracking-[0.1em] text-[var(--secondary)]">
          Preguntas frecuentes
        </p>
        <h2 className="font-heading mt-3 text-[32px] leading-[40px] text-[var(--on-surface)] md:text-[40px] md:leading-[48px]">
          Todo lo que necesitás{" "}
          <span className="text-[var(--primary)]">saber</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        className="mt-14 grid grid-cols-1 gap-x-16 md:grid-cols-2"
      >
        <FAQColumn items={LEFT} />
        <FAQColumn items={RIGHT} />
      </motion.div>
    </section>
  );
}