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

type Range = {
  name: string;
  tag: string;
  category: "Bedrooms" | "Kitchens";
  description: string;
  images: { src: string; label: string }[];
};

const RANGES: Record<string, Range> = {
  urbano: {
    name: "Urbano",
    tag: "Modern Contemporary",
    category: "Bedrooms",
    description:
      "Sleek, architectural wardrobes for the contemporary home. The Urbano range pairs handleless push-to-open cabinetry with premium veneers, smoked glass and integrated LED lighting.",
    images: [
      { src: urbano1, label: "Matte Charcoal · Brushed Brass" },
      { src: urbano2, label: "Navy High Gloss" },
      { src: urbano3, label: "Warm Oak · Black Trim" },
      { src: urbano4, label: "Soft Matte White" },
      { src: urbano5, label: "Graphite Black · Smoked Glass" },
    ],
  },
  regency: {
    name: "Regency",
    tag: "Traditional Shaker",
    category: "Bedrooms",
    description:
      "Classic shaker fitted wardrobes hand-painted in our workshop. Panelled doors, solid timber frames and heritage hardware — engineered for a lifetime of quiet elegance.",
    images: [
      { src: regency1, label: "Sage Green · Brass" },
      { src: regency2, label: "Classic Cream · Chrome" },
      { src: regency3, label: "Heritage Blue · Antique Brass" },
      { src: regency4, label: "Dove Grey · Brushed Nickel" },
      { src: regency5, label: "Deep Burgundy · Brass" },
    ],
  },
  aurelia: {
    name: "Aurelia",
    tag: "Handleless Luxe",
    category: "Kitchens",
    description:
      "Our flagship handleless kitchen — minimalist silhouettes, deep matte lacquers and considered material pairings. Marble worktops, brass detailing and integrated appliances throughout.",
    images: [
      { src: aurelia1, label: "Forest Green · Brass" },
      { src: aurelia2, label: "Cashmere High Gloss" },
      { src: aurelia3, label: "Matte Black · Walnut Island" },
      { src: aurelia4, label: "Dusty Blue · Marble" },
      { src: aurelia5, label: "Terracotta · Oak" },
    ],
  },
  heritage: {
    name: "Heritage",
    tag: "Classic Painted",
    category: "Kitchens",
    description:
      "A timeless English painted kitchen. Deep drawers, in-frame cabinetry and a choice of hand-mixed heritage colours — designed to sit beautifully in both period and new-build homes.",
    images: [
      { src: heritage1, label: "Sage · Brass Cups" },
      { src: heritage2, label: "Stone Cream · Nickel" },
      { src: heritage3, label: "Hunter Green · Oak Island" },
      { src: heritage4, label: "Powder Blue · Brushed Brass" },
      { src: heritage5, label: "Charcoal · Pewter" },
    ],
  },
};

export const Route = createFileRoute("/ranges/$rangeId")({
  loader: ({ params }) => {
    const range = RANGES[params.rangeId];
    if (!range) throw notFound();
    return { range };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.range.name} — JFS Home Interiors` },
          { name: "description", content: `${loaderData.range.name} · ${loaderData.range.tag}. ${loaderData.range.description}` },
          { property: "og:title", content: `${loaderData.range.name} — JFS Home Interiors` },
          { property: "og:description", content: loaderData.range.description },
          { property: "og:image", content: loaderData.range.images[0].src },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Range — JFS Home Interiors" }],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-serif text-4xl">Range not found</h1>
      <Link to="/" className="text-[11px] uppercase tracking-[0.25em] underline underline-offset-8 decoration-gold">
        Back to home
      </Link>
    </div>
  ),
  errorComponent: ({ reset }) => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="font-serif text-3xl">Something went wrong</h1>
        <button onClick={() => reset()} className="text-[11px] uppercase tracking-[0.25em] underline underline-offset-8 decoration-gold">
          Try again
        </button>
      </div>
    );
  },
  component: RangeDetail,
});

const PHONE = "07412 569827";
const PHONE_HREF = "tel:+447412569827";

function RangeDetail() {
  const { range } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="bg-[color:var(--forest-deep)] text-cream">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl tracking-tight">
            JFS<span className="text-gold">.</span>
          </Link>
          <Link to="/" hash="ranges" className="text-[11px] uppercase tracking-[0.25em] hover:text-gold transition">
            ← All Ranges
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-[color:var(--forest-deep)] text-cream">
        <img src={range.images[0].src} alt={range.name} className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-40">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">{range.category} · {range.tag}</span>
          <h1 className="font-serif text-6xl md:text-8xl mt-6">
            {range.name}
          </h1>
          <p className="mt-8 max-w-2xl text-cream/85 leading-relaxed text-lg">{range.description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/" hash="contact" className="bg-gold text-[color:var(--forest-deep)] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] hover:brightness-110 transition">
              Book a home survey
            </Link>
            <a href={PHONE_HREF} className="border border-cream/40 text-cream px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] hover:bg-cream hover:text-[color:var(--forest-deep)] transition">
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[color:var(--royal)]">Finishes & Colourways</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">Available in <em>five</em> signature palettes.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {range.images.map((img: { src: string; label: string }, i: number) => (
              <figure key={i} className="group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={`${range.name} — ${img.label}`}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[color:var(--forest-deep)]/85 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-gold border border-gold/30">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <figcaption className="mt-4 flex items-center gap-3">
                  <span className="h-px flex-1 bg-border" />
                  <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{img.label}</span>
                  <span className="h-px flex-1 bg-border" />
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[color:var(--forest)] text-cream px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl">Design your {range.name}.</h2>
          <p className="mt-6 text-cream/75 max-w-xl mx-auto">
            Book a free, no-obligation home survey. We'll bring the swatches and finalise your ideal finish in person.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/" hash="contact" className="bg-gold text-[color:var(--forest-deep)] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] hover:brightness-110 transition">
              Request a callback
            </Link>
            <Link to="/" hash="ranges" className="border border-cream/40 text-cream px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] hover:bg-cream hover:text-[color:var(--forest-deep)] transition">
              View other ranges
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
