"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function EmberParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const embers: HTMLDivElement[] = [];
    const EMBER_COUNT = 25;

    for (let i = 0; i < EMBER_COUNT; i++) {
      const ember = document.createElement("div");
      const size = Math.random() * 4 + 2;
      ember.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: radial-gradient(circle, #e8a832, #c0440e);
        pointer-events: none;
        opacity: 0;
        filter: blur(${size > 4 ? 1 : 0}px);
        box-shadow: 0 0 ${size * 2}px rgba(212, 145, 26, 0.4);
      `;
      container.appendChild(ember);
      embers.push(ember);
      animateEmber(ember);
    }

    function animateEmber(ember: HTMLDivElement) {
      const startX = Math.random() * 100;
      const duration = 3 + Math.random() * 5;
      const delay = Math.random() * 4;

      gsap.set(ember, {
        left: `${startX}%`,
        bottom: "-2%",
        opacity: 0,
      });

      gsap.to(ember, {
        y: -(window.innerHeight * (0.4 + Math.random() * 0.5)),
        x: (Math.random() - 0.5) * 120,
        opacity: 0.6 + Math.random() * 0.4,
        duration: duration * 0.3,
        delay,
        ease: "power1.out",
        onComplete: () => {
          gsap.to(ember, {
            y: `-=${window.innerHeight * 0.2}`,
            x: `+=${(Math.random() - 0.5) * 60}`,
            opacity: 0,
            duration: duration * 0.7,
            ease: "power1.in",
            onComplete: () => animateEmber(ember),
          });
        },
      });
    }

    return () => {
      embers.forEach((e) => {
        gsap.killTweensOf(e);
        e.remove();
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    />
  );
}
