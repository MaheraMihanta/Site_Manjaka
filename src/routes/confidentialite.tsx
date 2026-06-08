import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — M2A Logistique" },
      { name: "description", content: "Politique de confidentialité et traitement des données personnelles." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const { t, lang } = useI18n();
  return (
    <PageShell>
      <PageHero title={t("privacy_title")} />
      <section className="mx-auto max-w-3xl space-y-4 px-4 py-16 text-sm leading-relaxed text-night/80 sm:px-6 lg:px-8">
        {lang === "fr" ? (
          <>
            <p>Les informations recueillies via nos formulaires sont utilisées exclusivement pour répondre à votre demande et établir un devis.</p>
            <p>Aucune donnée n'est cédée à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en écrivant à contact@m2alogistique.fr.</p>
            <p>Les données sont conservées pour la durée nécessaire au traitement de votre demande, puis archivées ou supprimées.</p>
            <p>Le site utilise uniquement des cookies techniques nécessaires à son fonctionnement.</p>
          </>
        ) : (
          <>
            <p>Information collected through our forms is used solely to respond to your request and prepare a quote.</p>
            <p>No data is shared with third parties. Under GDPR, you have the right to access, rectify and delete your data by writing to contact@m2alogistique.fr.</p>
            <p>Data is kept for the time required to process your request, then archived or deleted.</p>
            <p>The site only uses technical cookies required for it to function.</p>
          </>
        )}
      </section>
    </PageShell>
  );
}