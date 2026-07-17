import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ButtonLink } from "../Button";
import { company } from "../../data/content";

const tasks = [
  { label: "Task Completed", title: "New webpage", color: "bg-emerald-500" },
  { label: "Task running", title: "Bug fix", color: "bg-amber-400" },
  { label: "Task Completed", title: "SEO Optimization", color: "bg-sky-500" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden">
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-emerald-100 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-950" />

      {/* Parallax video background */}
      <motion.div style={{ y: yBg }} className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center"
        >
          <source src="/videos/gemini_generated_video_a6bb3de9.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-cream/90 via-transparent to-sky-200/30 dark:from-zinc-950/95 dark:to-slate-900/40" />
      </motion.div>

        {/* Floating task cards */}
      <div className="pointer-events-none absolute right-[8%] top-[28%] z-20 hidden flex-col gap-2.5 md:flex lg:right-[12%]">
        {tasks.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.2, duration: 0.6 }}
            className="hero-label animate-float pointer-events-auto flex items-center gap-2.5 rounded-xl px-3.5 py-2.5"
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            <span className={`h-2 w-2 rounded-full ${t.color}`} />
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                {t.label}
              </p>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                {t.title}
              </p>
            </div>
            <CheckCircle2 className="ml-2 h-4 w-4 text-emerald-500" />
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 mx-auto flex max-w-7xl flex-col px-4 pb-32 pt-32 sm:px-6 sm:pt-40 lg:px-8 lg:pt-44"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-zinc-900/70 dark:text-zinc-200">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            {company.tagline} · {company.location}
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-[3.75rem] dark:text-white">
            {company.name.split(".")[0]} designs, builds, and automates{" "}
            <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent dark:from-sky-400 dark:to-indigo-400">
              intelligent software
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-zinc-700 sm:text-lg dark:text-zinc-300">
            From AI infrastructure to SaaS products, apps, security, and growth — one studio for the full stack.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink to="/contact" variant="primary" size="lg">
              Start a project
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink to="/services" variant="ghost" size="lg">
              Explore services
            </ButtonLink>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom pixel fade into cream */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream to-transparent dark:from-zinc-950" />
    </section>
  );
}
