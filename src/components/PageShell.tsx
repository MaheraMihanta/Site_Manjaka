import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <section className="border-b border-border bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {eyebrow && (
          <span className="inline-block rounded-full bg-brand px-3 py-1 text-xs font-black uppercase tracking-widest text-night">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 text-4xl font-black tracking-tight text-night sm:text-5xl lg:text-6xl">{title}</h1>
        {sub && <p className="mt-4 max-w-2xl italic text-lg text-night/70">{sub}</p>}
      </div>
    </section>
  );
}