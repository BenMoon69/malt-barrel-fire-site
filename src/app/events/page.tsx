"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    title: "Women's Wednesday",
    date: "Every Wednesday",
    time: "From 5PM",
    description:
      "Live DJs, signature cocktails, and an electric atmosphere. The midweek experience you deserve.",
    location: "All Branches",
    image: "/images/hero-interior.jpg",
  },
  {
    title: "Corona Sunset Session",
    date: "Every Friday",
    time: "4PM – 7PM",
    description:
      "Live DJ sets, R30 Coronas, and golden hour vibes. The perfect start to your weekend.",
    location: "Midrand & Monte Casino",
    image: "/images/drinks/spirits-bar.jpg",
  },
  {
    title: "Whiskey Tasting Evening",
    date: "Last Saturday of each month",
    time: "6PM – 9PM",
    description:
      "Guided tasting of rare and premium whiskeys from around the world. Limited seats.",
    location: "Monte Casino",
    image: "/images/bar-interior.jpg",
  },
  {
    title: "Live Music Saturdays",
    date: "Every Saturday",
    time: "7PM – Late",
    description:
      "Local artists, craft cocktails, and fire-grilled plates. A Saturday night like no other.",
    location: "All Branches",
    image: "/images/venue-exterior.jpg",
  },
];

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
            delay: i * 0.08,
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
        </div>
      </div>

      {/* Events grid */}
      <div ref={gridRef} className="mx-auto max-w-6xl px-6 py-20 md:px-12">
        <div className="grid gap-8 md:grid-cols-2">
          {events.map((event) => (
            <div
              key={event.title}
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
                <div className="absolute bottom-4 left-5 right-5">
                  <span className="inline-block rounded-sm bg-amber/90 px-3 py-1 text-[10px] tracking-[0.15em] uppercase text-background">
                    {event.location}
                  </span>
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
                    href="#"
                    className="rounded-sm border border-amber bg-amber px-6 py-2.5 text-xs tracking-[0.15em] uppercase text-background transition-all hover:bg-amber-light"
                  >
                    Buy Tickets
                  </a>
                  <a
                    href="#"
                    className="rounded-sm border border-cream/20 px-6 py-2.5 text-xs tracking-[0.15em] uppercase text-cream transition-all hover:border-cream/50"
                  >
                    Book Table
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
