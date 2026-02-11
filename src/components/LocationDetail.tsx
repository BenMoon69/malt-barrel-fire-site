"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Location } from "@/content/locations";

gsap.registerPlugin(ScrollTrigger);

interface LocationDetailProps {
  location: Location;
}

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

export default function LocationDetail({ location }: LocationDetailProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const els = heroRef.current.querySelectorAll("[data-hero-animate]");
    gsap.set(els, { y: 40, opacity: 0 });
    gsap.to(els, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.15,
      delay: 0.3,
    });
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;
    const sections = contentRef.current.querySelectorAll("[data-section]");
    const triggers: ScrollTrigger[] = [];

    sections.forEach((section) => {
      const items = section.querySelectorAll("[data-animate]");
      gsap.set(items, { y: 40, opacity: 0 });
      const st = ScrollTrigger.create({
        trigger: section,
        start: "top 82%",
        once: true,
        onEnter: () => {
          gsap.to(items, {
            y: 0,
            opacity: 1,
            duration: 0.8,
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
    <main className="min-h-screen">
      {/* ──────────── HERO ──────────── */}
      <section
        ref={heroRef}
        className="relative flex min-h-[70vh] items-center justify-center overflow-hidden"
      >
        {/* Placeholder background — swap with real photo later */}
        <div className="absolute inset-0 bg-charcoal" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 80%, rgba(212, 145, 26, 0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: "linear-gradient(to top, var(--background) 0%, transparent 100%)",
          }}
        />

        <div className="relative z-10 px-6 text-center max-w-4xl mx-auto">
          <p
            data-hero-animate
            className="mb-4 text-sm tracking-[0.4em] uppercase text-amber/80"
          >
            Malt Barrel &amp; Fire
          </p>
          <h1
            data-hero-animate
            className="font-serif text-5xl font-bold text-cream md:text-7xl lg:text-8xl"
          >
            {location.name}
          </h1>
          <div
            data-hero-animate
            className="mx-auto my-6 h-px w-24 bg-gradient-to-r from-transparent via-amber/50 to-transparent"
          />
          <p
            data-hero-animate
            className="text-lg tracking-wide text-warm-gray/80 md:text-xl"
          >
            {location.tagline}
          </p>
        </div>
      </section>

      {/* ──────────── CONTENT ──────────── */}
      <div ref={contentRef} className="mx-auto max-w-5xl px-6 py-20 md:px-12">
        {/* Breadcrumb */}
        <nav className="mb-16 text-sm text-warm-gray">
          <Link href="/" className="transition-colors hover:text-cream">
            Home
          </Link>
          <span className="mx-2 text-charcoal-light">/</span>
          <span className="text-cream">{location.name}</span>
        </nav>

        {/* ── Location Info ── */}
        <section data-section>
          <h2 data-animate className="font-serif text-3xl font-bold text-cream md:text-4xl">
            Location Details
          </h2>
          <div data-animate className="mt-4 h-px w-16 bg-amber/40" />

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <div data-animate>
              <h3 className="mb-3 text-xs tracking-[0.2em] uppercase text-amber">
                Address
              </h3>
              <p className="text-lg text-cream">{location.address}</p>
            </div>
            <div data-animate>
              <h3 className="mb-3 text-xs tracking-[0.2em] uppercase text-amber">
                Phone
              </h3>
              <a
                href={`tel:${location.phone.replace(/\s/g, "")}`}
                className="text-lg text-cream transition-colors hover:text-amber"
              >
                {location.phone}
              </a>
            </div>
            <div data-animate>
              <h3 className="mb-3 text-xs tracking-[0.2em] uppercase text-amber">
                Trading Hours
              </h3>
              <p className="text-lg text-cream">{location.hours}</p>
            </div>
            <div data-animate>
              <h3 className="mb-3 text-xs tracking-[0.2em] uppercase text-amber">
                Email
              </h3>
              <a
                href={`mailto:${location.email}`}
                className="text-lg text-cream transition-colors hover:text-amber"
              >
                {location.email}
              </a>
            </div>
          </div>
        </section>

        {/* ── Google Map Embed Placeholder ── */}
        <section data-section className="mt-24">
          <h2 data-animate className="font-serif text-3xl font-bold text-cream md:text-4xl">
            Find Us
          </h2>
          <div data-animate className="mt-4 h-px w-16 bg-amber/40" />

          <div
            data-animate
            className="mt-10 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-sm border border-charcoal-light bg-charcoal/30"
          >
            {/* Replace this div with a real Google Maps <iframe> embed when ready */}
            <div className="text-center px-6">
              <svg
                className="mx-auto mb-4 h-14 w-14 text-warm-gray/20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-sm text-warm-gray/50">
                Google Maps embed — {location.address}
              </p>
              <a
                href={`https://www.google.com/maps/search/${location.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-xs tracking-[0.15em] uppercase text-amber transition-colors hover:text-amber-light"
              >
                Open in Google Maps &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* ── Social Links ── */}
        <section data-section className="mt-24">
          <h2 data-animate className="font-serif text-3xl font-bold text-cream md:text-4xl">
            Follow Us
          </h2>
          <div data-animate className="mt-4 h-px w-16 bg-amber/40" />

          <div data-animate className="mt-10 flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-sm border border-charcoal-light text-warm-gray transition-all duration-300 hover:border-amber/40 hover:text-amber hover:bg-amber/5"
                aria-label={`${social.name} — ${location.name}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section data-section className="mt-24 border-t border-charcoal-light pt-16">
          <div data-animate className="text-center">
            <h2 className="font-serif text-3xl font-bold text-cream md:text-4xl">
              Ready to dine?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-warm-gray">
              Reserve your spot at Malt Barrel &amp; Fire {location.name}.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/book"
                className="rounded-sm border border-amber bg-amber px-10 py-4 text-sm tracking-[0.25em] uppercase text-background transition-all duration-300 hover:bg-amber-light hover:shadow-[0_0_40px_rgba(212,145,26,0.2)]"
              >
                Book a Table
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-sm border border-cream/20 px-10 py-4 text-sm tracking-[0.25em] uppercase text-cream transition-all duration-300 hover:border-cream/50"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                All Locations
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
