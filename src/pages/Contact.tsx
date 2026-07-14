import { useState, type FormEvent } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { company, services } from "../data/content";
import ScrollReveal from "../components/ScrollReveal";
import { Button } from "../components/Button";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: services[0].title,
    message: "",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/contact-bg.png')" }}
        />
        {/* Semi-transparent overlay for text readability */}
        <div className="absolute inset-0 bg-white/70 dark:bg-zinc-950/70" />
        <div className="absolute -right-20 top-40 h-80 w-80 animate-morph rounded-full bg-indigo-400/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <ScrollReveal className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                Contact
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
                Let&apos;s build something intelligent
              </h1>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                Tell us about your product, infrastructure, or growth challenge.
                We&apos;ll respond within one business day.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 dark:bg-sky-950 dark:text-sky-400">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                      Studio
                    </p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {company.fullLocation}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 dark:bg-sky-950 dark:text-sky-400">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                      Email
                    </p>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-sm text-sky-600 hover:underline dark:text-sky-400"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 dark:bg-sky-950 dark:text-sky-400">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                      Phone
                    </p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {company.phone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 shadow-lg dark:border-zinc-700">
                <img
                  src="/images/contact-landscape.png"
                  alt="axio studio"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-3" delay={0.1} direction="right">
              <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl dark:border-zinc-700 dark:bg-zinc-900 sm:p-8">
                {submitted ? (
                  <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-white">
                      Message received
                    </h2>
                    <p className="mt-2 max-w-sm text-sm text-zinc-600 dark:text-zinc-400">
                      Thanks {form.name || "there"}! The axio.ai team will
                      review your note and get back shortly.
                    </p>
                    <Button
                      className="mt-6"
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                    >
                      Send another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-1.5 block text-xs font-medium text-zinc-500">
                          Name
                        </span>
                        <input
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                          placeholder="Your name"
                        />
                      </label>
                      <label className="block">
                        <span className="mb-1.5 block text-xs font-medium text-zinc-500">
                          Email
                        </span>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                          placeholder="you@company.com"
                        />
                      </label>
                    </div>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-medium text-zinc-500">
                        Company
                      </span>
                      <input
                        value={form.company}
                        onChange={(e) =>
                          setForm({ ...form, company: e.target.value })
                        }
                        className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                        placeholder="Company or project name"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-medium text-zinc-500">
                        Interest
                      </span>
                      <select
                        value={form.interest}
                        onChange={(e) =>
                          setForm({ ...form, interest: e.target.value })
                        }
                        className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                      >
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="General inquiry">General inquiry</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-medium text-zinc-500">
                        Message
                      </span>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className="w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                        placeholder="What are you building? Timeline? Constraints?"
                      />
                    </label>
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      Send message
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
