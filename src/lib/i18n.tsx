import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";

type Dict = Record<string, string>;

const FR: Dict = {
  nav_home: "Accueil",
  nav_about: "Entreprise",
  nav_services: "Services",
  nav_contact: "Contact",
  nav_quote: "Devis",
  cta_quote: "Demander un devis",
  cta_contact: "Nous contacter",

  hero_eyebrow: "Transport & logistique",
  hero_title: "Votre partenaire transport léger, régional et national.",
  hero_sub: "Livraison express, dédiée et sur-mesure pour professionnels et particuliers. Réactivité, fiabilité, confidentialité.",
  hero_secondary: "Découvrir nos services",

  services_title: "Nos services",
  services_sub: "Une offre complète pour tous vos besoins de transport et de logistique.",
  svc1_t: "Transport léger de marchandises",
  svc1_d: "Acheminement rapide de colis, palettes et plis sur tout le territoire.",
  svc2_t: "Livraison express & dédiée",
  svc2_d: "Un véhicule, un trajet, votre marchandise livrée en direct.",
  svc3_t: "Collecte & enlèvement",
  svc3_d: "Nous récupérons vos marchandises chez vos fournisseurs ou clients.",
  svc4_t: "Manutention & aide au chargement",
  svc4_d: "Une équipe pour vous accompagner au chargement et au déchargement.",
  svc5_t: "Déménagement léger",
  svc5_d: "Studios, petits volumes, transferts de bureaux — efficacité garantie.",
  svc6_t: "Sous-traitance transport",
  svc6_d: "Partenaire de confiance pour les transporteurs et logisticiens.",
  svc7_t: "Transport régional & national",
  svc7_d: "Couverture complète, de la livraison locale au longue distance.",

  why_title: "Pourquoi choisir M2A Logistique ?",
  why1_t: "Réactivité",
  why1_d: "Prise en charge rapide, devis sous 24h.",
  why2_t: "Fiabilité",
  why2_d: "Suivi rigoureux et engagement sur les délais.",
  why3_t: "Proximité",
  why3_d: "Un interlocuteur dédié, des solutions sur-mesure.",

  about_title: "À propos de M2A Logistique",
  about_intro: "Depuis Angers, M2A Logistique accompagne professionnels et particuliers dans leurs besoins de transport avec une approche simple : être disponible, réactif et tenir ses engagements.",
  about_history_t: "Notre histoire",
  about_history_d: "Une aventure familiale et humaine, nourrie par l'engagement, la rigueur et l'expérience terrain.",
  about_mission_t: "Notre mission",
  about_mission_d: "Offrir un service de transport agile et personnalisé, qui s'adapte à la réalité opérationnelle de nos clients.",
  about_values_t: "Nos valeurs",
  about_values_d: "Engagement, transparence, respect des délais et de la marchandise confiée.",
  about_zone_t: "Zone d'intervention",
  about_zone_d: "Départs depuis Angers, interventions régionales et nationales selon les besoins de transport.",
  about_story_p1: "M2A Logistique est avant tout une aventure familiale et humaine.",
  about_story_p2: "Après plusieurs années passées au sein de la Légion étrangère, le fondateur a choisi de prendre une nouvelle direction et de construire un projet fidèle à ses valeurs : engagement, rigueur, ponctualité et goût du travail bien fait.",
  about_story_p3: "À son retour à la vie civile, il a découvert d'autres secteurs, rencontré des professionnels passionnés et mûri un projet entrepreneurial à taille humaine, proche de ses clients et capable d'apporter des solutions simples, efficaces et fiables.",
  about_story_p4: "M2A Logistique s'appuie également sur l'expérience de son frère, associé dans l'entreprise et professionnel du transport depuis plusieurs années. Cette expertise constitue un atout réel pour le développement de l'activité.",
  about_story_p5: "Aujourd'hui, depuis Angers, M2A Logistique accompagne chaque client avec la même exigence : tenir ses engagements, parce que derrière chaque colis, chaque palette ou chaque livraison, il y a une personne qui compte sur nous.",

  contact_title: "Contactez-nous",
  contact_sub: "Une question, un projet ? Notre équipe vous répond rapidement.",
  contact_phone: "Téléphone",
  contact_email: "E-mail",
  contact_address: "Adresse",
  contact_hours: "Horaires",
  contact_hours_v: "Lundi — Vendredi : 8h — 19h",
  form_name: "Nom complet",
  form_email: "E-mail",
  form_phone: "Téléphone",
  form_subject: "Sujet",
  form_message: "Message",
  form_send: "Envoyer le message",
  form_consent: "J'accepte que mes données soient utilisées pour traiter ma demande.",

  quote_title: "Demande de devis",
  quote_sub: "Décrivez votre besoin, nous revenons vers vous sous 24h ouvrées.",
  q_type: "Type de transport",
  q_type_opt1: "Transport léger",
  q_type_opt2: "Livraison express",
  q_type_opt3: "Déménagement léger",
  q_type_opt4: "Sous-traitance",
  q_from: "Lieu de départ",
  q_to: "Destination",
  q_volume: "Volume / poids",
  q_date: "Date souhaitée",
  q_message: "Message complémentaire",
  q_send: "Envoyer la demande",

  legal_title: "Mentions légales",
  privacy_title: "Politique de confidentialité",

  footer_tagline: "Transport léger, livraison express et logistique sur-mesure.",
  footer_rights: "Tous droits réservés.",
  footer_nav: "Navigation",
  footer_legal: "Informations légales",

  form_sent: "Merci ! Votre message a bien été envoyé.",
};

