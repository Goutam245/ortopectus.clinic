import { Activity, Shield, Layers, Zap, Scissors, Sparkles, Heart, Droplets, Target, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  image: string;
  long: string[];
  conditions: string[];
  techniques: string[];
  recovery: string;
};

export const services: Service[] = [
  {
    slug: "deformidades-toracicas",
    title: "Deformidades Torácicas",
    icon: Activity,
    short: "Pectus Excavatum, Carinatum y Síndrome de Poland",
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1200&q=85",
    long: [
      "Las deformidades torácicas congénitas afectan tanto la función cardiopulmonar como la imagen corporal del paciente. En ORTOPECTUS contamos con un programa integral para su diagnóstico, planificación quirúrgica y corrección.",
      "Aplicamos técnicas mínimamente invasivas como el procedimiento de Nuss para Pectus Excavatum y Abramson para Pectus Carinatum, garantizando resultados estéticos y funcionales óptimos.",
      "Cada plan se diseña en conjunto con cardiología, neumología y psicología para asegurar una recuperación integral.",
    ],
    conditions: ["Pectus Excavatum", "Pectus Carinatum", "Síndrome de Poland", "Esternón hendido"],
    techniques: ["Procedimiento de Nuss", "Técnica de Abramson", "Modelado dinámico con compresor"],
    recovery: "Hospitalización 3–5 días. Reincorporación a actividades ligeras en 4 semanas.",
  },
  {
    slug: "tumoraciones-pared",
    title: "Tumoraciones de Pared",
    icon: Shield,
    short: "Diagnóstico y resección de tumores en pared torácica",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=85",
    long: [
      "Manejo multidisciplinario de tumores benignos y malignos de la pared torácica con resección amplia y reconstrucción inmediata.",
      "Utilizamos imagenología avanzada y biopsia guiada para una planificación quirúrgica precisa.",
    ],
    conditions: ["Condromas", "Sarcomas de pared", "Metástasis costales", "Tumores desmoides"],
    techniques: ["Resección en bloque", "Reconstrucción con malla y colgajo", "Cirugía oncológica torácica"],
    recovery: "Variable según extensión. Acompañamiento oncológico integral.",
  },
  {
    slug: "reconstruccion-toracica",
    title: "Reconstrucción Torácica",
    icon: Layers,
    short: "Restauración funcional y estética de la pared torácica",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1200&q=85",
    long: [
      "Reconstruimos defectos complejos de la pared torácica producto de traumatismos, resecciones oncológicas o malformaciones.",
      "Combinamos materiales biocompatibles, mallas titanio y colgajos musculares para resultados duraderos.",
    ],
    conditions: ["Defectos postoncológicos", "Secuelas traumáticas", "Recidivas de deformidades"],
    techniques: ["Mallas de titanio", "Colgajos miocutáneos", "Reconstrucción 3D personalizada"],
    recovery: "Hospitalización 5–7 días. Rehabilitación física dirigida.",
  },
  {
    slug: "trauma-toracico",
    title: "Trauma Torácico",
    icon: Zap,
    short: "Manejo de fracturas de costilla y esternón",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=85",
    long: [
      "Atención integral del paciente politraumatizado con lesiones torácicas: fracturas costales múltiples, tórax inestable y lesiones esternales.",
      "Aplicamos osteosíntesis con placas específicas para reducir el dolor y acortar tiempos de recuperación.",
    ],
    conditions: ["Fracturas costales múltiples", "Tórax inestable", "Fracturas de esternón"],
    techniques: ["Osteosíntesis costal", "Placas de titanio MatrixRib", "Cirugía videoasistida"],
    recovery: "Alivio inmediato del dolor. Alta hospitalaria en 4–6 días.",
  },
  {
    slug: "injertos-costales",
    title: "Injertos Costales",
    icon: Scissors,
    short: "Procuración especializada para rinoseptumplastias",
    image: "https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?w=1200&q=85",
    long: [
      "Procuración de cartílago costal con técnica mínimamente invasiva para rinoplastias secundarias y reconstrucciones complejas.",
      "Trabajamos en conjunto con cirujanos plásticos y otorrinolaringólogos.",
    ],
    conditions: ["Rinoplastia secundaria", "Reconstrucción auricular", "Defectos craneofaciales"],
    techniques: ["Toma costal mínima", "Cierre estético subcutáneo", "Manejo del dolor multimodal"],
    recovery: "Cirugía ambulatoria. Alta el mismo día.",
  },
  {
    slug: "remodelacion-costal",
    title: "Remodelación Costal",
    icon: Sparkles,
    short: "Moldeo de cintura y redefinición estética corporal",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=85",
    long: [
      "Remodelación estética de las costillas flotantes para una redefinición elegante de la silueta y la cintura.",
      "Procedimiento personalizado, seguro y reversible con técnica endoscópica.",
    ],
    conditions: ["Definición de cintura", "Asimetría costal", "Reorientación estética"],
    techniques: ["Abordaje endoscópico", "Modelado costal selectivo", "Compresión postoperatoria"],
    recovery: "Alta a las 24h. Vida normal en 2 semanas.",
  },
  {
    slug: "manejo-dolor",
    title: "Manejo del Dolor",
    icon: Heart,
    short: "Tratamiento integral del dolor en pared torácica",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=1200&q=85",
    long: [
      "Clínica especializada en dolor torácico crónico: neuralgia intercostal, síndrome posquirúrgico y dolor postraumático.",
      "Bloqueos guiados por ultrasonido y manejo multimodal personalizado.",
    ],
    conditions: ["Neuralgia intercostal", "Dolor postoracotomía", "Síndrome de Tietze"],
    techniques: ["Bloqueos guiados", "Crioablación", "Radiofrecuencia pulsada"],
    recovery: "Procedimientos ambulatorios. Alivio progresivo en días.",
  },
  {
    slug: "hiperhidrosis",
    title: "Hiperhidrosis",
    icon: Droplets,
    short: "Control avanzado de sudoración excesiva",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&q=85",
    long: [
      "Tratamiento definitivo de la hiperhidrosis palmar, axilar y facial mediante simpatectomía toracoscópica.",
      "Procedimiento de alta efectividad con cicatrices mínimas.",
    ],
    conditions: ["Hiperhidrosis palmar", "Hiperhidrosis axilar", "Rubor facial"],
    techniques: ["Simpatectomía toracoscópica", "Clipping reversible", "Anestesia ambulatoria"],
    recovery: "Alta el mismo día. Resultado inmediato.",
  },
  {
    slug: "minima-invasion",
    title: "Mínima Invasión",
    icon: Target,
    short: "Técnicas endoscópicas y robóticas de última generación",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&q=85",
    long: [
      "Programa de cirugía mínimamente invasiva: VATS, RATS y técnicas uniportales para resecciones pulmonares y procedimientos de pared torácica.",
      "Menor dolor, menor estancia hospitalaria, mejor resultado estético.",
    ],
    conditions: ["Nódulos pulmonares", "Patología mediastinal", "Procedimientos de pared"],
    techniques: ["VATS uniportal", "Cirugía robótica Da Vinci", "Navegación 3D"],
    recovery: "Estancia 1–3 días según procedimiento.",
  },
];
