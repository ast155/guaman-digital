import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Scissors,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Northline Barbers | Concept Project",
  description:
    "A fictional barbershop website concept created by Guaman Digital to demonstrate modern web design, booking-focused UX, and responsive development.",
  alternates: {
    canonical: "/work/northline-barbers",
  },
};

const services = [
  { name: "Classic Cut", price: "$35" },
  { name: "Skin Fade", price: "$40" },
  { name: "Cut + Beard", price: "$55" },
  { name: "Beard Shape Up", price: "$25" },
];

const barbers = [
  {
    name: "Marcus",
    role: "Master Barber",
    specialty: "Fades & texture",
    image: "/northline/barber-1.jpg",
  },
  {
    name: "Andre",
    role: "Senior Barber",
    specialty: "Classic cuts & beards",
    image: "/northline/barber-2.jpg",
  },
  {
    name: "Jay",
    role: "Barber",
    specialty: "Modern styles",
    image: "/northline/barber-3.jpg",
  },
];

const reviews = [
  {
    quote:
      "Best cut I've had in a long time. Clean shop, great atmosphere, and they actually listen.",
    name: "David M.",
  },
  {
    quote:
      "Super easy booking and the fade came out perfect. Definitely coming back.",
    name: "Chris R.",
  },
  {
    quote:
      "Professional, welcoming, and consistent every single time.",
    name: "Anthony J.",
  },
];

const gallery = [
  "/northline/gallery-1.jpg",
  "/northline/gallery-2.jpg",
  "/northline/gallery-3.jpg",
  "/northline/gallery-4.jpg",
];

