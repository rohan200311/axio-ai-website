import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";
import MorphSection from "../MorphSection";
import { ButtonLink } from "../Button";
import { capabilities } from "../../data/content";

const nodes = [
  { id: "sales", label: "Sales", x: 50, y: 18 },
  { id: "legal", label: "Legal", x: 72, y: 28 },
  { id: "finance", label: "Finance", x: 82, y: 48 },
  { id: "marketing", label: "Marketing", x: 72, y: 70 },
  { id: "support", label: "Support", x: 50, y: 80 },
  { id: "engineering", label: "Engineering", x: 28, y: 70 },
  { id: "ops", label: "Operations", x: 18, y: 48 },
  { id: "design", label: "Design", x: 28, y: 28 },
];

export default function Platform() {
  const [active, setActive] = useState("marketing");

  return (
    <MorphSection className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            mirai.ai is an AI Labs & Software Studios company{" "}
            <span className="text-zinc-500 dark:text-zinc-400">
              built to engineer intelligent systems end to end
            </span>
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-5">
          {/* Orbit diagram */}
          <ScrollReveal className="lg:col-span-3" direction="left">
            <div className="relative aspect-square max-h-[480px] w-full overflow-hidden rounded-3xl border border-zinc-200 bg-white p-4 shadow-xl grid-bg dark:border-zinc-700 dark:bg-zinc-900 sm:p-8">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] text-zinc-200 dark:text-zinc-700 sm:inset-8 sm:h-[calc(100%-4rem)] sm:w-[calc(100%-4rem)]"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.3"
                  strokeDasharray="1.5 1.5"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.25"
                  opacity="0.6"
                />
                {nodes.map((n) => (
                  <line
                    key={n.id}
                    x1="50"
                    y1="50"
                    x2={n.x}
                    y2={n.y}
                    stroke="currentColor"
                    strokeWidth="0.25"
                    opacity="0.5"
                  />
                ))}
              </svg>

              {/* Center */}
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/30"
                >
                  mirai.ai
                </motion.div>
              </div>

              {nodes.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  onClick={() => setActive(n.id)}
                  className={`orbit-node absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-1.5 text-xs font-medium shadow-sm transition ${
                    active === n.id
                      ? "border-sky-400 bg-sky-50 text-sky-700 dark:border-sky-500 dark:bg-sky-950 dark:text-sky-300"
                      : "border-zinc-200 bg-white text-zinc-700 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200"
                  }`}
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                >
                  {n.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Side panel */}
          <ScrollReveal className="lg:col-span-2" direction="right" delay={0.15}>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl dark:border-zinc-700 dark:bg-zinc-900 sm:p-8">
              <div className="mb-4 flex gap-2 text-xs font-medium text-zinc-400">
                <span className="rounded-md bg-zinc-100 px-2 py-1 dark:bg-zinc-800">
                  Home
                </span>
                <span className="rounded-md bg-sky-50 px-2 py-1 text-sky-600 dark:bg-sky-950 dark:text-sky-400">
                  Company
                </span>
                <span className="rounded-md bg-zinc-100 px-2 py-1 dark:bg-zinc-800">
                  Tasks
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                Let&apos;s reach out to potential customers to validate our idea
                further.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                That&apos;s a great way to make sure we&apos;re building the right
                features. Our studio combines AI research, product engineering,
                and operational precision — then your team approves every
                high-impact action.
              </p>
              <div className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Growth Agent · Building prospect list · Hubballi
              </div>
              <div className="mt-6">
                <ButtonLink to="/contact" size="sm" className="w-full">
                  Ask mirai to spin up new sales agents
                </ButtonLink>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {capabilities.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-zinc-200/80 bg-white/60 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                <h4 className="font-semibold text-zinc-900 dark:text-white">
                  {c.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {c.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
            Bring your product vision into our engineering pipeline and start with
            one concrete task.
          </p>
          <ButtonLink to="/contact">Start in mirai</ButtonLink>
        </ScrollReveal>
      </div>
    </MorphSection>
  );
}
