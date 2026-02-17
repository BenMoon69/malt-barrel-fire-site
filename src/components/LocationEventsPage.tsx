"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Location } from "@/content/locations";
import type { Event } from "@/content/events";

gsap.registerPlugin(ScrollTrigger);

interface LocationEventsPageProps {
  location: Location;
  events: Event[];
}

export default function LocationEventsPage({ location, events }: LocationEventsPageProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;
    const els = headerRef.current.querySelectorAll("[data-animate]");
    gsap.set(els, { y: 30, opacity: 0 });
    gsap.to(els, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.12,
      delay: 0.3,
    });
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll("[data-card]");
    gsap.set(cards, { y: 40, opacity: 0 });

    const triggers: ScrollTrigger[] = [];
    cards.forEach((card, i) => {
      const st = ScrollTrigger.create({
        trigger: card,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(card, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            delay: i * 0.08,
          });
        },
      });
      triggers.push(st);
    });

    return () => triggers.forEach((st) => st.kill());
  }, [events]);

  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <div className="relative h-[35vh] overflow-hidden">
        <Image
          src="/images/bar-interior.jpg"
          alt={`Events at ${location.name}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
        <div
          ref={headerRef}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <p data-animate className="mb-3 text-sm tracking-[0.3em] uppercase text-amber">
            What&apos;s On
          </p>
          <h1 data-animate className="font-serif text-5xl font-bold text-cream md:text-7xl">
            {location.name}
          </h1>
          <p data-animate className="mt-3 text-lg text-warm-gray/80">
            Events &amp; Happenings
          </p>
          <div
            data-animate
            className="mt-4 h-px w-20 bg-gradient-to-r from-transparent via-amber/50 to-transparent"
          />
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-6 pt-8 md:px-12">
        <nav className="text-sm text-warm-gray">
          <Link href="/" className="transition-colors hover:text-cream">Home</Link>
          <span className="mx-2 text-charcoal-light">/</span>
          <Link href="/events" className="transition-colors hover:text-cream">Events</Link>
          <span className="mx-2 text-charcoal-light">/</span>
          <span className="text-cream">{location.name}</span>
        </nav>
      </div>

      {/* Events grid */}
      <div ref={gridRef} className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        {events.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2">
            {events.map((event) => (
              <div
                key={event.id}
                data-card
                className="group overflow-hidden rounded-sm border border-charcoal-light transition-all duration-300 hover:border-amber/30"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 flex items-center gap-2">
                    {event.recurring && (
                      <span className="inline-block rounded-sm bg-amber/90 px-3 py-1 text-[10px] tracking-[0.15em] uppercase text-background">
                        Recurring
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="font-serif text-2xl text-cream">{event.title}</h3>
                  <div className="mt-2 flex items-center gap-3 text-xs text-amber">
                    <span>{event.date}</span>
                    <span className="h-1 w-1 rounded-full bg-amber/50" />
                    <span>{event.time}</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-warm-gray">
                    {event.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="#enquiry"
                      className="rounded-sm border border-amber bg-amber px-6 py-2.5 text-xs tracking-[0.15em] uppercase text-background transition-all hover:bg-amber-light"
                    >
                      Enquire
                    </a>
                    <Link
                      href="/book"
                      className="rounded-sm border border-cream/20 px-6 py-2.5 text-xs tracking-[0.15em] uppercase text-cream transition-all hover:border-cream/50"
                    >
                      Book Table
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="font-serif text-2xl text-cream">Events coming soon</p>
            <p className="mt-3 text-warm-gray/60">
              Stay tuned for upcoming events at {location.name}.
            </p>
          </div>
        )}
      </div>

      {/* Event Enquiry CTA */}
      <section
        id="enquiry"
        ref={ctaRef}
        className="border-t border-charcoal-light bg-charcoal/20 py-20 px-6 md:px-12"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs tracking-[0.3em] uppercase text-amber">
            Private Events &amp; Functions
          </p>
          <h2 className="font-serif text-3xl font-bold text-cream md:text-4xl">
            Host Your Event With Us
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-warm-gray">
            Looking to host a private event, corporate function, or celebration at Malt Barrel
            &amp; Fire {location.name}? Get in touch and let us tailor the perfect experience.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${location.email}?subject=Event Enquiry — ${location.name}`}
              className="rounded-sm border border-amber bg-amber px-10 py-4 text-sm tracking-[0.25em] uppercase text-background transition-all duration-300 hover:bg-amber-light hover:shadow-[0_0_40px_rgba(212,145,26,0.2)]"
            >
              Submit Enquiry
            </a>
            <Link
              href={`/${location.slug}`}
              className="rounded-sm border border-cream/20 px-10 py-4 text-sm tracking-[0.25em] uppercase text-cream transition-all duration-300 hover:border-cream/50"
            >
              View Location
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
