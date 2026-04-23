import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const cases = [
  { n: "01", procedure: "Pectus Excavatum — Técnica Nuss", recovery: "4 semanas", rating: 5, image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1200&q=85" },
  { n: "02", procedure: "Remodelación Costal Estética", recovery: "2 semanas", rating: 5, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=85" },
  { n: "03", procedure: "Reconstrucción Torácica", recovery: "6 semanas", rating: 5, image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1200&q=85" },
];

export const Results = () => {
  return (
    <section className="relative py-28 bg-midnight bg-gradient-mesh">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="label-tag text-teal-bright justify-center flex">Casos Clínicos</div>
          <h2 className="mt-6 text-4xl md:text-6xl font-display">
            Resultados que <em className="italic text-gold">Transforman Vidas</em>
          </h2>
          <p className="mt-5 text-silver">Cada caso es una historia de confianza, precisión y resultados que hablan por sí solos.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.article
              key={c.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-gold rounded-md overflow-hidden group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={c.image} alt={c.procedure} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 text-xs tracking-[0.3em] uppercase text-gold">Caso N° {c.n}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-silver border-b border-border pb-3">
                  <span>Antes</span>
                  <span className="text-gold">→</span>
                  <span>Después</span>
                </div>
                <h3 className="mt-5 font-display text-xl text-foreground">{c.procedure}</h3>
                <div className="mt-4 flex items-center justify-between text-xs text-silver">
                  <span>Recuperación: <span className="text-foreground">{c.recovery}</span></span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: c.rating }).map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
                <Link to="/casos" className="mt-5 inline-flex items-center gap-2 text-sm text-gold gold-link">
                  Ver caso completo <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button asChild variant="goldOutline" size="lg">
            <Link to="/casos">Ver Portafolio Completo <ArrowRight className="w-4 h-4" /></Link>
          </Button>
          <p className="mt-4 text-xs text-silver/70 italic">Las imágenes se muestran con consentimiento del paciente.</p>
        </div>
      </div>
    </section>
  );
};
