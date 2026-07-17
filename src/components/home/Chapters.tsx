import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { chapters } from "../../data/content";
import ScrollReveal from "../ScrollReveal";
import MorphSection from "../MorphSection";
import { ButtonLink } from "../Button";

export default function Chapters() {
  return (
    <MorphSection className="relative overflow-hidden py-20 sm:py-28">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/chapters-bg.png')" }}
      />
      {/* Semi-transparent overlay for text readability */}
      <div className="absolute inset-0 bg-white/60 dark:bg-zinc-950/60" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Learn how to build intelligent software
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Read the guide, then let mirai.ai turn each step into a roadmap,
            tasks, and delivery squads.
          </p>
          <div className="mt-6">
            <ButtonLink to="/how-we-work">Put the guide to work</ButtonLink>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {chapters.map((ch, i) => (
            <ScrollReveal key={ch.id} delay={i * 0.08} direction="scale">
              <Link
                to={ch.link}
                className="card-lift group block overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900"
              >
                <div className="grid-bg p-5 sm:p-6">
                  <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-md dark:border-zinc-700 dark:bg-zinc-800">
                    <div className="border-b border-zinc-100 px-4 py-3 dark:border-zinc-700">
                      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                        {ch.subtitle}
                      </p>
                      <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">
                        {ch.title}
                      </h3>
                    </div>
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={ch.image}
                        alt={ch.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {ch.description}
                    </p>
                    <span className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition group-hover:border-sky-400 group-hover:bg-sky-50 group-hover:text-sky-600 dark:border-zinc-600 dark:group-hover:border-sky-500 dark:group-hover:bg-sky-950">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10 text-center">
          <ButtonLink to="/services" variant="outline">
            Download full guide
          </ButtonLink>
        </ScrollReveal>
      </div>
    </MorphSection>
  );
}
