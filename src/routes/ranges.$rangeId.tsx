import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import urbano1 from "@/assets/urbano-1.jpg";
import urbano2 from "@/assets/urbano-2.jpg";
import urbano3 from "@/assets/urbano-3.jpg";
import urbano4 from "@/assets/urbano-4.jpg";
import urbano5 from "@/assets/urbano-5.jpg";
import regency1 from "@/assets/regency-1.jpg";
import regency2 from "@/assets/regency-2.jpg";
import regency3 from "@/assets/regency-3.jpg";
import regency4 from "@/assets/regency-4.jpg";
import regency5 from "@/assets/regency-5.jpg";
import aurelia1 from "@/assets/aurelia-1.jpg";
import aurelia2 from "@/assets/aurelia-2.jpg";
import aurelia3 from "@/assets/aurelia-3.jpg";
import aurelia4 from "@/assets/aurelia-4.jpg";
import aurelia5 from "@/assets/aurelia-5.jpg";
import heritage1 from "@/assets/heritage-1.jpg";
import heritage2 from "@/assets/heritage-2.jpg";
import heritage3 from "@/assets/heritage-3.jpg";
import heritage4 from "@/assets/heritage-4.jpg";
import heritage5 from "@/assets/heritage-5.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import serviceStudy from "@/assets/service-study.jpg";
import serviceWardrobes from "@/assets/service-wardrobes.jpg";
import serviceKitchen from "@/assets/service-kitchen.jpg";

type SubRange = {
  name: string;
  style: string;
  description: string;
  images: string[];
};

type Category = {
  name: string;
  tag: string;
  intro: string;
  hero: string;
  subRanges: SubRange[];
};

const CATEGORIES: Record<string, Category> = {
  kitchens: {
    name: "Kitchens",
    tag: "Designer Kitchens",
    hero: serviceKitchen,
    intro:
      "From handleless contemporary to classic in-frame shaker, our kitchens are hand-finished in the workshop and installed with precision. Explore our signature ranges.",
    subRanges: [
      {
        name: "Ashbourne",
        style: "In-frame Shaker",
        description: "A quintessential English painted kitchen with in-frame cabinetry, deep drawers and heritage colourways.",
        images: [aurelia1, aurelia2, aurelia3],
      },
      {
        name: "Austin",
        style: "Handleless Contemporary",
        description: "Minimalist push-to-open cabinetry paired with matte lacquers and integrated brass detailing.",
        images: [aurelia4, aurelia5],
      },
      {
        name: "Cranbrook",
        style: "Classic Painted",
        description: "Timeless painted shaker doors, oak islands and hand-finished woodwork built to last generations.",
        images: [heritage1, heritage2, heritage3],
      },
      {
        name: "Harvard",
        style: "Modern Luxe",
        description: "Bold matte tones, walnut interiors and marble surfaces — a confident contemporary statement.",
        images: [heritage4, heritage5],
      },
    ],
  },
  bedrooms: {
    name: "Bedrooms",
    tag: "Fitted Wardrobes",
    hero: serviceWardrobes,
    intro:
      "Floor-to-ceiling fitted wardrobes and dressing rooms tailored to the exact geometry of your room, with bespoke internals and integrated lighting.",
    subRanges: [
      {
        name: "Waterford",
        style: "Modern Handleless",
        description: "Sleek architectural wardrobes with push-to-open doors, smoked glass and integrated LED lighting.",
        images: [urbano1, urbano2, urbano3],
      },
      {
        name: "Wexford",
        style: "Contemporary Gloss",
        description: "High-gloss fronts, brushed metal detailing and considered material pairings for a refined finish.",
        images: [urbano4, urbano5],
      },
      {
        name: "New England",
        style: "Classic Shaker",
        description: "Hand-painted shaker wardrobes with panelled doors, solid timber frames and heritage hardware.",
        images: [regency1, regency2, regency3],
      },
      {
        name: "Windsor",
        style: "Traditional Painted",
        description: "Elegant painted wardrobes in muted heritage tones — quiet, timeless and beautifully proportioned.",
        images: [regency4, regency5],
      },
    ],
  },
  living: {
    name: "Living",
    tag: "Studies & Storage",
    hero: serviceStudy,
    intro:
      "Built-in desks, bookcases, media walls and bespoke storage — designed around the way you work and live at home.",
    subRanges: [
      {
        name: "Princeton",
        style: "Home Study",
        description: "Fully integrated home offices with built-in desks, shelving and concealed storage.",
        images: [serviceStudy, gallery1],
      },
      {
        name: "Kingston",
        style: "Media Walls",
        description: "Bespoke media walls with integrated lighting, cable management and display niches.",
        images: [gallery2, gallery3],
      },
      {
        name: "Chelsea",
        style: "Library & Storage",
        description: "Floor-to-ceiling bookcases and living room storage tailored to your collection.",
        images: [gallery4, serviceWardrobes],
      },
    ],
  },
};

