import { Link } from "react-router-dom";
import { MapPin, Mail } from "lucide-react";
import { company, navLinks, chapters } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-200 dark:border-zinc-800">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/footer-bg.png')" }}
      />
      {/* Semi-transparent overlay for text readability */}
      <div className="absolute inset-0 bg-white/80 dark:bg-zinc-950/85" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
        <div className="lg:col-span-4">
          <Link to="/" className="mb-4 inline-flex items-center gap-2.5">
            <img
              src="/images/logo.png"
              alt="mirai.ai logo"
              className="h-16 w-16 object-contain"
            />
            <span className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
              {company.name}
            </span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {company.tagline}. We help founders and enterprises run intelligent
            products — from AI web & apps to infrastructure, security, and growth.
          </p>
          <div className="mt-6 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-sky-500" />
              {company.fullLocation}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-sky-500" />
              {company.email}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Navigate
            </h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-sm text-zinc-700 transition hover:text-sky-600 dark:text-zinc-300 dark:hover:text-sky-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Playbook
            </h4>
            <ul className="space-y-2">
              {chapters.map((c) => (
                <li key={c.id}>
                  <Link
                    to={c.link}
                    className="text-sm text-zinc-700 transition hover:text-sky-600 dark:text-zinc-300 dark:hover:text-sky-400"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>
                <span className="cursor-default opacity-70">Privacy Policy</span>
              </li>
              <li>
                <span className="cursor-default opacity-70">Terms of Service</span>
              </li>
              <li>
                <span className="cursor-default opacity-70">Security</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
            <img
              src="/images/sunflower-new.png"
              alt="mirai.ai creative"
              className="h-36 w-full object-cover"
            />
            <div className="p-4">
              <p className="text-sm font-medium text-zinc-900 dark:text-white">
                {company.name} is an AI Labs & Software Studio designed to run
                intelligent products end-to-end.
              </p>
              <Link
                to="/contact"
                className="mt-3 inline-flex rounded-full bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white dark:bg-white dark:text-zinc-900"
              >
                Start The Project
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-zinc-500 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {company.name} — AI Labs & Software
            Studios. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-flex h-5 items-center rounded bg-emerald-100 px-1.5 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
              SOC2-ready
            </span>
            <span>Built in Hubballi · {company.pincode}</span>
          </p>
        </div>
      </div>

      {/* Pixel grass footer strip inspired by reference */}
      <div
        className="relative z-10 h-8 w-full"
        style={{
          background:
            "repeating-linear-gradient(90deg, #4ade80 0 8px, #22c55e 8px 16px, #16a34a 16px 20px, #4ade80 20px 28px)",
          imageRendering: "pixelated",
        }}
      />
    </footer>
  );
}
