import { ArrowUpRight } from "lucide-react";

const links = {
  company: [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
  ],
  services: [
    { name: "Custom Websites", href: "#services" },
    { name: "Website Redesign", href: "#services" },
    { name: "Website Care", href: "#services" },
    { name: "SEO & Growth", href: "#services" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-6 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a
              href="#"
              className="text-2xl font-semibold tracking-[-0.04em] text-white"
            >
              Guaman
              <span className="text-blue-500">Digital.</span>
            </a>

            <p className="mt-5 max-w-md leading-7 text-neutral-500">
              Modern websites and digital solutions built to help businesses
              look professional, attract customers and grow with confidence.
            </p>

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-white"
            >
              Start a Project
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Company
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {links.company.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-neutral-400 transition hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Services
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {links.services.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-neutral-400 transition hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 pt-8 text-sm text-neutral-600 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Guaman Digital. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-neutral-300">
              Privacy
            </a>

            <a href="#" className="transition hover:text-neutral-300">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}