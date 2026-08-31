"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$699",
    label: "Starting at",
    description:
      "For small businesses that need a clean, professional website and a strong online presence.",
    bestFor: "Best for new or local businesses",
    features: [
      "Up to 5 pages",
      "Custom responsive design",
      "Contact form",
      "Google Maps integration",
      "Basic SEO setup",
      "Social media integration",
      "Mobile optimization",
      "1 revision round",
    ],
    featured: false,
  },
  {
    name: "Business",
    price: "$1,299",
    label: "Starting at",
    description:
      "For growing businesses that need a stronger website built to earn trust, generate leads, and convert visitors.",
    bestFor: "Best value for growing businesses",
    features: [
      "Up to 10 pages",
      "Custom premium design",
      "Advanced mobile optimization",
      "Booking or scheduling integration",
      "Google Analytics setup",
      "SEO foundations",
      "Performance optimization",
      "2 revision rounds",
      "Priority launch support",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "$2,499+",
    label: "Starting at",
    description:
      "For businesses that need advanced functionality, custom integrations, automation, or a more complex digital experience.",
    bestFor: "Best for advanced projects",
    features: [
      "Custom page structure",
      "Premium UI/UX design",
      "Advanced interactions",
      "AI or automation integrations",
      "E-commerce or advanced booking",
      "Custom integrations",
      "Advanced SEO foundations",
      "Analytics setup",
      "Priority support",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-t border-white/10 px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-12%] top-[12%] h-[520px] w-[520px] rounded-full bg-blue-600/[0.05] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col justify-between gap-8 sm:mb-16 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              Pricing
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Simple pricing.
              <span className="block text-neutral-500">
                Built around your goals.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8">
            Choose a starting point that fits your business. Every project can
            be customized based on your goals, features, content, and long-term
            needs.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
              }}
              whileHover={{ y: -7 }}
              className={`relative flex flex-col overflow-hidden rounded-[2rem] border p-7 transition duration-300 sm:p-8 lg:p-9 ${
                plan.featured
                  ? "border-blue-500/40 bg-blue-500/[0.07] shadow-[0_0_100px_rgba(37,99,235,0.08)]"
                  : "border-white/10 bg-white/[0.025] hover:border-white/20"
              }`}
            >
              {plan.featured && (
                <>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-transparent" />

                  <div className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-400 sm:text-xs">
                    <Sparkles size={13} />
                    Most Popular
                  </div>
                </>
              )}

              <div className="relative z-10 flex h-full flex-col">
                {/* Plan name */}
                <div>
                  <p className="text-sm font-medium text-neutral-400">
                    {plan.name}
                  </p>

                  <p
                    className={`mt-2 text-xs ${
                      plan.featured ? "text-blue-400" : "text-neutral-600"
                    }`}
                  >
                    {plan.bestFor}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-8">
                  <p className="mb-2 text-xs uppercase tracking-[0.16em] text-neutral-600">
                    {plan.label}
                  </p>

                  <h3 className="text-5xl font-semibold tracking-[-0.05em] text-white">
                    {plan.price}
                  </h3>

                  <p className="mt-6 min-h-[105px] text-sm leading-7 text-neutral-400 sm:text-base">
                    {plan.description}
                  </p>
                </div>

                <div className="my-8 h-px bg-white/10" />

                {/* Features */}
                <div className="flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.featured
                            ? "bg-blue-500/10"
                            : "bg-white/[0.05]"
                        }`}
                      >
                        <Check
                          size={13}
                          strokeWidth={2.2}
                          className={
                            plan.featured
                              ? "text-blue-400"
                              : "text-neutral-400"
                          }
                        />
                      </div>

                      <p className="text-sm leading-6 text-neutral-300">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  whileTap={{ scale: 0.98 }}
                  className={`group mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition ${
                    plan.featured
                      ? "bg-white text-black hover:bg-neutral-200"
                      : "border border-white/10 bg-white/[0.04] text-white hover:border-white/20 hover:bg-white/[0.08]"
                  }`}
                >
                  Get a Free Quote

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom project note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.015] px-5 py-4"
        >
          <ShieldCheck
            size={17}
            className="mt-0.5 shrink-0 text-neutral-500"
          />

          <p className="text-xs leading-6 text-neutral-600 sm:text-sm">
            Pricing shown is a starting point. Final pricing depends on project
            scope, content, functionality, integrations, and timeline. You&apos;ll
            receive a clear quote before work begins.
          </p>
        </motion.div>

        {/* Monthly care */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]"
        >
          <div className="flex flex-col justify-between gap-8 p-7 sm:p-9 lg:flex-row lg:items-center lg:p-10">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-500">
                  Monthly Website Care
                </p>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-400">
                  From $75/month
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                Keep your website secure, updated, and performing.
              </h3>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-400 sm:text-base">
                Ongoing care can include content updates, monitoring, backups,
                technical support, performance improvements, and future website
                changes as your business grows.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              Ask About Website Care

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}