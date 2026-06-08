import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — M2A Logistique" },
      { name: "description", content: "Mentions légales du site M2A Logistique." },
    ],
  }),
  component: LegalPage,
});

function LegalPage() {
  const { t, lang } = useI18n();
  return (
    <PageShell>
      <PageHero title={t("legal_title")} />
      <section className="mx-auto max-w-3xl space-y-4 px-4 py-16 text-sm leading-relaxed text-night/80 sm:px-6 lg:px-8">
        {lang === "fr" ? (
          <>
            <p><strong>Éditeur :</strong> M2A Logistique — SAS, Société par actions simplifiée.</p>
            <p><strong>N° SIRET :</strong> 10266888600017.</p>
            <p><strong>RCS :</strong> RCS ANGERS 102668886.</p>
            <p><strong>Code APE :</strong> 4941B.</p>
            <p><strong>Siège social :</strong> 6 rue Charles de Gaulle, 49460 Montreuil-Juigné.</p>
            <p><strong>Contact :</strong> contact@m2alogistique.fr — +33 6 68 03 10 12 / +33 6 59 05 67 43.</p>
            <p><strong>Directeur de la publication :</strong> Direction M2A Logistique.</p>
            <p><strong>Hébergement :</strong> Site hébergé sur infrastructure cloud sécurisée.</p>
            <p><strong>Propriété intellectuelle :</strong> L'ensemble des contenus (textes, logos, images) est protégé. Toute reproduction est interdite sans autorisation préalable.</p>
          </>
        ) : (
          <>
            <p><strong>Publisher:</strong> M2A Logistique — SAS, simplified joint-stock company.</p>
            <p><strong>SIRET no.:</strong> 10266888600017.</p>
            <p><strong>RCS:</strong> RCS ANGERS 102668886.</p>
            <p><strong>APE code:</strong> 4941B.</p>
            <p><strong>Registered office:</strong> 6 rue Charles de Gaulle, 49460 Montreuil-Juigné.</p>
            <p><strong>Contact:</strong> contact@m2alogistique.fr — +33 6 68 03 10 12 / +33 6 59 05 67 43.</p>
            <p><strong>Publication director:</strong> M2A Logistique management.</p>
            <p><strong>Hosting:</strong> Secure cloud infrastructure.</p>
            <p><strong>Intellectual property:</strong> All content is protected. No reproduction without prior authorization.</p>
          </>
        )}
      </section>
    </PageShell>
  );
}
