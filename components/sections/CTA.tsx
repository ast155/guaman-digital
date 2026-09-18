"use client";

import { FormEvent, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
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
      package: formData.get("package"),
      budget: formData.get("budget"),
      timeline: formData.get("timeline"),
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
      className="relative overflow-hidden border-t border-white/10 px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-15%] top-[5%] h-[520px] w-[520px] rounded-full bg-blue-600/[0.08] blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:p-14">
          {/* Left side */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                Start a Project
              </p>

              <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Let&apos;s build something
                <span className="block text-neutral-500">
                  that moves your business forward.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8">
                Tell us a little about your business and what you&apos;re
                looking to build. We&apos;ll review your project and get back
                to you with clear next steps.
              </p>

              {/* Steps */}
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
                      Share your goals, current website, challenges, and what
                      you&apos;d like us to help you build.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-500">
                    <CheckCircle2 size={18} />
                  </div>

                  <div>
                    <p className="font-medium text-white">
                      We review your project
                    </p>

                    <p className="mt-1 max-w-md text-sm leading-6 text-neutral-500">
                      We&apos;ll look at your goals, functionality, timeline,
                      budget, and the best approach for your business.
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
                      We&apos;ll contact you to discuss the project and provide
                      clear recommendations for moving forward.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Language support */}
            <div className="mt-12 border-t border-white/10 pt-7">
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <Globe2 size={16} />
                English &amp; Spanish support available
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="grid gap-5 rounded-[1.5rem] border border-white/10 bg-black/20 p-6 sm:p-8"
          >
            {/* Name / Business */}
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
                  autoComplete="name"
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
                  autoComplete="organization"
                  placeholder="Your business"
                  className="w-full rounded-xl border border-white/10 bg-[#080808] px-4 py-3.5 text-white outline-none transition placeholder:text-neutral-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>
            </div>

            {/* Email / Phone */}
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
                  autoComplete="email"
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
                  autoComplete="tel"
                  placeholder="(555) 555-5555"
                  className="w-full rounded-xl border border-white/10 bg-[#080808] px-4 py-3.5 text-white outline-none transition placeholder:text-neutral-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>
            </div>

            {/* Service */}
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
                <option value="SEO & Growth">SEO &amp; Growth</option>
                <option value="Booking System">Booking System</option>
                <option value="E-commerce">E-commerce</option>
                <option value="AI & Automation">AI &amp; Automation</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Package */}
            <div>
              <label
                htmlFor="package"
                className="mb-2 block text-sm text-neutral-300"
              >
                Website package
              </label>

              <select
                id="package"
                name="package"
                defaultValue=""
                className="w-full rounded-xl border border-white/10 bg-[#080808] px-4 py-3.5 text-neutral-300 outline-none transition focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
              >
                <option value="" disabled>
                  Select a package
                </option>

                <option value="Starter - $699">
                  Starter — starting at $699
                </option>

                <option value="Business - $1,299">
                  Business — starting at $1,299
                </option>

                <option value="Premium - $2,499+">
                  Premium — starting at $2,499+
                </option>

                <option value="Website Care - $75/month">
                  Website Care — starting at $75/month
                </option>

                <option value="Not sure">
                  Not sure — help me choose
                </option>
              </select>
            </div>

            {/* Budget / Timeline */}
            <div className="grid gap-5 sm:grid-cols-2">
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
                    Select budget
                  </option>

                  <option value="$500 - $1,000">$500 – $1,000</option>

                  <option value="$1,000 - $1,500">
                    $1,000 – $1,500
                  </option>

                  <option value="$1,500 - $2,500">
                    $1,500 – $2,500
                  </option>

                  <option value="$2,500 - $5,000">
                    $2,500 – $5,000
                  </option>

                  <option value="$5,000+">$5,000+</option>

                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="timeline"
                  className="mb-2 block text-sm text-neutral-300"
                >
                  Timeline
                </label>

                <div className="relative">
                  <Clock3
                    size={16}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600"
                  />

                  <select
                    id="timeline"
                    name="timeline"
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-white/10 bg-[#080808] py-3.5 pl-11 pr-4 text-neutral-300 outline-none transition focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                  >
                    <option value="" disabled>
                      Select timeline
                    </option>

                    <option value="As soon as possible">
                      As soon as possible
                    </option>

                    <option value="Within 2-4 weeks">
                      Within 2–4 weeks
                    </option>

                    <option value="Within 1-2 months">
                      Within 1–2 months
                    </option>

                    <option value="Just exploring">
                      Just exploring options
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* Message */}
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
                placeholder="Tell us about your business, goals, current website, features you need, or anything else we should know..."
                className="w-full resize-none rounded-xl border border-white/10 bg-[#080808] px-4 py-3.5 text-white outline-none transition placeholder:text-neutral-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="group mt-2 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Get My Free Quote

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </>
              )}
            </button>

            {/* Trust */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-neutral-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} />
                Free project review
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} />
                No obligation
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} />
                English &amp; Spanish
              </span>
            </div>

            {/* Success */}
            {status === "success" && (
              <div className="rounded-xl border border-green-500/20 bg-green-500/[0.06] px-4 py-4">
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
                      Thanks! We&apos;ll review your project and contact you
                      with the next steps.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error */}
            {status === "error" && (
              <div className="rounded-xl border border-red-500/20 bg-red-500/[0.06] px-4 py-4">
                <p className="text-sm leading-6 text-red-400">
                  We couldn&apos;t send your request. Please try again in a
                  moment.
                </p>
              </div>
            )}

            <p className="text-center text-xs leading-5 text-neutral-600">
              Your information is only used to respond to your project request.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}