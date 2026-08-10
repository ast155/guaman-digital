"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most small business websites can be completed within 1–3 weeks. Larger or more advanced projects may take longer depending on the number of pages, integrations, content, and revisions.",
  },
  {
    question: "Do I need to provide the website content?",
    answer:
      "Not necessarily. If you already have your text, photos, and branding, we can work with them. If you need help organizing or improving your content, Guaman Digital can help with that too.",
  },
  {
    question: "Will my website work on phones and tablets?",
    answer:
      "Yes. Every website we build is designed to work across mobile phones, tablets, laptops, and desktop screens.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We can modernize an existing website, improve the user experience, optimize mobile performance, and give your business a stronger digital presence.",
  },
  {
    question: "Do you offer maintenance after the website launches?",
    answer:
      "Yes. Website care plans are available for updates, backups, monitoring, content changes, performance improvements, and ongoing technical support.",
  },
  {
    question: "Can you add booking, payments, or other integrations?",
    answer:
      "Yes. Depending on your project, we can integrate booking systems, contact forms, analytics, payment solutions, automations, AI tools, and other business technology.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-t border-white/10 px-6 py-28 lg:px-8 lg:py-36"
    >
      <div className="pointer-events-none absolute bottom-[-20%] left-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.04] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              FAQ
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Questions?
              <span className="block text-neutral-500">We&apos;ve got answers.</span>
            </h2>

            <p className="mt-6 max-w-md text-lg leading-8 text-neutral-400">
              Everything you need to know before starting your project with
              Guaman Digital.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-blue-400"
            >
              Still have questions?
              <span>→</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="divide-y divide-white/10 border-y border-white/10"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-8 py-7 text-left"
                  >
                    <span className="text-lg font-medium text-white">
                      {faq.question}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-neutral-300"
                    >
                      <Plus size={17} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 pr-12 leading-7 text-neutral-500">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}