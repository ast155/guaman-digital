import {
  ArrowUpRight,
  Code2,
  Gauge,
  Search,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Custom Websites",
    description:
      "Modern websites built around your business, brand, and goals — not generic templates.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Website Redesign",
    description:
      "Upgrade an outdated website with a cleaner design, stronger messaging, and a better customer experience.",
  },
  {
    icon: Search,
    number: "03",
    title: "SEO & Growth",
    description:
      "Build a stronger foundation for search visibility and help more potential customers discover your business.",
  },
  {
    icon: Gauge,
    number: "04",
    title: "Performance",
    description:
      "Fast-loading, responsive websites optimized for a smooth experience across phones, tablets, and desktops.",
  },
  {
    icon: Wrench,
    number: "05",
    title: "Website Care",
    description:
      "Ongoing updates, maintenance, support, and improvements so your website keeps working as your business grows.",
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "Digital Solutions",
    description:
      "Custom forms, booking flows, integrations, automation, and practical technology solutions for your business.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-white/5 px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-neutral-300 sm:text-sm">
              <Sparkles size={14} className="text-blue-400" />
              What we do
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Digital solutions built
              <span className="block bg-gradient-to-r from-white via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
                for real business growth.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8">
              From your first website to ongoing support, Guaman Digital helps
              businesses build a stronger online presence with modern design,
              better performance, and practical technology.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.055] sm:p-7"
              >
                <div className="pointer-events-none absolute right-[-20%] top-[-20%] h-40 w-40 rounded-full bg-blue-600/0 blur-3xl transition duration-500 group-hover:bg-blue-600/10" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <Icon size={20} className="text-blue-400" />
                    </div>

                    <span className="text-xs font-medium tracking-[0.18em] text-neutral-600">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-semibold text-white sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7">
                    {service.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm font-medium text-neutral-300 transition group-hover:text-white">
                    Learn more
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col gap-5 rounded-[1.75rem] border border-white/10 bg-gradient-to-r from-white/[0.04] to-blue-600/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-lg font-semibold text-white sm:text-xl">
              Not sure what your business needs?
            </p>

            <p className="mt-1 text-sm text-neutral-400 sm:text-base">
              Tell us what you&apos;re trying to accomplish and we&apos;ll help
              you find the right solution.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:bg-neutral-200"
          >
            Talk About Your Project
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}