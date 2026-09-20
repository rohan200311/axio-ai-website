import {
  Globe,
  Server,
  Smartphone,
  Zap,
  Layers,
  Shield,
  Palette,
  Search,
  MonitorSmartphone,
  CheckCircle,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import { services } from "../data/content";
import ScrollReveal from "../components/ScrollReveal";
import { ButtonLink } from "../components/Button";
import CTA from "../components/home/CTA";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Server,
  Smartphone,
  Zap,
  Layers,
  Shield,
  Palette,
  Search,
  MonitorSmartphone,
  CheckCircle,
  Megaphone,
};

export default function Services() {
  return (
    <>
      {/* Background container for header + service cards */}
      <div className="relative">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/services-bg.png')" }}
        />
        {/* Semi-transparent overlay for text readability */}
        <div className="absolute inset-0 bg-white/70 dark:bg-zinc-950/70" />
        <div className="absolute right-0 top-20 h-72 w-72 animate-morph rounded-full bg-sky-400/20 blur-3xl" />

        {/* Header section */}
        <section className="relative z-10 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                Services
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
                Engineering services for modern businesses
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                Eleven capabilities under one roof — from AI web & app development
                to infrastructure, security, branding, and growth.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Service cards section */}
        <section className="relative z-10 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] || Globe;
              return (
                <ScrollReveal key={s.id} delay={(i % 3) * 0.08} direction="scale">
                  <article className="card-lift group flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 sm:p-7">
                    <div
                      className={`service-icon mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} text-white shadow-lg`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                      {s.title}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-sky-600 dark:text-sky-400">
                      {s.short}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {s.description}
                    </p>
                    <ButtonLink
                      to="/contact"
                      variant="ghost"
                      size="sm"
                      className="mt-5 self-start"
                    >
                      Discuss this
                      <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                    </ButtonLink>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
      </div>

      <section className="border-y border-zinc-200 bg-white py-16 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <ScrollReveal>
              <h2 className="font-display text-3xl font-bold text-zinc-900 dark:text-white">
                One studio. Full-stack delivery.
              </h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Whether you need a single AI feature or a complete SaaS platform,
                GenZinering operates as your embedded engineering partner — strategy
                through production.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Discovery workshops & AI opportunity mapping",
                  "Design systems + engineering in parallel",
                  "Security & compliance baked into delivery",
                  "Post-launch growth, SEO & marketing loops",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.1} direction="right">
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200 shadow-xl dark:border-zinc-700">
                <img
                  src="/images/chapter-build.png"
                  alt="Build with GenZinering"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="font-display text-xl font-semibold text-white">
                    AI Labs & Software Studios
                  </p>
                  <p className="mt-1 text-sm text-zinc-200">
                    Hubballi · Shipping globally
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
