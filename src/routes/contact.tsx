import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { ContactForm } from "@/components/ContactForm";
import { useI18n } from "@/lib/i18n";
import { Phone, Mail, MapPin, Clock, Building2, Hash, Landmark, FileText } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — M2A Logistique" },
      { name: "description", content: "Téléphone, e-mail, adresse et formulaire de contact M2A Logistique." },
      { property: "og:title", content: "Contact — M2A Logistique" },
      { property: "og:description", content: "Une question, un projet ? Notre équipe vous répond rapidement." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t, lang } = useI18n();
  const items = [
    { i: Phone, l: t("contact_phone"), v: "+33 6 68 03 10 12 / +33 6 59 05 67 43" },
    { i: Mail, l: t("contact_email"), v: "contact@m2alogistique.fr" },
    { i: MapPin, l: t("contact_address"), v: "6 rue Charles de Gaulle, 49460 Montreuil-Juigné" },
    { i: Clock, l: t("contact_hours"), v: t("contact_hours_v") },
  ];
  const legalItems = [
    {
      i: Building2,
      l: t("legal_form_label"),
      v: lang === "fr" ? "SAS - Société par actions simplifiée" : "SAS - simplified joint-stock company",
    },
    { i: Hash, l: t("legal_siret_label"), v: "10266888600017" },
    { i: Landmark, l: t("legal_rcs_label"), v: "RCS ANGERS 102668886" },
    { i: FileText, l: t("legal_ape_label"), v: "4941B" },
    { i: MapPin, l: t("legal_registered_office_label"), v: "6 rue Charles de Gaulle, 49460 Montreuil-Juigné", wide: true },
  ];

  return (
    <PageShell>
      <PageHero eyebrow={t("nav_contact")} title={t("contact_title")} sub={t("contact_sub")} />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <div className="space-y-4">
            {items.map(({ i: Icon, l, v }) => (
              <div key={l} className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-night">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-night/60">{l}</p>
                  <p className="mt-1 font-bold text-night">{v}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-border bg-white p-5">
            <h2 className="text-xs font-black uppercase tracking-wider text-night/60">{t("legal_info_title")}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {legalItems.map(({ i: Icon, l, v, wide }) => (
                <div key={l} className={`flex items-start gap-3 ${wide ? "sm:col-span-2" : ""}`}>
                  <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cream text-night">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-wider text-night/50">{l}</p>
                    <p className="mt-0.5 text-sm font-bold text-night">{v}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-cream p-6 sm:p-10">
          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}
