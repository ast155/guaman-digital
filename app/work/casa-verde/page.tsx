import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Star,
  UtensilsCrossed,
} from "lucide-react";

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
      {/* Navbar */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-[#163127]/10 bg-[#f1ede4]/85 backdrop-blur-xl">
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
              Our Story
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
            Reserve a Table
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/casa-verde/hero.jpg"
            alt="Casa Verde restaurant"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#163127]/95 via-[#163127]/75 to-[#163127]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#163127]/70 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center">
          <div className="max-w-4xl text-[#f7f3ea]">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d6b982]">
              Seasonal Kitchen · Philadelphia
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
                Reserve a Table
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

      {/* Menu */}
      <section
        id="menu"
        className="px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8c7042]">
            Seasonal Menu
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
            Familiar ingredients, elevated with intention.
          </h2>

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

      {/* Story */}
      <section
        id="story"
        className="bg-[#163127] px-5 py-24 text-[#f1ede4] sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/casa-verde/chef.jpg"
              alt="Chef at Casa Verde"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d6b982]">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              A neighborhood restaurant with a seasonal point of view.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#f1ede4]/65">
              Casa Verde is built around thoughtful sourcing, warm hospitality,
              and food that feels both familiar and special.
            </p>

            <p className="mt-5 leading-7 text-[#f1ede4]/55">
              Our menu changes with the seasons, highlighting ingredients from
              local farms and producers while keeping the experience relaxed,
              approachable, and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        className="px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8c7042]">
            From the Kitchen
          </p>

          <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
            A look inside Casa Verde.
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
                    alt={`Casa Verde dish ${index + 1}`}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-y border-[#163127]/10 px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8c7042]">
            Guest Notes
          </p>

          <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
            Made for nights worth remembering.
          </h2>

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

                <p className="mt-6 text-sm text-[#163127]/50">
                  {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit + Reservations */}
      <section
        id="visit"
        className="px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] bg-[#163127] text-[#f1ede4]">
            <div className="relative aspect-[16/8]">
              <Image
                src="/casa-verde/interior.jpg"
                alt="Casa Verde interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#163127] via-transparent to-transparent" />
            </div>

            <div className="p-7 sm:p-10">
              <MapPin size={22} className="text-[#d6b982]" />

              <h2 className="mt-6 text-3xl font-medium">Visit Casa Verde</h2>

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
                Reservations recommended
              </div>
            </div>
          </div>

          <div
            id="reserve"
            className="relative overflow-hidden rounded-[2rem] border border-[#163127]/10 bg-[#dfc896]/35 p-7 sm:p-10"
          >
            <CalendarDays size={22} className="text-[#8c7042]" />

            <h2 className="mt-6 text-3xl font-medium">
              Join us for dinner.
            </h2>

            <p className="mt-4 max-w-lg leading-7 text-[#163127]/65">
              Select your date, party size, and preferred time to reserve your
              table.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#163127] px-7 py-4 font-medium text-[#f1ede4] transition hover:bg-[#214536]">
              Reserve a Table
              <ArrowRight size={18} />
            </button>

            <div className="mt-12 border-t border-[#163127]/10 pt-8">
              <p className="text-sm text-[#163127]/50">
                Private dining and group reservations available upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#163127]/10 px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#163127]/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Casa Verde.</p>

          <a
            href="/"
            className="transition hover:text-[#163127]"
          >
            Concept by Guaman Digital
          </a>
        </div>
      </footer>
    </main>
  );
}