import Navbar from "@/components/layout/SiteNavbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Services */}
      <ServicesSection />

      {/* Portfolio */}
      <Portfolio />

      {/* Process */}
      <Process />

      {/* Pricing */}
      <Pricing />

      {/* FAQ */}
      <FAQ />

      {/* Contact */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}