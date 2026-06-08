import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t("nav_home") },
    { to: "/entreprise", label: t("nav_about") },
    { to: "/services", label: t("nav_services") },
    { to: "/contact", label: t("nav_contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="M2A Logistique"><Logo size="large" showText={false} /></Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-bold text-night/80 transition-colors hover:text-brand"
              activeProps={{ className: "text-sm font-bold text-brand" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-night/80 transition-colors hover:border-brand hover:text-brand"
            aria-label="Switch language"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <Link
            to="/devis"
            className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-black text-night shadow-sm transition-transform hover:scale-[1.02]"
          >
            {t("cta_quote")}
          </Link>
        </div>

        <button
          className="md:hidden rounded-md p-2 text-night"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-bold text-night/80 hover:bg-secondary"
                activeProps={{ className: "rounded-md px-3 py-2 text-sm font-bold text-brand bg-secondary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2">
              <button
                onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-bold uppercase text-night/80"
              >
                <Globe className="h-3.5 w-3.5" />
                {lang === "fr" ? "EN" : "FR"}
              </button>
              <Link
                to="/devis"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-brand px-5 py-2.5 text-center text-sm font-black text-night"
              >
                {t("cta_quote")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
