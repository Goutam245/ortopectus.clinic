import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const Servicios = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 200);
    }
  }, [hash]);

  return (
    <>
      <PageHero
        label="Especialidades"
        title="Servicios"
        italic="Quirúrgicos"
        subtitle="Conoce el detalle de cada uno de nuestros tratamientos: técnicas, condiciones tratadas y tiempos de recuperación."
        image="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1920&q=90"
      />

      <div className="container py-20 grid lg:grid-cols-12 gap-12">
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-28 space-y-1">
            <div className="label-tag text-gold mb-5">Índice</div>
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="block py-2 text-sm text-silver hover:text-gold border-l border-border hover:border-gold pl-4 transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </aside>

        <div className="lg:col-span-9 space-y-28">
          {services.map((s, i) => {
            const Icon = s.icon;
            const reverse = i % 2 === 1;
            return (
              <motion.section
                key={s.slug}
                id={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                className="scroll-mt-28 grid md:grid-cols-2 gap-10 items-center"
              >
                <div className={reverse ? "md:order-2" : ""}>
                  <div className="relative aspect-[4/3] rounded-md overflow-hidden border border-border">
                    <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-md glass-gold flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                  </div>
                </div>
                <div className={reverse ? "md:order-1" : ""}>
                  <div className="label-tag text-teal-bright">Especialidad</div>
                  <h2 className="mt-4 font-display text-3xl md:text-4xl">{s.title}</h2>
                  <div className="mt-5 space-y-4 text-silver leading-relaxed text-[15px]">
                    {s.long.map((p, j) => (<p key={j}>{p}</p>))}
                  </div>

                  <div className="mt-6 grid sm:grid-cols-2 gap-5">
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Condiciones</h4>
                      <ul className="space-y-1.5 text-sm text-silver">
                        {s.conditions.map((c) => (
                          <li key={c} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-teal-bright shrink-0 mt-0.5" /> {c}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Técnicas</h4>
                      <ul className="space-y-1.5 text-sm text-silver">
                        {s.techniques.map((t) => (
                          <li key={t} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-teal-bright shrink-0 mt-0.5" /> {t}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 glass rounded-md p-4 text-sm">
                    <span className="text-gold font-medium">Recuperación:</span> <span className="text-silver">{s.recovery}</span>
                  </div>

                  <Button asChild variant="goldOutline" className="mt-6">
                    <Link to="/contacto">Consultar este tratamiento <ArrowRight className="w-4 h-4" /></Link>
                  </Button>
                </div>
              </motion.section>
            );
          })}
        </div>
      </div>

      <FinalCTA />
    </>
  );
};

export default Servicios;
