"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Lightbulb,
  Code2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery",
    description:
      "We learn about your business, customers, goals, and what you want your website to accomplish.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy & Design",
    description:
      "We create the structure, visual direction, and user experience before development begins.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build & Refine",
    description:
      "We develop your website, optimize it for every device, and refine the experience with your feedback.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "Your website goes live, and we remain available for maintenance, improvements, and future growth.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-white/10 px-6 py-28 lg:px-8 lg:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.05] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-3xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
            Our Process
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            From idea to launch.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            A simple, transparent process designed to turn your ideas into a
            professional digital experience without making things complicated.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* Desktop connecting line */}
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative"
              >
                {/* Number + icon */}
                <div className="relative z-10 mb-8 flex items-center justify-between">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#0b0b0b] text-blue-500 transition duration-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/10"
                  >
                    <Icon size={24} strokeWidth={1.8} />
                  </motion.div>

                  <span className="text-sm font-medium text-white/20">
                    {step.number}
                  </span>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="h-full rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.045]"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-500">
                    {step.description}
                  </p>

                  <div className="mt-8 h-px w-10 bg-blue-500/50 transition-all duration-500 group-hover:w-20" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.025] p-8 md:flex-row md:items-center"
        >
          <div>
            <p className="text-sm font-medium text-white">
              Clear communication from start to finish.
            </p>

            <p className="mt-2 text-sm text-neutral-500">
              You&apos;ll always know where your project stands and what comes
              next.
            </p>
          </div>

          <a
            href="#contact"
            className="w-fit rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
          >
            Start your project →
          </a>
        </motion.div>
      </div>
    </section>
  );
}