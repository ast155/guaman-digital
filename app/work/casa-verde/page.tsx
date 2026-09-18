import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Star,
  UtensilsCrossed,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Casa Verde | Restaurant Website Concept",
  description:
    "A fictional restaurant website concept created by Guaman Digital to demonstrate restaurant branding, menu discovery, reservations, and responsive web design.",
  alternates: {
    canonical: "/work/casa-verde",
  },
};

const dishes = [
  {
    name: "Braised Short Rib",
    description:
      "Slow braised beef, roasted vegetables, red wine reduction.",
    price: "$34",
  },
  {
    name: "Wild Mushroom Risotto",
    description:
      "Arborio rice, seasonal mushrooms, parmesan, fresh herbs.",
    price: "$26",
  },
  {
    name: "Seared Salmon",
    description:
      "Atlantic salmon, herb potatoes, seasonal greens, citrus butter.",
    price: "$31",
  },
  {
    name: "Casa Verde Pasta",
    description:
      "Handmade pasta, roasted tomato, basil, burrata, olive oil.",
    price: "$24",
  },
];

const reviews = [
  {
    quote:
      "Beautiful atmosphere, incredible food, and the service made the entire evening feel special.",
    name: "Sophia R.",
  },
  {
    quote:
      "One of those restaurants you immediately want to come back to.",
    name: "Daniel M.",
  },
  {
    quote:
      "The food was outstanding and the interior is absolutely gorgeous.",
    name: "Michelle T.",
  },
];

const gallery = [
  "/casa-verde/food-1.jpg",
  "/casa-verde/food-2.jpg",
  "/casa-verde/food-3.jpg",
  "/casa-verde/food-4.jpg",
];

