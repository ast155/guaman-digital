import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Lightbulb,
  MessageSquare,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, goals, audience, services, and what you want your website to accomplish.",
    icon: MessageSquare,
    items: [
      "Business goals",
      "Target audience",
      "Services & offers",
      "Competitor review",
    ],
  },
  {
    number: "02",
    title: "Strategy & Design",
    description:
      "Next, we plan the structure, visual direction, and user experience so everything feels clear, modern, and intentional.",
    icon: Lightbulb,
    items: [
      "Website structure",
      "Content direction",
      "UI & visual design",
      "User experience",
    ],
  },
  {
    number: "03",
    title: "Build & Refine",
    description:
      "Once the direction is clear, we build the website, optimize it for mobile, and refine the details before launch.",
    icon: Code2,
    items: [
      "Development",
      "Mobile optimization",
      "Performance",
      "Final refinements",
    ],
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "After everything is tested and ready, we launch your website and can continue helping with updates and improvements.",
    icon: Rocket,
    items: [
      "Final testing",
      "Website launch",
      "Ongoing support",
      "Future improvements",
    ],
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-y border-white/10 bg-[#070707] py-24 sm:py-28 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[380px] -translate-x-1/2 rounded-full bg-blue-600/[0.04] blur-[70px] sm:h-[500px] sm:w-[900px] sm:bg-blue-600/[0.06] sm:blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              <CheckCircle2 size={14} />
              Our Process
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Simple process.
              <span className="block text-neutral-500">
                Clear from start to finish.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-neutral-400 lg:ml-auto">
            Building a website shouldn&apos;t feel confusing. We keep the
            process straightforward, communicate clearly, and make sure you
            know what&apos;s happening at every stage.
          </p>
        </div>

        {/* Process cards */}
        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />

          <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative flex min-w-0 flex-col"
                >
                  {/* Icon */}
                  <div className="relative z-10 mb-7 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-xl shadow-black/20">
                    <Icon size={25} className="text-blue-400" />
                  </div>

                  {/* Card */}
                  <div className="flex flex-1 flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:border-blue-500/20 hover:bg-white/[0.04]">
                    <p className="text-xs font-semibold tracking-[0.2em] text-blue-400">
                      {step.number}
                    </p>

                    <h3 className="mt-3 text-xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-neutral-500">
                      {step.description}
                    </p>

                    <div className="mt-6 space-y-3">
                      {step.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-neutral-400"
                        >
                          <CheckCircle2
                            size={15}
                            className="mt-0.5 shrink-0 text-blue-400"
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative z-10 mt-12 rounded-3xl border border-white/10 bg-[#0a0a0a]">
          <div className="flex flex-col gap-6 px-7 py-8 sm:px-9 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-lg font-semibold text-white">
                Ready to get started?
              </p>

              <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-500">
                Tell us about your business and what you&apos;re looking to
                build. We&apos;ll help you figure out the best next step.
              </p>
            </div>

            <Link
              href="/#contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200 lg:self-auto"
            >
              Start Your Project
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}