import type { Metadata } from "next";

import Navbar from "@/components/layout/SiteNavbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Web Design & Development in South Jersey",
  description:
    "Guaman Digital builds modern, fast, and professional websites for businesses in South Jersey, Cherry Hill, Camden, Philadelphia, and beyond.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Web Design & Development in South Jersey | Guaman Digital",
    description:
      "Modern websites, redesigns, SEO foundations, website care, and digital solutions for growing businesses.",
    url: "/",
    siteName: "Guaman Digital",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Design & Development in South Jersey | Guaman Digital",
    description:
      "Modern websites and digital solutions built to help businesses stand out, earn trust, and grow.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://guamandigital.com/#organization",

  name: "Guaman Digital",
  url: "https://guamandigital.com",

  description:
    "Guaman Digital provides custom website design and development, website redesign, SEO foundations, performance optimization, website care, and digital solutions for businesses.",

  founder: {
    "@type": "Person",
    "@id": "https://guamandigital.com/about#anderson-guaman",
    name: "Anderson Guaman",
    url: "https://guamandigital.com/about",
  },

  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "South Jersey",
    },
    {
      "@type": "City",
      name: "Cherry Hill",
    },
    {
      "@type": "City",
      name: "Camden",
    },
    {
      "@type": "City",
      name: "Philadelphia",
    },
  ],

  knowsAbout: [
    "Web Design",
    "Web Development",
    "Website Redesign",
    "Search Engine Optimization",
    "Website Performance",
    "Website Maintenance",
    "Digital Solutions",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />

      <Navbar />
      <Hero />
      <ServicesSection />
      <Portfolio />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}