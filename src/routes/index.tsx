import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Truck, Zap, PackageCheck, HandHelping, Boxes, Handshake, MapPin, Phone, Mail } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { useI18n } from "@/lib/i18n";
import heroVan from "@/assets/Livraison.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "M2A Logistique — Transport léger & livraison express en France" },
      { name: "description", content: "Transport léger, livraison express, collecte et déménagement. Devis gratuit sous 24h." },
      { property: "og:title", content: "M2A Logistique" },
      { property: "og:description", content: "Transport léger, livraison express et logistique sur-mesure." },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useI18n();

  const services = [
    { i: Truck, t: t("svc1_t"), d: t("svc1_d") },
    { i: Zap, t: t("svc2_t"), d: t("svc2_d") },
    { i: PackageCheck, t: t("svc3_t"), d: t("svc3_d") },
    { i: HandHelping, t: t("svc4_t"), d: t("svc4_d") },
    { i: Boxes, t: t("svc5_t"), d: t("svc5_d") },
    { i: Handshake, t: t("svc6_t"), d: t("svc6_d") },
  ];

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden bg-night text-white">
        <div className="absolute inset-0">
          <img src={heroVan} alt="" className="h-full w-full object-contain object-center opacity-70 md:object-right md:opacity-100" width={680} height={680} />
          <div className="absolute inset-0 bg-gradient-to-r from-night via-night/85 to-night/40" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div>
            <span className="inline-block rounded-full bg-brand px-3 py-1 text-xs font-black uppercase tracking-widest text-night">
              {t("hero_eyebrow")}
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t("hero_title")}
            </h1>
            <p className="mt-6 max-w-xl italic text-lg text-white/80">{t("hero_sub")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/devis" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-black text-night transition-transform hover:scale-[1.03]">
                {t("cta_quote")} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-black text-white hover:border-brand hover:text-brand">
                {t("hero_secondary")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT STRIP */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-3 sm:px-6 lg:px-8">
          <a href="tel:+33600000000" className="flex items-center gap-3 text-sm font-bold text-night hover:text-brand">
            <Phone className="h-5 w-5 text-brand" /> +33 6 00 00 00 00
          </a>
          <a href="mailto:contact@lydeacommunication.fr" className="flex items-center gap-3 text-sm font-bold text-night hover:text-brand">
            <Mail className="h-5 w-5 text-brand" /> contact@lydeacommunication.fr
          </a>
          <p className="flex items-center gap-3 text-sm font-bold text-night">
            <MapPin className="h-5 w-5 text-brand" /> {t("contact_hours_v")}
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-black tracking-tight text-night sm:text-4xl">{t("services_title")}</h2>
          <p className="mt-3 italic text-night/70">{t("services_sub")}</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ i: Icon, t: title, d }) => (
            <div key={title} className="group rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-lg">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-night transition-colors group-hover:bg-night group-hover:text-brand">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-black text-night">{title}</h3>
              <p className="mt-2 text-sm text-night/70">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-black text-night hover:text-brand">
            {t("nav_services")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-night sm:text-4xl">{t("why_title")}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-2xl bg-white p-8 shadow-sm">
                <span className="text-5xl font-black text-brand">0{n}</span>
                <h3 className="mt-4 text-xl font-black text-night">{t(`why${n}_t` as "why1_t")}</h3>
                <p className="mt-2 text-sm text-night/70">{t(`why${n}_d` as "why1_d")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-night text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-16 sm:px-6 md:flex-row lg:px-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight">{t("cta_quote")}</h2>
            <p className="mt-2 italic text-white/70">{t("quote_sub")}</p>
          </div>
          <Link to="/devis" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-black text-night hover:scale-[1.03] transition-transform">
            {t("cta_quote")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
