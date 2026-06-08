import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Building2, Hash, FileText } from "lucide-react";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t, lang } = useI18n();
  const legalForm = lang === "fr" ? "SAS - Société par actions simplifiée" : "SAS - simplified joint-stock company";

  return (
    <footer className="bg-night text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Logo variant="light" showText={false} />
          <p className="mt-4 max-w-sm text-sm text-white/70">{t("footer_tagline")}</p>
          <div className="mt-6 space-y-2 text-sm text-white/80">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand" /> +33 6 68 03 10 12 / +33 6 59 05 67 43</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand" /> contact@m2alogistique.fr</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand" /> 6 rue Charles de Gaulle, 49460 Montreuil-Juigné</p>
          </div>
        </div>
        <div>
          <h3 className="text-xs font-black uppercase tracking-wider text-brand">{t("footer_nav")}</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-brand">{t("nav_home")}</Link></li>
            <li><Link to="/entreprise" className="hover:text-brand">{t("nav_about")}</Link></li>
            <li><Link to="/services" className="hover:text-brand">{t("nav_services")}</Link></li>
            <li><Link to="/devis" className="hover:text-brand">{t("nav_quote")}</Link></li>
            <li><Link to="/contact" className="hover:text-brand">{t("nav_contact")}</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-black uppercase tracking-wider text-brand">{t("footer_legal")}</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/mentions-legales" className="hover:text-brand">{t("legal_title")}</Link></li>
            <li><Link to="/confidentialite" className="hover:text-brand">{t("privacy_title")}</Link></li>
            <li className="flex items-start gap-2 pt-2 text-white/70"><Building2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {legalForm}</li>
            <li className="flex items-start gap-2 text-white/70"><Hash className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> SIRET 10266888600017</li>
            <li className="flex items-start gap-2 text-white/70"><FileText className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> RCS ANGERS 102668886 - APE 4941B</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} M2A Logistique. {t("footer_rights")}</p>
          <p className="italic">Transport • Logistique • Express</p>
        </div>
      </div>
    </footer>
  );
}
