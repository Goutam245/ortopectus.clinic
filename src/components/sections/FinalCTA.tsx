import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Lock, Clock, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1920&q=90)",
        }}
      />
      <div className="absolute inset-0 bg-midnight/85" />
      <div className="absolute inset-0 bg-gradient-mesh" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container relative text-center max-w-3xl mx-auto"
      >
        <div className="label-tag text-teal-bright justify-center flex">Primer Paso</div>
        <h2 className="mt-6 font-display text-5xl md:text-7xl text-foreground">
          Agenda Tu Consulta
          <br />
          <em className="italic text-gold">Hoy Mismo</em>
        </h2>
        <p className="mt-6 text-silver max-w-xl mx-auto">
          Da el primer paso hacia una vida plena. Nuestro equipo de especialistas está listo para evaluarte y diseñar el plan de tratamiento ideal para ti.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Button asChild variant="gold" size="xl">
            <Link to="/contacto">
              <Phone className="w-4 h-4" />
              Agendar Cita Ahora
            </Link>
          </Button>
          <a href="tel:+525512345678" className="text-foreground text-lg flex items-center gap-3 hover:text-gold transition-colors">
            <Phone className="w-5 h-5 text-teal-bright" />
            +52 (55) 1234-5678
          </a>
          <a
            href="https://wa.me/525598765432"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 h-14 rounded-md bg-[#25D366] text-white font-semibold hover:scale-[1.02] transition-transform"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-silver">
          <div className="flex items-center gap-2"><Lock className="w-4 h-4 text-gold" /> Consulta Confidencial</div>
          <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-gold" /> Respuesta en 24 horas</div>
          <div className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-gold" /> Facilidades de Pago</div>
        </div>
      </motion.div>
    </section>
  );
};
