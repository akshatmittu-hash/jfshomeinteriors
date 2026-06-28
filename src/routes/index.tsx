import { createFileRoute } from "@tanstack/react-router";
import heroWardrobe from "@/assets/hero-wardrobe.jpg";
import serviceWardrobes from "@/assets/service-wardrobes.jpg";
import serviceKitchen from "@/assets/service-kitchen.jpg";
import serviceStudy from "@/assets/service-study.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Range Bedrooms — Fitted Wardrobes & Kitchens in Slough" },
      { name: "description", content: "Bespoke fitted wardrobes, bedrooms, sliding doors and kitchens. Family-run craftsmen in Slough, 4.9★ on Google. Call 07412 569827." },
      { property: "og:title", content: "The Range Bedrooms — Fitted Furniture in Slough" },
      { property: "og:description", content: "Bespoke fitted wardrobes & kitchens, tailored to your home. 4.9★ Google rated." },
      { property: "og:image", content: heroWardrobe },
      { name: "twitter:image", content: heroWardrobe },
    ],
  }),
  component: Home,
});

const PHONE = "07412 569827";
const PHONE_HREF = "tel:+447412569827";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Gallery />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-serif text-xl md:text-2xl tracking-tight font-semibold">
            The Range <span className="text-accent italic">Bedrooms</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">
            Slough · Est. Family Run
          </span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-xs font-medium uppercase tracking-[0.18em]">
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#gallery" className="hover:text-accent transition-colors">Portfolio</a>
          <a href="#process" className="hover:text-accent transition-colors">Process</a>
          <a href="#reviews" className="hover:text-accent transition-colors">Reviews</a>
        </div>
        <a
          href={PHONE_HREF}
          className="bg-primary text-primary-foreground px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          Book Survey
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="relative px-6 lg:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex text-accent text-lg tracking-tighter">★★★★★</div>
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-muted-foreground">
              4.9 · 56 Google Reviews
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-8 tracking-tight">
            Masterfully <br />
            <span className="italic text-accent">Tailored</span> Furniture.
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed">
            From bespoke floor-to-ceiling wardrobes to artisanal kitchens — we craft precision
            fitted furniture for discerning homes across Slough and the Thames Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#gallery"
              className="border border-primary px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-all text-center"
            >
              View our work
            </a>
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-3 px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] group"
            >
              Call {PHONE}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        <div className="md:col-span-7 relative">
          <img
            src={heroWardrobe}
            alt="Bespoke fitted oak wardrobe with integrated lighting and brass handles"
            width={1024}
            height={1280}
            className="w-full aspect-[4/5] object-cover shadow-2xl shadow-primary/10"
          />
          <div className="absolute -bottom-8 -left-4 md:-left-8 bg-card p-6 md:p-8 border border-border shadow-xl hidden lg:block max-w-[300px]">
            <p className="text-sm italic font-serif leading-relaxed mb-4">
              "Great price, quality and workmanship… highly recommend."
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
              — Google Reviewer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Fitted Wardrobes", "Bespoke Kitchens", "Sliding Doors", "Walk-in Dressing Rooms", "Home Studies", "Free Home Survey"];
  return (
    <div className="border-y border-border bg-secondary/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-10">
            {item}
            {i < items.length - 1 && <span className="text-accent">◆</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

const services = [
  {
    n: "01",
    title: "Fitted Wardrobes",
    tag: "Storage",
    img: serviceWardrobes,
    desc: "Wall-to-wall, floor-to-ceiling wardrobes tailored to the exact dimensions of your bedroom — with bespoke internal racking and integrated lighting.",
  },
  {
    n: "02",
    title: "Designer Kitchens",
    tag: "Living",
    img: serviceKitchen,
    desc: "Hand-finished cabinetry, premium surfaces and considered hardware. From shaker classics to handleless contemporary.",
  },
  {
    n: "03",
    title: "Home Studies",
    tag: "Workspace",
    img: serviceStudy,
    desc: "Built-in desks, bookcases and shelving designed around how you actually work — quiet, organised and unmistakably yours.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-primary text-primary-foreground py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.25em] text-accent mb-4 block">Our Specialisms</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Where form meets <br />
              <span className="italic">functionality.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-primary-foreground/60 leading-relaxed">
            Every project is handled in-house by our own craftsmen — from initial home survey
            and 3D design through to the final hand-finished installation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-primary-foreground/10 border border-primary-foreground/10">
          {services.map((s) => (
            <article key={s.n} className="group relative bg-primary p-8 md:p-10 flex flex-col">
              <div className="overflow-hidden mb-8">
                <img
                  src={s.img}
                  alt={s.title}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="w-full aspect-[5/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-serif italic text-accent text-xl">{s.n}</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/40">{s.tag}</span>
              </div>
              <h3 className="font-serif text-2xl mb-3">{s.title}</h3>
              <p className="text-sm text-primary-foreground/65 leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="px-6 lg:px-12 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-accent mb-4 block">Selected Work</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Recent installations.</h2>
          </div>
          <a href={PHONE_HREF} className="text-xs uppercase tracking-[0.2em] underline underline-offset-8 decoration-accent hover:text-accent transition-colors">
            Request the full portfolio
          </a>
        </div>

        <div className="grid md:grid-cols-12 gap-4 md:gap-6">
          <div className="md:col-span-5 md:row-span-2">
            <img src={gallery1} alt="Sliding mirror wardrobe doors in master bedroom" loading="lazy" width={900} height={1200}
              className="w-full h-full object-cover aspect-[3/4]" />
          </div>
          <div className="md:col-span-7">
            <img src={gallery2} alt="Walk-in dressing room with island and oak shelving" loading="lazy" width={1200} height={900}
              className="w-full object-cover aspect-[4/3]" />
          </div>
          <div className="md:col-span-4">
            <img src={gallery3} alt="Modern white handleless kitchen with island" loading="lazy" width={1200} height={900}
              className="w-full object-cover aspect-[4/3]" />
          </div>
          <div className="md:col-span-3">
            <img src={gallery4} alt="Detail of wooden handle on a fitted wardrobe drawer" loading="lazy" width={900} height={1200}
              className="w-full object-cover aspect-[3/4]" />
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", title: "Home Survey", body: "We visit your home, take precise measurements and listen to how you want to live in the space." },
  { n: "02", title: "3D Design", body: "Our designer presents detailed visuals and a transparent, no-obligation quote." },
  { n: "03", title: "Hand Build", body: "We craft your furniture in our workshop using premium materials and quality hardware." },
  { n: "04", title: "Installation", body: "Our fitters install with precision and leave your home clean — usually in just a few days." },
];

function Process() {
  return (
    <section id="process" className="bg-secondary/50 px-6 lg:px-12 py-24 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] text-accent mb-4 block">Our Process</span>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            From first sketch to <span className="italic">soft-close</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-px bg-border">
          {steps.map((s) => (
            <div key={s.n} className="bg-background p-8">
              <div className="font-serif italic text-accent text-2xl mb-6">{s.n}</div>
              <h3 className="font-serif text-xl mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  { quote: "Great price, quality and workmanship….highly recommend.", name: "Google Review" },
  { quote: "I recommend this company they give 5 star service.", name: "Google Review" },
  { quote: "Plenty of options to choose from, awesomely done kitchen.", name: "Google Review" },
];

function Testimonials() {
  return (
    <section id="reviews" className="px-6 lg:px-12 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-accent text-xl tracking-tighter">★★★★★</div>
            </div>
            <h2 className="font-serif text-4xl leading-tight mb-4">
              Trusted by <span className="italic">neighbours</span> in Slough.
            </h2>
            <p className="text-sm text-muted-foreground">
              Rated 4.9 out of 5 across 56 verified Google reviews.
            </p>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-px bg-border">
            {reviews.map((r, i) => (
              <blockquote key={i} className="bg-background p-8 flex flex-col justify-between">
                <p className="font-serif text-xl italic leading-snug mb-6">"{r.quote}"</p>
                <cite className="text-[10px] uppercase tracking-[0.25em] not-italic text-muted-foreground">
                  — {r.name}
                </cite>
              </blockquote>
            ))}
            <div className="bg-accent/10 p-8 flex flex-col justify-center items-start">
              <span className="font-serif text-5xl text-accent leading-none">4.9</span>
              <span className="text-[10px] uppercase tracking-[0.25em] mt-3 text-muted-foreground">Average rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-primary text-primary-foreground px-6 lg:px-12 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-accent mb-4 block">Get in touch</span>
          <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-8">
            Start your <br /><span className="italic">project.</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-md mb-12 leading-relaxed">
            We offer free no-obligation home surveys across Slough and the surrounding areas.
            Call us, drop in, or book a visit and we'll bring the swatches.
          </p>

          <div className="space-y-8">
            <ContactRow label="Visit" value="26 Berryfield, Slough SL2 5SD" />
            <ContactRow label="Call" value={PHONE} href={PHONE_HREF} />
            <ContactRow label="Hours" value="Mon–Sat · 09:00 – 18:00" />
            <div className="flex items-start gap-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-accent pt-1.5 w-16 shrink-0">Social</span>
              <div className="flex gap-6">
                <a href="#" className="text-lg hover:text-accent transition-colors">Instagram</a>
                <a href="#" className="text-lg hover:text-accent transition-colors">Facebook</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary-foreground/5 p-8 md:p-10 border border-primary-foreground/10">
          <h3 className="font-serif text-2xl mb-8">Request a callback</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <Field label="Name" type="text" name="name" />
            <Field label="Phone" type="tel" name="phone" />
            <Field label="Project type" type="text" name="project" placeholder="Fitted wardrobe, kitchen…" />
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">Tell us more</label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-primary-foreground/20 focus:border-accent outline-none py-3 text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground py-4 text-xs font-medium uppercase tracking-[0.25em] hover:brightness-110 transition-all"
            >
              Send request
            </button>
            <p className="text-[10px] text-primary-foreground/50">
              Or call us directly on <a href={PHONE_HREF} className="text-accent">{PHONE}</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = href ? (
    <a href={href} className="text-lg hover:text-accent transition-colors">{value}</a>
  ) : (
    <span className="text-lg">{value}</span>
  );
  return (
    <div className="flex items-start gap-6">
      <span className="text-[10px] uppercase tracking-[0.25em] text-accent pt-1.5 w-16 shrink-0">{label}</span>
      {content}
    </div>
  );
}

function Field({ label, type, name, placeholder }: { label: string; type: string; name: string; placeholder?: string }) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-primary-foreground/20 focus:border-accent outline-none py-3 text-sm placeholder:text-primary-foreground/30"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="px-6 lg:px-12 py-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        <span className="font-serif text-base normal-case tracking-tight text-foreground">
          The Range <span className="italic text-accent">Bedrooms</span>
        </span>
        <span>© {new Date().getFullYear()} · Slough, Berkshire · Family Owned</span>
        <span>
          <a href={PHONE_HREF} className="hover:text-accent transition-colors">{PHONE}</a>
        </span>
      </div>
    </footer>
  );
}
