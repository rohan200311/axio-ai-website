import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Compass,
  PenTool,
  Rocket,
  ShieldCheck,
  LineChart,
  Users,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import MorphSection from "../components/MorphSection";
import { ButtonLink } from "../components/Button";
import CTA from "../components/home/CTA";
import { chapters } from "../data/content";

const phases = [
  {
    icon: Compass,
    title: "Discover",
    description:
      "We map your goals, existing stack, risks, and opportunities — then build a clear roadmap with milestones and ownership.",
    duration: "Week 1–2",
  },
  {
    icon: PenTool,
    title: "Design & Architect",
    description:
      "Product UX, system design, data models, and integration plans — reviewed with your stakeholders before a single line of production code.",
    duration: "Week 2–4",
  },
  {
    icon: Rocket,
    title: "Build & Automate",
    description:
      "Full-stack delivery with intelligent features, mobile/web apps, automations, and infrastructure — iterative demos every sprint.",
    duration: "Ongoing sprints",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Harden",
    description:
      "Security audits, compliance readiness, pre-production optimizations, and performance budgets before go-live.",
    duration: "Pre-launch",
  },
  {
    icon: LineChart,
    title: "Launch & Grow",
    description:
      "Branding polish, SEO, digital marketing, analytics, and continuous improvement so your product finds and keeps users.",
    duration: "Launch → scale",
  },
  {
    icon: Users,
    title: "Partner Mode",
    description:
      "Optional retainer — an embedded multi-disciplinary squad that owns roadmap, operations, and experiments with you.",
    duration: "Retainer",
  },
];

export default function HowWeWork() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-cream to-cream dark:from-indigo-950/40 dark:via-zinc-950 dark:to-zinc-950" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              How we work
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
              A clear path from idea to intelligent product
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Move through each phase of delivery — human specialists and AI
              systems working together, with you always in control.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <ButtonLink to="/contact" size="lg">
                Start your roadmap
              </ButtonLink>
              <ButtonLink to="/services" variant="outline" size="lg">
                View services
              </ButtonLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Morph timeline */}
      <section className="py-16 sm:py-24" ref={trackRef}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="relative">
            <div className="absolute left-6 top-0 h-full w-0.5 bg-zinc-200 dark:bg-zinc-800 sm:left-8" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-sky-500 to-indigo-600 sm:left-8"
            />

            <div className="space-y-12">
              {phases.map((phase, i) => {
                const Icon = phase.icon;
                return (
                  <ScrollReveal key={phase.title} delay={0.05}>
                    <div className="relative flex gap-6 sm:gap-8">
                      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 sm:h-16 sm:w-16">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="card-lift flex-1 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">
                            {i + 1}. {phase.title}
                          </h3>
                          <span className="rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                            {phase.duration}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Chapter cards */}
      <MorphSection className="bg-white py-20 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-zinc-900 dark:text-white">
              The axio playbook
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Four chapters. One continuous operating system.
            </p>
          </ScrollReveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {chapters.map((ch, i) => (
              <ScrollReveal key={ch.id} delay={i * 0.08}>
                <div className="card-lift overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900">
                  <img
                    src={ch.image}
                    alt={ch.title}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                      {ch.subtitle}
                    </p>
                    <h3 className="font-display font-semibold text-zinc-900 dark:text-white">
                      {ch.title}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      {ch.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </MorphSection>

      <CTA />
    </>
  );
}
