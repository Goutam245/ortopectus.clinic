import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1920&q=90)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/85 to-midnight/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />

      <div className="container relative z-10 pt-32 pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="max-w-3xl"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="label-tag text-gold mb-8"
          >
            Excelencia Quirúrgica
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display text-5xl sm:text-6xl lg:text-[82px] leading-[1.05] text-foreground"
          >
            Transformamos<br />Vidas a Través de
            <br />
            <em className="not-italic font-display italic text-teal-bright">la Cirugía Torácica</em>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-8 text-base sm:text-lg text-silver max-w-xl leading-relaxed"
          >
            Somos líderes en el manejo integral de deformidades torácicas, combinando técnicas mínimamente invasivas con la más alta innovación tecnológica a nivel mundial.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button asChild variant="gold" size="xl">
              <Link to="/contacto">
                <Phone className="w-4 h-4" />
                Agendar Consulta Ahora
              </Link>
            </Button>
            <Button asChild variant="whiteOutline" size="xl">
              <Link to="/servicios">
                Conocer Servicios
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm text-silver"
          >
            {["Técnicas Mínimamente Invasivas", "Tecnología de Vanguardia", "+2,000 Pacientes Atendidos"].map((b) => (
              <div key={b} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-bright" />
                <span>{b}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-silver/60 text-xs uppercase tracking-[0.4em] animate-pulse-soft">
        Scroll
      </div>
    </section>
  );
};
