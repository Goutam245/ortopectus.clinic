import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Microscope, Zap, Users, Gem, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Microscope, title: "Técnicas Mínimamente Invasivas", desc: "Recuperación más rápida con incisiones reducidas y menor dolor postoperatorio." },
  { icon: Zap, title: "Tecnología de Vanguardia", desc: "Equipamiento de última generación para diagnósticos precisos y cirugías seguras." },
  { icon: Users, title: "Equipo Multidisciplinario", desc: "Especialistas altamente capacitados trabajando en conjunto para tu bienestar." },
  { icon: Gem, title: "Atención Personalizada", desc: "Acompañamiento integral desde la primera consulta hasta el alta definitiva." },
];

export const WhyChoose = () => {
  return (
    <section className="relative py-28 bg-navy overflow-hidden">
      <div className="container grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-md overflow-hidden aspect-[4/5] shadow-elegant">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=90"
              alt="Quirófano ORTOPECTUS"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-4 md:-right-10 glass-gold rounded-md p-6 max-w-[220px]">
            <div className="font-display text-4xl text-gold leading-none">15+ años</div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-silver">de excelencia quirúrgica</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="label-tag text-gold">Diferenciador</div>
          <h2 className="mt-6 text-4xl md:text-5xl font-display">¿Por Qué Elegir <span className="italic text-gold">ORTOPECTUS</span>?</h2>
          <p className="mt-5 text-silver max-w-xl">
            Una clínica donde la precisión técnica y la calidez humana se encuentran para devolverte calidad de vida.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4"
              >
                <div className="w-11 h-11 shrink-0 rounded-md bg-teal-deep/30 border border-teal-bright/30 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-teal-bright" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground">{f.title}</h4>
                  <p className="mt-1 text-sm text-silver leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Button asChild variant="goldOutline" size="lg" className="mt-10">
            <Link to="/nosotros">
              Conocer Nuestro Equipo <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
