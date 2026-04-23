import { motion } from "framer-motion";

type Props = {
  label: string;
  title: string;
  italic?: string;
  subtitle?: string;
  image: string;
  height?: string;
};

export const PageHero = ({ label, title, italic, subtitle, image, height = "60vh" }: Props) => {
  return (
    <section className="relative flex items-end overflow-hidden" style={{ minHeight: height }}>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/85 to-midnight/40" />
      <div className="container relative pt-40 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="label-tag text-gold">{label}</div>
          <h1 className="mt-5 font-display text-5xl md:text-7xl text-foreground max-w-4xl">
            {title} {italic && <em className="italic text-teal-bright">{italic}</em>}
          </h1>
          {subtitle && <p className="mt-5 text-silver max-w-2xl">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
};
