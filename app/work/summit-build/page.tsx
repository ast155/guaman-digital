import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summit Build Co. — Contractor Website Concept",
  description:
    "A professional construction and contractor website concept by Guaman Digital designed around trust, project showcases, services, reviews, and lead generation.",
};

import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Hammer,
  HardHat,
  MapPin,
  Ruler,
  ShieldCheck,
  Star,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Residential Construction",
    description:
      "Ground-up residential builds designed around quality, function, and long-term value.",
  },
  {
    icon: Hammer,
    title: "Renovations",
    description:
      "Interior and exterior renovations that modernize spaces without compromising craftsmanship.",
  },
  {
    icon: Ruler,
    title: "Additions",
    description:
      "Thoughtfully planned home additions that create more usable space and increase property value.",
  },
  {
    icon: HardHat,
    title: "Commercial Projects",
    description:
      "Professional commercial construction and improvement projects built around schedule and scope.",
  },
];

const projects = [
  {
    title: "Modern Family Residence",
    category: "Residential",
    image: "/summit-build/project-1.jpg",
  },
  {
    title: "Kitchen & Main Floor Renovation",
    category: "Renovation",
    image: "/summit-build/project-2.jpg",
  },
  {
    title: "Custom Home Addition",
    category: "Addition",
    image: "/summit-build/project-3.jpg",
  },
  {
    title: "Retail Interior Buildout",
    category: "Commercial",
    image: "/summit-build/project-4.jpg",
  },
];

const reviews = [
  {
    quote:
      "Summit kept us informed from the first walkthrough to the final inspection. The craftsmanship was excellent.",
    name: "Michael T.",
  },
  {
    quote:
      "Professional team, clean worksite, and the project stayed organized from start to finish.",
    name: "Rachel D.",
  },
  {
    quote:
      "They transformed our home and made a complicated renovation feel manageable.",
    name: "Anthony P.",
  },
];

export default function SummitBuildPage() {
  return (
    <main className="min-h-screen bg-[#f3f1ec] text-[#181818]">
      {/* Navbar */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#f3f1ec]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <HardHat size={20} className="text-[#d46f2c]" />
            <span className="text-lg font-semibold tracking-tight">
              Summit Build Co.
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-black/55 md:flex">
            <a href="#services" className="transition hover:text-black">
              Services
            </a>
            <a href="#projects" className="transition hover:text-black">
              Projects
            </a>
            <a href="#process" className="transition hover:text-black">
              Process
            </a>
            <a href="#reviews" className="transition hover:text-black">
              Reviews
            </a>
          </div>

          <a
            href="#estimate"
            className="rounded-full bg-[#181818] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black"
          >
            Get an Estimate
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/summit-build/hero.jpg"
            alt="Modern construction project"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center">
          <div className="max-w-4xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f29a59]">
              South Jersey · Philadelphia
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Built right.
              <span className="block text-white/55">
                Built to last.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Residential and commercial construction focused on quality,
              communication, and dependable project execution.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#estimate"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d46f2c] px-7 py-4 font-semibold text-white transition hover:bg-[#e27d38]"
              >
                Request an Estimate
                <ArrowRight size={18} />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 font-medium text-white backdrop-blur transition hover:bg-white/15"
              >
                View Our Work
              </a>
            </div>

            <div className="mt-14 grid max-w-3xl grid-cols-3 gap-5 border-t border-white/15 pt-7">
              <div>
                <p className="text-xl font-semibold">15+</p>
                <p className="mt-1 text-xs text-white/50">
                  Years Experience
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold">250+</p>
                <p className="mt-1 text-xs text-white/50">
                  Projects Completed
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold">Licensed</p>
                <p className="mt-1 text-xs text-white/50">
                  & Insured
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d46f2c]">
            What We Build
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Construction services built around real project needs.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-[1.75rem] border border-black/10 bg-white/55 p-6 transition hover:-translate-y-1 hover:bg-white"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#181818] text-white">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-8 text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/55">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="bg-[#181818] px-5 py-24 text-white sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f29a59]">
            Selected Projects
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Work that speaks for itself.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f29a59]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Team */}
      <section className="px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[16/12] overflow-hidden rounded-[2rem]">
            <Image
              src="/summit-build/team.jpg"
              alt="Summit Build construction team"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d46f2c]">
              Built on trust
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              A construction partner you can actually communicate with.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Great construction is more than the finished result. It&apos;s
              clear expectations, organized project management, and quality
              work at every stage.
            </p>

            <div className="mt-9 space-y-5">
              {[
                "Clear project communication",
                "Licensed and insured team",
                "Detailed estimates",
                "Quality-focused workmanship",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-[#d46f2c]"
                  />
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="border-y border-black/10 px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d46f2c]">
            Our Process
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            A clear path from estimate to completion.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Consultation",
                text: "We learn about the project, goals, property, and timeline.",
              },
              {
                number: "02",
                title: "Estimate",
                text: "You receive a clear scope, pricing, and project expectations.",
              },
              {
                number: "03",
                title: "Build",
                text: "Our team manages the construction with consistent communication.",
              },
              {
                number: "04",
                title: "Final Walkthrough",
                text: "We review the completed work together before project closeout.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-[1.75rem] border border-black/10 bg-white/45 p-6"
              >
                <p className="text-sm font-semibold text-[#d46f2c]">
                  {step.number}
                </p>

                <h3 className="mt-10 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/55">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section
        id="reviews"
        className="px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d46f2c]">
            Client Reviews
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Built well. Managed well.
          </h2>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-[2rem] border border-black/10 bg-white/50 p-7"
              >
                <div className="flex gap-1 text-[#d46f2c]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-6 leading-7 text-black/70">
                  “{review.quote}”
                </p>

                <p className="mt-6 text-sm text-black/45">
                  {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimate */}
      <section
        id="estimate"
        className="bg-[#d46f2c] px-5 py-24 text-white sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Start Your Project
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Have a project in mind?
              Let&apos;s talk about it.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Tell us what you&apos;re planning and we&apos;ll schedule a
              consultation to discuss scope, timing, and next steps.
            </p>

            <button className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#181818] px-7 py-4 font-semibold text-white transition hover:bg-black">
              Request an Estimate
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-7 backdrop-blur sm:p-9">
            <ShieldCheck size={24} />

            <h3 className="mt-6 text-2xl font-semibold">
              Licensed & Insured
            </h3>

            <p className="mt-4 leading-7 text-white/70">
              Professional project management, quality workmanship, and clear
              communication from consultation through completion.
            </p>

            <div className="mt-8 flex items-start gap-3 border-t border-white/20 pt-7">
              <MapPin size={18} className="mt-0.5 shrink-0" />

              <p className="text-sm leading-6 text-white/70">
                Serving South Jersey and the Greater Philadelphia area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-black/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Summit Build Co.</p>

          <a
            href="/"
            className="transition hover:text-black"
          >
            Concept by Guaman Digital
          </a>
        </div>
      </footer>
    </main>
  );
}