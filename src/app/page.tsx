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
    gsap.set(els, { y: 40, opacity: 0 });

    const tl = gsap.timeline({ delay: 0.4 });
    tl.to(els, {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.15,
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
      gsap.set(items, { y: 40, opacity: 0 });

      const st = ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(items, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.1,
          });
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
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 85%, rgba(212, 145, 26, 0.12) 0%, transparent 70%)",
            animation: "fireGlow 4s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background: "linear-gradient(to top, var(--background) 0%, transparent 100%)",
          }}
        />

        <EmberParticles />

        <div className="relative z-10 px-6 text-center">
          <h1
            data-hero-animate
            className="font-serif text-6xl font-bold leading-[1.05] tracking-tight text-cream md:text-8xl lg:text-9xl drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
          >
            Malt Barrel
            <br />
            <span className="text-amber">&amp;</span> Fire
          </h1>
          <div
            data-hero-animate
            className="mx-auto my-6 h-px w-28 bg-gradient-to-r from-transparent via-amber/60 to-transparent"
          />
          <p
            data-hero-animate
            className="text-xl tracking-[0.4em] uppercase text-warm-gray md:text-2xl"
          >
            Smoke. Spirit. Flame.
          </p>
          <div
            data-hero-animate
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/menu"
              className="group inline-flex items-center gap-3 rounded-sm border border-amber px-10 py-4 text-sm tracking-[0.25em] uppercase text-amber transition-all hover:bg-amber hover:text-background hover:shadow-[0_0_40px_rgba(212,145,26,0.2)]"
            >
              Explore Menu
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="#book"
              className="rounded-sm border border-cream/20 px-10 py-4 text-sm tracking-[0.25em] uppercase text-cream transition-all hover:border-cream/50 hover:bg-cream/5"
            >
              Book a Table
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-warm-gray/40">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-warm-gray/30 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ──────────── ABOUT STRIP ──────────── */}
      <section data-section className="relative py-24 px-6 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p data-animate className="mb-4 text-sm tracking-[0.3em] uppercase text-amber">
            The Experience
          </p>
          <h2
            data-animate
            className="font-serif text-3xl font-bold leading-snug text-cream md:text-5xl"
          >
            Where fire meets craft
          </h2>
          <p
            data-animate
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-warm-gray"
          >
            Wood-fired cuisine, rare whiskeys, and handcrafted cocktails — served in an atmosphere
            forged in flame. Four locations across Gauteng, each with its own character.
          </p>
        </div>
      </section>

      {/* ──────────── IMAGE DIVIDER ──────────── */}
      <div className="relative h-[45vh] overflow-hidden">
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
      <section data-section className="relative py-28 px-6 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p data-animate className="mb-4 text-sm tracking-[0.3em] uppercase text-amber">
              Visit Us
            </p>
            <h2 data-animate className="font-serif text-4xl font-bold text-cream md:text-5xl">
              Our Locations
            </h2>
            <div
              data-animate
              className="mx-auto mt-4 h-px w-16 bg-amber/40"
            />
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                data-animate
                className="group relative overflow-hidden rounded-sm border border-charcoal-light p-8 transition-all duration-300 hover:border-amber/40 hover:bg-charcoal/50"
              >
                <div className="absolute top-0 left-0 h-1 w-0 bg-amber transition-all duration-500 group-hover:w-full" />
                <h3 className="font-serif text-2xl text-cream transition-colors group-hover:text-amber">
                  {loc.name}
                </h3>
                <p className="mt-2 text-sm text-warm-gray">{loc.address}</p>
                <p className="mt-1 text-xs text-warm-gray/60">{loc.hours}</p>
                <div className="mt-6 flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-amber opacity-0 transition-opacity group-hover:opacity-100">
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
      <section data-section className="relative py-28 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p data-animate className="mb-4 text-sm tracking-[0.3em] uppercase text-amber">
                From the Kitchen
              </p>
              <h2
                data-animate
                className="font-serif text-4xl font-bold text-cream md:text-5xl"
              >
                Fired to Perfection
              </h2>
              <div data-animate className="mt-4 h-px w-16 bg-amber/40" />
              <p data-animate className="mt-8 text-lg leading-relaxed text-warm-gray">
                Every dish tells a story of smoke and flame. Our chefs source the finest
                cuts, freshest seafood, and seasonal produce — then let the fire do the talking.
              </p>
              <Link
                href="/menu"
                data-animate
                className="mt-8 inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-amber transition-colors hover:text-amber-light"
              >
                View Full Menu
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div data-animate className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/food/fire-dish.jpg"
                  alt="Fire-grilled dish"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/food/prawns.jpg"
                  alt="Signature prawns"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── PARTNERS ──────────── */}
      <section data-section className="relative py-20 px-6 md:px-12 border-t border-b border-charcoal-light">
        <div className="mx-auto max-w-6xl">
          <p
            data-animate
            className="mb-10 text-center text-xs tracking-[0.3em] uppercase text-warm-gray/50"
          >
            Our Partners
          </p>
          <div
            data-animate
            className="flex flex-wrap items-center justify-center gap-12 opacity-40"
          >
            {partnerLogos.map((partner) => (
              <div
                key={partner.name}
                className="flex h-12 w-24 items-center justify-center text-warm-gray"
              >
                {/* Replace with actual partner logo images when available */}
                <span className="text-xs tracking-wider uppercase">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── CTA STRIP ──────────── */}
      <section data-section className="relative overflow-hidden py-32 px-6 md:px-12">
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
            className="font-serif text-4xl font-bold text-cream md:text-6xl"
          >
            Your table awaits
          </h2>
          <p
            data-animate
            className="mx-auto mt-4 max-w-md text-warm-gray"
          >
            Join us for an evening shaped by smoke, spirit, and craft.
          </p>
          <div
            data-animate
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="#book"
              className="rounded-sm border border-amber bg-amber px-12 py-4 text-sm tracking-[0.25em] uppercase text-background transition-all hover:bg-amber-light"
            >
              Book a Table
            </Link>
            <Link
              href="/contact"
              className="rounded-sm border border-cream/20 px-12 py-4 text-sm tracking-[0.25em] uppercase text-cream transition-all hover:border-cream/50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
