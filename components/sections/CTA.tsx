"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  Loader2,
  MessageSquare,
} from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function CTA() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      business: formData.get("business"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 px-6 py-28 lg:px-8 lg:py-36"
    >
      {/* Background effects */}
      <motion.div
        className="pointer-events-none absolute right-[-15%] top-[5%] h-[520px] w-[520px] rounded-full bg-blue-600/[0.08] blur-[160px]"
        animate={{
          x: [0, -20, 10, 0],
          y: [0, 15, -10, 0],
          scale: [1, 1.05, 0.97, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="grid gap-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 sm:p-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:p-14"
        >
          {/* Left side */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                Start a Project
              </p>

              <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Ready to build something
                <span className="block text-neutral-500">
                  better for your business?
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-400">
                Tell us what you&apos;re working on. We&apos;ll review your
                project, learn about your goals, and recommend the best way to
                move forward.
              </p>

              <div className="mt-10 space-y-7">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-500">
                    <MessageSquare size={18} />
                  </div>

                  <div>
                    <p className="font-medium text-white">
                      Tell us about your business
                    </p>

                    <p className="mt-1 max-w-md text-sm leading-6 text-neutral-500">
                      Share your goals, current website, challenges, and the
                      solution you&apos;re looking for.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-500">
                    <CheckCircle2 size={18} />
                  </div>

                  <div>
                    <p className="font-medium text-white">
                      We review your request
                    </p>

                    <p className="mt-1 max-w-md text-sm leading-6 text-neutral-500">
                      We evaluate your needs, functionality, budget, and the
                      best approach for your project.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-500">
                    <ArrowUpRight size={18} />
                  </div>

                  <div>
                    <p className="font-medium text-white">
                      Get clear next steps
                    </p>

                    <p className="mt-1 max-w-md text-sm leading-6 text-neutral-500">
                      We&apos;ll contact you to discuss your project and the
                      best way to get started.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-white/10 pt-7">
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <Globe2 size={16} />
                English & Spanish support available
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="grid gap-5 rounded-[1.5rem] border border-white/10 bg-black/20 p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-neutral-300"
                >
                  Your name *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-[#080808] px-4 py-3.5 text-white outline-none transition placeholder:text-neutral-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="business"
                  className="mb-2 block text-sm text-neutral-300"
                >
                  Business name
                </label>

                <input
                  id="business"
                  name="business"
                  type="text"
                  placeholder="Your business"
                  className="w-full rounded-xl border border-white/10 bg-[#080808] px-4 py-3.5 text-white outline-none transition placeholder:text-neutral-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-neutral-300"
                >
                  Email *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@business.com"
                  className="w-full rounded-xl border border-white/10 bg-[#080808] px-4 py-3.5 text-white outline-none transition placeholder:text-neutral-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm text-neutral-300"
                >
                  Phone
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 555-5555"
                  className="w-full rounded-xl border border-white/10 bg-[#080808] px-4 py-3.5 text-white outline-none transition placeholder:text-neutral-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="service"
                className="mb-2 block text-sm text-neutral-300"
              >
                What do you need? *
              </label>

              <select
                id="service"
                name="service"
                required
                defaultValue=""
                className="w-full rounded-xl border border-white/10 bg-[#080808] px-4 py-3.5 text-neutral-300 outline-none transition focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
              >
                <option value="" disabled>
                  Select a service
                </option>

                <option value="New Website">New Website</option>
                <option value="Website Redesign">Website Redesign</option>
                <option value="Website Maintenance">
                  Website Maintenance
                </option>
                <option value="SEO & Growth">SEO & Growth</option>
                <option value="Booking System">Booking System</option>
                <option value="E-commerce">E-commerce</option>
                <option value="AI & Automation">AI & Automation</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="budget"
                className="mb-2 block text-sm text-neutral-300"
              >
                Estimated budget
              </label>

              <select
                id="budget"
                name="budget"
                defaultValue=""
                className="w-full rounded-xl border border-white/10 bg-[#080808] px-4 py-3.5 text-neutral-300 outline-none transition focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
              >
                <option value="" disabled>
                  Select your budget
                </option>

                <option value="$500 - $1,000">$500 – $1,000</option>
                <option value="$1,000 - $2,000">$1,000 – $2,000</option>
                <option value="$2,000 - $5,000">$2,000 – $5,000</option>
                <option value="$5,000+">$5,000+</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-neutral-300"
              >
                Tell us about your project *
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell us about your business, your goals, current website, features you need, or anything else we should know..."
                className="w-full resize-none rounded-xl border border-white/10 bg-[#080808] px-4 py-3.5 text-white outline-none transition placeholder:text-neutral-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={status !== "loading" ? { y: -2 } : undefined}
              whileTap={status !== "loading" ? { scale: 0.99 } : undefined}
              className="group mt-2 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-medium text-black transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending request...
                </>
              ) : (
                <>
                  Submit Project Request
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </>
              )}
            </motion.button>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-green-500/20 bg-green-500/[0.06] px-4 py-4"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-green-400"
                  />

                  <div>
                    <p className="text-sm font-medium text-green-400">
                      Project request received.
                    </p>

                    <p className="mt-1 text-sm leading-6 text-green-400/70">
                      Thank you. We&apos;ll review your information and contact
                      you with the next steps.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-red-500/20 bg-red-500/[0.06] px-4 py-4"
              >
                <p className="text-sm leading-6 text-red-400">
                  We couldn&apos;t send your request. Please try again in a
                  moment.
                </p>
              </motion.div>
            )}

            <p className="text-center text-xs leading-5 text-neutral-600">
              Your information is only used to respond to your project request.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}