import {
  ArrowRight,
  Check,
  Code2,
  Gauge,
  Search,
  Smartphone,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-35%] top-[5%] h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[120px] sm:right-[-15%] sm:h-[520px] sm:w-[520px] lg:right-[-8%]" />

      <div className="pointer-events-none absolute bottom-[2%] left-[-45%] h-[380px] w-[380px] rounded-full bg-blue-400/10 blur-[120px] sm:left-[-20%] sm:h-[460px] sm:w-[460px] lg:left-[-14%]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* LEFT SIDE */}
          <div>
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-neutral-300 backdrop-blur sm:mb-7 sm:px-4 sm:text-sm">
              <Sparkles size={14} className="shrink-0 text-blue-400" />
              <span>Websites built to help businesses grow</span>
            </div>

            <h1 className="max-w-5xl text-[3rem] font-semibold leading-[0.96] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              Your business deserves
              <span className="mt-1 block bg-gradient-to-r from-white via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
                a website that works.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-400 sm:mt-8 sm:text-xl sm:leading-8">
              Guaman Digital builds modern, fast, and professional websites
              designed to help businesses stand out, earn trust, and turn more
              visitors into customers.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <a
                href="#contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 sm:w-auto sm:text-base"
              >
                Get a Free Quote
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#work"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-medium text-neutral-200 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto sm:text-base"
              >
                View Our Work
              </a>
            </div>

            {/* TRUST POINTS */}
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs text-neutral-500 sm:text-sm">
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-blue-400" />
                Custom-built
              </span>

              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-blue-400" />
                Mobile optimized
              </span>

              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-blue-400" />
                SEO-ready
              </span>

              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-blue-400" />
                Ongoing support
              </span>
            </div>
          </div>

          {/* RIGHT SIDE - WEBSITE PREVIEW */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-10 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#080808]">
                {/* Browser bar */}
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  </div>

                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] text-neutral-500">
                    yourbusiness.com
                  </div>

                  <div className="w-10" />
                </div>

                {/* Fake website */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-24 rounded-full bg-white/80" />

                    <div className="flex gap-3">
                      <div className="h-2 w-8 rounded-full bg-white/20" />
                      <div className="h-2 w-8 rounded-full bg-white/20" />
                      <div className="h-2 w-8 rounded-full bg-white/20" />
                    </div>
                  </div>

                  <div className="py-14">
                    <div className="mb-4 h-3 w-28 rounded-full bg-blue-500/80" />

                    <div className="space-y-3">
                      <div className="h-7 w-[88%] rounded-lg bg-white/90" />
                      <div className="h-7 w-[70%] rounded-lg bg-white/70" />
                    </div>

                    <div className="mt-6 space-y-2">
                      <div className="h-2.5 w-[90%] rounded-full bg-white/15" />
                      <div className="h-2.5 w-[74%] rounded-full bg-white/10" />
                    </div>

                    <div className="mt-7 flex gap-3">
                      <div className="h-9 w-28 rounded-full bg-blue-600" />
                      <div className="h-9 w-24 rounded-full border border-white/10 bg-white/5" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 rounded-xl border border-white/10 bg-white/[0.035]" />
                    <div className="h-20 rounded-xl border border-white/10 bg-white/[0.035]" />
                    <div className="h-20 rounded-xl border border-white/10 bg-white/[0.035]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Performance badge */}
            <div className="absolute -bottom-7 -left-8 rounded-2xl border border-white/10 bg-[#0b0b0b]/95 p-4 shadow-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/15">
                  <Gauge size={19} className="text-blue-400" />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    Built for performance
                  </p>
                  <p className="mt-0.5 text-xs text-neutral-500">
                    Fast. Responsive. Reliable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FEATURES */}
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 sm:mt-20 sm:grid-cols-4 sm:gap-8">
          <div>
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
              <Code2 size={17} className="text-blue-400" />
            </div>

            <p className="text-base font-semibold text-white sm:text-lg">
              Custom Built
            </p>

            <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
              Made for your business
            </p>
          </div>

          <div>
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
              <Smartphone size={17} className="text-blue-400" />
            </div>

            <p className="text-base font-semibold text-white sm:text-lg">
              Mobile First
            </p>

            <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
              Looks great everywhere
            </p>
          </div>

          <div>
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
              <Gauge size={17} className="text-blue-400" />
            </div>

            <p className="text-base font-semibold text-white sm:text-lg">
              Fast Loading
            </p>

            <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
              Optimized performance
            </p>
          </div>

          <div>
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
              <Search size={17} className="text-blue-400" />
            </div>

            <p className="text-base font-semibold text-white sm:text-lg">
              SEO Ready
            </p>

            <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
              Built to be discovered
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}