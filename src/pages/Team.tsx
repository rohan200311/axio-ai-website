import { MapPin } from "lucide-react";
import { team, company } from "../data/content";
import ScrollReveal from "../components/ScrollReveal";
import { ButtonLink } from "../components/Button";
import CTA from "../components/home/CTA";

export default function Team() {
  return (
    <>
      {/* Background container for header + team cards */}
      <div className="relative">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/team-bg-new.png')" }}
        />
        {/* Semi-transparent overlay for text readability */}
        <div className="absolute inset-0 bg-white/70 dark:bg-zinc-950/70" />

        {/* Header section */}
        <section className="relative z-10 pt-32 pb-16 sm:pt-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                The team
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
                Founders who engineer like a full company
              </h1>
              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                Five co-founders spanning AI, product, engineering, design, and
                growth — based in {company.location}, shipping worldwide.
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-zinc-500">
                <MapPin className="h-4 w-4 text-sky-500" />
                {company.fullLocation}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Team cards section */}
        <section className="relative z-10 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <ScrollReveal
                key={member.name}
                delay={(i % 3) * 0.1}
                direction="scale"
                className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <article className="card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 sm:p-8">
                  <div
                    className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${member.gradient} text-lg font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    {member.initials}
                  </div>
                  <h2 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">
                    {member.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-sky-600 dark:text-sky-400">
                    {member.role}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {member.bio}
                  </p>
                  <div className="mt-5 flex items-center gap-2">
                    <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                      {member.shortRole}
                    </span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 text-[10px] font-bold text-zinc-400 transition hover:border-sky-400 hover:text-sky-600 dark:border-zinc-600">
                      in
                    </span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-16 rounded-3xl border border-zinc-200 bg-gradient-to-br from-sky-50 to-indigo-50 p-8 text-center dark:border-zinc-700 dark:from-sky-950/40 dark:to-indigo-950/40 sm:p-12">
            <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-white">
              Want to join the studio?
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-zinc-600 dark:text-zinc-400">
              We&apos;re always open to exceptional engineers, designers, and AI
              researchers who want to build production systems — not slide decks.
            </p>
            <div className="mt-6">
              <ButtonLink to="/contact">Get in touch</ButtonLink>
            </div>
          </ScrollReveal>
        </div>
      </section>
      </div>

      <CTA />
    </>
  );
}