const EN: Dict = {
  nav_home: "Home",
  nav_about: "Company",
  nav_services: "Services",
  nav_contact: "Contact",
  nav_quote: "Quote",
  cta_quote: "Request a quote",
  cta_contact: "Contact us",

  hero_eyebrow: "Transport & logistics",
  hero_title: "Your partner for light, regional and national freight.",
  hero_sub: "Express, dedicated and tailor-made deliveries for businesses and individuals. Responsiveness, reliability, confidentiality.",
  hero_secondary: "Explore our services",

  services_title: "Our services",
  services_sub: "A full offering for all your transport and logistics needs.",
  svc1_t: "Light freight transport",
  svc1_d: "Fast delivery of parcels, pallets and documents nationwide.",
  svc2_t: "Express & dedicated delivery",
  svc2_d: "One vehicle, one trip, your goods delivered direct.",
  svc3_t: "Pickup & collection",
  svc3_d: "We collect your goods from suppliers or customers.",
  svc4_t: "Handling & loading help",
  svc4_d: "A team to assist with loading and unloading operations.",
  svc5_t: "Light moving",
  svc5_d: "Studios, small volumes, office relocations — done right.",
  svc6_t: "Transport subcontracting",
  svc6_d: "A trusted partner for carriers and logistics operators.",
  svc7_t: "Regional & national transport",
  svc7_d: "Full coverage, from local runs to long-distance routes.",

  why_title: "Why choose M2A Logistique?",
  why1_t: "Responsiveness",
  why1_d: "Fast pickup, quotes within 24 hours.",
  why2_t: "Reliability",
  why2_d: "Rigorous tracking and on-time commitment.",
  why3_t: "Proximity",
  why3_d: "A dedicated contact, tailor-made solutions.",

  about_title: "About M2A Logistique",
  about_intro: "From Angers, M2A Logistique supports businesses and individuals with transport services built on availability, responsiveness and reliability.",
  about_history_t: "Our story",
  about_history_d: "A family and human venture shaped by commitment, discipline and field experience.",
  about_mission_t: "Our mission",
  about_mission_d: "Provide agile, personalised transport that adapts to our clients' operational reality.",
  about_values_t: "Our values",
  about_values_d: "Commitment, transparency, respect for deadlines and entrusted goods.",
  about_zone_t: "Service area",
  about_zone_d: "Departures from Angers, with regional and national operations depending on transport needs.",
  about_story_p1: "M2A Logistique is above all a family and human venture.",
  about_story_p2: "After several years in the French Foreign Legion, the founder chose a new direction and built a project shaped by commitment, discipline, punctuality and a strong sense of work well done.",
  about_story_p3: "Back in civilian life, he explored other sectors, met passionate professionals and developed a human-scale transport company close to its clients, able to provide simple, efficient and reliable solutions.",
  about_story_p4: "M2A Logistique also benefits from the experience of his brother, a company partner and transport professional for several years. This expertise is a real asset for the company's growth.",
  about_story_p5: "Today, from Angers, M2A Logistique supports every client with the same standard: keeping commitments, because behind every parcel, pallet or delivery, someone is counting on us.",

  contact_title: "Contact us",
  contact_sub: "Got a question or a project? Our team replies quickly.",
  contact_phone: "Phone",
  contact_email: "Email",
  contact_address: "Address",
  contact_hours: "Hours",
  contact_hours_v: "Monday — Friday: 8am — 7pm",
  form_name: "Full name",
  form_email: "Email",
  form_phone: "Phone",
  form_subject: "Subject",
  form_message: "Message",
  form_send: "Send message",
  form_consent: "I agree that my data may be used to process my request.",

  quote_title: "Quote request",
  quote_sub: "Describe your need, we'll reply within 24 business hours.",
  q_type: "Transport type",
  q_type_opt1: "Light freight",
  q_type_opt2: "Express delivery",
  q_type_opt3: "Light moving",
  q_type_opt4: "Subcontracting",
  q_from: "Pickup location",
  q_to: "Destination",
  q_volume: "Volume / weight",
  q_date: "Preferred date",
  q_message: "Additional message",
  q_send: "Send request",

  legal_title: "Legal notice",
  privacy_title: "Privacy policy",

  footer_tagline: "Light freight, express delivery and tailor-made logistics.",
  footer_rights: "All rights reserved.",
  footer_nav: "Navigation",
  footer_legal: "Legal",

  form_sent: "Thanks! Your message has been sent.",
};

const DICTS: Record<Lang, Dict> = { fr: FR, en: EN };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof FR) => string };
const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");
  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("m2a-lang") as Lang | null) : null;
    if (saved === "fr" || saved === "en") setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("m2a-lang", l);
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };
  const t = (k: keyof typeof FR) => DICTS[lang][k] ?? String(k);
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
