import { useState, useEffect } from "react";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

function img(path: string) {
  return `${BASE}/${path}`;
}

export default function App() {
  return (
    <div className="min-h-screen text-dark selection:bg-gold selection:text-white" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <FeaturedProducts />
        <About />
        <Process />
        <CustomOrders />
        <Testimonials />
        <Gallery />
        <FAQ />
        <CTASection />
        <ContactBar />
      </main>
      <Footer />
    </div>
  );
}

/* ===================== HEADER ===================== */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#" },
    { label: "Shop", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Custom", href: "#custom" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50"
      style={{
        backgroundColor: scrolled ? "rgba(15,10,5,0.97)" : "rgba(15,10,5,0.92)",
        backdropFilter: "blur(14px)",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "0 2px 12px rgba(0,0,0,0.3)",
        transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
        borderBottom: "1px solid rgba(212,175,55,0.12)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight" style={{ color: "#FDF8F0" }}>
          Pup<span style={{ color: "#D4AF37" }}>life</span><span style={{ color: "#D4AF37" }}>.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="relative font-medium text-[15px] group"
                  style={{ color: "rgba(253,248,240,0.85)", transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AF37")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(253,248,240,0.85)")}
                >
                  {l.label}
                  <span
                    className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full"
                    style={{ background: "#D4AF37", transition: "width 0.3s" }}
                  />
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-full font-semibold text-[15px]"
                style={{
                  background: "#D4AF37",
                  color: "#0F0A05",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#FDF8F0";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#D4AF37";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-7 rounded-full"
              style={{
                height: "3px",
                background: "#D4AF37",
                transition: "all 0.3s",
                transform:
                  i === 0 && menuOpen ? "rotate(45deg) translate(6px,6px)" :
                  i === 1 && menuOpen ? "scaleX(0)" :
                  i === 2 && menuOpen ? "rotate(-45deg) translate(6px,-6px)" :
                  "none",
                opacity: i === 1 && menuOpen ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          maxHeight: menuOpen ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
          background: "rgba(15,10,5,0.98)",
          borderTop: menuOpen ? "1px solid rgba(212,175,55,0.15)" : "none",
        }}
      >
        <div className="flex flex-col items-center gap-5 py-6 text-lg font-medium" style={{ color: "#FDF8F0" }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{ color: "rgba(253,248,240,0.85)" }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="px-8 py-3 rounded-full font-semibold" style={{ background: "#D4AF37", color: "#0F0A05" }}>
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

/* ===================== HERO ===================== */
function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingTop: "140px",
        paddingBottom: "120px",
        background: "#0F0A05",
        backgroundImage: `
          radial-gradient(ellipse 80% 60% at 60% 50%, rgba(212,175,55,0.07) 0%, transparent 70%),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 0h60v60H0z' fill='%230F0A05'/%3E%3Ccircle cx='30' cy='30' r='1' fill='rgba(212,175,55,0.08)'/%3E%3Ccircle cx='0' cy='0' r='1' fill='rgba(212,175,55,0.06)'/%3E%3Ccircle cx='60' cy='60' r='1' fill='rgba(212,175,55,0.06)'/%3E%3C/svg%3E")
        `,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <span
            className="inline-block px-4 py-1.5 rounded-full font-semibold text-[13px] uppercase tracking-widest mb-6"
            style={{ background: "rgba(212,175,55,0.15)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.3)" }}
          >
            🐾 Premium Pup Play Gear
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] mb-6" style={{ color: "#FDF8F0" }}>
            Gear Crafted for the{" "}
            <span className="relative inline-block" style={{ color: "#D4AF37" }}>
              Pack
              <span className="absolute bottom-1 left-0 w-full h-2 rounded-full" style={{ background: "rgba(212,175,55,0.2)" }} />
            </span>
          </h1>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: "rgba(253,248,240,0.7)" }}>
            Handcrafted hoods, harnesses, collars, and accessories made for the human pup play community. Premium materials. Bold designs. Custom to your style.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-block px-8 py-4 rounded-full font-semibold"
              style={{ background: "#D4AF37", color: "#0F0A05", transition: "all 0.3s", boxShadow: "0 8px 32px rgba(212,175,55,0.3)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#FDF8F0"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#D4AF37"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Explore the Collection →
            </a>
            <a
              href="#custom"
              className="inline-block px-8 py-4 rounded-full font-semibold"
              style={{ background: "transparent", color: "#FDF8F0", border: "2px solid rgba(253,248,240,0.4)", transition: "all 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#D4AF37"; e.currentTarget.style.color = "#D4AF37"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(253,248,240,0.4)"; e.currentTarget.style.color = "#FDF8F0"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Custom Orders
            </a>
          </div>
        </div>

        <div
          className="rounded-2xl overflow-hidden"
          style={{
            transform: "perspective(1000px) rotateY(-3deg)",
            transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.15)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "perspective(1000px) rotateY(0deg)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "perspective(1000px) rotateY(-3deg)")}
        >
          <img src={img("hood-purple-silver.jpeg")} alt="Premium Pup Hood – Purple & Silver" className="w-full object-cover" style={{ height: "480px" }} />
        </div>
      </div>
    </section>
  );
}

/* ===================== TRUST BAR ===================== */
function TrustBar() {
  const items = [
    { icon: "✦", label: "100% Handcrafted" },
    { icon: "◈", label: "Premium Neoprene & Leather" },
    { icon: "✈", label: "Worldwide Shipping" },
    { icon: "◉", label: "Custom Colourways" },
  ];
  return (
    <div style={{ background: "#D4AF37", color: "#0F0A05", padding: "20px 24px" }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold uppercase tracking-wider">
        {items.map((it) => (
          <div key={it.label} className="flex items-center justify-center gap-2">
            <span className="text-base">{it.icon}</span> {it.label}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===================== FEATURED PRODUCTS ===================== */
const PRODUCTS = [
  {
    img: "hood-red-gold.jpeg",
    name: "Pup Hoods",
    desc: "Full neoprene hoods with metal accents — available in 8+ bold colourways",
    tag: "Bestseller",
  },
  {
    img: "collar-red.jpeg",
    name: "Pup Collars",
    desc: "Wide padded collars with stainless steel hardware, built for style and safety",
    tag: "Essential",
  },
  {
    img: "harness-yellow.jpeg",
    name: "Body Harnesses",
    desc: "Adjustable full-body harnesses with D-rings and quick-release buckles",
    tag: "Featured",
  },
  {
    img: "paw-gloves.jpeg",
    name: "Paw Mitts",
    desc: "Plush faux-fur paw mitts with padded palms for hands-free play",
    tag: "Popular",
  },
  {
    img: "kneepads.jpeg",
    name: "Knee Pads",
    desc: "High-density foam knee pads wrapped in durable neoprene — stay protected",
    tag: "Protective",
  },
  {
    img: "collar-harness-set.jpeg",
    name: "Collar + Harness Set",
    desc: "Matching collar and harness sets — the complete pup play starter kit",
    tag: "Set",
  },
];

function FeaturedProducts() {
  return (
    <section
      id="products"
      style={{
        padding: "100px 24px",
        background: "#100C06",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%23100C06'/%3E%3Cpath d='M0 20h40M20 0v40' stroke='rgba(212,175,55,0.05)' stroke-width='0.5'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full font-semibold text-[13px] uppercase tracking-widest mb-4"
            style={{ background: "rgba(212,175,55,0.1)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.25)" }}
          >
            The Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#FDF8F0" }}>
            Premium <span style={{ color: "#D4AF37" }}>Pup Gear</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(253,248,240,0.6)" }}>
            Every piece is designed for the human pup play community — bold, durable, and built to perform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ img: imgPath, name, desc, tag }: { img: string; name: string; desc: string; tag: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#1A1208",
        borderRadius: "16px",
        overflow: "hidden",
        border: hovered ? "1px solid rgba(212,175,55,0.5)" : "1px solid rgba(212,175,55,0.1)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered ? "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.2)" : "0 4px 20px rgba(0,0,0,0.4)",
        transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <div className="relative overflow-hidden" style={{ height: "280px" }}>
        <img
          src={img(imgPath)}
          alt={name}
          className="w-full h-full object-cover"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)", transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)" }}
        />
        <span
          className="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider"
          style={{ background: "#D4AF37", color: "#0F0A05" }}
        >
          {tag}
        </span>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold mb-2" style={{ color: "#FDF8F0" }}>{name}</h3>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(253,248,240,0.6)" }}>{desc}</p>
        <a
          href="#custom"
          className="inline-block mt-5 px-6 py-2.5 rounded-full text-sm font-semibold"
          style={{
            background: hovered ? "#D4AF37" : "transparent",
            color: hovered ? "#0F0A05" : "#D4AF37",
            border: "1px solid rgba(212,175,55,0.5)",
            transition: "all 0.3s",
          }}
        >
          Order Now
        </a>
      </div>
    </div>
  );
}

/* ===================== ABOUT ===================== */
function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 24px",
        background: "#0F0A05",
        backgroundImage: `
          radial-gradient(ellipse 60% 80% at 10% 50%, rgba(212,175,55,0.05) 0%, transparent 70%),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect width='60' height='60' fill='none'/%3E%3Ccircle cx='30' cy='30' r='0.8' fill='rgba(212,175,55,0.07)'/%3E%3C/svg%3E")
        `,
      }}
    >
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div
          className="rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.1)" }}
        >
          <img src={img("collar-harness-set.jpeg")} alt="Collar and Harness Set" className="w-full object-cover" style={{ height: "440px" }} />
        </div>
        <div>
          <span
            className="inline-block px-4 py-1.5 rounded-full font-semibold text-[13px] uppercase tracking-widest mb-5"
            style={{ background: "rgba(212,175,55,0.1)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.25)" }}
          >
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "#FDF8F0" }}>
            Built for the <span style={{ color: "#D4AF37" }}>Community</span>
          </h2>
          <p className="text-[17px] leading-relaxed mb-5" style={{ color: "rgba(253,248,240,0.7)" }}>
            Puplife was created by and for the human pup play community. We design and handcraft every piece of gear with the pup in mind — durable enough for play, expressive enough to represent your identity.
          </p>
          <p className="text-[17px] leading-relaxed mb-8" style={{ color: "rgba(253,248,240,0.7)" }}>
            From custom colourway hoods to matching collar and harness sets, every item starts with your vision. We make it real with premium neoprene, leather, and stainless steel hardware.
          </p>
          <a
            href="#custom"
            className="inline-block px-8 py-4 rounded-full font-semibold"
            style={{ background: "#D4AF37", color: "#0F0A05", transition: "all 0.3s", boxShadow: "0 8px 24px rgba(212,175,55,0.3)" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(212,175,55,0.4)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(212,175,55,0.3)"; }}
          >
            Start a Custom Order →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ===================== PROCESS ===================== */
const STEPS = [
  { num: "01", title: "Choose Your Style", desc: "Pick your hood type, collar width, harness style, and colourway from our options." },
  { num: "02", title: "We Handcraft It", desc: "Skilled artisans cut, stitch, and assemble each piece from premium neoprene and leather." },
  { num: "03", title: "Quality Checked", desc: "Every seam, buckle, and snap is inspected before it leaves our workshop." },
  { num: "04", title: "Shipped to You", desc: "Discreetly packed and shipped worldwide — fast, safe, and tracked." },
];

function Process() {
  return (
    <section
      style={{
        padding: "100px 24px",
        background: "#130E07",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect width='80' height='80' fill='none'/%3E%3Cpath d='M0 40h80M40 0v80' stroke='rgba(212,175,55,0.04)' stroke-width='1'/%3E%3Ccircle cx='40' cy='40' r='1.5' fill='rgba(212,175,55,0.06)'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full font-semibold text-[13px] uppercase tracking-widest mb-4"
            style={{ background: "rgba(212,175,55,0.1)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.25)" }}
          >
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#FDF8F0" }}>
            Our <span style={{ color: "#D4AF37" }}>Process</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {STEPS.map((s, i) => (
            <StepCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="text-center p-8 rounded-2xl"
      style={{
        background: "#1A1208",
        border: hovered ? "1px solid rgba(212,175,55,0.5)" : "1px solid rgba(212,175,55,0.08)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 50px rgba(0,0,0,0.5)" : "none",
        transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-black mx-auto mb-5"
        style={{ background: "#D4AF37", color: "#0F0A05" }}
      >
        {num}
      </div>
      <h3 className="text-lg font-bold mb-3" style={{ color: "#FDF8F0" }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(253,248,240,0.6)" }}>{desc}</p>
    </div>
  );
}

/* ===================== CUSTOM ORDERS ===================== */
function CustomOrders() {
  return (
    <section
      id="custom"
      style={{
        padding: "100px 24px",
        background: "#0F0A05",
      }}
    >
      <div
        className="max-w-[720px] mx-auto text-center p-14 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, #1A1208, #221605)",
          border: "1px solid rgba(212,175,55,0.25)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(212,175,55,0.1)",
        }}
      >
        <span
          className="inline-block px-4 py-1.5 rounded-full font-semibold text-[13px] uppercase tracking-widest mb-5"
          style={{ background: "rgba(212,175,55,0.1)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.3)" }}
        >
          Custom Orders
        </span>
        <h2 className="text-4xl font-bold mb-5" style={{ color: "#FDF8F0" }}>
          Design Your <span style={{ color: "#D4AF37" }}>Own Gear</span>
        </h2>
        <p className="text-[17px] leading-relaxed mb-4" style={{ color: "rgba(253,248,240,0.7)" }}>
          Want a specific colourway, sizing, or combination that isn't in the shop? We take custom orders every month. Pick your hood style, choose your colours, and we'll handcraft it exclusively for you.
        </p>
        <p className="text-[17px] mb-8" style={{ color: "rgba(253,248,240,0.7)" }}>
          <strong style={{ color: "#D4AF37" }}>Let's build something just for you.</strong>
        </p>
        <a
          href="mailto:jakiemarson104@gmail.com"
          className="inline-block px-10 py-4 rounded-full font-semibold text-[17px]"
          style={{ background: "#D4AF37", color: "#0F0A05", transition: "all 0.3s", boxShadow: "0 8px 32px rgba(212,175,55,0.35)" }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(212,175,55,0.5)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(212,175,55,0.35)"; }}
        >
          Start Your Custom Order →
        </a>
      </div>
    </section>
  );
}

/* ===================== TESTIMONIALS ===================== */
function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div className="flex gap-0.5 mb-4">
      {Array(full).fill(0).map((_, i) => (
        <span key={`f${i}`} style={{ color: "#D4AF37", fontSize: "18px" }}>★</span>
      ))}
      {half && <span style={{ color: "#D4AF37", fontSize: "18px" }}>½</span>}
      {Array(empty).fill(0).map((_, i) => (
        <span key={`e${i}`} style={{ color: "rgba(212,175,55,0.25)", fontSize: "18px" }}>★</span>
      ))}
      <span className="ml-2 text-sm font-semibold" style={{ color: "rgba(253,248,240,0.5)" }}>{rating}/5</span>
    </div>
  );
}

const REVIEWS = [
  {
    quote: "The custom hood I ordered is absolutely incredible. The neoprene is top quality and the colours are exactly what I wanted. Got so many compliments at my first mosh!",
    name: "Alex M.",
    role: "Pup Alpha",
    rating: 5,
  },
  {
    quote: "Best harness I've owned. The stitching is immaculate and it fits perfectly even with my custom measurements. Fast shipping too — would recommend to the whole pack.",
    name: "Jamie R.",
    role: "Pup Enthusiast",
    rating: 5,
  },
  {
    quote: "Really happy with my collar and harness set. The build quality is solid and the sizing guide was spot on. Only minor thing was the wait time but worth it for custom work.",
    name: "Chris T.",
    role: "Verified Buyer",
    rating: 4,
  },
  {
    quote: "The paw mitts are so well made — plush, padded, and actually durable. Shipping was discreet and fast. Would love even more colour options in the future!",
    name: "Morgan K.",
    role: "Happy Pup",
    rating: 4.5,
  },
  {
    quote: "Ordered the red/black hood and it looks even better in person. Craftsmanship is top tier. Had a small sizing question and got a fast, helpful reply. Very satisfied.",
    name: "Sam D.",
    role: "Returning Customer",
    rating: 4.5,
  },
  {
    quote: "Good quality gear and genuinely unique designs you can't find anywhere else. The neon green cyber hood is a statement piece. Delivery took a bit longer than expected but no complaints.",
    name: "Riley B.",
    role: "First-Time Buyer",
    rating: 4,
  },
];

function Testimonials() {
  return (
    <section style={{ padding: "100px 24px", background: "#130E07" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full font-semibold text-[13px] uppercase tracking-widest mb-4"
            style={{ background: "rgba(212,175,55,0.1)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.25)" }}
          >
            Love Notes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#FDF8F0" }}>
            Happy <span style={{ color: "#D4AF37" }}>Customers</span>
          </h2>
          <p className="mt-3 text-[15px]" style={{ color: "rgba(253,248,240,0.5)" }}>Real reviews from the pack</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <TestimonialCard key={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, name, role, rating }: { quote: string; name: string; role: string; rating: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="p-8 rounded-2xl flex flex-col"
      style={{
        background: "#1A1208",
        border: hovered ? "1px solid rgba(212,175,55,0.4)" : "1px solid rgba(212,175,55,0.1)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 24px 60px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.3)",
        transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <StarRating rating={rating} />
      <p className="text-[16px] italic leading-relaxed flex-1 mb-6" style={{ color: "rgba(253,248,240,0.75)" }}>
        "{quote}"
      </p>
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-black text-[15px]"
          style={{ background: "#D4AF37", color: "#0F0A05" }}
        >
          {name[0]}
        </div>
        <div>
          <h4 className="font-bold text-[15px]" style={{ color: "#FDF8F0" }}>{name}</h4>
          <span className="text-xs" style={{ color: "rgba(212,175,55,0.8)" }}>{role}</span>
        </div>
      </div>
    </div>
  );
}

/* ===================== GALLERY ===================== */
const GALLERY = [
  { src: "hood-purple-silver.jpeg", alt: "Purple & Silver Hood" },
  { src: "hood-red-gold.jpeg", alt: "Red & Gold Hood" },
  { src: "hood-brown-green.jpeg", alt: "Brown & Green Distressed Hood" },
  { src: "hood-neon-green.jpeg", alt: "Neon Cyber Hood" },
  { src: "hood-blue-black.jpeg", alt: "Blue & Black Hood" },
  { src: "hood-black-purple.jpeg", alt: "Black & Purple Hood" },
  { src: "hood-red-black.jpeg", alt: "Red & Black Hood" },
  { src: "collar-red.jpeg", alt: "Red Padded Collar" },
  { src: "collar-blue.jpeg", alt: "Blue Collar" },
  { src: "collar-black.jpeg", alt: "Black Collar" },
  { src: "harness-yellow.jpeg", alt: "Yellow Harness" },
  { src: "harness-blue.jpeg", alt: "Blue Harness" },
  { src: "harness-black-red.jpeg", alt: "Black & Red Harness" },
  { src: "harness-red.jpeg", alt: "Red Harness" },
  { src: "paw-gloves.jpeg", alt: "Faux Fur Paw Mitts" },
  { src: "kneepads.jpeg", alt: "Protective Knee Pads" },
];

function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      style={{
        padding: "100px 24px",
        background: "#100C06",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%23100C06'/%3E%3Cpath d='M0 20h40M20 0v40' stroke='rgba(212,175,55,0.04)' stroke-width='0.5'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full font-semibold text-[13px] uppercase tracking-widest mb-4"
            style={{ background: "rgba(212,175,55,0.1)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.25)" }}
          >
            Lookbook
          </span>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#FDF8F0" }}>
            Style <span style={{ color: "#D4AF37" }}>Gallery</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {GALLERY.map((g, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden cursor-pointer"
              style={{
                transform: active === g.src ? "scale(1.04)" : "scale(1)",
                boxShadow: active === g.src ? "0 16px 48px rgba(0,0,0,0.6), 0 0 0 2px rgba(212,175,55,0.5)" : "0 4px 16px rgba(0,0,0,0.4)",
                transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
              onMouseEnter={() => setActive(g.src)}
              onMouseLeave={() => setActive(null)}
            >
              <img src={img(g.src)} alt={g.alt} className="w-full object-cover" style={{ height: "200px" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== FAQ ===================== */
const FAQS = [
  { q: "What materials do you use?", a: "We use premium neoprene, genuine and synthetic leather, and stainless steel hardware. All materials are skin-safe, durable, and built for active use." },
  { q: "How do I measure for a custom hood or collar?", a: "We'll email you a simple measuring guide after you contact us. Just a tape measure and two measurements — that's it." },
  { q: "Can I choose my own colourway?", a: "Absolutely. Custom colourways are our speciality. Send us your ideas and we'll work with you to design the perfect combination." },
  { q: "Do you ship discreetly?", a: "Yes, always. All orders are shipped in plain, unmarked packaging with no indication of the contents on the outside." },
  { q: "What's your turnaround time on custom orders?", a: "Custom pieces typically take 2–4 weeks depending on complexity and current order volume. We'll give you a realistic timeline upfront." },
  { q: "What's your return policy?", a: "If something isn't right, reach out within 14 days. We'll work with you to fix it — we stand behind every piece we make." },
];

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      style={{ padding: "100px 24px", background: "#0F0A05" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full font-semibold text-[13px] uppercase tracking-widest mb-4"
            style={{ background: "rgba(212,175,55,0.1)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.25)" }}
          >
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#FDF8F0" }}>
            Common <span style={{ color: "#D4AF37" }}>Questions</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-[1000px] mx-auto">
          {FAQS.map((faq, i) => {
            const open = openIdx === i;
            return (
              <div
                key={i}
                className="rounded-xl cursor-pointer p-6"
                style={{
                  background: "#1A1208",
                  border: open ? "1px solid rgba(212,175,55,0.5)" : "1px solid rgba(212,175,55,0.08)",
                  transition: "all 0.3s",
                }}
                onClick={() => setOpenIdx(open ? null : i)}
              >
                <div className="flex justify-between items-center" style={{ color: "#FDF8F0" }}>
                  <span className="font-bold text-[16px] pr-4">{faq.q}</span>
                  <span
                    className="text-2xl flex-shrink-0 font-light"
                    style={{
                      color: "#D4AF37",
                      transform: open ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.3s",
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </div>
                <div
                  style={{
                    maxHeight: open ? "200px" : "0",
                    overflow: "hidden",
                    opacity: open ? 1 : 0,
                    marginTop: open ? "12px" : "0",
                    transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                    color: "rgba(253,248,240,0.65)",
                    fontSize: "15px",
                    lineHeight: "1.7",
                  }}
                >
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ===================== CTA ===================== */
function CTASection() {
  return (
    <section
      id="contact"
      className="text-center relative overflow-hidden"
      style={{
        padding: "100px 24px",
        background: "linear-gradient(135deg, #1A1208, #100C06)",
        borderTop: "1px solid rgba(212,175,55,0.15)",
      }}
    >
      <div
        className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.08), transparent 65%)" }}
      />
      <div
        className="absolute -bottom-1/2 -left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.05), transparent 65%)" }}
      />
      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-5" style={{ color: "#FDF8F0" }}>
          Ready to Join the <span style={{ color: "#D4AF37" }}>Pack?</span>
        </h2>
        <p className="text-lg mb-10" style={{ color: "rgba(253,248,240,0.7)" }}>
          Browse the collection, ask questions, or start designing your custom gear today.
        </p>
        <a
          href="mailto:jakiemarson104@gmail.com"
          className="inline-block px-12 py-5 rounded-full font-bold text-lg"
          style={{ background: "#D4AF37", color: "#0F0A05", transition: "all 0.3s", boxShadow: "0 12px 40px rgba(212,175,55,0.4)" }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(212,175,55,0.55)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(212,175,55,0.4)"; }}
        >
          Get in Touch →
        </a>
      </div>
    </section>
  );
}

/* ===================== CONTACT BAR ===================== */
function ContactBar() {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #1A1208, #221A08, #1A1208)",
        borderTop: "1px solid rgba(212,175,55,0.2)",
        borderBottom: "1px solid rgba(212,175,55,0.2)",
        padding: "40px 24px",
      }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(212,175,55,0.7)" }}>Have a question or want to order?</p>
          <p className="text-2xl font-black" style={{ color: "#FDF8F0" }}>Get in touch with us directly</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="mailto:jakiemarson104@gmail.com"
            className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg"
            style={{ background: "#D4AF37", color: "#0F0A05", transition: "all 0.3s", boxShadow: "0 8px 32px rgba(212,175,55,0.35)", whiteSpace: "nowrap" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(212,175,55,0.5)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(212,175,55,0.35)"; }}
          >
            ✉ jakiemarson104@gmail.com
          </a>
          <a
            href="https://discord.com"
            className="px-6 py-4 rounded-full font-semibold text-base"
            style={{ border: "1px solid rgba(212,175,55,0.4)", color: "#D4AF37", transition: "all 0.3s", whiteSpace: "nowrap" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#D4AF37"; e.currentTarget.style.background = "rgba(212,175,55,0.1)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(212,175,55,0.4)"; e.currentTarget.style.background = "transparent"; }}
          >
            Discord: jakiemarson
          </a>
        </div>
      </div>
    </div>
  );
}

/* ===================== FOOTER ===================== */
function Footer() {
  return (
    <footer style={{ background: "#080501", color: "#FDF8F0", padding: "64px 24px 32px", borderTop: "1px solid rgba(212,175,55,0.1)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight mb-4">
              Pup<span style={{ color: "#D4AF37" }}>life</span><span style={{ color: "#D4AF37" }}>.</span>
            </h3>
            <p className="text-[15px] max-w-[280px] leading-relaxed" style={{ color: "rgba(253,248,240,0.6)" }}>
              Premium human pup play gear — handcrafted with pride for the pack.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5" style={{ color: "#D4AF37" }}>Quick Links</h4>
            <ul className="space-y-3 text-[15px]">
              {[
                { label: "Shop Collection", href: "#products" },
                { label: "Our Story", href: "#about" },
                { label: "Custom Orders", href: "#custom" },
                { label: "Style Gallery", href: "#gallery" },
                { label: "FAQ", href: "#faq" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    style={{ color: "rgba(253,248,240,0.65)", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AF37")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(253,248,240,0.65)")}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5" style={{ color: "#D4AF37" }}>Get In Touch</h4>
            <div className="space-y-3 text-[15px]" style={{ color: "rgba(253,248,240,0.65)" }}>
              <a
                href="mailto:jakiemarson104@gmail.com"
                style={{ display: "block", color: "rgba(253,248,240,0.65)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AF37")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(253,248,240,0.65)")}
              >
                jakiemarson104@gmail.com
              </a>
              <p>Discord: <strong style={{ color: "rgba(253,248,240,0.9)" }}>jakiemarson</strong></p>
            </div>
          </div>
        </div>

        <div
          className="text-center text-sm"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px", color: "rgba(253,248,240,0.4)" }}
        >
          © 2025 Puplife. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
