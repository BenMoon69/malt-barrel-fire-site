"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import MenuOverlay from "@/components/MenuOverlay";

const navLinks = [
  { label: "Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Reservations", href: "#reservations" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hero entrance animation
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const title = hero.querySelector("[data-hero-title]");
    const tagline = hero.querySelector("[data-hero-tagline]");
    const cta = hero.querySelector("[data-hero-cta]");
    const divider = hero.querySelector("[data-hero-divider]");

    gsap.set([title, tagline, cta, divider], { y: 30, opacity: 0 });

    const tl = gsap.timeline({ delay: 0.3 });
    tl.to(title, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
    tl.to(divider, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.4");
    tl.to(tagline, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.3");
    tl.to(cta, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.2");
  }, []);

  const handleExploreMenu = () => {
    if (!ctaRef.current) return;

    gsap.to(ctaRef.current, {
      scale: 20,
      opacity: 0,
      duration: 0.7,
      ease: "power3.in",
      onComplete: () => {
        setMenuOpen(true);
        if (ctaRef.current) {
          gsap.set(ctaRef.current, { scale: 1, opacity: 1 });
        }
      },
    });
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/95 shadow-lg shadow-black/20 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          <a href="#" className="font-serif text-xl font-bold tracking-wide text-cream">
            MB&F
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-[0.15em] uppercase text-warm-gray transition-colors hover:text-amber"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#reservations"
            className="rounded-sm border border-amber/40 px-5 py-2 text-xs tracking-[0.2em] uppercase text-amber transition-colors hover:border-amber hover:bg-amber/10"
          >
            Reserve
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0b08] via-[#0a0806] to-[#0a0806]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 80%, rgba(212, 145, 26, 0.08) 0%, transparent 70%)",
            animation: "fireGlow 4s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 40% 30% at 50% 90%, rgba(192, 68, 14, 0.06) 0%, transparent 60%)",
            animation: "subtlePulse 3s ease-in-out infinite",
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-6 text-center">
          <h1
            data-hero-title
            className="font-serif text-6xl font-bold leading-tight tracking-tight text-cream md:text-8xl lg:text-9xl"
          >
            Malt Barrel
            <br />
            <span className="text-amber">&</span> Fire
          </h1>
          <div data-hero-divider className="mx-auto my-6 h-px w-20 bg-amber/50" />
          <p
            data-hero-tagline
            className="mx-auto max-w-lg text-lg font-light leading-relaxed text-warm-gray md:text-xl"
          >
            Wood-fired cuisine. Rare whiskeys. An atmosphere forged in flame.
          </p>
          <button
            ref={ctaRef}
            data-hero-cta
            onClick={handleExploreMenu}
            className="mt-10 inline-block rounded-sm border border-amber px-10 py-4 text-sm tracking-[0.25em] uppercase text-amber transition-all hover:bg-amber hover:text-background cursor-pointer"
          >
            Explore Menu
          </button>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="relative py-32 px-6 md:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm tracking-[0.3em] uppercase text-amber">Our Story</p>
          <h2 className="font-serif text-4xl font-bold text-cream md:text-5xl">Born from Smoke & Oak</h2>
          <div className="mt-4 h-px w-16 bg-amber/40" />
          <div className="mt-10 grid gap-12 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-warm-gray">
              What began as a small smokehouse on the outskirts of town has become a destination for those
              who believe fire is the oldest and finest form of cooking. Every cut is selected by hand,
              every barrel is chosen for character, and every flame is tended with intention.
            </p>
            <p className="text-lg leading-relaxed text-warm-gray">
              Our open hearth burns white oak and cherrywood from dawn until the last guest departs.
              The whiskey list draws from over 200 bottles spanning five continents. This is not just a
              meal — it is an evening shaped by smoke, spirit, and craft.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section id="menu" className="relative py-32 px-6 md:px-12">
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <p className="mb-4 text-sm tracking-[0.3em] uppercase text-amber">From the Kitchen</p>
            <h2 className="font-serif text-4xl font-bold text-cream md:text-5xl">Menu Highlights</h2>
            <div className="mx-auto mt-4 h-px w-16 bg-amber/40" />
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Starters", desc: "Smoked, cured, and charred small plates to open the evening" },
              { title: "Mains", desc: "Prime cuts and whole fish, all kissed by open flame" },
              { title: "Whiskey & Spirits", desc: "200+ bottles from Scotland to Japan, bourbon to rye" },
              { title: "Desserts", desc: "Sweet finishes with smoke, caramel, and fire" },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-sm border border-charcoal-light p-8 transition-all hover:border-amber/30 hover:bg-charcoal-light/50"
              >
                <h3 className="font-serif text-2xl text-amber-light">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-warm-gray">{item.desc}</p>
                <button
                  onClick={handleExploreMenu}
                  className="mt-6 text-xs tracking-[0.2em] uppercase text-amber transition-colors hover:text-amber-light cursor-pointer"
                >
                  View &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="relative py-32 px-6 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm tracking-[0.3em] uppercase text-amber">Join Us</p>
          <h2 className="font-serif text-4xl font-bold text-cream md:text-5xl">Reserve Your Table</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-amber/40" />
          <p className="mx-auto mt-8 max-w-md text-warm-gray">
            Dinner service begins at 5pm. Walk-ins welcome, but reservations are strongly encouraged for
            parties of all sizes.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-12 space-y-6 text-left"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs tracking-[0.15em] uppercase text-warm-gray">Name</label>
                <input
                  type="text"
                  className="w-full border-b border-charcoal-light bg-transparent px-0 py-3 text-cream outline-none transition-colors focus:border-amber"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs tracking-[0.15em] uppercase text-warm-gray">Email</label>
                <input
                  type="email"
                  className="w-full border-b border-charcoal-light bg-transparent px-0 py-3 text-cream outline-none transition-colors focus:border-amber"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <label className="mb-2 block text-xs tracking-[0.15em] uppercase text-warm-gray">Date</label>
                <input
                  type="date"
                  className="w-full border-b border-charcoal-light bg-transparent px-0 py-3 text-cream outline-none transition-colors focus:border-amber"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs tracking-[0.15em] uppercase text-warm-gray">Time</label>
                <input
                  type="time"
                  className="w-full border-b border-charcoal-light bg-transparent px-0 py-3 text-cream outline-none transition-colors focus:border-amber"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs tracking-[0.15em] uppercase text-warm-gray">Guests</label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  defaultValue="2"
                  className="w-full border-b border-charcoal-light bg-transparent px-0 py-3 text-cream outline-none transition-colors focus:border-amber"
                />
              </div>
            </div>
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="rounded-sm border border-amber bg-amber px-12 py-4 text-sm tracking-[0.25em] uppercase text-background transition-all hover:bg-amber-light cursor-pointer"
              >
                Request Reservation
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative border-t border-charcoal-light py-32 px-6 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="mb-4 text-sm tracking-[0.3em] uppercase text-amber">Find Us</p>
            <h2 className="font-serif text-4xl font-bold text-cream md:text-5xl">Contact</h2>
            <div className="mx-auto mt-4 h-px w-16 bg-amber/40" />
          </div>

          <div className="mt-16 grid gap-12 text-center sm:grid-cols-3">
            <div>
              <h3 className="mb-4 font-serif text-xl text-amber-light">Address</h3>
              <p className="leading-relaxed text-warm-gray">
                742 Hearthstone Lane
                <br />
                Brooklyn, NY 11215
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-serif text-xl text-amber-light">Hours</h3>
              <p className="leading-relaxed text-warm-gray">
                Tue – Thu: 5pm – 11pm
                <br />
                Fri – Sat: 5pm – 1am
                <br />
                Sun: 4pm – 10pm
                <br />
                Mon: Closed
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-serif text-xl text-amber-light">Phone</h3>
              <p className="leading-relaxed text-warm-gray">
                (718) 555-0142
                <br />
                <span className="mt-2 inline-block text-sm">info@maltbarrelandfire.com</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-charcoal-light py-8 text-center text-sm text-warm-gray">
        <p>&copy; {new Date().getFullYear()} Malt Barrel &amp; Fire. All rights reserved.</p>
      </footer>

      {/* Menu Overlay */}
      {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
    </>
  );
}
