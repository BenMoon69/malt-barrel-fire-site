"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { locations } from "@/content/locations";
import { getMenusForLocation, type MenuType, type MenuCategory } from "@/content/menus";

export default function MenuPage() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0].slug);
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const itemsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const menuTabsRef = useRef<HTMLDivElement>(null);

  const availableMenus = getMenusForLocation(selectedLocation);
  const currentMenu = availableMenus[activeMenuIndex] || availableMenus[0];
  const currentCategory = currentMenu?.categories[activeCategoryIndex] || currentMenu?.categories[0];

  // Reset to first menu/category when location changes
  useEffect(() => {
    setActiveMenuIndex(0);
    setActiveCategoryIndex(0);
  }, [selectedLocation]);

  // Reset category when menu type changes
  useEffect(() => {
    setActiveCategoryIndex(0);
  }, [activeMenuIndex]);

  // Header entrance animation
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

  // Animate menu items on change
  useEffect(() => {
    if (!itemsRef.current) return;
    const items = itemsRef.current.querySelectorAll("[data-menu-item]");
    gsap.set(items, { x: 30, opacity: 0 });
    gsap.to(items, {
      x: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.04,
    });
  }, [activeCategoryIndex, activeMenuIndex, selectedLocation]);

  const selectedLoc = locations.find((l) => l.slug === selectedLocation)!;

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

      <div className="mx-auto max-w-5xl px-6 pt-12 md:px-12">
        {/* Location selector */}
        <div className="mb-10">
          <p className="mb-4 text-center text-xs tracking-[0.3em] uppercase text-warm-gray/60">
            Select Location
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((loc) => (
              <button
                key={loc.slug}
                onClick={() => setSelectedLocation(loc.slug)}
                className={`cursor-pointer rounded-sm px-6 py-2.5 text-xs tracking-[0.15em] uppercase transition-all ${
                  selectedLocation === loc.slug
                    ? "border border-amber bg-amber/10 text-amber"
                    : "border border-charcoal-light text-warm-gray hover:border-amber/30 hover:text-cream"
                }`}
              >
                {loc.name}
              </button>
            ))}
          </div>
        </div>

        {/* Available menus notice */}
        <div className="mb-8 text-center">
          <p className="text-sm text-warm-gray/50">
            Showing menus available at <span className="text-cream">{selectedLoc.name}</span>
            {selectedLoc.menus.sushi && " — including Sushi"}
            {selectedLoc.menus.signature && " & Signature Menu"}
          </p>
        </div>

        {/* Menu type tabs */}
        <div ref={menuTabsRef} className="flex flex-wrap justify-center gap-3 border-b border-charcoal-light pb-6">
          {availableMenus.map((menu, i) => (
            <button
              key={menu.id}
              onClick={() => setActiveMenuIndex(i)}
              className={`cursor-pointer rounded-sm px-8 py-3 text-xs tracking-[0.2em] uppercase transition-all ${
                activeMenuIndex === i
                  ? "border border-amber bg-amber/10 text-amber"
                  : "border border-charcoal-light text-warm-gray hover:border-amber/30 hover:text-cream"
              }`}
            >
              {menu.name}
            </button>
          ))}
        </div>

        {/* Menu description */}
        <p className="mt-6 text-center text-sm text-warm-gray/60 italic">
          {currentMenu?.description}
        </p>

        {/* Category sub-tabs */}
        {currentMenu && currentMenu.categories.length > 1 && (
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {currentMenu.categories.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryIndex(i)}
                className={`cursor-pointer rounded-sm px-5 py-2 text-[11px] tracking-[0.15em] uppercase transition-all ${
                  activeCategoryIndex === i
                    ? "text-amber border-b-2 border-amber"
                    : "text-warm-gray/60 hover:text-cream"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* Menu items */}
        <div ref={itemsRef} className="mx-auto max-w-3xl py-12">
          <h2 className="mb-10 text-center font-serif text-3xl text-amber-light">
            {currentCategory?.name}
          </h2>
          <div className="space-y-0">
            {currentCategory?.items.map((item) => (
              <div
                key={item.name}
                data-menu-item
                className="group flex items-baseline justify-between gap-6 border-b border-charcoal-light/60 py-7 transition-all duration-300 hover:border-amber/20 hover:bg-charcoal/20 hover:px-4 rounded-sm"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-cream transition-colors group-hover:text-amber-light">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-warm-gray">
                    {item.desc}
                  </p>
                </div>
                <span className="shrink-0 font-serif text-xl text-amber transition-all duration-300 group-hover:text-amber-light group-hover:drop-shadow-[0_0_8px_rgba(232,168,50,0.4)]">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="border-t border-charcoal-light py-12 text-center">
          <p className="text-xs text-warm-gray/50">
            Prices are in ZAR. Menu items and availability may vary by location and season.
          </p>
        </div>
      </div>
    </main>
  );
}
