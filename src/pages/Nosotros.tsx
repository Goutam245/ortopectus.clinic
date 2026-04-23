import { motion } from "framer-motion";
import { Award, Heart, Microscope, Sparkles, Linkedin } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { StatsBar } from "@/components/sections/StatsBar";
import { FinalCTA } from "@/components/sections/FinalCTA";

const team = [
  { name: "Dr. Alejandro Vargas", role: "Cirujano Torácico Líder", credentials: "Board Certified · 20+ años", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=85" },
  { name: "Dra. Mariana Rivera", role: "Cirujana Estética Torácica", credentials: "Fellowship Mayo Clinic", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=85" },
  { name: "Dr. Luis Fernández", role: "Anestesiología Cardiotorácica", credentials: "Maestría Cleveland Clinic", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=85" },
];

const timeline = [
  ["2008", "Fundación de ORTOPECTUS"],
  ["2012", "Primer programa de Pectus en LATAM"],
  ["2016", "Adopción de cirugía robótica"],
  ["2020", "Clínica de remodelación estética"],
  ["2024", "+2,000 pacientes atendidos"],
];

const values = [
  { icon: Award, title: "Excelencia", desc: "Estándares quirúrgicos internacionales en cada procedimiento." },
  { icon: Sparkles, title: "Innovación", desc: "Adopción temprana de tecnología que mejora resultados." },
  { icon: Heart, title: "Humanismo", desc: "Cada paciente es escuchado, acompañado y respetado." },
  { icon: Microscope, title: "Precisión", desc: "Planificación rigurosa basada en evidencia científica." },
];

const Nosotros = () => {
  return (
    <>
      <PageHero
        label="Nuestra Historia"
        title="Sobre"
        italic="ORTOPECTUS"
        subtitle="Una clínica fundada por cirujanos torácicos con la misión de elevar el estándar de atención en Latinoamérica."
        image="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1920&q=90"
      />

      {/* Mission */}
      <section className="py-24 bg-navy">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=90" alt="Quirófano" loading="lazy" className="rounded-md w-full aspect-[4/3] object-cover border border-border" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="label-tag text-gold">Misión y Visión</div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl">Devolver calidad de vida con precisión y calidez</h2>
            <p className="mt-6 text-silver leading-relaxed">
              Nuestra misión es ofrecer cirugía torácica de clase mundial accesible, humana y respaldada por la evidencia. Nuestra visión: ser la clínica de referencia en cirugía torácica integral y estética en Latinoamérica.
            </p>
            <p className="mt-4 text-silver leading-relaxed">
              Trabajamos bajo un modelo multidisciplinario donde cirugía, imagen, anestesiología, rehabilitación y psicología convergen alrededor del paciente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-midnight">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="label-tag text-teal-bright justify-center flex">Nuestro Equipo</div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl">Especialistas que <em className="italic text-gold">marcan diferencia</em></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-gold rounded-md overflow-hidden group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{m.name}</h3>
                  <p className="text-teal-bright text-sm mt-1">{m.role}</p>
                  <p className="text-silver text-xs mt-2">{m.credentials}</p>
                  <a href="#" className="mt-4 inline-flex items-center gap-2 text-gold text-sm gold-link">
                    <Linkedin className="w-4 h-4" /> Perfil profesional
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-navy">
        <div className="container max-w-3xl">
          <div className="text-center mb-14">
            <div className="label-tag text-gold justify-center flex">Trayectoria</div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl">Nuestra Historia</h2>
          </div>
          <div className="relative pl-8 border-l border-gold/40 space-y-10">
            {timeline.map(([year, text], i) => (
              <motion.div key={year} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative">
                <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-gold ring-4 ring-midnight" />
                <div className="font-display text-3xl text-gold">{year}</div>
                <div className="text-silver mt-1">{text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Values */}
      <section className="py-24 bg-midnight mt-12">
        <div className="container">
          <div className="text-center mb-14">
            <div className="label-tag text-teal-bright justify-center flex">Valores</div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl">Lo que nos guía</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center p-7 rounded-md border border-border hover:border-gold/50 transition-colors">
                <div className="w-14 h-14 rounded-md mx-auto bg-gradient-teal flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-display text-xl">{v.title}</h3>
                <p className="text-sm text-silver mt-2">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
};

export default Nosotros;
