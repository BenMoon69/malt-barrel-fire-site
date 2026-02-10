"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const menuData = [
  {
    category: "Starters",
    items: [
      { name: "Smoked Bone Marrow", desc: "Charred sourdough, herb gremolata, flaked salt", price: "$18" },
      { name: "Ember-Roasted Beets", desc: "Whipped goat cheese, candied walnuts, aged balsamic", price: "$15" },
      { name: "Whiskey-Cured Salmon", desc: "Dill crème fraîche, pickled shallots, rye crisps", price: "$19" },
      { name: "Charred Octopus", desc: "Romesco, crispy potatoes, smoked paprika oil", price: "$22" },
    ],
  },
  {
    category: "Mains",
    items: [
      { name: "36oz Tomahawk Ribeye", desc: "Bone-in, dry-aged 45 days, roasted garlic butter", price: "$89" },
      { name: "Wood-Fired Whole Branzino", desc: "Lemon, capers, brown butter, charred broccolini", price: "$42" },
      { name: "Smoked Short Rib", desc: "12-hour oak smoke, bourbon glaze, truffle mash", price: "$48" },
      { name: "Cast Iron Duck Breast", desc: "Cherry gastrique, roasted root vegetables, jus", price: "$44" },
    ],
  },
  {
    category: "Whiskey & Spirits",
    items: [
      { name: "Macallan 18", desc: "Sherry oak, Highland Single Malt", price: "$45" },
      { name: "Pappy Van Winkle 15yr", desc: "Kentucky Straight Bourbon", price: "$85" },
      { name: "Yamazaki 12", desc: "Japanese Single Malt Whisky", price: "$38" },
      { name: "Barrel & Fire Old Fashioned", desc: "House bourbon blend, smoked maple, Angostura", price: "$22" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Smoked Chocolate Torte", desc: "Mesquite-smoked dark chocolate, salted caramel, gold leaf", price: "$16" },
      { name: "Crème Brûlée", desc: "Tahitian vanilla, torched brown sugar, shortbread", price: "$14" },
      { name: "Whiskey Bread Pudding", desc: "Bourbon caramel, toasted pecans, vanilla ice cream", price: "$15" },
    ],
  },
];

interface MenuOverlayProps {
  onClose: () => void;
}

export default function MenuOverlay({ onClose }: MenuOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const content = contentRef.current;
    if (!overlay || !content) return;

    gsap.set(overlay, { scale: 0.8, opacity: 0 });
    gsap.set(content, { y: 40, opacity: 0 });

    const tl = gsap.timeline();
    tl.to(overlay, { scale: 1, opacity: 1, duration: 0.6, ease: "power3.out" });
    tl.to(content, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.2");
  }, []);

  const handleClose = () => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    gsap.to(overlay, {
      scale: 0.8,
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",
      onComplete: onClose,
    });
  };

  return (
    <div ref={overlayRef} className="menu-overlay">
      <div className="min-h-screen px-6 py-20 md:px-16 lg:px-32">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="fixed top-6 right-6 z-110 flex h-12 w-12 items-center justify-center rounded-full border border-amber/30 text-cream transition-colors hover:border-amber hover:text-amber cursor-pointer"
          aria-label="Close menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="4" x2="16" y2="16" />
            <line x1="16" y1="4" x2="4" y2="16" />
          </svg>
        </button>

        <div ref={contentRef}>
          {/* Header */}
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm tracking-[0.3em] uppercase text-amber">Malt Barrel & Fire</p>
            <h2 className="font-serif text-5xl font-bold text-cream md:text-6xl">The Menu</h2>
            <div className="mx-auto mt-6 h-px w-24 bg-amber/40" />
          </div>

          {/* Menu sections */}
          <div className="mx-auto max-w-4xl space-y-16">
            {menuData.map((section) => (
              <div key={section.category}>
                <h3 className="mb-8 text-center font-serif text-3xl text-amber-light">{section.category}</h3>
                <div className="space-y-6">
                  {section.items.map((item) => (
                    <div key={item.name} className="flex items-baseline justify-between gap-4 border-b border-charcoal-light pb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-cream">{item.name}</h4>
                        <p className="mt-1 text-sm text-warm-gray">{item.desc}</p>
                      </div>
                      <span className="shrink-0 font-serif text-lg text-amber">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-20 text-center">
            <p className="text-sm text-warm-gray">
              All meats are sourced from local farms. Consuming raw or undercooked meats may increase your risk of foodborne illness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
