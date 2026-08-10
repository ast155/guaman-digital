import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24">
      <div className="pointer-events-none absolute right-[-35%] top-[5%] h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[120px] sm:right-[-15%] sm:h-[520px] sm:w-[520px] lg:right-[-8%]" />

      <div className="pointer-events-none absolute bottom-[2%] left-[-45%] h-[380px] w-[380px] rounded-full bg-blue-400/10 blur-[120px] sm:left-[-20%] sm:h-[460px] sm:w-[460px] lg:left-[-14%]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-5xl">
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-neutral-300 backdrop-blur sm:mb-7 sm:px-4 sm:text-sm">
            <Sparkles size={14} className="shrink-0" />
            <span>Digital experiences built for modern businesses</span>
          </div>

          <h1 className="max-w-5xl text-[3rem] font-semibold leading-[0.96] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            We build websites
            <span className="mt-1 block bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-700 bg-clip-text text-transparent">
              that move businesses forward.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-400 sm:mt-8 sm:text-xl sm:leading-8">
            Guaman Digital creates modern websites and technology solutions
            that help businesses look professional, attract customers, and grow
            with confidence.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 sm:w-auto sm:text-base"
            >
              Start Your Project
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#work"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-medium text-neutral-200 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto sm:text-base"
            >
              Explore Our Work
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 sm:mt-20 sm:grid-cols-4 sm:gap-8">
          <div>
            <p className="text-xl font-semibold text-white sm:text-2xl">
              100%
            </p>
            <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
              Custom design
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold text-white sm:text-2xl">
              Mobile
            </p>
            <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
              First approach
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold text-white sm:text-2xl">
              Fast
            </p>
            <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
              Performance
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold text-white sm:text-2xl">
              Long-term
            </p>
            <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
              Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}