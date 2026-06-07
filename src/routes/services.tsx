import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useI18n } from "@/lib/i18n";
import { Truck, Zap, PackageCheck, HandHelping, Boxes, Handshake, Map, ArrowRight } from "lucide-react";
import sprinter from "@/assets/Sprinter.svg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — M2A Logistique" },
      { name: "description", content: "Transport léger, livraison express, collecte, manutention, déménagement et sous-traitance." },
      { property: "og:title", content: "Services — M2A Logistique" },
      { property: "og:description", content: "Une offre complète pour tous vos besoins de transport." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useI18n();
  const items = [
    { i: Truck, k: 1 }, { i: Zap, k: 2 }, { i: PackageCheck, k: 3 },
    { i: HandHelping, k: 4 }, { i: Boxes, k: 5 }, { i: Handshake, k: 6 }, { i: Map, k: 7 },
  ];
  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-border bg-night text-white">
        <div className="absolute inset-0">
          <img src={sprinter} alt="" className="h-full w-full object-contain object-center opacity-45 md:object-right md:opacity-95" width={900} height={540} />
          <div className="absolute inset-0 bg-gradient-to-r from-night via-night/85 to-night/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-brand px-3 py-1 text-xs font-black uppercase tracking-widest text-night">
            {t("nav_services")}
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">{t("services_title")}</h1>
          <p className="mt-4 max-w-2xl italic text-lg text-white/80">{t("services_sub")}</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ i: Icon, k }) => (
            <article key={k} className="group rounded-2xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-lg">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-night transition-colors group-hover:bg-night group-hover:text-brand">
                <Icon className="h-7 w-7" />
              </div>
              <h2 className="mt-6 text-xl font-black text-night">{t(`svc${k}_t` as "svc1_t")}</h2>
              <p className="mt-2 text-sm text-night/70">{t(`svc${k}_d` as "svc1_d")}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-3xl bg-cream p-8 sm:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-2xl font-black text-night">{t("cta_quote")}</h3>
            <Link to="/devis" className="inline-flex items-center gap-2 rounded-full bg-night px-6 py-3 text-sm font-black text-white hover:bg-brand hover:text-night transition-colors">
              {t("cta_quote")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
