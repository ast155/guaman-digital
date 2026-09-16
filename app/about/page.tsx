import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  GraduationCap,
  Laptop,
  MapPin,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Anderson Guaman | Founder of Guaman Digital",
  description:
    "Meet Anderson Guaman, founder of Guaman Digital and Computer Science student at Rutgers University–Camden, focused on web development, technology, and modern digital solutions.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Anderson Guaman | Guaman Digital",
    description:
      "Founder of Guaman Digital and Computer Science student at Rutgers University–Camden.",
    url: "/about",
    siteName: "Guaman Digital",
    type: "profile",
    images: [
      {
        url: "/about/anderson-guaman-professional.jpg",
        alt: "Anderson Guaman, founder of Guaman Digital",
      },
    ],
  },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://www.guamandigital.com/about#profile",
  url: "https://www.guamandigital.com/about",
  name: "About Anderson Guaman",
  description:
    "About Anderson Guaman, founder of Guaman Digital and Computer Science student at Rutgers University–Camden.",

  mainEntity: {
    "@type": "Person",
    "@id": "https://www.guamandigital.com/about#anderson-guaman",

    name: "Anderson Guaman",

    url: "https://www.guamandigital.com/about",

    image:
      "https://www.guamandigital.com/about/anderson-guaman-professional.jpg",

    sameAs: ["https://www.instagram.com/andy._0g/"],

    jobTitle: "Founder of Guaman Digital",

    description:
      "Founder of Guaman Digital and Computer Science student at Rutgers University–Camden focused on web development, technology, and digital solutions.",

    worksFor: {
      "@type": "Organization",
      "@id": "https://www.guamandigital.com/#organization",
      name: "Guaman Digital",
      url: "https://www.guamandigital.com",
    },

    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Rutgers University–Camden",
      url: "https://camden.rutgers.edu/",
    },
  },
};

const values = [
  {
    icon: Code2,
    title: "Build it for a reason",
    description:
      "A website should do more than look good. Every page, section, and feature should have a purpose for the business.",
  },
  {
    icon: Sparkles,
    title: "Keep it simple",
    description:
      "Clear communication, straightforward decisions, and no unnecessary technical confusion for clients.",
  },
  {
    icon: ArrowRight,
    title: "Keep getting better",
    description:
      "Technology keeps changing, so I keep learning, improving, and looking for better ways to build for clients.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* BACKGROUND EFFECTS */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-blue-600/[0.08] blur-[180px]" />

        <div className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-[140px]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-28">
          {/* HERO TEXT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              <Sparkles size={14} />
              Meet the Founder
            </div>

            <h1 className="mt-7 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Building websites,
              <span className="block text-neutral-500">
                solving real problems.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-400">
              I&apos;m Anderson Guaman, founder of Guaman Digital and a
              Computer Science student at Rutgers University–Camden. I started
              Guaman Digital because I wanted to help businesses build websites
              and digital solutions that feel modern, professional, and easy to
              use.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-500">
              My goal is pretty simple: understand what a business actually
              needs, keep the process clear, and build something that can help
              it move forward.
            </p>

            {/* TAGS */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-neutral-300">
                <Laptop size={16} className="text-blue-400" />
                Founder
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-neutral-300">
                <GraduationCap size={16} className="text-blue-400" />
                Computer Science
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-neutral-300">
                <MapPin size={16} className="text-blue-400" />
                New Jersey
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/#contact"
                className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Start a Project
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/#work"
                className="inline-flex h-[50px] items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-neutral-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                View My Work
              </Link>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/andy._0g/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Anderson Guaman on Instagram"
                title="Instagram @Andy._0g"
                className="group inline-flex h-[50px] w-[50px] items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-neutral-300 transition duration-300 hover:scale-105 hover:border-pink-500/40 hover:bg-pink-500/10 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[21px] w-[21px] transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <rect
                    width="18"
                    height="18"
                    x="3"
                    y="3"
                    rx="5"
                    ry="5"
                  />

                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />

                  <line
                    x1="17.5"
                    x2="17.51"
                    y1="6.5"
                    y2="6.5"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* ONLY PHOTO */}
          <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:ml-auto">
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-500/[0.07] blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-2 shadow-2xl shadow-black/40">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem]">
                <Image
                  src="/about/anderson-guaman-professional.jpg"
                  alt="Anderson Guaman, founder of Guaman Digital"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/65 px-5 py-4 backdrop-blur-xl">
                  <p className="text-sm font-semibold text-white">
                    Anderson Guaman
                  </p>

                  <p className="mt-1 text-xs text-neutral-400">
                    Founder · Guaman Digital
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MY STORY */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            {/* LEFT */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                My Story
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                From Rutgers to
                <span className="block text-neutral-500">
                  Guaman Digital.
                </span>
              </h2>

              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                  <GraduationCap size={20} className="text-blue-400" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Rutgers University–Camden
                  </p>

                  <p className="mt-1 text-xs text-neutral-500">
                    Computer Science
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-9 lg:p-10">
              <div className="space-y-6 text-base leading-8 text-neutral-400">
                <p>
                  My interest in technology grew from wanting to understand how
                  websites, software, and digital products actually work behind
                  the scenes.
                </p>

                <p>
                  While studying Computer Science at Rutgers University–Camden,
                  I&apos;ve continued learning programming, web development,
                  and the technical side of building digital products.
                </p>

                <p>
                  Guaman Digital came from wanting to turn those skills into
                  something useful for real businesses. I wanted to create a
                  company where businesses could get modern digital solutions
                  without the process feeling confusing or unnecessarily
                  complicated.
                </p>

                <p>
                  I&apos;m still building, learning, and improving along the
                  way. The goal is to grow Guaman Digital into a company that
                  businesses can rely on for websites, ongoing support, and
                  practical technology that helps them move forward.
                </p>
              </div>

              <div className="mt-9 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-neutral-600">
                    Studying
                  </p>

                  <p className="mt-2 text-sm font-medium text-neutral-300">
                    Computer Science
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-neutral-600">
                    Building
                  </p>

                  <p className="mt-2 text-sm font-medium text-neutral-300">
                    Guaman Digital
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-neutral-600">
                    Focus
                  </p>

                  <p className="mt-2 text-sm font-medium text-neutral-300">
                    Web & Technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="border-y border-white/10 bg-[#070707] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              How I Work
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Professional work,
              <span className="block text-neutral-500">
                without making things complicated.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-500">
              Good digital work starts with understanding the problem first.
              From there, I focus on keeping the process clear and building
              solutions that make sense for the business.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 transition duration-300 hover:border-blue-500/20 hover:bg-white/[0.04]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10">
                    <Icon size={23} className="text-blue-400" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-neutral-500">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GUAMAN DIGITAL */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.045] to-transparent px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
            <div className="pointer-events-none absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-blue-500/[0.06] blur-[130px]" />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Guaman Digital
                </p>

                <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  Built for businesses
                  <span className="block text-neutral-500">
                    ready to move forward.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-400">
                  Guaman Digital helps businesses with modern websites,
                  redesigns, performance improvements, and ongoing website
                  care. As the company grows, the goal is to continue adding
                  useful digital solutions that make running a business easier.
                </p>
              </div>

              <div className="lg:text-right">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-neutral-200"
                >
                  Start a Project
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-white/10 py-24 text-center sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.06] blur-[160px]" />

        <div className="relative mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Let&apos;s Build
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Have an idea for your business?
            <span className="block text-neutral-500">
              Let&apos;s build something useful.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-neutral-500">
            Tell me what you&apos;re trying to build and we can figure out the
            best next step for your business.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-neutral-200"
          >
            Tell Me About Your Project
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}