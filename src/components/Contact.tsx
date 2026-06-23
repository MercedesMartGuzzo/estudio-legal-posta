"use client";

import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";
import { MapPin, Mail, Phone, MessageCircle, CheckCircle } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/estudiopostalegal/new-meeting";

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Ubicación",
    lines: ["Buenos Aires, Argentina", "Atención presencial y virtual en todo el país"],
  },
  {
    icon: Mail,
    label: "Correo Electrónico",
    lines: ["estudiopostalegal@gmail.com"],
  },
  {
    icon: Phone,
    label: "Teléfono",
    lines: ["+54 11 XXXX-XXXX"],
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    lines: ["Consultas rápidas por WhatsApp Business"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-[1200px] px-4 py-[120px] md:px-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[680px] text-start"
      >
        <p className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--secondary)]">
          Contacto
        </p>
        <h2 className="mt-3 text-[32px] leading-[40px] text-[var(--on-surface)] md:text-[40px] md:leading-[48px] font-[500]">
          Consulte con{" "}
          <span className="text-[var(--primary)]">nuestro equipo</span>
        </h2>
        <p className="mt-4 text-base leading-[28px] text-[var(--foreground)]">
          Coordine una consulta inicial gratuita seleccionando el día y horario
          que mejor se ajuste a su disponibilidad.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
        {/* Widget de Calendly */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="overflow-hidden rounded-xl border border-[var(--border)] p-2 hover:shadow-lg transition-shadow duration-300"
        >
          <InlineWidget
            url={CALENDLY_URL}
            styles={{ height: "950px", width: "100%" }}
          />
        </motion.div>

        {/* Info de contacto */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <div>
            <h3 className="text-xl">
              Información de Contacto
            </h3>
            <div className="mt-6 flex flex-col gap-6">
              {CONTACT_INFO.map(({ icon: Icon, label, lines }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--secondary)]"
                    strokeWidth={1.75}
                  />
                  <div>
                    <p className="text-sm font-bold text-[var(--on-surface)]">{label}</p>
                    {lines.map((line) => (
                      <p key={line} className="text-sm text-[var(--foreground)]">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--border)] pt-8">
            <h3 className="text-xl text-[var(--on-surface)]">
              Horario de Atención
            </h3>
            <div className="mt-4 flex flex-col gap-1">
              <p className="text-sm text-[var(--foreground)]">
                Lunes a viernes: 9:00 a 18:00 hs
              </p>
              <p className="text-sm text-[var(--foreground)]">
                Sábados: 9:00 a 13:00 hs (con turno previo)
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-[var(--primary)]/10 p-5">
            <div className="flex items-start gap-3">
              <CheckCircle
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--primary)]"
                strokeWidth={1.75}
              />
              <p className="text-sm leading-[22px] text-[var(--on-surface)]">
                La primera consulta orientativa es{" "}
                <span className="font-bold">sin cargo</span>.
                Contáctenos con confianza.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}