import { Check } from "lucide-react";
import { pricingPlans } from "../data/content";
import ScrollReveal from "../components/ScrollReveal";
import MorphSection from "../components/MorphSection";
import { ButtonLink } from "../components/Button";
import CTA from "../components/home/CTA";

export default function Pricing() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50 via-cream to-cream dark:from-violet-950/30 dark:via-zinc-950 dark:to-zinc-950" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              Pricing
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
              Engagement models that match your stage
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              Every engagement is scoped to outcomes — not hours. Tell us what
              you&apos;re building and we&apos;ll recommend Spark, Studio, or Labs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <MorphSection className="pb-24 pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 0.1} direction="scale">
                <div
                  className={`card-lift relative flex h-full flex-col rounded-3xl border p-7 sm:p-8 ${
                    plan.highlighted
                      ? "border-sky-400 bg-gradient-to-b from-sky-50 to-white shadow-xl shadow-sky-500/10 dark:border-sky-500 dark:from-sky-950/50 dark:to-zinc-900"
                      : "border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900"
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-3 py-1 text-[11px] font-semibold text-white shadow-md">
                      Most popular
                    </span>
                  )}
                  <h2 className="font-display text-xl font-bold text-zinc-900 dark:text-white">
                    {plan.name}
                  </h2>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {plan.description}
                  </p>
                  <div className="mt-6">
                    <span className="font-display text-4xl font-bold text-zinc-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-sm text-zinc-500">
                      / {plan.period}
                    </span>
                  </div>
                  <ul className="mt-8 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    to="/contact"
                    variant={plan.highlighted ? "secondary" : "primary"}
                    className="mt-8 w-full"
                  >
                    {plan.cta}
                  </ButtonLink>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-16 text-center">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Need something hybrid? We frequently blend Studio builds with Labs
              retainers.{" "}
              <ButtonLink to="/contact" variant="ghost" size="sm" className="!inline">
                Talk to us
              </ButtonLink>
            </p>
          </ScrollReveal>
        </div>
      </MorphSection>

      <CTA />
    </>
  );
}
