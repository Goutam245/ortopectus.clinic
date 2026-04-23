import { motion } from "framer-motion";
import { Cpu, Bot, Box, Wrench } from "lucide-react";

const tech = [
  { icon: Bot, title: "Cirugía Robótica", desc: "Sistema Da Vinci para precisión submilimétrica en procedimientos complejos." },
  { icon: Cpu, title: "VATS", desc: "Cirugía videoasistida con incisiones mínimas y rápida recuperación." },
  { icon: Box, title: "Navegación 3D", desc: "Reconstrucción intraoperatoria para planificación quirúrgica exacta." },
  { icon: Wrench, title: "Bar Modification System", desc: "Tecnología Nuss de última generación para corrección de Pectus." },
];

export const Technology = () => {
  return (
    <section className="relative py-28 bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="label-tag text-gold justify-center flex">Innovación</div>
          <h2 className="mt-6 text-4xl md:text-5xl font-display">
            Innovación al Servicio <em className="italic text-teal-bright">de la Salud</em>
          </h2>
          <p className="mt-5 text-silver">Utilizamos la tecnología más avanzada disponible a nivel mundial.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tech.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-steel/60 backdrop-blur-sm rounded-md p-7 border border-border hover:border-teal-bright/40 transition-colors group"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-bright/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-md bg-teal-deep/40 flex items-center justify-center mb-5">
                <t.icon className="w-6 h-6 text-teal-bright" />
              </div>
              <h3 className="font-display text-xl text-foreground">{t.title}</h3>
              <p className="mt-2 text-sm text-silver leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
