import ScrollReveal from "../ScrollReveal";
import { ButtonLink } from "../Button";
import { company } from "../../data/content";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500 via-indigo-600 to-violet-700" />
      <div className="absolute -left-20 top-0 h-64 w-64 animate-morph rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -right-10 bottom-0 h-72 w-72 animate-morph rounded-full bg-sky-300/20 blur-2xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Build intelligent software with a studio that ships
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sky-100">
            Partner with {company.name} — AI Labs & Software Studios for founders
            and businesses who want precision engineering, not just promises.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink
              to="/contact"
              className="!bg-white !text-indigo-700 hover:!bg-sky-50"
              size="lg"
            >
              Start a conversation
            </ButtonLink>
            <ButtonLink
              to="/services"
              variant="outline"
              size="lg"
              className="!border-white/40 !text-white hover:!bg-white/10"
            >
              Explore services
            </ButtonLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
