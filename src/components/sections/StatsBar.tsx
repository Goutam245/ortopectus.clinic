import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 2000, prefix: "+", label: "Pacientes Atendidos" },
  { value: 15, prefix: "+", label: "Años de Experiencia" },
  { value: 500, prefix: "+", label: "Cirugías Exitosas" },
  { value: 98, suffix: "%", label: "Satisfacción del Paciente" },
];

const Counter = ({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export const StatsBar = () => {
  return (
    <section className="relative -mt-20 z-20">
      <div className="container">
        <div className="glass-gold rounded-lg py-8 px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gold/20">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-4 py-4"
            >
              <div className="font-display text-4xl md:text-5xl text-gold leading-none">
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.2em] text-silver">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
