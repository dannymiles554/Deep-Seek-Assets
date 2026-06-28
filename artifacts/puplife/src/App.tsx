import { useState, useEffect } from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-cream selection:bg-gold selection:text-white">
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
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all-custom ${
        scrolled ? "py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" : "py-4 shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
      }`}
      style={{ backgroundColor: "rgba(253, 248, 240, 0.95)", backdropFilter: "blur(10px)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-2xl font-extrabold text-forest tracking-tight">
          Puplife<span className="text-gold">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 font-medium text-[15px]">
            <li>
              <a href="#" className="hover:text-forest transition-all-custom relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-forest transition-all-custom relative group">
                Shop
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-forest transition-all-custom relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-forest transition-all-custom relative group">
                Gallery
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#custom" className="hover:text-forest transition-all-custom relative group">
                Custom
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="bg-forest text-white px-6 py-2.5 rounded-full font-semibold hover:bg-gold hover:text-forest transition-all-custom hover:-translate-y-0.5 inline-block"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`w-7 h-[3px] bg-forest rounded-full transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[9px]" : ""}`}></span>
          <span className={`w-7 h-[3px] bg-forest rounded-full transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-7 h-[3px] bg-forest rounded-full transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-cream shadow-normal border-t border-forest/10 p-6 flex flex-col gap-4 md:hidden font-medium text-lg text-center animate-in slide-in-from-top-4">
          <a href="#" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#products" onClick={() => setMobileMenuOpen(false)}>Shop</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
          <a href="#custom" onClick={() => setMobileMenuOpen(false)}>Custom</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-forest font-bold">Contact</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-36 pb-20 px-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--cream), var(--white))" }}>
      {/* Background decoration */}
      <div 
        className="absolute -top-[40%] -right-[20%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212, 175, 55, 0.08), transparent 70%)" }}
      />
      
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="max-w-xl">
          <span className="inline-block bg-gold text-white px-4 py-1.5 rounded-full font-semibold text-[13px] uppercase tracking-wide mb-6">
            Premium Pup Gear
          </span>
          <h1 className="text-5xl md:text-[52px] font-extrabold leading-[1.1] mb-6 text-dark">
            Designed for <span className="text-gold relative">
              Style & Comfort
              <span className="absolute bottom-1 left-0 w-full h-2 bg-gold/20 rounded-full" />
            </span>
          </h1>
          <p className="text-lg text-brown mb-10">
            Handcrafted premium collars, harnesses, and accessories for dogs who deserve the absolute best.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#products" className="bg-forest text-white border-2 border-forest px-8 py-4 rounded-full font-semibold transition-all-custom hover:bg-gold hover:border-gold hover:text-forest hover:-translate-y-1 shadow-normal hover:shadow-hover">
              Explore the Collection →
            </a>
            <a href="#custom" className="bg-transparent text-forest border-2 border-forest px-8 py-4 rounded-full font-semibold transition-all-custom hover:bg-forest hover:text-white hover:-translate-y-1">
              Custom Orders
            </a>
          </div>
        </div>
        
        <div className="rounded-2xl overflow-hidden shadow-hover perspective-tilt transition-all-custom">
          <img 
            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=450&fit=crop" 
            alt="Dog wearing premium gear" 
            className="w-full h-[450px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="bg-forest text-white py-8 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-sm font-medium">
        <div className="flex items-center justify-center gap-3"><span className="text-2xl">❤️</span> 100% Handcrafted</div>
        <div className="flex items-center justify-center gap-3"><span className="text-2xl">⭐</span> Premium Quality</div>
        <div className="flex items-center justify-center gap-3"><span className="text-2xl">📦</span> Free Shipping Worldwide</div>
        <div className="flex items-center justify-center gap-3"><span className="text-2xl">🔄</span> Love It or Return It</div>
      </div>
    </div>
  );
}

function FeaturedProducts() {
  const products = [
    {
      img: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop",
      name: "Classic Collar",
      desc: "Handcrafted leather with gold hardware"
    },
    {
      img: "https://images.unsplash.com/photo-1601758177381-33e976e84b45?w=400&h=300&fit=crop",
      name: "Cozy Harness",
      desc: "Breathable, lightweight, and stylish"
    },
    {
      img: "https://images.unsplash.com/photo-1601758177296-6f1e0fea2a4a?w=400&h=300&fit=crop",
      name: "Pup Bow Tie",
      desc: "Perfect for special occasions"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-cream text-forest px-4 py-1.5 rounded-full font-semibold text-[13px] uppercase tracking-wide mb-3">Collection</span>
          <h2 className="text-4xl font-bold mb-3 text-dark">Featured <span className="text-gold">Pup Gear</span></h2>
          <p className="text-lg text-brown max-w-2xl mx-auto">Designed for style, made for comfort.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={i} className="bg-cream rounded-2xl overflow-hidden border border-gold/15 transition-all-custom hover:-translate-y-2 hover:shadow-hover hover:border-gold">
              <img src={p.img} alt={p.name} className="w-full h-[300px] object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1 text-dark">{p.name}</h3>
                <p className="text-sm text-brown">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-cream px-6">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="rounded-2xl overflow-hidden shadow-normal">
          <img src="https://images.unsplash.com/photo-1601758177296-6f1e0fea2a4a?w=600&h=400&fit=crop" alt="Our Story" className="w-full h-[400px] object-cover" />
        </div>
        <div>
          <span className="inline-block bg-white text-forest px-4 py-1.5 rounded-full font-semibold text-[13px] uppercase tracking-wide mb-3">Our Story</span>
          <h2 className="text-4xl font-bold mb-5 text-dark">Creating Gear <span className="text-gold">with Love</span></h2>
          <p className="text-[17px] text-brown mb-4">
            Puplife was born out of a simple desire: to give our dogs accessories that look as good as they feel. We were tired of generic, uncomfortable pet store gear.
          </p>
          <p className="text-[17px] text-brown mb-8">
            Every piece we create is handcrafted with care using premium materials. We believe every pup deserves to stand out while staying comfortable on every walk.
          </p>
          <a href="#custom" className="text-forest font-bold hover:text-gold transition-colors inline-flex items-center gap-2">
            Custom Orders →
          </a>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { num: "01", title: "Design", desc: "We sketch and plan every detail for maximum comfort and style." },
    { num: "02", title: "Handcraft", desc: "Expert artisans bring the designs to life using premium materials." },
    { num: "03", title: "Quality Check", desc: "Every item is rigorously tested for durability and finish." },
    { num: "04", title: "Delivered", desc: "Packed with love and shipped worldwide to your doorstep." }
  ];

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-cream text-forest px-4 py-1.5 rounded-full font-semibold text-[13px] uppercase tracking-wide mb-3">How It Works</span>
          <h2 className="text-4xl font-bold mb-3 text-dark">Our Process</h2>
          <p className="text-lg text-brown">From design to your doorstep.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="text-center p-8 bg-cream rounded-2xl border border-gray-100 transition-all-custom hover:border-gold hover:shadow-normal hover:-translate-y-1">
              <div className="w-12 h-12 bg-forest text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.num}</div>
              <h3 className="text-lg font-bold mb-2 text-dark">{s.title}</h3>
              <p className="text-sm text-brown">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomOrders() {
  return (
    <section id="custom" className="py-20 bg-cream px-6">
      <div className="max-w-[700px] mx-auto text-center bg-white p-12 rounded-2xl shadow-normal border border-gold/15">
        <span className="inline-block bg-cream text-forest px-4 py-1.5 rounded-full font-semibold text-[13px] uppercase tracking-wide mb-3">Custom Orders</span>
        <h2 className="text-4xl font-bold mb-4 text-dark">Design Your <span className="text-gold">Own</span></h2>
        <p className="text-[17px] text-brown mb-4">
          Want something truly unique? We take a limited number of custom orders each month. Choose your leather, hardware color, and custom sizing.
        </p>
        <p className="text-[17px] text-brown mb-8">
          Let's create something special just for your best friend.
        </p>
        <a href="mailto:jakiemarson104@gmail.com" className="inline-block bg-forest text-white px-8 py-4 rounded-full font-semibold transition-all-custom hover:bg-gold hover:text-forest shadow-normal">
          Start Your Custom Order →
        </a>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      quote: "The craftsmanship is incredible! My pup has never looked so stylish. The custom collar fits perfectly and the leather is incredibly soft. Worth every penny.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      name: "Sarah J.",
      role: "Proud Pup Parent"
    },
    {
      quote: "Finally found a harness that is both beautiful and functional. It doesn't restrict his movement at all. We get compliments on every single walk!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      name: "Michael R.",
      role: "Dog Dad"
    }
  ];

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-cream text-forest px-4 py-1.5 rounded-full font-semibold text-[13px] uppercase tracking-wide mb-3">Love Notes</span>
          <h2 className="text-4xl font-bold text-dark">Happy Pups & Owners</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-cream p-10 rounded-2xl border border-gold/10 shadow-normal transition-all-custom hover:-translate-y-1 hover:shadow-hover">
              <div className="text-gold text-xl mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-[17px] italic text-brown mb-6">"{r.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={r.avatar} alt={r.name} className="w-14 h-14 rounded-full object-cover border-2 border-gold" />
                <div>
                  <h4 className="font-bold text-dark">{r.name}</h4>
                  <span className="text-sm text-brown">{r.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1601758177381-33e976e84b45?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1601758177296-6f1e0fea2a4a?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=400&h=300&fit=crop" // using an extra dog one for the 4th
  ];

  return (
    <section id="gallery" className="py-20 bg-cream px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-white text-forest px-4 py-1.5 rounded-full font-semibold text-[13px] uppercase tracking-wide mb-3">Lookbook</span>
          <h2 className="text-4xl font-bold text-dark">Style Gallery</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {images.map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden transition-all-custom hover:scale-[1.03] hover:shadow-hover">
              <img src={src} alt="Gallery item" className="w-full h-[250px] object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "What materials do you use?", a: "We use premium leather, breathable fabrics, and durable hardware to ensure comfort and longevity." },
    { q: "How do I measure my pup?", a: "We provide a simple measuring guide with every order. Just follow the instructions for a perfect fit." },
    { q: "Can I customize an order?", a: "Absolutely! We offer custom designs, colors, and personalization options. Contact us to discuss your vision." },
    { q: "What's your return policy?", a: "We stand behind our quality. If you're not completely satisfied, we'll work with you to make it right." }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-cream text-forest px-4 py-1.5 rounded-full font-semibold text-[13px] uppercase tracking-wide mb-3">FAQ</span>
          <h2 className="text-4xl font-bold text-dark">Common Questions</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div 
                key={i} 
                className={`bg-cream p-6 rounded-2xl cursor-pointer transition-all-custom border ${isOpen ? 'border-gold' : 'border-transparent hover:border-gold/50'}`}
                onClick={() => setOpenIdx(isOpen ? null : i)}
              >
                <div className="flex justify-between items-center font-bold text-[17px] text-dark">
                  {faq.q}
                  <span className={`text-2xl text-gold transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-300 text-brown`}
                  style={{ maxHeight: isOpen ? '200px' : '0', opacity: isOpen ? 1 : 0, marginTop: isOpen ? '12px' : '0' }}
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

function CTASection() {
  return (
    <section id="contact" className="py-20 bg-forest text-white text-center relative overflow-hidden px-6">
      <div 
        className="absolute -top-[50%] -right-[20%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212, 175, 55, 0.1), transparent 70%)" }}
      />
      
      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-4">Ready to Style Your Pup?</h2>
        <p className="text-lg opacity-90 mb-8">Reach out for questions, sizing help, or to start your custom order.</p>
        <a href="mailto:jakiemarson104@gmail.com" className="inline-block bg-gold text-forest border-2 border-gold px-8 py-4 rounded-full font-semibold transition-all-custom hover:bg-cream hover:border-cream shadow-normal hover:shadow-hover">
          Get in Touch →
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-extrabold tracking-tight mb-3">Puplife<span className="text-gold">.</span></h3>
            <p className="text-[15px] opacity-80 max-w-[300px]">
              Handcrafted premium gear for pups who deserve the absolute best. Designed for style, made for comfort.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[15px]">
              <li><a href="#products" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors">Shop Collection</a></li>
              <li><a href="#about" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors">Our Story</a></li>
              <li><a href="#custom" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors">Custom Orders</a></li>
              <li><a href="#gallery" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors">Style Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-[15px] mb-6">
              <a href="mailto:jakiemarson104@gmail.com" className="block opacity-80 hover:opacity-100 hover:text-gold transition-colors">jakiemarson104@gmail.com</a>
              <p className="opacity-80">Discord: jakiemarson</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-2xl opacity-80 hover:opacity-100 hover:text-gold hover:-translate-y-0.5 transition-all">📷</a>
              <a href="#" className="text-2xl opacity-80 hover:opacity-100 hover:text-gold hover:-translate-y-0.5 transition-all">🐦</a>
              <a href="#" className="text-2xl opacity-80 hover:opacity-100 hover:text-gold hover:-translate-y-0.5 transition-all">💼</a>
              <a href="#" className="text-2xl opacity-80 hover:opacity-100 hover:text-gold hover:-translate-y-0.5 transition-all">▶️</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center text-sm opacity-60">
          © 2025 Puplife. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