export default function NorthlineBarbersPage() {
  return (
    <main className="min-h-screen bg-[#0a0908] text-white">
      {/* CONCEPT NOTICE */}
      <div className="fixed left-0 top-0 z-[60] w-full border-b border-blue-500/20 bg-blue-600 px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white sm:text-xs">
        Concept Project by Guaman Digital · Demo content shown below
      </div>

      {/* NAVBAR */}
      <header className="fixed left-0 top-[32px] z-50 w-full border-b border-white/10 bg-[#0a0908]/85 backdrop-blur-xl sm:top-[34px]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <Scissors size={20} className="text-[#d9a85d]" />
            <span className="text-lg font-semibold tracking-tight">
              Northline Barbers
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-neutral-400 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>

            <a href="#barbers" className="transition hover:text-white">
              Barbers
            </a>

            <a href="#gallery" className="transition hover:text-white">
              Gallery
            </a>

            <a href="#reviews" className="transition hover:text-white">
              Reviews
            </a>

            <a href="#location" className="transition hover:text-white">
              Visit
            </a>
          </div>

          <a
            href="#book"
            className="rounded-full bg-[#d9a85d] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#e7b86e]"
          >
            Book Now
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden px-5 pb-20 pt-40 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/northline/hero.jpg"
            alt="Northline Barbers fictional barbershop website concept"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0908] via-[#0a0908]/90 to-[#0a0908]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-transparent to-[#0a0908]/30" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-7xl items-center">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d9a85d]">
              Barbershop Website Concept
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Sharp cuts.
              <span className="block text-neutral-400">
                Built around your style.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
              Premium barbering in a relaxed modern space. Precision cuts,
              clean fades, beard work, and easy online booking.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#book"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d9a85d] px-7 py-4 font-semibold text-black transition hover:bg-[#e7b86e]"
              >
                View Booking Experience
                <ArrowRight size={18} />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-7 py-4 font-medium text-white backdrop-blur transition hover:bg-white/[0.1]"
              >
                View Services
              </a>
            </div>

            <div className="mt-14 grid max-w-2xl grid-cols-3 gap-5 border-t border-white/10 pt-7">
              <div>
                <p className="text-xl font-semibold">4.9</p>
                <p className="mt-1 text-xs text-neutral-400">
                  Demo Rating
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold">7 Days</p>
                <p className="mt-1 text-xs text-neutral-400">
                  Sample Schedule
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold">Online</p>
                <p className="mt-1 text-xs text-neutral-400">
                  Booking Concept
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="border-t border-white/10 px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d9a85d]">
            Sample Services
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Clean work. Straightforward pricing.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-neutral-500">
            Example services and pricing used to demonstrate how a barbershop
            can present its offerings clearly online.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-[#d9a85d]/30 hover:bg-white/[0.04]"
              >
                <div className="flex items-center gap-4">
                  <Scissors size={18} className="text-[#d9a85d]" />
                  <p className="font-medium">{service.name}</p>
                </div>

                <p className="font-semibold text-[#d9a85d]">
                  {service.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BARBERS */}
      <section
        id="barbers"
        className="border-t border-white/10 px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d9a85d]">
            Sample Team
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Your barber matters.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-neutral-500">
            Fictional profiles demonstrate how customers could discover each
            barber&apos;s role and specialties before booking.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {barbers.map((barber) => (
              <div
                key={barber.name}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={barber.image}
                    alt={`${barber.name} fictional barber profile`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <p className="text-xl font-semibold">{barber.name}</p>

                  <p className="mt-1 text-sm text-[#d9a85d]">
                    {barber.role}
                  </p>

                  <p className="mt-3 text-sm text-neutral-500">
                    {barber.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="border-t border-white/10 px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d9a85d]">
            Gallery
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            The visual experience matters.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((image, index) => (
              <div
                key={image}
                className={`relative overflow-hidden rounded-[1.5rem] border border-white/10 ${
                  index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative ${
                    index === 0 ? "aspect-[16/10]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Northline Barbers concept gallery ${index + 1}`}
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 768px) 100vw, 25vw"
                    }
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE REVIEWS */}
      <section
        id="reviews"
        className="border-t border-white/10 px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d9a85d]">
            Sample Reviews
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Designed with customer trust in mind.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-500">
            Sample review content shown for demonstration purposes as part of
            this fictional concept project.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7"
              >
                <div className="flex gap-1 text-[#d9a85d]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-6 leading-7 text-neutral-300">
                  “{review.quote}”
                </p>

                <p className="mt-6 text-sm text-neutral-500">
                  {review.name} · Sample profile
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION + BOOKING */}
      <section
        id="location"
        className="border-t border-white/10 px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-10">
            <MapPin size={22} className="text-[#d9a85d]" />

            <h2 className="mt-6 text-3xl font-semibold">
              Visit Northline
            </h2>

            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#d9a85d]">
              Demo Location
            </p>

            <p className="mt-4 text-neutral-400">
              125 Market Street
              <br />
              Camden, NJ 08102
            </p>

            <div className="mt-8 space-y-3 text-sm text-neutral-400">
              <p>Mon–Fri · 9:00 AM – 7:00 PM</p>
              <p>Saturday · 8:00 AM – 6:00 PM</p>
              <p>Sunday · 10:00 AM – 4:00 PM</p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-neutral-500">
              <Clock3 size={16} />
              Sample business information
            </div>
          </div>

          <div
            id="book"
            className="relative overflow-hidden rounded-[2rem] border border-[#d9a85d]/30 bg-[#d9a85d]/[0.06] p-7 sm:p-10"
          >
            <div className="absolute right-[-15%] top-[-20%] h-64 w-64 rounded-full bg-[#d9a85d]/10 blur-[90px]" />

            <div className="relative z-10">
              <CalendarDays size={22} className="text-[#d9a85d]" />

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#d9a85d]">
                Booking Demo
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                Ready for your next cut?
              </h2>

              <p className="mt-4 max-w-lg leading-7 text-neutral-400">
                This section demonstrates how customers could choose a barber,
                select a service, and reserve an appointment online.
              </p>

              <a
                href="#case-study"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d9a85d] px-7 py-4 font-semibold text-black transition hover:bg-[#e7b86e]"
              >
                See Project Strategy
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GUAMAN DIGITAL CASE STUDY */}
      <section
        id="case-study"
        className="border-t border-white/10 bg-[#050505] px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">
              Guaman Digital Concept Project
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Behind the project.
            </h2>

            <p className="mt-6 text-base leading-8 text-neutral-400 sm:text-lg">
              Northline Barbers is a fictional brand created by Guaman Digital
              to demonstrate how a modern barbershop website can combine
              strong branding, service discovery, social proof, and
              appointment-focused design.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                01 · The Goal
              </p>

              <h3 className="mt-5 text-2xl font-semibold">
                Turn visitors into appointments.
              </h3>

              <p className="mt-4 leading-7 text-neutral-400">
                Create a polished digital presence that makes services easy to
                understand and keeps booking actions visible throughout the
                experience.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                02 · The Approach
              </p>

              <h3 className="mt-5 text-2xl font-semibold">
                Premium without being complicated.
              </h3>

              <p className="mt-4 leading-7 text-neutral-400">
                Dark visuals, warm accents, clear typography, strong
                photography, and straightforward navigation create a modern
                experience without making customers search for what they need.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                03 · Key Features
              </p>

              <h3 className="mt-5 text-2xl font-semibold">
                Built around the customer journey.
              </h3>

              <p className="mt-4 leading-7 text-neutral-400">
                Service pricing, barber profiles, visual work, sample social
                proof, location information, and prominent booking
                calls-to-action work together in one responsive experience.
              </p>
            </div>
          </div>

          {/* PROJECT DETAILS */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-600">
                Industry
              </p>
              <p className="mt-2 font-medium text-neutral-200">
                Barbershop
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-600">
                Focus
              </p>
              <p className="mt-2 font-medium text-neutral-200">
                Booking & Conversion
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-600">
                Experience
              </p>
              <p className="mt-2 font-medium text-neutral-200">
                Responsive Web
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-600">
                Project Type
              </p>
              <p className="mt-2 font-medium text-neutral-200">
                Concept
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-blue-500/20 bg-blue-500/[0.06] p-8 sm:p-10 lg:p-12">
            <div className="absolute right-[-10%] top-[-50%] h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />

            <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Guaman Digital
                </p>

                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Want a website built for your business?
                </h3>

                <p className="mt-4 leading-7 text-neutral-400">
                  We create modern websites designed around your brand,
                  customers, and business goals.
                </p>
              </div>

              <Link
                href="/#contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:bg-neutral-200"
              >
                Start a Project
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-5">
            <p className="max-w-3xl text-center text-xs leading-6 text-neutral-600">
              Northline Barbers is a fictional concept project. Business
              information, names, reviews, ratings, pricing, and location
              details shown above are sample content created for demonstration
              purposes.
            </p>

            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Guaman Digital Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#050505] px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Northline Barbers · Fictional concept project</p>

          <Link href="/" className="transition hover:text-white">
            Designed by Guaman Digital
          </Link>
        </div>
      </footer>
    </main>
  );
}