export default function CasaVerdePage() {
  return (
    <main className="min-h-screen bg-[#f1ede4] text-[#163127]">
      {/* CONCEPT NOTICE */}
      <div className="fixed left-0 top-0 z-[60] w-full border-b border-[#d6b982]/30 bg-[#163127] px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f1ede4] sm:text-xs">
        Concept Project by Guaman Digital · Demo content shown below
      </div>

      {/* NAVBAR */}
      <header className="fixed left-0 top-[32px] z-50 w-full border-b border-[#163127]/10 bg-[#f1ede4]/90 backdrop-blur-xl sm:top-[34px]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <UtensilsCrossed size={19} />

            <span className="text-lg font-semibold tracking-tight">
              Casa Verde
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-[#163127]/60 md:flex">
            <a href="#menu" className="transition hover:text-[#163127]">
              Menu
            </a>

            <a href="#story" className="transition hover:text-[#163127]">
              Story
            </a>

            <a href="#gallery" className="transition hover:text-[#163127]">
              Gallery
            </a>

            <a href="#visit" className="transition hover:text-[#163127]">
              Visit
            </a>
          </div>

          <a
            href="#reserve"
            className="rounded-full bg-[#163127] px-5 py-2.5 text-sm font-medium text-[#f1ede4] transition hover:bg-[#214536]"
          >
            Reservations
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden px-5 pb-20 pt-40 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/casa-verde/hero.jpg"
            alt="Casa Verde fictional restaurant website concept"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#163127]/95 via-[#163127]/75 to-[#163127]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#163127]/70 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-7xl items-center">
          <div className="max-w-4xl text-[#f7f3ea]">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d6b982]">
              Restaurant Website Concept
            </p>

            <h1 className="mt-5 text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Thoughtful food.
              <span className="block text-[#f7f3ea]/65">
                Made for memorable nights.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#f7f3ea]/75 sm:text-lg sm:leading-8">
              Seasonal ingredients, warm hospitality, and a dining experience
              designed around simple food done beautifully.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#reserve"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d6b982] px-7 py-4 font-medium text-[#163127] transition hover:bg-[#e1c691]"
              >
                View Reservation Experience
                <ArrowRight size={18} />
              </a>

              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 font-medium text-white backdrop-blur transition hover:bg-white/15"
              >
                Explore Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8c7042]">
            Sample Seasonal Menu
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
            Familiar ingredients, elevated with intention.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-[#163127]/55">
            Sample dishes and pricing demonstrate how a restaurant can present
            its menu clearly while maintaining a refined brand experience.
          </p>

          <div className="mt-12 grid gap-x-12 gap-y-4 lg:grid-cols-2">
            {dishes.map((dish) => (
              <div
                key={dish.name}
                className="border-b border-[#163127]/10 py-6"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-xl font-medium">{dish.name}</h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-[#163127]/60">
                      {dish.description}
                    </p>
                  </div>

                  <p className="font-medium text-[#8c7042]">
                    {dish.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section
        id="story"
        className="bg-[#163127] px-5 py-24 text-[#f1ede4] sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/casa-verde/chef.jpg"
              alt="Casa Verde concept chef imagery"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d6b982]">
              Brand Story Concept
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              A neighborhood restaurant with a seasonal point of view.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#f1ede4]/65">
              Casa Verde&apos;s fictional brand story is built around
              thoughtful sourcing, warm hospitality, and food that feels both
              familiar and special.
            </p>

            <p className="mt-5 leading-7 text-[#f1ede4]/55">
              This section demonstrates how storytelling can communicate a
              restaurant&apos;s personality, values, and dining experience
              before a guest ever walks through the door.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8c7042]">
            Visual Experience
          </p>

          <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
            A look inside the concept.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((image, index) => (
              <div
                key={image}
                className={`relative overflow-hidden rounded-[1.5rem] ${
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
                    alt={`Casa Verde concept gallery ${index + 1}`}
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
      <section className="border-y border-[#163127]/10 px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8c7042]">
            Sample Guest Notes
          </p>

          <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
            Designed to build confidence before the reservation.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#163127]/50">
            Fictional review content is shown below to demonstrate how social
            proof could be presented within a restaurant website.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-[2rem] border border-[#163127]/10 bg-white/40 p-7"
              >
                <div className="flex gap-1 text-[#8c7042]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-6 leading-7 text-[#163127]/80">
                  “{review.quote}”
                </p>

                <p className="mt-6 text-sm text-[#163127]/45">
                  {review.name} · Sample profile
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT + RESERVATION EXPERIENCE */}
      <section id="visit" className="px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] bg-[#163127] text-[#f1ede4]">
            <div className="relative aspect-[16/8]">
              <Image
                src="/casa-verde/interior.jpg"
                alt="Casa Verde fictional restaurant interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#163127] via-transparent to-transparent" />
            </div>

            <div className="p-7 sm:p-10">
              <MapPin size={22} className="text-[#d6b982]" />

              <h2 className="mt-6 text-3xl font-medium">
                Visit Casa Verde
              </h2>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#d6b982]">
                Demo Location
              </p>

              <p className="mt-4 text-[#f1ede4]/65">
                221 Walnut Street
                <br />
                Philadelphia, PA 19106
              </p>

              <div className="mt-8 space-y-3 text-sm text-[#f1ede4]/60">
                <p>Tuesday–Thursday · 5:00 PM – 10:00 PM</p>
                <p>Friday–Saturday · 5:00 PM – 11:00 PM</p>
                <p>Sunday · 4:00 PM – 9:00 PM</p>
              </div>

              <div className="mt-7 flex items-center gap-2 text-sm text-[#f1ede4]/50">
                <Clock3 size={16} />
                Sample business information
              </div>
            </div>
          </div>

          <div
            id="reserve"
            className="relative overflow-hidden rounded-[2rem] border border-[#163127]/10 bg-[#dfc896]/35 p-7 sm:p-10"
          >
            <CalendarDays size={22} className="text-[#8c7042]" />

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#8c7042]">
              Reservation Experience
            </p>

            <h2 className="mt-3 text-3xl font-medium">
              Join us for dinner.
            </h2>

            <p className="mt-4 max-w-lg leading-7 text-[#163127]/65">
              This section demonstrates how a restaurant website can guide
              guests toward choosing a date, party size, and preferred dining
              time.
            </p>

            <a
              href="#case-study"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#163127] px-7 py-4 font-medium text-[#f1ede4] transition hover:bg-[#214536]"
            >
              See Project Strategy
              <ArrowRight size={18} />
            </a>

            <div className="mt-12 border-t border-[#163127]/10 pt-8">
              <p className="text-sm text-[#163127]/50">
                Demonstration of reservation-focused UX for restaurants and
                hospitality businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section
        id="case-study"
        className="bg-[#e7dfcf] px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8c7042]">
                Guaman Digital Concept Project
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Designing the digital side of the dining experience.
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-2xl text-base leading-8 text-[#163127]/60 sm:text-lg">
                Casa Verde is a fictional restaurant brand created to explore
                how thoughtful web design can communicate atmosphere, make a
                menu easy to discover, and guide guests toward reservations.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            <div className="border-t border-[#163127]/20 pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8c7042]">
                01 · Brand Experience
              </p>

              <h3 className="mt-5 text-2xl font-medium">
                Make the website feel like the restaurant.
              </h3>

              <p className="mt-4 leading-7 text-[#163127]/55">
                Warm colors, editorial typography, food photography, and
                intentional spacing create a digital experience aligned with
                the atmosphere of the concept.
              </p>
            </div>

            <div className="border-t border-[#163127]/20 pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8c7042]">
                02 · Menu Discovery
              </p>

              <h3 className="mt-5 text-2xl font-medium">
                Give guests what they came to find.
              </h3>

              <p className="mt-4 leading-7 text-[#163127]/55">
                Clear menu information, pricing, imagery, and restaurant
                storytelling help visitors understand the experience before
                deciding to visit.
              </p>
            </div>

            <div className="border-t border-[#163127]/20 pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8c7042]">
                03 · Reservation Path
              </p>

              <h3 className="mt-5 text-2xl font-medium">
                Keep the next action obvious.
              </h3>

              <p className="mt-4 leading-7 text-[#163127]/55">
                Reservation calls-to-action are placed throughout the
                experience so guests can move naturally from discovery toward
                booking.
              </p>
            </div>
          </div>

          {/* PROJECT DETAILS */}
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Industry", "Restaurant"],
              ["Focus", "Reservations"],
              ["Experience", "Responsive Web"],
              ["Project Type", "Concept"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-[#163127]/10 bg-[#f1ede4]/70 p-5"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[#163127]/40">
                  {label}
                </p>

                <p className="mt-2 font-medium text-[#163127]">
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* GUAMAN DIGITAL CTA */}
          <div className="mt-16 rounded-[2rem] bg-[#163127] p-8 text-[#f1ede4] sm:p-10 lg:p-12">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6b982]">
                  Guaman Digital
                </p>

                <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                  Your website should feel like your business.
                </h3>

                <p className="mt-4 leading-7 text-[#f1ede4]/60">
                  We build modern digital experiences around your brand,
                  customers, and the actions that matter to your business.
                </p>
              </div>

              <Link
                href="/#contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#d6b982] px-7 py-4 font-medium text-[#163127] transition hover:bg-[#e1c691]"
              >
                Start a Project
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-5">
            <p className="max-w-3xl text-center text-xs leading-6 text-[#163127]/40">
              Casa Verde is a fictional concept project. Business information,
              menu items, pricing, reviews, names, hours, and location details
              shown above are sample content created for demonstration
              purposes.
            </p>

            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#163127]/55 transition hover:text-[#163127]"
            >
              <ArrowLeft size={16} />
              Back to Guaman Digital Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#163127]/10 px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#163127]/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Casa Verde · Fictional concept project</p>

          <Link href="/" className="transition hover:text-[#163127]">
            Designed by Guaman Digital
          </Link>
        </div>
      </footer>
    </main>
  );
}