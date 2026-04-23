import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Youtube, MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-[hsl(220_50%_4%)] border-t-2 border-gold/60 pt-20 pb-8">
      <div className="container grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="font-display text-3xl">
            ORTO<span className="text-gold">PECTUS</span>
          </Link>
          <p className="mt-4 text-sm text-silver leading-relaxed">
            Líderes en cirugía torácica integral y estética, combinando técnicas tradicionales con innovación de vanguardia mundial.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-silver hover:text-gold hover:border-gold transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-xl text-gold mb-5">Navegación</h4>
          <ul className="space-y-3 text-sm text-silver">
            {[
              ["/", "Inicio"],
              ["/servicios", "Servicios"],
              ["/nosotros", "Sobre Nosotros"],
              ["/casos", "Casos Clínicos"],
              ["/contacto", "Contacto y Citas"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="gold-link hover:text-foreground transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl text-gold mb-5">Especialidades</h4>
          <ul className="space-y-3 text-sm text-silver">
            <li>Pectus Excavatum y Carinatum</li>
            <li>Síndrome de Poland</li>
            <li>Reconstrucción Torácica</li>
            <li>Remodelación Costal</li>
            <li>Hiperhidrosis</li>
            <li>Trauma Torácico</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl text-gold mb-5">Contacto</h4>
          <ul className="space-y-3 text-sm text-silver">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-teal-bright shrink-0" /> Av. Médica Sur 123, Consultorio 405, CDMX, 03940</li>
            <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-teal-bright shrink-0" /> +52 (55) 1234-5678</li>
            <li className="flex gap-3"><MessageCircle className="w-4 h-4 mt-0.5 text-teal-bright shrink-0" /> WhatsApp: +52 (55) 9876-5432</li>
            <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 text-teal-bright shrink-0" /> contacto@ortopectus.com</li>
            <li className="flex gap-3"><Clock className="w-4 h-4 mt-0.5 text-teal-bright shrink-0" /> Lun–Vie: 8:00–18:00</li>
          </ul>
        </div>
      </div>

      <div className="container mt-16 pt-6 border-t border-border/50 flex flex-col md:flex-row gap-3 justify-between text-xs text-silver/70">
        <p>© 2024 ORTOPECTUS. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold transition-colors">Aviso de Privacidad</a>
          <a href="#" className="hover:text-gold transition-colors">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
};
