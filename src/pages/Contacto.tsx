import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, MessageCircle, AlertTriangle, Loader2 } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { services } from "@/data/services";

const schema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().min(7, "Teléfono inválido").max(30),
  service: z.string().min(1, "Selecciona un padecimiento"),
  source: z.string().max(100).optional(),
  message: z.string().trim().min(10, "Cuéntanos un poco más").max(1000),
});

const Contacto = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    toast({ title: "Solicitud enviada", description: "Te contactaremos dentro de las próximas 24 horas." });
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <>
      <PageHero
        label="Contacto"
        title="Agenda Tu"
        italic="Consulta"
        subtitle="Estamos aquí para escucharte. Completa el formulario o contáctanos directamente."
        image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=90"
      />

      <section className="py-20 bg-midnight">
        <div className="container grid lg:grid-cols-2 gap-12">
          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={onSubmit} className="glass-gold rounded-md p-8 md:p-10 space-y-5">
            <div>
              <div className="label-tag text-gold">Formulario</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">Solicita tu cita</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-silver">Nombre completo</Label>
                <Input id="name" name="name" maxLength={100} className="mt-2 bg-steel/40 border-border" />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="text-silver">Email</Label>
                <Input id="email" name="email" type="email" maxLength={255} className="mt-2 bg-steel/40 border-border" />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone" className="text-silver">Teléfono</Label>
                <Input id="phone" name="phone" type="tel" maxLength={30} className="mt-2 bg-steel/40 border-border" />
                {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <Label htmlFor="service" className="text-silver">Padecimiento</Label>
                <select id="service" name="service" defaultValue="" className="mt-2 w-full h-10 rounded-md bg-steel/40 border border-border px-3 text-sm">
                  <option value="" disabled>Selecciona…</option>
                  {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                </select>
                {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="source" className="text-silver">¿Cómo nos conociste?</Label>
              <Input id="source" name="source" maxLength={100} className="mt-2 bg-steel/40 border-border" />
            </div>

            <div>
              <Label htmlFor="message" className="text-silver">Mensaje</Label>
              <Textarea id="message" name="message" maxLength={1000} rows={5} className="mt-2 bg-steel/40 border-border" />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>

            <Button type="submit" variant="gold" size="lg" disabled={loading} className="w-full">
              {loading ? (<><Loader2 className="w-4 h-4 animate-spin" /> Enviando…</>) : "Enviar Solicitud de Consulta"}
            </Button>
            <p className="text-xs text-silver/70">Tu información es tratada con absoluta confidencialidad.</p>
          </motion.form>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="glass rounded-md overflow-hidden aspect-[4/3]">
              <iframe
                title="Ubicación ORTOPECTUS"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.0353!2d-99.16!3d19.36!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIxJzM2LjAiTiA5OcKwMDknMzYuMCJX!5e0!3m2!1ses!2smx!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.5) invert(0.85)" }}
                loading="lazy"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: "Dirección", value: "Av. Médica Sur 123, CDMX" },
                { icon: Phone, label: "Teléfono", value: "+52 (55) 1234-5678" },
                { icon: MessageCircle, label: "WhatsApp", value: "+52 (55) 9876-5432" },
                { icon: Mail, label: "Email", value: "contacto@ortopectus.com" },
                { icon: Clock, label: "Horario", value: "Lun–Vie 8:00–18:00" },
                { icon: AlertTriangle, label: "Urgencias 24/7", value: "+52 (55) 1111-2222" },
              ].map((c) => (
                <div key={c.label} className="glass rounded-md p-5">
                  <c.icon className="w-5 h-5 text-teal-bright" />
                  <div className="mt-3 text-[10px] uppercase tracking-[0.25em] text-gold">{c.label}</div>
                  <div className="mt-1 text-sm text-foreground">{c.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contacto;
