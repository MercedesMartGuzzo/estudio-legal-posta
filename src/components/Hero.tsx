'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  } as const;

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  } as const;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff8f5] to-[#f9f2ef] pt-28 md:pt-24 lg:pt-32 pb-16 md:pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1200px] px-4 md:px-16">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Content */}
          <div className="flex flex-col gap-6 md:gap-8">
            <motion.div className="space-y-3" variants={itemVariants}>
              <h1 className="font-[--font-heading] text-4xl md:text-5xl lg:text-5xl text-[#163a2d] leading-tight">
                Estudio{" "}
                <span className="text-[#785a00]">
                  Jurídico
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="font-[--font-body] text-base md:text-lg text-[#454240] leading-relaxed"
              variants={itemVariants}
            >
              Asesoramiento legal de excelencia en derecho comercial, societario, turismo, medios y propiedad intelectual. Soluciones jurídicas concretas para personas y empresas en Argentina.
            </motion.p>

            {/* CTAs */}
            <motion.div className="flex flex-col sm:flex-row gap-4 pt-2" variants={itemVariants}>
              <button className="px-8 py-3 border-2 border-[#1f4d3d] bg-[#1f4d3d] text-white font-[--font-body] font-medium rounded-lg [letter-spacing:1px] hover:bg-white hover:text-[#1f4d3d] transition-colors shadow-sm">
                Solicitar Consulta
              </button>
              <button className="px-8 py-3 border-2 border-[#1f4d3d] text-[#1f4d3d] font-[--font-body] font-medium rounded-lg [letter-spacing:1px] hover:bg-[#1f4d3d] hover:text-white transition-colors">
                Nuestras Áreas
              </button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="flex items-center justify-center"
            variants={imageVariants}
          >
            <div className="w-full max-w-md md:max-w-lg lg:max-w-lg relative h-64 md:h-80 lg:h-96">
              <Image
                src="/prueba-hero4.png"
                alt="Estudio Jurídico"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}