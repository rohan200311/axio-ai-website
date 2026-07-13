import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { clients } from "../../data/content";

export default function Logos() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative z-10 -mt-8 pb-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Logo badges with staggered animation */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {clients.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 20, scale: 0.9 }
              }
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-xl border border-zinc-200/80 bg-white px-5 py-3 text-xs font-semibold tracking-widest text-zinc-500 shadow-sm transition hover:border-sky-200 hover:text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-sky-800 dark:hover:text-zinc-200"
            >
              {c}
            </motion.div>
          ))}
        </div>

        {/* Tagline with delayed fade-in */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{
            duration: 0.6,
            delay: clients.length * 0.1 + 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-5 text-center text-sm text-zinc-500 dark:text-zinc-400"
        >
          Trusted by founders building the next wave of intelligent products
        </motion.p>
      </div>
    </section>
  );
}
