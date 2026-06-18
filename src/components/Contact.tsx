"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, MessageCircle, CheckCircle } from "lucide-react";

const schema = z.object({
  nombre: z.string().min(2, "Ingresá tu nombre completo"),
  email: z.string().email("Ingresá un email válido"),
  telefono: z.string().min(8, "Ingresá un número válido"),
  area: z.string().min(1, "Seleccioná un área"),
  mensaje: z.string().min(20, "Contanos un poco más sobre tu consulta"),
});

type FormData = z.infer<typeof schema>;

const AREAS = [
  "Derecho Comercial",
  "Derecho Societario",
  "Cooperativas",
  "Empresas de Turismo",
  "Medios y Entretenimiento",
  "Propiedad Intelectual",
];

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Ubicación",
    lines: ["Buenos Aires, Argentina", "Atención presencial y virtual en todo el país"],
  },
  {
    icon: Mail,
    label: "Correo Electrónico",
    lines: ["consultas@estudiojuridico.com.ar"],
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

const inputBase =
  "w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-3 font-body text-sm text-[var(--on-surface)] placeholder:text-[var(--foreground)]/40 outline-none transition-colors duration-200 focus:border-[var(--primary)]";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setServerError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      reset();
    } catch {
      setServerError(true);
    }
  };

  return (
    <section id="contacto" className="mx-auto max-w-[1200px] px-4 py-[120px] md:px-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-[680px] text-center"
      >
        <p className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--secondary)]">
          Contacto
        </p>
        <h2 className="mt-3 text-[32px] leading-[40px] text-[var(--on-surface)] md:text-[40px] md:leading-[48px]">
          Consulte con{" "}
          <span className="text-[var(--primary)]">nuestro equipo</span>
        </h2>
        <p className="mt-4 text-base leading-[28px] text-[var(--foreground)]">
          Complete el formulario y un abogado especializado se comunicará con usted
          dentro de las 24 horas hábiles para coordinar una consulta inicial.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
        {/* Formulario */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] p-8 md:p-10"
        >
          <h3 className="text-xl text-[var(--on-surface)]">
            Formulario de Consulta
          </h3>

          {submitted ? (
            <div className="mt-8 flex flex-col items-center gap-4 py-8 text-center">
              <CheckCircle className="h-12 w-12 text-[var(--primary)]" strokeWidth={1.5} />
              <p className="text-xl text-[var(--on-surface)]">
                ¡Consulta enviada!
              </p>
              <p className="text-sm text-[var(--foreground)]">
                Nos comunicaremos con usted dentro de las 24 horas hábiles.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-2 text-sm text-[var(--primary)] underline underline-offset-4"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-5">
              <div>
                <label className="mb-1.5 block text-sm font-bold text-[var(--on-surface)]">
                  Nombre completo
                </label>
                <input
                  {...register("nombre")}
                  placeholder="Ingresá tu nombre y apellido"
                  className={inputBase}
                />
                {errors.nombre && (
                  <p className="mt-1 text-xs text-red-500">{errors.nombre.message}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-bold text-[var(--on-surface)]">
                  Correo electrónico
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Su dirección de e-mail de contacto"
                  className={inputBase}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-bold text-[var(--on-surface)]">
                  Teléfono / WhatsApp
                </label>
                <input
                  {...register("telefono")}
                  placeholder="Número con código de área"
                  className={inputBase}
                />
                {errors.telefono && (
                  <p className="mt-1 text-xs text-red-500">{errors.telefono.message}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-bold text-[var(--on-surface)]">
                  Área de consulta
                </label>
                <select {...register("area")} className={inputBase}>
                  <option value="">Seleccioná un área</option>
                  {AREAS.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
                {errors.area && (
                  <p className="mt-1 text-xs text-red-500">{errors.area.message}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-bold text-[var(--on-surface)]">
                  Descripción de su consulta
                </label>
                <textarea
                  {...register("mensaje")}
                  rows={4}
                  placeholder="Cuéntenos brevemente su situación o necesidad jurídica para que podamos orientarle mejor desde el primer contacto."
                  className={`${inputBase} resize-none`}
                />
                {errors.mensaje && (
                  <p className="mt-1 text-xs text-red-500">{errors.mensaje.message}</p>
                )}
              </div>

              {serverError && (
                <p className="text-sm text-red-500">
                  Ocurrió un error al enviar. Intentá de nuevo o escribinos directamente.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 rounded-md bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[var(--primary-light)] disabled:opacity-60"
              >
                {isSubmitting ? "Enviando..." : "Enviar Consulta"}
              </button>
            </form>
          )}
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
            <h3 className="text-xl text-[var(--on-surface)]">
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