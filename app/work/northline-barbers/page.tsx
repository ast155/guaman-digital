import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Scissors,
  Star,
} from "lucide-react";

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
      {/* NAVBAR */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0a0908]/85 backdrop-blur-xl">
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
      <section className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/northline/hero.jpg"
            alt="Premium barbershop interior"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0908] via-[#0a0908]/90 to-[#0a0908]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-transparent to-[#0a0908]/30" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d9a85d]">
              Camden / Philadelphia Area
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
                Book an Appointment
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
                  Google Rating
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold">7 Days</p>
                <p className="mt-1 text-xs text-neutral-400">
                  Open Weekly
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold">Online</p>
                <p className="mt-1 text-xs text-neutral-400">
                  Easy Booking
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
            Services
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Clean work. Straightforward pricing.
          </h2>

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
            Meet the team
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Your barber matters.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {barbers.map((barber) => (
              <div
                key={barber.name}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={barber.image}
                    alt={`${barber.name} - ${barber.role}`}
                    fill
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
            The work speaks for itself.
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
                    alt={`Northline Barbers gallery ${index + 1}`}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section
        id="reviews"
        className="border-t border-white/10 px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d9a85d]">
            Reviews
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            What clients say.
          </h2>

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
                  {review.name}
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
              Walk-ins welcome
            </div>
          </div>

          <div
            id="book"
            className="relative overflow-hidden rounded-[2rem] border border-[#d9a85d]/30 bg-[#d9a85d]/[0.06] p-7 sm:p-10"
          >
            <div className="absolute right-[-15%] top-[-20%] h-64 w-64 rounded-full bg-[#d9a85d]/10 blur-[90px]" />

            <div className="relative z-10">
              <CalendarDays size={22} className="text-[#d9a85d]" />

              <h2 className="mt-6 text-3xl font-semibold">
                Ready for your next cut?
              </h2>

              <p className="mt-4 max-w-lg leading-7 text-neutral-400">
                Choose your barber, select a service, and reserve your
                appointment online.
              </p>

              <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d9a85d] px-7 py-4 font-semibold text-black transition hover:bg-[#e7b86e]">
                Book Appointment
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Northline Barbers.</p>

          <a
            href="/"
            className="transition hover:text-white"
          >
            Concept by Guaman Digital
          </a>
        </div>
      </footer>
    </main>
  );
}