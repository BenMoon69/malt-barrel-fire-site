"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const menuCategories = [
  {
    name: "Starters",
    items: [
      { name: "Smoked Bone Marrow", desc: "Charred sourdough, herb gremolata, flaked salt", price: "R145" },
      { name: "Ember-Roasted Beets", desc: "Whipped goat cheese, candied walnuts, aged balsamic", price: "R115" },
      { name: "Whiskey-Cured Salmon", desc: "Dill crème fraîche, pickled shallots, rye crisps", price: "R155" },
      { name: "Charred Octopus", desc: "Romesco, crispy potatoes, smoked paprika oil", price: "R175" },
      { name: "Fire-Grilled Prawns", desc: "Garlic butter, lemon, micro herbs, served tableside", price: "R195" },
    ],
  },
  {
    name: "Mains",
    items: [
      { name: "Tomahawk Ribeye", desc: "Bone-in, dry-aged 45 days, roasted garlic butter", price: "R495" },
      { name: "Wood-Fired Branzino", desc: "Lemon, capers, brown butter, charred broccolini", price: "R285" },
      { name: "Smoked Short Rib", desc: "12-hour oak smoke, bourbon glaze, truffle mash", price: "R345" },
      { name: "Cast Iron Duck Breast", desc: "Cherry gastrique, roasted root vegetables, jus", price: "R325" },
      { name: "Flame-Grilled Lamb Rack", desc: "Herb crust, mint chimichurri, roasted potatoes", price: "R385" },
    ],
  },
  {
    name: "Drinks",
    items: [
      { name: "Barrel & Fire Old Fashioned", desc: "House bourbon blend, smoked maple, Angostura", price: "R135" },
      { name: "Espresso Martini", desc: "Premium vodka, fresh espresso, coffee liqueur", price: "R125" },
      { name: "Whiskey Sour", desc: "Johnnie Walker, fresh lemon, egg white foam", price: "R120" },
      { name: "Macallan 18yr", desc: "Sherry oak, Highland Single Malt — neat or on rocks", price: "R295" },
      { name: "Signature Smoky Negroni", desc: "Gin, Campari, sweet vermouth, hickory smoke", price: "R145" },
    ],
  },
];

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState(0);
  const itemsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

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

  const animateItems = () => {
    if (!itemsRef.current) return;
    const items = itemsRef.current.querySelectorAll("[data-menu-item]");
    gsap.set(items, { y: 20, opacity: 0 });
    gsap.to(items, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.06,
    });
  };

  useEffect(() => {
    const timer = setTimeout(animateItems, 50);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const switchTab = (index: number) => {
    if (index === activeTab || !itemsRef.current) return;
    const items = itemsRef.current.querySelectorAll("[data-menu-item]");
    gsap.to(items, {
      y: -10,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
      stagger: 0.02,
      onComplete: () => setActiveTab(index),
    });
  };

  const current = menuCategories[activeTab];

  return (
    <main className="min-h-screen pt-24">
      {/* Hero strip */}
      <div className="relative h-[35vh] overflow-hidden">
        <Image
          src="/images/food/prawns.jpg"
          alt="Menu"
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
            Malt Barrel &amp; Fire
          </p>
          <h1 data-animate className="font-serif text-5xl font-bold text-cream md:text-7xl">
            The Menu
          </h1>
          <div
            data-animate
            className="mt-4 h-px w-20 bg-gradient-to-r from-transparent via-amber/50 to-transparent"
          />
        </div>
      </div>

      {/* Category tabs */}
      <div className="mx-auto max-w-4xl px-6 pt-12 md:px-12">
        <div className="flex flex-wrap justify-center gap-3">
          {menuCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => switchTab(i)}
              className={`rounded-sm px-8 py-3 text-xs tracking-[0.2em] uppercase transition-all cursor-pointer ${
                activeTab === i
                  ? "border border-amber bg-amber/10 text-amber"
                  : "border border-charcoal-light text-warm-gray hover:border-amber/30 hover:text-cream"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menu items */}
      <div ref={itemsRef} className="mx-auto max-w-3xl px-6 py-16 md:px-12">
        <h2 className="mb-10 text-center font-serif text-3xl text-amber-light">
          {current.name}
        </h2>
        <div className="space-y-0">
          {current.items.map((item) => (
            <div
              key={item.name}
              data-menu-item
              className="group flex items-baseline justify-between gap-6 border-b border-charcoal-light/60 py-7 transition-colors hover:border-amber/20"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-cream transition-colors group-hover:text-amber-light">
                  {item.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-warm-gray">
                  {item.desc}
                </p>
              </div>
              <span className="shrink-0 font-serif text-xl text-amber">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Note */}
      <div className="border-t border-charcoal-light py-12 text-center">
        <p className="text-xs text-warm-gray/50">
          Prices are in ZAR. Menu items may vary by location and season.
        </p>
      </div>
    </main>
  );
}
