"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { locations } from "@/content/locations";
import EmberParticles from "@/components/EmberParticles";

gsap.registerPlugin(ScrollTrigger);

const partnerLogos = [
  { name: "Partner 1", src: "/images/partners/partner-1.png" },
  { name: "Partner 2", src: "/images/partners/partner-2.png" },
  { name: "Partner 3", src: "/images/partners/partner-3.png" },
  { name: "Partner 4", src: "/images/partners/partner-4.png" },
  { name: "Partner 5", src: "/images/partners/partner-5.png" },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  // Hero entrance animation
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const els = hero.querySelectorAll("[data-hero-animate]");
    gsap.set(els, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ delay: 0.5 });
    tl.to(els, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.18,
    });
  }, []);

  // Scroll-triggered animations for all sections
  useEffect(() => {
    const container = sectionsRef.current;
    if (!container) return;

    const sections = container.querySelectorAll("[data-section]");
    const triggers: ScrollTrigger[] = [];

    sections.forEach((section) => {
      const items = section.querySelectorAll("[data-animate]");
      gsap.set(items, { y: 50, opacity: 0 });

      const st = ScrollTrigger.create({
        trigger: section,
        start: "top 82%",
        once: true,
        onEnter: () => {
          gsap.to(items, {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            stagger: 0.12,
          });
        },
      });
      triggers.push(st);
    });

    // Parallax on image dividers
    const dividers = container.querySelectorAll("[data-parallax]");
    dividers.forEach((div) => {
      const img = div.querySelector("img");
      if (!img) return;
      const st = ScrollTrigger.create({
        trigger: div,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          gsap.set(img, { y: self.progress * 60 - 30 });
        },
      });
      triggers.push(st);
    });

    return () => triggers.forEach((st) => st.kill());
  }, []);

  return (
    <div ref={sectionsRef}>
      {/* ──────────── HERO ──────────── */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        <Image
          src="/images/hero-interior.jpg"
          alt="Malt Barrel & Fire interior"
          fill
          className="object-cover object-center scale-105"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 85%, rgba(212, 145, 26, 0.15) 0%, transparent 70%)",
            animation: "fireGlow 4s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-56"
          style={{
            background: "linear-gradient(to top, var(--background) 0%, transparent 100%)",
          }}
        />

        <EmberParticles />

        <div className="relative z-10 px-6 text-center max-w-5xl mx-auto">
          <p
            data-hero-animate
            className="mb-6 text-sm tracking-[0.5em] uppercase text-amber/80 md:text-base"
          >
            Wood-Fired Cuisine &bull; Rare Spirits &bull; Live Flame
          </p>
          <h1
            data-hero-animate
            className="font-serif text-6xl font-bold leading-[1.0] tracking-tight text-cream md:text-8xl lg:text-9xl drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
          >
            Malt Barrel
            <br />
            <span className="text-amber">&amp;</span> Fire
          </h1>
          <div
            data-hero-animate
            className="mx-auto my-8 h-px w-32 bg-gradient-to-r from-transparent via-amber/60 to-transparent"
          />
          <p
            data-hero-animate
            className="text-xl tracking-[0.4em] uppercase text-warm-gray md:text-2xl"
          >
            Smoke. Spirit. Flame.
          </p>
          <p
            data-hero-animate
            className="mx-auto mt-4 max-w-lg text-base text-warm-gray/70 leading-relaxed"
          >
            An atmosphere forged in flame — four locations across Gauteng
          </p>
          <div
            data-hero-animate
            className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/menu"
              className="group inline-flex items-center gap-3 rounded-sm border border-amber px-10 py-4 text-sm tracking-[0.25em] uppercase text-amber transition-all duration-300 hover:bg-amber hover:text-background hover:shadow-[0_0_40px_rgba(212,145,26,0.25)]"
            >
              Explore Menu
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/book"
              className="rounded-sm border border-cream/20 px-10 py-4 text-sm tracking-[0.25em] uppercase text-cream transition-all duration-300 hover:border-amber hover:text-amber hover:bg-amber/5"
            >
              Book a Table
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-[0.4em] uppercase text-warm-gray/50">
            Discover
          </span>
          <div
            className="flex flex-col items-center"
            style={{ animation: "scrollBounce 2s ease-in-out infinite" }}
          >
            <svg
              className="h-5 w-5 text-amber/50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* ──────────── ABOUT STRIP ──────────── */}
      <section data-section className="relative py-32 px-6 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p data-animate className="mb-5 text-sm tracking-[0.4em] uppercase text-amber">
            The Experience
          </p>
          <h2
            data-animate
            className="font-serif text-3xl font-bold leading-snug text-cream md:text-5xl lg:text-6xl"
          >
            Where fire meets craft
          </h2>
          <div
            data-animate
            className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-amber/40 to-transparent"
          />
          <p
            data-animate
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-warm-gray md:text-xl"
          >
            Wood-fired cuisine, rare whiskeys, and handcrafted cocktails — served in an atmosphere
            forged in flame. Four locations across Gauteng, each with its own character.
          </p>
        </div>
      </section>

      {/* ──────────── IMAGE DIVIDER ──────────── */}
      <div data-parallax className="relative h-[50vh] overflow-hidden">
        <Image
          src="/images/drinks/spirits-bar.jpg"
          alt="Spirit bottles at the bar"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* ──────────── LOCATIONS ──────────── */}
      <section data-section className="relative py-32 px-6 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p data-animate className="mb-5 text-sm tracking-[0.4em] uppercase text-amber">
              Visit Us
            </p>
            <h2 data-animate className="font-serif text-4xl font-bold text-cream md:text-5xl lg:text-6xl">
              Our Locations
            </h2>
            <div
              data-animate
              className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-amber/40 to-transparent"
            />
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${loc.slug}`}
                data-animate
                className="group relative overflow-hidden rounded-sm border border-charcoal-light p-8 transition-all duration-500 hover:border-amber/40 hover:bg-charcoal/50"
              >
                <div className="absolute top-0 left-0 h-1 w-0 bg-amber transition-all duration-700 group-hover:w-full" />
                <h3 className="font-serif text-2xl text-cream transition-colors duration-300 group-hover:text-amber">
                  {loc.name}
                </h3>
                <p className="mt-3 text-sm text-warm-gray/80">{loc.tagline}</p>
                <p className="mt-2 text-sm text-warm-gray">{loc.address}</p>
                <p className="mt-1 text-xs text-warm-gray/60">{loc.hours}</p>
                <div className="mt-6 flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-amber opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                  View Details
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── FOOD SHOWCASE ──────────── */}
      <section data-section className="relative py-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p data-animate className="mb-5 text-sm tracking-[0.4em] uppercase text-amber">
                From the Kitchen
              </p>
              <h2
                data-animate
                className="font-serif text-4xl font-bold text-cream md:text-5xl lg:text-6xl"
              >
                Fired to Perfection
              </h2>
              <div data-animate className="mt-5 h-px w-20 bg-gradient-to-r from-amber/40 to-transparent" />
              <p data-animate className="mt-8 text-lg leading-relaxed text-warm-gray md:text-xl">
                Every dish tells a story of smoke and flame. Our chefs source the finest
                cuts, freshest seafood, and seasonal produce — then let the fire do the talking.
              </p>
              <div data-animate className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/menu"
                  className="group inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-amber transition-colors hover:text-amber-light"
                >
                  View Full Menu
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div data-animate className="grid grid-cols-2 gap-5">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/food/fire-dish.jpg"
                  alt="Fire-grilled dish"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/food/prawns.jpg"
                  alt="Signature prawns"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── PARTNERS ──────────── */}
      <section data-section className="relative py-24 px-6 md:px-12 border-t border-b border-charcoal-light">
        <div className="mx-auto max-w-6xl">
          <p
            data-animate
            className="mb-12 text-center text-xs tracking-[0.4em] uppercase text-warm-gray/50"
          >
            Our Partners
          </p>
          <div
            data-animate
            className="flex flex-wrap items-center justify-center gap-14 opacity-40"
          >
            {partnerLogos.map((partner) => (
              <div
                key={partner.name}
                className="flex h-12 w-28 items-center justify-center text-warm-gray"
              >
                <span className="text-xs tracking-wider uppercase">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── CTA STRIP ──────────── */}
      <section data-section className="relative overflow-hidden py-36 px-6 md:px-12">
        <Image
          src="/images/bar-interior.jpg"
          alt="Bar ambience"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

        <div className="relative text-center">
          <h2
            data-animate
            className="font-serif text-4xl font-bold text-cream md:text-6xl lg:text-7xl"
          >
            Your table awaits
          </h2>
          <p
            data-animate
            className="mx-auto mt-6 max-w-md text-lg text-warm-gray"
          >
            Join us for an evening shaped by smoke, spirit, and craft.
          </p>
          <div
            data-animate
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/book"
              className="rounded-sm border border-amber bg-amber px-12 py-4 text-sm tracking-[0.25em] uppercase text-background transition-all duration-300 hover:bg-amber-light hover:shadow-[0_0_40px_rgba(212,145,26,0.2)]"
            >
              Book a Table
            </Link>
            <Link
              href="/contact"
              className="rounded-sm border border-cream/20 px-12 py-4 text-sm tracking-[0.25em] uppercase text-cream transition-all duration-300 hover:border-cream/50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
