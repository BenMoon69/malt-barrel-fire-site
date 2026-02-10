"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import type { Location } from "@/content/locations";

interface LocationDetailProps {
  location: Location;
}

export default function LocationDetail({ location }: LocationDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const els = containerRef.current.querySelectorAll("[data-animate]");
    gsap.set(els, { y: 30, opacity: 0 });
    gsap.to(els, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.1,
      delay: 0.3,
    });
  }, []);

  return (
    <main className="min-h-screen pt-24">
      <div ref={containerRef} className="mx-auto max-w-4xl px-6 py-20 md:px-12">
        {/* Breadcrumb */}
        <nav data-animate className="mb-12 text-sm text-warm-gray">
          <Link href="/" className="transition-colors hover:text-cream">
            Home
          </Link>
          <span className="mx-2 text-charcoal-light">/</span>
          <Link href="/contact" className="transition-colors hover:text-cream">
            Locations
          </Link>
          <span className="mx-2 text-charcoal-light">/</span>
          <span className="text-cream">{location.name}</span>
        </nav>

        {/* Header */}
        <p data-animate className="mb-4 text-sm tracking-[0.3em] uppercase text-amber">
          Malt Barrel &amp; Fire
        </p>
        <h1
          data-animate
          className="font-serif text-5xl font-bold text-cream md:text-7xl"
        >
          {location.name}
        </h1>
        <div
          data-animate
          className="mt-4 h-px w-20 bg-gradient-to-r from-amber/50 to-transparent"
        />

        {/* Details grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2">
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
              Opening Hours
            </h3>
            <p className="text-lg text-cream">{location.hours}</p>
          </div>
          <div data-animate>
            <h3 className="mb-3 text-xs tracking-[0.2em] uppercase text-amber">
              Reservations
            </h3>
            <a
              href="#book"
              className="inline-block rounded-sm border border-amber bg-amber px-8 py-3 text-xs tracking-[0.2em] uppercase text-background transition-all hover:bg-amber-light"
            >
              Book a Table
            </a>
          </div>
        </div>

        {/* Map placeholder */}
        <div data-animate className="mt-20">
          <h3 className="mb-6 text-xs tracking-[0.2em] uppercase text-amber">
            Find Us
          </h3>
          <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-sm border border-charcoal-light bg-charcoal/30">
            <div className="text-center">
              <svg
                className="mx-auto mb-4 h-12 w-12 text-warm-gray/30"
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
                Map — {location.address}
              </p>
              <a
                href={`https://www.google.com/maps/search/${location.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs tracking-[0.15em] uppercase text-amber transition-colors hover:text-amber-light"
              >
                Open in Google Maps &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div data-animate className="mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm text-warm-gray transition-colors hover:text-cream"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All Locations
          </Link>
        </div>
      </div>
    </main>
  );
}
