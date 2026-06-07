import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { useI18n } from "@/lib/i18n";
import loading from "@/assets/Livraison1.svg";
import { Target, Heart, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/entreprise")({
  head: () => ({
    meta: [
      { title: "Entreprise — M2A Logistique" },
      { name: "description", content: "Histoire, mission, valeurs et zone d'intervention de M2A Logistique." },
      { property: "og:title", content: "Entreprise — M2A Logistique" },
      { property: "og:description", content: "Histoire, mission, valeurs et zone d'intervention." },
    ],
  }),
  component: EntreprisePage,
});

function EntreprisePage() {
  const { t } = useI18n();
  const blocks = [
    { icon: Clock, t: t("about_history_t"), d: t("about_history_d") },
    { icon: Target, t: t("about_mission_t"), d: t("about_mission_d") },
    { icon: Heart, t: t("about_values_t"), d: t("about_values_d") },
    { icon: MapPin, t: t("about_zone_t"), d: t("about_zone_d") },
  ];
  const story = [
    t("about_story_p1"),
    t("about_story_p2"),
    t("about_story_p3"),
    t("about_story_p4"),
    t("about_story_p5"),
  ];

  return (
    <PageShell>
      <PageHero eyebrow={t("nav_about")} title={t("about_title")} sub={t("about_intro")} />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <img src={loading} alt="" className="mx-auto w-full max-w-md rounded-2xl object-contain shadow-lg lg:max-w-lg" width={1080} height={896} loading="lazy" />
          <div className="grid gap-6 sm:grid-cols-2">
            {blocks.map(({ icon: Icon, t: title, d }) => (
              <div key={title} className="rounded-2xl border border-border bg-white p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-night">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-black text-night">{title}</h3>
                <p className="mt-2 text-sm text-night/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-night">{t("about_history_t")}</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-night/75">
            {story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
