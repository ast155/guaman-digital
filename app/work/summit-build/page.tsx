import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
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

export const metadata: Metadata = {
  title: "Summit Build Co. | Contractor Website Concept",
  description:
    "A fictional contractor website concept created by Guaman Digital to demonstrate trust-focused web design, project showcases, service discovery, and lead generation.",
  alternates: {
    canonical: "/work/summit-build",
  },
};

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
      {/* CONCEPT NOTICE */}
      <div className="fixed left-0 top-0 z-[60] w-full border-b border-[#d46f2c]/30 bg-[#181818] px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white sm:text-xs">
        Concept Project by Guaman Digital · Demo content shown below
      </div>

      {/* NAVBAR */}
      <header className="fixed left-0 top-[32px] z-50 w-full border-b border-black/10 bg-[#f3f1ec]/90 backdrop-blur-xl sm:top-[34px]">
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
            Estimate Demo
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden px-5 pb-20 pt-40 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/summit-build/hero.jpg"
            alt="Summit Build fictional contractor website concept"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-7xl items-center">
          <div className="max-w-4xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f29a59]">
              Contractor Website Concept
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Built right.
              <span className="block text-white/55">Built to last.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              A construction website concept designed around trust, clear
              services, strong project visuals, and straightforward lead
              generation.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#estimate"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d46f2c] px-7 py-4 font-semibold text-white transition hover:bg-[#e27d38]"
              >
                View Estimate Experience
                <ArrowRight size={18} />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 font-medium text-white backdrop-blur transition hover:bg-white/15"
              >
                Explore Projects
              </a>
            </div>

            <div className="mt-14 grid max-w-3xl grid-cols-3 gap-5 border-t border-white/15 pt-7">
              <div>
                <p className="text-xl font-semibold">Visual</p>
                <p className="mt-1 text-xs text-white/50">
                  Project Showcase
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold">Lead</p>
                <p className="mt-1 text-xs text-white/50">
                  Conversion Focused
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold">Mobile</p>
                <p className="mt-1 text-xs text-white/50">
                  Responsive Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d46f2c]">
            Sample Services
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Construction services presented with clarity.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-black/55">
            Sample service content demonstrates how a contractor can quickly
            communicate capabilities to homeowners and commercial clients.
          </p>

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

      {/* SAMPLE PROJECTS */}
      <section
        id="projects"
        className="bg-[#181818] px-5 py-24 text-white sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f29a59]">
            Sample Project Showcase
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Let the work do the talking.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-white/50">
            Fictional project examples demonstrate how strong imagery and
            clear project categories can help contractors showcase their work.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} fictional construction project`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f29a59]">
                    {project.category} · Concept
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

      {/* TRUST */}
      <section className="px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[16/12] overflow-hidden rounded-[2rem]">
            <Image
              src="/summit-build/team.jpg"
              alt="Summit Build concept construction team imagery"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d46f2c]">
              Trust-Focused Design
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Construction websites need to earn confidence quickly.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              For high-value services, visitors need clear information about
              communication, process, estimates, and workmanship before they
              feel comfortable reaching out.
            </p>

            <div className="mt-9 space-y-5">
              {[
                "Clear project communication",
                "Credential visibility",
                "Detailed estimate experience",
                "Quality-focused positioning",
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

            <p className="mt-8 text-sm leading-6 text-black/40">
              These are example trust signals a real contractor could
              customize with verified business information and credentials.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="border-y border-black/10 px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d46f2c]">
            Sample Customer Journey
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            A clear path from interest to project kickoff.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Consultation",
                text: "Introduce the project, goals, property, and preferred timeline.",
              },
              {
                number: "02",
                title: "Estimate",
                text: "Communicate scope, pricing expectations, and next steps clearly.",
              },
              {
                number: "03",
                title: "Build",
                text: "Show how project communication and construction updates could work.",
              },
              {
                number: "04",
                title: "Final Walkthrough",
                text: "Explain how completed work and project closeout are reviewed.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-[1.75rem] border border-black/10 bg-white/45 p-6"
              >
                <p className="text-sm font-semibold text-[#d46f2c]">
                  {step.number}
                </p>

                <h3 className="mt-10 text-xl font-semibold">{step.title}</h3>

                <p className="mt-4 text-sm leading-7 text-black/55">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE REVIEWS */}
      <section
        id="reviews"
        className="px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d46f2c]">
            Sample Client Reviews
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Social proof without distracting from the work.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-black/45">
            Fictional review copy is shown to demonstrate how verified client
            testimonials could be presented on a contractor website.
          </p>

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
                  {review.name} · Sample profile
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTIMATE EXPERIENCE */}
      <section
        id="estimate"
        className="bg-[#d46f2c] px-5 py-24 text-white sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Estimate Experience
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Turn project interest into a qualified lead.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              This concept demonstrates how a contractor website can guide a
              visitor from browsing services and projects toward requesting a
              consultation.
            </p>

            <a
              href="#case-study"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#181818] px-7 py-4 font-semibold text-white transition hover:bg-black"
            >
              See Project Strategy
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-7 backdrop-blur sm:p-9">
            <ShieldCheck size={24} />

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Example Trust Section
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              Credentials matter.
            </h3>

            <p className="mt-4 leading-7 text-white/70">
              A production contractor website could display verified licenses,
              insurance information, warranties, certifications, and other
              credentials here.
            </p>

            <div className="mt-8 flex items-start gap-3 border-t border-white/20 pt-7">
              <MapPin size={18} className="mt-0.5 shrink-0" />

              <p className="text-sm leading-6 text-white/70">
                Service-area information can help visitors quickly determine
                whether the contractor serves their location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section
        id="case-study"
        className="bg-[#e7e3da] px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d46f2c]">
              Guaman Digital Concept Project
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              A contractor website designed to build trust before the first
              conversation.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-black/55 sm:text-lg">
              Summit Build Co. is a fictional construction brand created by
              Guaman Digital to explore how contractors can present services,
              showcase work, communicate professionalism, and generate
              qualified project inquiries.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            <div className="rounded-[1.75rem] border border-black/10 bg-[#f3f1ec] p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d46f2c]">
                01 · Trust
              </p>

              <h3 className="mt-5 text-2xl font-semibold">
                Reduce uncertainty.
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                Clear services, process information, professional imagery, and
                space for verified credentials help answer questions before a
                potential customer reaches out.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-black/10 bg-[#f3f1ec] p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d46f2c]">
                02 · Project Showcase
              </p>

              <h3 className="mt-5 text-2xl font-semibold">
                Make craftsmanship visible.
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                Large project imagery and simple categories give visitors a
                fast way to understand the type and quality of work a
                contractor can provide.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-black/10 bg-[#f3f1ec] p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d46f2c]">
                03 · Lead Generation
              </p>

              <h3 className="mt-5 text-2xl font-semibold">
                Create a clear next step.
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                Estimate-focused calls-to-action guide qualified visitors
                toward starting a conversation instead of leaving them
                wondering what to do next.
              </p>
            </div>
          </div>

          {/* PROJECT DETAILS */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Industry", "Construction"],
              ["Focus", "Lead Generation"],
              ["Experience", "Responsive Web"],
              ["Project Type", "Concept"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-black/10 bg-[#f3f1ec]/70 p-5"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-black/35">
                  {label}
                </p>

                <p className="mt-2 font-semibold">{value}</p>
              </div>
            ))}
          </div>

          {/* GUAMAN DIGITAL CTA */}
          <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#181818] p-8 text-white sm:p-10 lg:p-12">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f29a59]">
                  Guaman Digital
                </p>

                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Build trust before the first estimate.
                </h3>

                <p className="mt-4 leading-7 text-white/55">
                  We create modern websites that help service businesses
                  present their work professionally and turn visitors into
                  real inquiries.
                </p>
              </div>

              <Link
                href="/#contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#d46f2c] px-7 py-4 font-semibold text-white transition hover:bg-[#e27d38]"
              >
                Start a Project
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-5">
            <p className="max-w-3xl text-center text-xs leading-6 text-black/35">
              Summit Build Co. is a fictional concept project. Business
              information, projects, reviews, names, credentials, service
              details, and other content shown above are sample information
              created for demonstration purposes.
            </p>

            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm font-medium text-black/50 transition hover:text-black"
            >
              <ArrowLeft size={16} />
              Back to Guaman Digital Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-black/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Summit Build Co. · Fictional concept project</p>

          <Link href="/" className="transition hover:text-black">
            Designed by Guaman Digital
          </Link>
        </div>
      </footer>
    </main>
  );
}