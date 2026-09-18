"use client";

import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most small business websites can be completed within 1–3 weeks once we have the content and information needed to begin. Larger projects, custom integrations, e-commerce, or additional revisions may require more time. You'll receive a clear timeline before the project starts.",
  },
  {
    question: "How does payment work?",
    answer:
      "Project payment terms are outlined clearly before work begins. Depending on the size of the project, payment may be divided into an initial deposit and a remaining balance tied to project milestones or launch. You'll know the full project cost and payment schedule before approving the work.",
  },
  {
    question: "Do I need to provide the website content?",
    answer:
      "If you already have your logo, photos, business information, services, and written content, we'll use them to build your website. If you're starting from scratch or need help organizing your message, we can also help structure and improve the content for your website.",
  },
  {
    question: "Will my website work on phones and tablets?",
    answer:
      "Yes. Every Guaman Digital website is built with mobile responsiveness in mind and tested across different screen sizes so customers can easily use your website from phones, tablets, laptops, and desktops.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can redesign an outdated website, improve its structure and messaging, modernize the visual experience, strengthen mobile usability, and improve performance while keeping the parts of your existing brand that still work.",
  },
  {
    question: "What about my domain and hosting?",
    answer:
      "We can help you connect an existing domain or guide you through setting up a new one. Hosting requirements depend on the website and technology being used, and we'll explain the recommended setup and any ongoing costs before launch.",
  },
  {
    question: "Will I own my website?",
    answer:
      "Yes. Once the agreed project balance has been paid, the completed website and project deliverables included in your agreement belong to your business. Any third-party services, software, fonts, images, plugins, or subscriptions remain subject to their own licensing terms.",
  },
  {
    question: "Do you offer maintenance after launch?",
    answer:
      "Yes. Monthly Website Care plans are available for businesses that want ongoing support. Depending on your plan, this can include content updates, monitoring, backups, performance improvements, technical support, and future website changes.",
  },
  {
    question: "Can you add booking, payments, or other integrations?",
    answer:
      "Yes. Depending on the project, we can integrate booking and scheduling systems, contact forms, analytics, payment solutions, e-commerce tools, automation, AI features, and other business technology. More advanced integrations may affect the final project price.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-t border-white/10 px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-[-20%] left-[8%] h-[280px] w-[280px] rounded-full bg-blue-600/[0.03] blur-[60px] sm:h-[500px] sm:w-[500px] sm:bg-blue-600/[0.04] sm:blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Left */}
          <div
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              FAQ
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Questions before
              <span className="block text-neutral-500">we get started?</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8">
              Here are answers to some of the most common questions businesses
              have before starting a website project.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-blue-400"
            >
              Ask us something else

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* FAQ accordion */}
          <div
            className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.015]"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={
                    index !== faqs.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-7 sm:py-7"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-1 hidden text-[10px] font-semibold tracking-[0.14em] text-white/20 sm:block">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`text-base font-medium transition sm:text-lg ${
                          isOpen
                            ? "text-white"
                            : "text-neutral-300 group-hover:text-white"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 ${isOpen ? "rotate-45 " : ""}${
                        isOpen
                          ? "border-blue-500/30 bg-blue-500/10 text-blue-400"
                          : "border-white/10 bg-white/[0.04] text-neutral-400 group-hover:border-white/20 group-hover:text-white"
                      }`}
                    >
                      <Plus size={17} />
                    </span>
                  </button>

                  
                    {isOpen && (
                      <div
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-7 sm:pl-[4.5rem] sm:pr-16">
                          <p className="max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  
                </div>
              );
            })}
          </div>
        </div>

        {/* Reassurance */}
        <div
          className="mt-10 flex flex-col justify-between gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-6 py-5 sm:flex-row sm:items-center"
        >
          <p className="text-sm leading-6 text-neutral-500">
            Every project is different. We&apos;ll explain the scope, timeline,
            pricing, and next steps before any work begins.
          </p>

          <a
            href="#contact"
            className="shrink-0 text-sm font-medium text-blue-400 transition hover:text-blue-300"
          >
            Get a free quote →
          </a>
        </div>
      </div>
    </section>
  );
}