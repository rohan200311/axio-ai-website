import {
  Map,
  Code2,
  Bot,
  TrendingUp,
  Folder,
} from "lucide-react";
import { processSteps } from "../../data/content";
import ScrollReveal from "../ScrollReveal";
import MorphSection from "../MorphSection";
import { ButtonLink } from "../Button";

const icons = { Map, Code2, Bot, TrendingUp };

function Visual({ type }: { type: string }) {
  if (type === "roadmap") {
    return (
      <div className="grid grid-cols-3 gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-700 dark:bg-zinc-800/50">
        {["Idea stage", "Legal stage", "Identity stage"].map((s, i) => (
          <div
            key={s}
            className="rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-600 dark:bg-zinc-900"
          >
            <p className="text-[10px] font-semibold uppercase text-zinc-400">
              0{i + 1}
            </p>
            <p className="mt-1 text-xs font-medium text-zinc-800 dark:text-zinc-200">
              {s}
            </p>
            <div className="mt-3 space-y-1.5">
              <div className="h-6 rounded-md bg-sky-50 dark:bg-sky-950/40" />
              <div className="h-6 rounded-md bg-zinc-100 dark:bg-zinc-800" />
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (type === "build") {
    return (
      <div className="flex gap-2">
        <div className="flex-1 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
          <p className="text-xs font-medium text-zinc-500">Landing Page</p>
          <div className="mt-3 space-y-2">
            <div className="h-3 w-3/4 rounded bg-zinc-100 dark:bg-zinc-800" />
            <div className="h-20 rounded-lg bg-gradient-to-br from-sky-100 to-indigo-100 dark:from-sky-950 dark:to-indigo-950" />
            <div className="h-3 w-1/2 rounded bg-zinc-100 dark:bg-zinc-800" />
          </div>
        </div>
        <div className="w-40 rounded-2xl border border-zinc-200 bg-white p-3 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
          <p className="text-[10px] font-medium text-zinc-400">Engineer</p>
          <p className="mt-2 text-xs font-semibold text-zinc-800 dark:text-zinc-100">
            Create a new task for axio
          </p>
          <div className="mt-4 flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1.5 dark:border-zinc-600">
            <span className="flex-1 text-[10px] text-zinc-400">
              Create a website for…
            </span>
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-zinc-900 text-[10px] text-white dark:bg-white dark:text-zinc-900">
              →
            </span>
          </div>
        </div>
      </div>
    );
  }
  if (type === "automate") {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
        <p className="text-xs font-medium text-zinc-500">Email Preview</p>
        <div className="mt-3 space-y-2 text-xs">
          <p className="text-zinc-400">
            To: <span className="text-zinc-700 dark:text-zinc-200">sarah@acme.com</span>
          </p>
          <p className="text-zinc-400">
            Subject:{" "}
            <span className="text-zinc-700 dark:text-zinc-200">
              Thought you could use axio for Acme
            </span>
          </p>
          <div className="mt-2 rounded-lg bg-zinc-50 p-3 leading-relaxed text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            Hey Sarah — we&apos;ve been following how quickly your team has been
            shipping. At axio, we build AI systems that unify product and growth…
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
      <div className="mb-3 grid grid-cols-3 gap-2 text-center">
        {[
          { n: "211", l: "Sign ups" },
          { n: "9,262", l: "API calls" },
          { n: "44,264", l: "Monthly visits" },
        ].map((s) => (
          <div key={s.l} className="rounded-lg bg-zinc-50 p-2 dark:bg-zinc-800">
            <p className="font-display text-sm font-bold text-zinc-900 dark:text-white">
              {s.n}
            </p>
            <p className="text-[10px] text-zinc-500">{s.l}</p>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 200 60" className="h-16 w-full">
        <polyline
          fill="none"
          stroke="#0ea5e9"
          strokeWidth="2"
          points="0,50 30,40 60,45 90,25 120,30 150,15 180,20 200,10"
        />
        <polyline
          fill="none"
          stroke="#a78bfa"
          strokeWidth="2"
          points="0,55 30,48 60,50 90,38 120,42 150,28 180,32 200,22"
        />
      </svg>
    </div>
  );
}

export default function Process() {
  return (
    <MorphSection className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            A structured path from idea to production
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Choose the work you want done first, then let our engineering teams
            move it forward with your approvals.
          </p>
          <div className="mt-6">
            <ButtonLink to="/how-we-work">Start your roadmap</ButtonLink>
          </div>
        </ScrollReveal>

        <div className="mt-16 space-y-20">
          {processSteps.map((step, i) => {
            const Icon = icons[step.icon as keyof typeof icons] || Map;
            const reverse = i % 2 === 1;
            return (
              <div
                key={step.title}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <ScrollReveal direction={reverse ? "right" : "left"}>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 dark:bg-sky-950 dark:text-sky-400">
                      <Folder className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="mb-2 inline-flex items-center gap-2 text-sky-600 dark:text-sky-400">
                        <Icon className="h-4 w-4" />
                        <span className="text-xs font-semibold uppercase tracking-wider">
                          Step 0{i + 1}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white sm:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
                        {step.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3 text-sm">
                        <ButtonLink to="/how-we-work" variant="ghost" size="sm">
                          Learn how
                        </ButtonLink>
                        <ButtonLink to="/contact" variant="outline" size="sm">
                          Run this in axio
                        </ButtonLink>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction={reverse ? "left" : "right"} delay={0.1}>
                  <Visual type={step.visual} />
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </MorphSection>
  );
}
