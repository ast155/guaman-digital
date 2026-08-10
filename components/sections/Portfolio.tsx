"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    category: "Barbershop",
    title: "Northline Barbers",
    description:
      "A bold booking-focused website concept designed to help a modern barbershop showcase services and convert visitors into appointments.",
    tags: ["Web Design", "Booking", "Mobile"],
    number: "01",
    href: "/work/northline-barbers",
    available: true,
  },
  {
    category: "Restaurant",
    title: "Casa Verde",
    description:
      "A premium restaurant concept centered around atmosphere, menu discovery, reservations, and a strong mobile experience.",
    tags: ["Restaurant", "Reservations", "UX"],
    number: "02",
    href: "/work/casa-verde",
    available: true,
  },
  {
    category: "Contractor",
    title: "Summit Build Co.",
    description:
      "A professional contractor website concept built to establish trust, showcase completed work, and generate qualified leads.",
    tags: ["Lead Generation", "Services", "SEO"],
    number: "03",
    href: "/work/summit-build",
    available: true,
  },
];

export default function Portfolio() {
  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-white/10 px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-20%] top-[15%] h-[420px] w-[420px] rounded-full bg-blue-600/[0.05] blur-[140px] sm:right-[-15%] sm:h-[500px] sm:w-[500px] sm:blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-8 sm:mb-16 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              Selected Work
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Built to make businesses stand out.
            </h2>

            <p className="mt-5 text-base leading-7 text-neutral-400 sm:mt-6 sm:text-lg sm:leading-8">
              Explore digital concepts created around real business goals,
              customer behavior, and modern brand experiences.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-neutral-300">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
            Concept Projects
          </div>
        </motion.div>

        {/* Projects */}
        <div className="space-y-5">
          {projects.map((project, index) => {
            const card = (
              <motion.div
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={project.available ? { y: -6 } : undefined}
                className={`group relative overflow-hidden rounded-[1.75rem] border bg-white/[0.025] p-6 transition-colors duration-300 sm:rounded-[2rem] sm:p-8 lg:p-10 ${
                  project.available
                    ? "cursor-pointer border-white/10 hover:border-blue-500/25 hover:bg-white/[0.045]"
                    : "cursor-default border-white/[0.07]"
                }`}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex flex-col justify-between gap-8 sm:gap-10 lg:flex-row lg:items-start">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                        {project.category}
                      </p>

                      <span className="h-px w-8 bg-white/10 sm:w-10" />

                      <span className="text-xs text-white/20">
                        {project.number}
                      </span>

                      {!project.available && (
                        <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-500">
                          Coming Soon
                        </span>
                      )}
                    </div>

                    <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-400 sm:mt-5 sm:text-base">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    whileHover={
                      project.available ? { x: 4, y: -4 } : undefined
                    }
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-base transition sm:h-12 sm:w-12 sm:text-lg ${
                      project.available
                        ? "border-white/10 bg-white/[0.04] text-white group-hover:border-blue-500/30 group-hover:bg-blue-500/10"
                        : "border-white/[0.07] bg-white/[0.02] text-neutral-600"
                    }`}
                  >
                    <ArrowUpRight size={18} />
                  </motion.div>
                </div>

                {/* Website preview mockup */}
                <div className="relative z-10 mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#080808] sm:mt-10">
                  <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-3 sm:px-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />

                    <div className="ml-3 h-2.5 w-20 rounded-full bg-white/[0.06] sm:ml-4 sm:w-32" />
                  </div>

                  <div className="grid min-h-[200px] gap-5 p-5 sm:min-h-[230px] sm:p-6 md:grid-cols-[1.3fr_0.7fr] md:p-8">
                    <div className="flex flex-col justify-center">
                      <div
                        className={`h-3 w-20 rounded-full sm:w-24 ${
                          project.available
                            ? "bg-blue-500/20"
                            : "bg-white/[0.06]"
                        }`}
                      />

                      <div className="mt-5 h-6 w-4/5 rounded-lg bg-white/15 sm:h-7" />
                      <div className="mt-3 h-6 w-3/5 rounded-lg bg-white/10 sm:h-7" />

                      <div className="mt-6 h-3 w-full max-w-md rounded-full bg-white/[0.05]" />
                      <div className="mt-2 h-3 w-4/5 max-w-sm rounded-full bg-white/[0.05]" />

                      <div className="mt-6 flex flex-wrap gap-3">
                        <div
                          className={`h-10 w-24 rounded-full sm:w-28 ${
                            project.available
                              ? "bg-blue-600/40"
                              : "bg-white/[0.07]"
                          }`}
                        />

                        <div className="h-10 w-24 rounded-full border border-white/10 bg-white/[0.03] sm:w-28" />
                      </div>
                    </div>

                    <div className="min-h-[120px] rounded-2xl border border-white/10 bg-white/[0.03] md:min-h-0" />
                  </div>
                </div>

                {/* Bottom */}
                <div className="relative z-10 mt-6 flex items-center justify-between">
                  <p
                    className={`text-sm font-medium ${
                      project.available ? "text-white" : "text-neutral-600"
                    }`}
                  >
                    {project.available
                      ? "View Live Concept"
                      : "Concept in development"}
                  </p>

                  {project.available && (
                    <div className="flex items-center gap-2 text-sm text-blue-400">
                      Explore
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  )}
                </div>

                <div
                  className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-700 ${
                    project.available
                      ? "bg-gradient-to-r from-blue-500 via-blue-400/50 to-transparent group-hover:w-full"
                      : ""
                  }`}
                />
              </motion.div>
            );

            if (project.available) {
              return (
                <Link
                  key={project.title}
                  href={project.href}
                  className="block"
                >
                  {card}
                </Link>
              );
            }

            return (
              <div key={project.title}>
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}