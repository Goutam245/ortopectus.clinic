import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export const ServicesGrid = () => {
  return (
    <section className="relative py-28 bg-midnight">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="label-tag text-teal-bright justify-center flex">Especialidades</div>
          <h2 className="mt-6 text-4xl md:text-6xl font-display">Nuestras Especialidades</h2>
          <p className="mt-5 text-silver">
            Tratamientos de vanguardia para cada condición torácica, diseñados con precisión quirúrgica y atención humana.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
              >
                <Link
                  to={`/servicios#${s.slug}`}
                  className="group relative block h-[380px] rounded-md overflow-hidden border border-border/40"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${s.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-card" />
                  <div className="absolute top-0 left-0 h-0.5 bg-gold w-12 group-hover:w-full transition-all duration-500" />

                  <div className="relative z-10 h-full flex flex-col justify-end p-7">
                    <div className="w-12 h-12 rounded-md glass flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-teal-bright" />
                    </div>
                    <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm text-silver line-clamp-2">{s.short}</p>
                    <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Ver más <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
