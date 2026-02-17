"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { locations } from "@/content/locations";
import { locationEvents } from "@/content/events";

gsap.registerPlugin(ScrollTrigger);

export default function EventsPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
            delay: i * 0.1,
          });
        },
      });
      triggers.push(st);
    });

    return () => triggers.forEach((st) => st.kill());
  }, []);

  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <div className="relative h-[35vh] overflow-hidden">
        <Image
          src="/images/bar-interior.jpg"
          alt="Events"
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
            Events
          </h1>
          <div
            data-animate
            className="mt-4 h-px w-20 bg-gradient-to-r from-transparent via-amber/50 to-transparent"
          />
          <p data-animate className="mt-4 text-warm-gray/70">
            Each location has its own unique events and specials
          </p>
        </div>
      </div>

      {/* Location events hub */}
      <div ref={gridRef} className="mx-auto max-w-6xl px-6 py-20 md:px-12">
        <div className="grid gap-8 md:grid-cols-2">
          {locations.map((loc) => {
            const locEvents = locationEvents.find((le) => le.slug === loc.slug);
            const eventCount = locEvents?.events.length || 0;
            const previewEvent = locEvents?.events[0];

            return (
              <Link
                key={loc.slug}
                href={`/events/${loc.slug}`}
                data-card
                className="group overflow-hidden rounded-sm border border-charcoal-light transition-all duration-300 hover:border-amber/30"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={previewEvent?.image || "/images/bar-interior.jpg"}
                    alt={`Events at ${loc.name}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5">
                    <span className="inline-block rounded-sm bg-amber/90 px-3 py-1 text-[10px] tracking-[0.15em] uppercase text-background">
                      {eventCount} {eventCount === 1 ? "event" : "events"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="font-serif text-2xl text-cream transition-colors group-hover:text-amber">
                    {loc.name}
                  </h3>
                  <p className="mt-2 text-sm text-warm-gray/60">{loc.tagline}</p>

                  {previewEvent && (
                    <div className="mt-4 rounded-sm border border-charcoal-light/50 bg-charcoal/20 p-4">
                      <p className="text-xs tracking-[0.1em] uppercase text-amber/70">
                        Coming up
                      </p>
                      <p className="mt-1 text-sm font-semibold text-cream">
                        {previewEvent.title}
                      </p>
                      <p className="mt-0.5 text-xs text-warm-gray/60">
                        {previewEvent.date} &bull; {previewEvent.time}
                      </p>
                    </div>
                  )}

                  <div className="mt-5 flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-amber opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                    View All Events
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Event Enquiry CTA */}
      <section className="border-t border-charcoal-light bg-charcoal/20 py-20 px-6 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs tracking-[0.3em] uppercase text-amber">
            Private Events &amp; Functions
          </p>
          <h2 className="font-serif text-3xl font-bold text-cream md:text-4xl">
            Host Your Event With Us
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-warm-gray">
            Looking to host a private event, corporate function, or celebration? Get in touch
            with your preferred location and let us tailor the perfect experience.
          </p>
          <div className="mt-10">
            <a
              href="mailto:info@maltbarrelandfire.com?subject=Event Enquiry"
              className="rounded-sm border border-amber bg-amber px-10 py-4 text-sm tracking-[0.25em] uppercase text-background transition-all duration-300 hover:bg-amber-light hover:shadow-[0_0_40px_rgba(212,145,26,0.2)]"
            >
              Submit Enquiry
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
