import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const points = [
  "You stay in control — nothing ships without your approval",
  "Run multiple workstreams in parallel",
  "Connect APIs, skills, and infrastructure to our delivery engine",
];

export default function Tools() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0">
        <img
          src="/images/tools-section.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-sky-900/55 dark:bg-zinc-950/75" />
      </div>

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            All the engineering systems your product needs
          </h2>
          <p className="mt-4 text-sky-100">
            Give teams the context, tools, and approvals they need to keep delivery
            moving.
          </p>
        </ScrollReveal>

        <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-3 sm:flex-row sm:justify-center sm:gap-6">
          {points.map((p) => (
            <div
              key={p}
              className="flex items-start gap-2 text-left text-sm text-sky-50"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
              <span>{p}</span>
            </div>
          ))}
        </div>

        <ScrollReveal delay={0.15} className="mx-auto mt-12 max-w-3xl">
          <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/95 shadow-2xl backdrop-blur dark:bg-zinc-900/95">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-zinc-200 p-6 dark:border-zinc-700 md:border-b-0 md:border-r">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Customize Agent Template
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-zinc-900 dark:text-white">
                  GTM Lead
                </h3>
                <p className="mt-1 text-xs text-zinc-500">Task Agent</p>
                <label className="mt-4 block text-xs font-medium text-zinc-500">
                  Custom instructions
                </label>
                <div className="mt-1.5 min-h-[100px] rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-600 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                  Add custom instructions on how the agent should behave, escalate,
                  and report back to the GenZinering studio.
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Agent graph
                  </p>
                  <button
                    type="button"
                    className="rounded-full bg-zinc-900 px-3 py-1 text-[10px] font-medium text-white dark:bg-white dark:text-zinc-900"
                  >
                    Add trigger
                  </button>
                </div>
                <div className="relative mt-8 flex flex-col items-center gap-4">
                  <div className="rounded-xl border-2 border-sky-400 bg-sky-50 px-4 py-2 text-xs font-semibold text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                    GTM Lead Task Agent
                  </div>
                  <div className="h-6 w-px bg-zinc-300 dark:bg-zinc-600" />
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Research", "Copywriter", "Execution"].map((n) => (
                      <div
                        key={n}
                        className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-[11px] font-medium text-zinc-700 shadow-sm dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200"
                      >
                        {n} Subagent
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </motion.div>
    </section>
  );
}
