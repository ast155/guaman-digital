"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$699",
    description:
      "For small businesses that need a clean, professional online presence.",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Contact form",
      "Google Maps integration",
      "Basic SEO setup",
      "Social media links",
      "1 revision round",
    ],
    featured: false,
  },
  {
    name: "Business",
    price: "$1,299",
    description:
      "For growing businesses that need a stronger website built to attract and convert customers.",
    features: [
      "Up to 10 pages",
      "Custom design",
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
    description:
      "For businesses that need advanced functionality, custom integrations, and a premium experience.",
    features: [
      "Custom page structure",
      "Premium UI/UX design",
      "Advanced animations",
      "AI integrations",
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
      className="relative overflow-hidden border-t border-white/10 px-6 py-28 lg:px-8 lg:py-36"
    >
      <div className="pointer-events-none absolute right-[-10%] top-[15%] h-[520px] w-[520px] rounded-full bg-blue-600/[0.05] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
            Pricing
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Simple pricing.
            <span className="block text-neutral-500">Serious results.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Start with the package that fits your business today. Every project
            can be customized based on your goals, features, and long-term
            needs.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
              }}
              whileHover={{ y: -7 }}
              className={`relative flex flex-col overflow-hidden rounded-[2rem] border p-8 sm:p-10 ${
                plan.featured
                  ? "border-blue-500/40 bg-blue-500/[0.07] shadow-[0_0_100px_rgba(37,99,235,0.08)]"
                  : "border-white/10 bg-white/[0.025]"
              }`}
            >
              {plan.featured && (
                <>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-transparent" />

                  <div className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-400">
                    <Sparkles size={13} />
                    Most Popular
                  </div>
                </>
              )}

              <div className="relative z-10 flex h-full flex-col">
                <p className="text-sm font-medium text-neutral-400">
                  {plan.name}
                </p>

                <div className="mt-7">
                  <div className="flex items-end gap-2">
                    <h3 className="text-5xl font-semibold tracking-[-0.05em] text-white">
                      {plan.price}
                    </h3>

                    <span className="pb-1 text-sm text-neutral-500">
                      starting
                    </span>
                  </div>

                  <p className="mt-6 min-h-[84px] leading-7 text-neutral-400">
                    {plan.description}
                  </p>
                </div>

                <div className="my-8 h-px bg-white/10" />

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

                <motion.a
                  href="#contact"
                  whileTap={{ scale: 0.98 }}
                  className={`group mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition ${
                    plan.featured
                      ? "bg-white text-black hover:bg-neutral-200"
                      : "border border-white/10 bg-white/[0.04] text-white hover:border-white/20 hover:bg-white/[0.08]"
                  }`}
                >
                  Get Started

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 sm:p-10"
        >
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-500">
                Monthly Website Care
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Your website shouldn&apos;t stop improving after launch.
              </h3>

              <p className="mt-4 max-w-3xl leading-7 text-neutral-400">
                Maintenance plans start at $75/month and can include updates,
                backups, monitoring, content changes, speed improvements, and
                ongoing technical support.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              Explore Care Plans
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