export const Route = createFileRoute("/ranges/$rangeId")({
  loader: ({ params }) => {
    const category = CATEGORIES[params.rangeId];
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.category.name} — JFS Home Interiors` },
          { name: "description", content: `${loaderData.category.name} · ${loaderData.category.intro}` },
          { property: "og:title", content: `${loaderData.category.name} — JFS Home Interiors` },
          { property: "og:description", content: loaderData.category.intro },
          { property: "og:image", content: loaderData.category.hero },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Portfolio — JFS Home Interiors" }],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-serif text-4xl">Category not found</h1>
      <Link to="/" hash="ranges" className="text-[11px] uppercase tracking-[0.25em] underline underline-offset-8 decoration-gold">
        Back to portfolio
      </Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-serif text-3xl">Something went wrong</h1>
      <button onClick={() => reset()} className="text-[11px] uppercase tracking-[0.25em] underline underline-offset-8 decoration-gold">
        Try again
      </button>
    </div>
  ),
  component: CategoryDetail,
});

const PHONE = "07412 569827";
const PHONE_HREF = "tel:+447412569827";

function CategoryDetail() {
  const { category } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-[color:var(--forest-deep)] text-cream">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl tracking-tight">
            JFS<span className="text-gold">.</span>
          </Link>
          <Link to="/" hash="ranges" className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] hover:text-gold transition">
            ← Portfolio
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-[color:var(--forest-deep)] text-cream">
        <img src={category.hero} alt={category.name} className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">{category.tag}</span>
          <h1 className="font-serif text-5xl md:text-8xl mt-6">{category.name}</h1>
          <p className="mt-8 max-w-2xl text-cream/85 leading-relaxed text-base md:text-lg">{category.intro}</p>
        </div>
      </section>

      {/* Sub-ranges */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto space-y-24">
          {category.subRanges.map((sub, i) => (
            <article key={sub.name} className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-10">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[color:var(--royal)]">
                  {String(i + 1).padStart(2, "0")} · {sub.style}
                </span>
                <h2 className="font-serif text-4xl md:text-5xl mt-4">{sub.name}</h2>
                <div className="mt-5 h-px w-16 bg-gold" />
                <p className="mt-6 text-muted-foreground leading-relaxed">{sub.description}</p>
                <Link
                  to="/"
                  hash="contact"
                  className="mt-8 inline-block text-[11px] uppercase tracking-[0.25em] underline underline-offset-8 decoration-gold hover:text-[color:var(--forest)] transition"
                >
                  Enquire about {sub.name}
                </Link>
              </div>
              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
                {sub.images.map((src, j) => (
                  <figure
                    key={j}
                    className={`overflow-hidden ${sub.images.length === 3 && j === 0 ? "sm:col-span-2" : ""}`}
                  >
                    <img
                      src={src}
                      alt={`${sub.name} — view ${j + 1}`}
                      loading="lazy"
                      className="w-full h-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[color:var(--forest)] text-cream px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl">Design your {category.name.toLowerCase()}.</h2>
          <p className="mt-6 text-cream/75 max-w-xl mx-auto">
            Book a free, no-obligation home survey. We'll bring the swatches and finalise every detail in person.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/" hash="contact" className="bg-gold text-[color:var(--forest-deep)] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] hover:brightness-110 transition">
              Request a callback
            </Link>
            <Link to="/" hash="ranges" className="border border-cream/40 text-cream px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] hover:bg-cream hover:text-[color:var(--forest-deep)] transition">
              View other categories
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[color:var(--forest-deep)] text-cream/70 border-t border-cream/10 px-6 md:px-12 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em]">
          <span className="font-serif text-lg normal-case tracking-tight text-cream">JFS <em className="text-gold">Home Interiors</em></span>
          <span>© {new Date().getFullYear()} · UK</span>
          <a href={PHONE_HREF} className="hover:text-gold transition">{PHONE}</a>
        </div>
      </footer>
    </div>
  );
}
