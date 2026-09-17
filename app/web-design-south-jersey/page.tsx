import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Code2,
  Gauge,
  MapPin,
  Search,
  Smartphone,
  Wrench,
} from "lucide-react";

import Navbar from "@/components/layout/SiteNavbar";
import Footer from "@/components/layout/Footer";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Web Design South Jersey | Professional Business Websites",
  description:
    "Professional web design and development for businesses across South Jersey. Guaman Digital builds modern, fast, mobile-friendly websites designed to help businesses grow.",

  alternates: {
    canonical: "/web-design-south-jersey",
  },

  openGraph: {
    title: "Web Design South Jersey | Guaman Digital",
    description:
      "Modern websites for South Jersey businesses built for performance, credibility, and growth.",
    url: "/web-design-south-jersey",
    siteName: "Guaman Digital",
    locale: "en_US",
    type: "website",
  },
};

const services = [
  {
    icon: Code2,
    title: "Custom Web Design",
    description:
      "A modern website built around your business, brand, customers, and goals.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Development",
    description:
      "Responsive experiences designed to work smoothly across phones, tablets, and desktops.",
  },
  {
    icon: Search,
    title: "SEO Foundations",
    description:
      "A search-friendly technical foundation that helps Google understand and discover your website.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Fast-loading websites built with performance and a smooth customer experience in mind.",
  },
  {
    icon: Wrench,
    title: "Website Redesign",
    description:
      "Turn an outdated website into a cleaner, faster, and more professional online presence.",
  },
  {
    icon: MapPin,
    title: "Local Business Focus",
    description:
      "Website solutions designed with the needs of South Jersey small businesses in mind.",
  },
];

const areas = [
  "Cherry Hill",
  "Camden",
  "Maple Shade",
  "Moorestown",
  "Mount Laurel",
  "Collingswood",
  "Haddonfield",
  "Pennsauken",
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://guamandigital.com/web-design-south-jersey#service",
  name: "Web Design and Development in South Jersey",
  url: "https://guamandigital.com/web-design-south-jersey",
  description:
    "Professional website design and development for businesses across South Jersey.",
  provider: {
    "@type": "ProfessionalService",
    "@id": "https://guamandigital.com/#organization",
    name: "Guaman Digital",
    url: "https://guamandigital.com",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "South Jersey",
  },
  serviceType: [
    "Web Design",
    "Web Development",
    "Website Redesign",
    "Website Performance",
    "SEO Foundations",
    "Website Maintenance",
  ],
};

export default function SouthJerseyWebDesignPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-24 pt-36 sm:px-6 lg:px-8 lg:pb-32 lg:pt-44">
        <div className="pointer-events-none absolute right-[-15%] top-0 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              <MapPin size={15} />
              South Jersey Web Design
            </div>

            <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Professional websites
              <span className="block bg-gradient-to-r from-white via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
                built for South Jersey businesses.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-400 sm:text-xl">
              Guaman Digital designs and develops modern websites for local
              businesses that want to look professional, build trust, and turn
              more visitors into customers.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-medium text-white transition hover:bg-blue-500"
              >
                Get a Free Quote
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <Link
                href="/#work"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-medium text-neutral-200 transition hover:bg-white/10"
              >
                View Our Work
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-500">
              <span className="flex items-center gap-2">
                <Check size={15} className="text-blue-400" />
                Custom built
              </span>

              <span className="flex items-center gap-2">
                <Check size={15} className="text-blue-400" />
                Mobile optimized
              </span>

              <span className="flex items-center gap-2">
                <Check size={15} className="text-blue-400" />
                SEO ready
              </span>

              <span className="flex items-center gap-2">
                <Check size={15} className="text-blue-400" />
                Ongoing support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL INTRO */}
      <section className="border-y border-white/10 bg-white/[0.02] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              Websites for local businesses
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Your website should help your business compete.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-neutral-400 sm:text-lg">
            <p>
              Customers often see your website before they ever call, visit, or
              buy from your business. A slow or outdated website can make a
              strong business look less credible than it really is.
            </p>

            <p>
              Guaman Digital helps businesses across South Jersey create a
              stronger online presence with professional design, responsive
              development, clear messaging, and practical technology.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              What we can build
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Web solutions built around your business.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon size={20} className="text-blue-400" />
                  </div>

                  <h3 className="mt-7 text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-neutral-400">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="border-y border-white/10 bg-white/[0.02] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-blue-400">
              <MapPin size={18} />
              <span className="text-sm font-medium uppercase tracking-[0.18em]">
                Serving South Jersey
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Local service. Modern technology.
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-400">
              Based in South Jersey and available to work with businesses
              throughout the region and beyond.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-neutral-300"
              >
                {area}, NJ
              </span>
            ))}
          </div>
        </div>
      </section>

      <Portfolio />
      <Process />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}