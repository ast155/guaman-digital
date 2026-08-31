"use client";

import Image from "next/image";
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
    image: "/northline/hero.jpg",
    imageAlt: "Northline Barbers website concept",
    accent: "from-neutral-950/90 via-neutral-950/25 to-transparent",
  },
  {
    category: "Restaurant",
    title: "Casa Verde",
    description:
      "A premium restaurant concept centered around atmosphere, menu discovery, reservations, and a strong mobile experience.",
    tags: ["Restaurant", "Reservations", "UX"],
    number: "02",
    href: "/work/casa-verde",
    image: "/casa-verde/hero.jpg",
    imageAlt: "Casa Verde restaurant website concept",
    accent: "from-emerald-950/80 via-black/20 to-transparent",
  },
  {
    category: "Contractor",
    title: "Summit Build Co.",
    description:
      "A professional contractor website concept built to establish trust, showcase completed work, and generate qualified leads.",
    tags: ["Lead Generation", "Services", "SEO"],
    number: "03",
    href: "/work/summit-build",
    image: "/summit-build/hero.jpg",
    imageAlt: "Summit Build contractor website concept",
    accent: "from-slate-950/85 via-slate-950/20 to-transparent",
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
        {/* Heading */}
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
        <div className="space-y-7 sm:space-y-9">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              href={project.href}
              className="block"
            >
              <motion.article
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] transition duration-500 hover:border-blue-500/25 hover:bg-white/[0.04] sm:rounded-[2rem]"
              >
                {/* Content */}
                <div className="relative z-20 p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
                    <div className="max-w-3xl">
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                          {project.category}
                        </p>

                        <span className="h-px w-8 bg-white/10 sm:w-10" />

                        <span className="text-xs text-white/20">
                          {project.number}
                        </span>
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
                      whileHover={{ x: 4, y: -4 }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition group-hover:border-blue-500/30 group-hover:bg-blue-500/10 sm:h-12 sm:w-12"
                    >
                      <ArrowUpRight size={18} />
                    </motion.div>
                  </div>
                </div>

                {/* Browser / image preview */}
                <div className="relative z-10 mx-6 mb-6 overflow-hidden rounded-2xl border border-white/10 bg-[#080808] sm:mx-8 sm:mb-8 lg:mx-10 lg:mb-10">
                  {/* Browser bar */}
                  <div className="flex items-center border-b border-white/10 bg-[#0b0b0b] px-4 py-3">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    </div>

                    <div className="mx-auto hidden rounded-md border border-white/[0.06] bg-white/[0.03] px-8 py-1.5 text-[10px] text-neutral-600 sm:block">
                      {project.title.toLowerCase().replaceAll(" ", "")}.com
                    </div>

                    <div className="w-[42px]" />
                  </div>

                  {/* Photo */}
                  <div className="relative aspect-[16/9] min-h-[230px] overflow-hidden sm:min-h-[320px] lg:min-h-[420px]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 1200px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />

                    {/* Image overlays */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${project.accent}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                    {/* Mini website content */}
                    <div className="absolute inset-0 flex items-end p-5 sm:p-8 lg:p-12">
                      <div className="max-w-xl">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60 sm:text-xs">
                          {project.category} Website Concept
                        </p>

                        <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white sm:mt-3 sm:text-4xl lg:text-5xl">
                          {project.title}
                        </p>

                        <div className="mt-5 hidden items-center gap-3 sm:flex">
                          <div className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black">
                            Explore Project
                          </div>

                          <div className="rounded-full border border-white/25 bg-black/20 px-5 py-2.5 text-xs font-medium text-white backdrop-blur-md">
                            View Concept
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom */}
                <div className="relative z-20 flex items-center justify-between border-t border-white/[0.06] px-6 py-5 sm:px-8 lg:px-10">
                  <div>
                    <p className="text-sm font-medium text-white">
                      View Live Concept
                    </p>

                    <p className="mt-1 hidden text-xs text-neutral-600 sm:block">
                      Explore the full website experience
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-blue-400">
                    Explore
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 via-blue-400/50 to-transparent transition-all duration-700 group-hover:w-full" />
              </motion.article>
            </Link>
          ))}
        </div>

        {/* Portfolio disclaimer */}
        <div className="mt-8 flex justify-center sm:mt-10">
          <p className="max-w-2xl text-center text-xs leading-6 text-neutral-600">
            These are concept projects created by Guaman Digital to demonstrate
            our design approach across different industries.
          </p>
        </div>
      </div>
    </section>
  );
}