import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Después de años sufriendo con el Pectus Excavatum, ORTOPECTUS transformó completamente mi vida. La técnica mínimamente invasiva fue increíble.",
    name: "Carlos M., 28 años",
    procedure: "Corrección Pectus Excavatum",
  },
  {
    quote: "El equipo de ORTOPECTUS es excepcional. Desde la primera consulta hasta la recuperación, siempre me sentí en las mejores manos.",
    name: "Ana L., 35 años",
    procedure: "Remodelación Costal",
  },
  {
    quote: "Gracias a ORTOPECTUS recuperé mi confianza. La cirugía cambió no solo mi apariencia, sino toda mi calidad de vida.",
    name: "Roberto S., 42 años",
    procedure: "Reconstrucción Torácica",
  },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[i];

  return (
    <section className="relative py-28 bg-navy">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="label-tag text-teal-bright justify-center flex">Testimonios</div>
          <h2 className="mt-6 text-4xl md:text-5xl font-display">
            Lo Que Dicen <em className="italic text-gold">Nuestros Pacientes</em>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-gold rounded-md p-10 md:p-14 text-center relative"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-display text-[120px] leading-none text-gold/30 select-none">"</div>
              <p className="font-accent italic text-xl md:text-2xl text-foreground leading-relaxed">
                {t.quote}
              </p>
              <div className="mt-8 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <div className="mt-5 font-semibold text-teal-bright">{t.name}</div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-silver mt-1">{t.procedure}</div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={() => setI((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-midnight transition-colors flex items-center justify-center"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, j) => (
                <button
                  key={j}
                  onClick={() => setI(j)}
                  className={`h-1.5 rounded-full transition-all ${j === i ? "w-8 bg-gold" : "w-2 bg-silver/40"}`}
                  aria-label={`Testimonio ${j + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setI((p) => (p + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-midnight transition-colors flex items-center justify-center"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
