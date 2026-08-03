import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import heroWardrobe from "@/assets/hero-wardrobe.jpg";
import serviceKitchen from "@/assets/service-kitchen.jpg";
import serviceStudy from "@/assets/service-study.jpg";
import bedroomHeroA from "@/assets/bedroom-hero-a.jpg";
import bedroomHeroB from "@/assets/bedroom-hero-b.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JFS Home Interiors — Bespoke Fitted Bedrooms & Kitchens" },
      { name: "description", content: "JFS Home Interiors — bespoke fitted bedrooms, wardrobes, sliding doors and kitchens across the UK. 4.9★ on Google. Call 07412 569827." },
      { property: "og:title", content: "JFS Home Interiors — Bespoke Fitted Furniture across the UK" },
      { property: "og:description", content: "Hand-crafted fitted bedrooms & kitchens. 4.9★ Google rated." },
      { property: "og:image", content: heroWardrobe },
      { name: "twitter:image", content: heroWardrobe },
    ],
  }),
  component: Home,
});

const PHONE = "07412 569827";
const PHONE_HREF = "tel:+447412569827";
const BRAND = "JFS Home Interiors";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Intro />
      <Services />
      <Ranges />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- HERO (Symphony-inspired) ---------------- */
function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[720px] w-full overflow-hidden bg-[color:var(--forest-deep)] text-cream">
      {/* background image */}
      <img
        src={heroWardrobe}
        alt="Bespoke fitted bedroom by JFS Home Interiors"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* colored overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--forest-deep) 55%, transparent) 0%, color-mix(in oklab, var(--royal) 25%, transparent) 45%, color-mix(in oklab, var(--forest-deep) 70%, transparent) 100%)",
        }}
      />

      {/* Top bar */}
      <TopBar />

      {/* Center logo */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center px-6 text-center">
        <span className="text-[10px] tracking-[0.5em] uppercase text-gold mb-6">UK · Bespoke Interiors</span>
        <h1 className="font-serif text-6xl md:text-8xl leading-none text-cream">
          JFS
          <span className="block italic font-light text-gold text-4xl md:text-6xl mt-2">Home Interiors</span>
        </h1>
        <div className="mt-8 h-px w-24 bg-gold/70" />
        <p className="mt-8 max-w-xl text-sm md:text-base text-cream/85 leading-relaxed">
          Bespoke fitted bedrooms & kitchens, hand-crafted for the UK's most considered homes.
        </p>

        <div className="pointer-events-auto mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <a href="#ranges" className="bg-gold text-[color:var(--forest-deep)] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] hover:brightness-110 transition">
            View our ranges
          </a>
          <a href={PHONE_HREF} className="border border-cream/40 text-cream px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] hover:bg-cream hover:text-[color:var(--forest-deep)] transition">
            Book a home survey
          </a>
        </div>
      </div>

      {/* Floating info card, bottom right */}
      <div className="hidden lg:block absolute bottom-24 right-10 max-w-xs bg-[color:var(--forest-deep)]/85 backdrop-blur border border-gold/30 p-7">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-gold tracking-tighter">★★★★★</span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-cream/70">4.9 · 56 Google Reviews</span>
        </div>
        <p className="font-serif italic text-lg text-cream leading-snug mb-4">
          "Great price, quality and workmanship. Highly recommend."
        </p>
        <a href="#reviews" className="text-[10px] uppercase tracking-[0.25em] text-gold hover:text-cream inline-flex items-center gap-2">
          Read reviews <span>→</span>
        </a>
      </div>

      {/* Scroll indicator */}
      <a href="#intro" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-cream/70 flex flex-col items-center gap-2">
        Scroll
        <span className="block h-8 w-px bg-cream/40" />
      </a>

      {/* Curved white bottom transition */}
      <svg className="absolute bottom-0 left-0 w-full text-background" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0,80 C480,10 960,10 1440,80 L1440,80 L0,80 Z" />
      </svg>
    </section>
  );
}

function TopBar() {
  return (
    <header className="absolute top-0 inset-x-0 z-20">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 h-24 flex items-center justify-between text-cream">
        <div className="flex items-center gap-3 sm:gap-6 md:gap-8 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em]">
          <a href="#ranges" className="hover:text-gold transition">Kitchens</a>
          <a href="#bedrooms-range" className="hover:text-gold transition">Bedrooms</a>
        </div>
        <a href="#top" className="font-serif text-2xl md:text-3xl tracking-tight">
          JFS<span className="text-gold">.</span>
        </a>
        <div className="flex items-center gap-3 sm:gap-6 md:gap-8 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em]">
          <a href="#reviews" className="hidden md:inline hover:text-gold transition">Reviews</a>
          <a href="#contact" className="hover:text-gold transition">Book a Visit</a>
          <a href={PHONE_HREF} className="hidden md:inline-flex hover:text-gold transition items-center gap-2"><PhoneIcon />Call</a>
        </div>
      </div>
    </header>
  );
}

function MenuIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6h18M3 12h18M3 18h18" /></svg>;
}
function PhoneIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.6c0-.9.25-1.5 1.55-1.5H16.5V4.4c-.3 0-1.25-.1-2.35-.1-2.35 0-3.95 1.4-3.95 4v2.2H7.7v3h2.5V21h3.3z" />
    </svg>
  );
}

/* ---------------- INTRO ---------------- */
function Intro() {
  return (
    <section id="intro" className="px-6 md:px-12 pt-24 pb-20 text-center max-w-4xl mx-auto">
      <span className="text-[10px] uppercase tracking-[0.4em] text-[color:var(--royal)]">Welcome to {BRAND}</span>
      <h2 className="font-serif text-4xl md:text-6xl leading-tight mt-6">
        Interiors of <em className="text-[color:var(--forest)]">quiet distinction</em>,<br />
        made for the way you live.
      </h2>
      <p className="mt-8 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
        At JFS, exceptional interiors begin with precision, craftsmanship and a commitment to truly bespoke design. From floor‑to‑ceiling fitted wardrobes and elegantly tailored dressing rooms to hand‑finished designer kitchens, every installation is meticulously measured, thoughtfully designed and expertly fitted by our dedicated in‑house specialists operating across the UK.
        <br /><br />
        With a decade of experience and an unwavering attention to detail, we create made‑to‑measure solutions that enhance the way you live. Our process blends innovative design, premium materials and seamless project delivery, ensuring each space feels refined, functional and uniquely yours.
        <br /><br />
        Whether you’re transforming a single room or envisioning a complete interior redesign, JFS brings together expertise, creativity and a client‑focused approach to deliver interiors that elevate your home.
      </p>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
const services = [
  { n: "01", tag: "Bedrooms", title: "Fitted Wardrobes", img: bedroomHeroA,
    desc: "Wall-to-wall wardrobes tailored to the exact geometry of your room, with bespoke internals and integrated lighting." },
  { n: "02", tag: "Kitchens", title: "Designer Kitchens", img: serviceKitchen,
    desc: "Hand-finished cabinetry, considered hardware and premium surfaces — shaker to handleless contemporary." },
  { n: "03", tag: "Living", title: "Studies & Storage", img: serviceStudy,
    desc: "Built-in desks, bookcases and bespoke storage designed around the way you work and live." },
];

function Services() {
  return (
    <section id="services" className="bg-[color:var(--forest)] text-cream px-6 md:px-12 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold">Our Craft</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">Three disciplines, <em>one workshop.</em></h2>
          </div>
          <p className="max-w-sm text-sm text-cream/70 leading-relaxed">
            Every project is handled in-house — from initial home survey and 3D design through to hand-finished installation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <article key={s.n} className="group flex flex-col">
              <div className="relative overflow-hidden mb-6">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-[color:var(--forest-deep)]/80 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-gold border border-gold/30">
                  {s.tag}
                </div>
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-serif italic text-gold text-xl">{s.n}</span>
                <div className="h-px flex-1 bg-cream/20" />
              </div>
              <h3 className="font-serif text-2xl mb-3">{s.title}</h3>
              <p className="text-sm text-cream/70 leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- RANGES / GALLERY ---------------- */
const ranges = [
  { slug: "kitchens", name: "Kitchens", tag: "Designer Kitchens", img: serviceKitchen },
  { slug: "bedrooms", name: "Bedrooms", tag: "Fitted Wardrobes", img: bedroomHeroB },
  { slug: "living", name: "Living", tag: "Studies & Storage", img: serviceStudy },
];

function Ranges() {
  return (
    <section id="ranges" className="px-6 md:px-12 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-[color:var(--royal)]">Our Portfolio</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">A curated portfolio.</h2>
          </div>
          <a href={PHONE_HREF} className="text-[11px] uppercase tracking-[0.25em] underline underline-offset-8 decoration-gold hover:text-[color:var(--forest)] transition">
            Request full portfolio
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ranges.map((r) => (
            <Link to="/ranges/$rangeId" params={{ rangeId: r.slug }} key={r.name} className="group block relative overflow-hidden">
              <img src={r.img} alt={r.name} loading="lazy" className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--forest-deep)]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6 text-cream">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold">{r.tag}</span>
                <h3 className="font-serif text-3xl italic mt-1">{r.name}</h3>
                <div className="mt-3 h-px w-8 bg-gold group-hover:w-16 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
const steps = [
  { n: "01", title: "Home Survey", body: "We visit, measure precisely and listen to how you want to live in the space." },
  { n: "02", title: "3D Design", body: "Our designer presents detailed visuals and a transparent, no-obligation quote." },
  { n: "03", title: "Hand Build", body: "We craft your furniture using premium materials and quality hardware." },
  { n: "04", title: "Installation", body: "Our fitters install with precision — and leave your home immaculate." },
];

function Process() {
  return (
    <section id="process" className="relative px-6 md:px-12 py-24 bg-[color:var(--royal)] text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-2xl mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">Our Process</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">From first sketch to <em>soft-close.</em></h2>
        </div>
        <div className="grid md:grid-cols-4 gap-10">
          {steps.map((s) => (
            <div key={s.n}>
              <div className="font-serif italic text-gold text-3xl mb-4">{s.n}</div>
              <div className="h-px w-full bg-cream/25 mb-5" />
              <h3 className="font-serif text-xl mb-3">{s.title}</h3>
              <p className="text-sm text-cream/75 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const reviews = [
  { quote: "Great price, quality and workmanship. Highly recommend.", name: "Google Review" },
  { quote: "I recommend this company — they give 5-star service.", name: "Google Review" },
  { quote: "Plenty of options to choose from. Awesomely done kitchen.", name: "Google Review" },
];

function Testimonials() {
  return (
    <section id="reviews" className="px-6 md:px-12 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="text-gold text-xl tracking-tighter mb-4">★★★★★</div>
          <h2 className="font-serif text-4xl leading-tight">Trusted across the <em>UK</em>.</h2>
          <p className="mt-6 text-sm text-muted-foreground">Rated 4.9 out of 5 across 56 verified Google reviews.</p>
          <div className="mt-8 inline-flex items-baseline gap-3">
            <span className="font-serif text-6xl text-[color:var(--forest)]">4.9</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Average Google rating</span>
          </div>
        </div>
        <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <blockquote key={i} className="bg-secondary p-8 border-l-2 border-gold flex flex-col justify-between">
              <p className="font-serif text-xl italic leading-snug mb-6">"{r.quote}"</p>
              <cite className="text-[10px] uppercase tracking-[0.3em] not-italic text-muted-foreground">— {r.name}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section id="contact" className="bg-[color:var(--forest-deep)] text-cream px-6 md:px-12 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">Get in touch</span>
          <h2 className="font-serif text-5xl md:text-6xl mt-4 mb-8">Start your <em>project.</em></h2>
          <p className="text-cream/70 max-w-md leading-relaxed mb-12">
            We offer free no-obligation home surveys across the UK.
            Call, message or book a visit — we'll bring the swatches.
          </p>
          <div className="space-y-6">
            <Row label="Visit" value="67 Cove Road Farnborough GU14 0EX" />
            <Row label="Call" value={PHONE} href={PHONE_HREF} />
            <Row label="Hours" value="Mon–Sat · 09:00 – 18:00" />
            <div className="flex items-start gap-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold pt-2 w-16 shrink-0">Social</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/therangebedrooms?igsh=MXFqeWExa3M4czh2Yw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 flex items-center justify-center border border-gold/40 text-cream hover:bg-gold hover:text-[color:var(--forest-deep)] transition"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.facebook.com/therangebedrooms"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 flex items-center justify-center border border-gold/40 text-cream hover:bg-gold hover:text-[color:var(--forest-deep)] transition"
                >
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        <CallbackForm />
      </div>
    </section>
  );
}

const WHATSAPP_NUMBER = "447412569827";

function CallbackForm() {
  const [form, setForm] = useState({ name: "", phone: "", project: "", message: "" });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      "New callback request — JFS Home Interiors",
      `Name: ${form.name || "—"}`,
      `Phone: ${form.phone || "—"}`,
      `Project: ${form.project || "—"}`,
      `Message: ${form.message || "—"}`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-cream/5 border border-gold/20 p-8 md:p-10 space-y-6">
      <h3 className="font-serif text-2xl mb-2">Request a callback</h3>
      <Field label="Name" name="name" type="text" value={form.name} onChange={update("name")} />
      <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={update("phone")} />
      <Field label="Project" name="project" type="text" placeholder="Fitted wardrobe, kitchen…" value={form.project} onChange={update("project")} />
      <div className="space-y-2">
        <label htmlFor="message" className="text-[10px] uppercase tracking-[0.3em] text-cream/60">Message</label>
        <textarea id="message" name="message" rows={4} value={form.message} onChange={update("message")}
          className="w-full bg-transparent border-b border-cream/25 focus:border-gold outline-none py-3 text-sm resize-none" />
      </div>
      <button type="submit" className="w-full bg-gold text-[color:var(--forest-deep)] py-4 text-[11px] font-medium uppercase tracking-[0.3em] hover:brightness-110 transition">
        Send request via WhatsApp
      </button>
    </form>
  );
}

function Row({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = href ? <a href={href} className="text-lg hover:text-gold transition">{value}</a> : <span className="text-lg">{value}</span>;
  return (
    <div className="flex items-start gap-6">
      <span className="text-[10px] uppercase tracking-[0.3em] text-gold pt-1.5 w-16 shrink-0">{label}</span>
      {inner}
    </div>
  );
}

function Field({ label, name, type, placeholder, value, onChange }: { label: string; name: string; type: string; placeholder?: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-[10px] uppercase tracking-[0.3em] text-cream/60">{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} value={value} onChange={onChange}
        className="w-full bg-transparent border-b border-cream/25 focus:border-gold outline-none py-3 text-sm placeholder:text-cream/30" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[color:var(--forest-deep)] text-cream/70 border-t border-cream/10 px-6 md:px-12 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em]">
        <span className="font-serif text-lg normal-case tracking-tight text-cream">JFS <em className="text-gold">Home Interiors</em></span>
        <span>© {new Date().getFullYear()} · UK</span>
      </div>
    </footer>
  );
}
