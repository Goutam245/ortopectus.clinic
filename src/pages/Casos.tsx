import { useState } from "react";
import { motion } from "framer-motion";
import { Star, X } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";

type Case = { id: number; procedure: string; category: string; age: number; recovery: string; result: string; image: string };

const cases: Case[] = [
  { id: 1, procedure: "Pectus Excavatum — Nuss", category: "Deformidades", age: 22, recovery: "4 semanas", result: "Corrección completa con cicatrices mínimas.", image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1200&q=85" },
  { id: 2, procedure: "Remodelación Costal", category: "Estética", age: 31, recovery: "2 semanas", result: "Definición de cintura armoniosa.", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=85" },
  { id: 3, procedure: "Reconstrucción Torácica", category: "Reconstructiva", age: 47, recovery: "6 semanas", result: "Restauración funcional y estética.", image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1200&q=85" },
  { id: 4, procedure: "Pectus Carinatum — Abramson", category: "Deformidades", age: 17, recovery: "3 semanas", result: "Resultado simétrico y estable.", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=85" },
  { id: 5, procedure: "Simpatectomía Toracoscópica", category: "Hiperhidrosis", age: 25, recovery: "1 día", result: "Resolución inmediata de hiperhidrosis palmar.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=85" },
  { id: 6, procedure: "Osteosíntesis Costal", category: "Trauma", age: 54, recovery: "4 semanas", result: "Recuperación funcional acelerada.", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=85" },
];

const categories = ["Todos", "Deformidades", "Estética", "Reconstructiva", "Trauma", "Hiperhidrosis"];

const Casos = () => {
  const [filter, setFilter] = useState("Todos");
  const [active, setActive] = useState<Case | null>(null);
  const list = filter === "Todos" ? cases : cases.filter((c) => c.category === filter);

  return (
    <>
      <PageHero
        label="Portafolio Clínico"
        title="Casos"
        italic="Reales"
        subtitle="Resultados que reflejan compromiso, técnica y dedicación. Imágenes compartidas con consentimiento del paciente."
        image="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1920&q=90"
      />

      <section className="py-20 bg-midnight">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 h-10 rounded-md text-sm border transition-colors ${
                  filter === c ? "bg-gold text-midnight border-gold" : "border-border text-silver hover:text-gold hover:border-gold/50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((c, i) => (
              <motion.button
                layout
                key={c.id}
                onClick={() => setActive(c)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-left group relative rounded-md overflow-hidden border border-border hover:border-gold/40 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.image} alt={c.procedure} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5 bg-steel/50">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-teal-bright">{c.category}</div>
                  <h3 className="font-display text-xl mt-2">{c.procedure}</h3>
                  <div className="mt-3 flex justify-between text-xs text-silver">
                    <span>{c.age} años · {c.recovery}</span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-3 h-3 fill-gold text-gold" />)}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <p className="mt-12 text-center text-xs text-silver/70 italic">
            Aviso: Las imágenes y datos compartidos cuentan con autorización expresa del paciente. Se respeta su anonimato.
          </p>
        </div>
      </section>

      {active && (
        <div className="fixed inset-0 z-[60] bg-midnight/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-gold rounded-md max-w-3xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video">
              <img src={active.image} alt={active.procedure} className="w-full h-full object-cover" />
              <button onClick={() => setActive(null)} aria-label="Cerrar" className="absolute top-4 right-4 w-9 h-9 rounded-full bg-midnight/70 flex items-center justify-center text-foreground hover:bg-gold hover:text-midnight transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-7">
              <div className="text-[10px] tracking-[0.3em] uppercase text-teal-bright">{active.category}</div>
              <h3 className="mt-2 font-display text-3xl">{active.procedure}</h3>
              <p className="mt-4 text-silver">{active.result}</p>
              <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                <div className="glass rounded-md p-3"><span className="text-gold">Edad:</span> <span className="text-silver">{active.age} años</span></div>
                <div className="glass rounded-md p-3"><span className="text-gold">Recuperación:</span> <span className="text-silver">{active.recovery}</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <FinalCTA />
    </>
  );
};

export default Casos;
