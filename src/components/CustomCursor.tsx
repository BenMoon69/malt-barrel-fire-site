"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch devices
    if (typeof window === "undefined" || "ontouchstart" in window) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot follows instantly
      gsap.set(dot, { x: mouseX, y: mouseY });

      // Ring trails smoothly
      gsap.to(ring, {
        x: mouseX,
        y: mouseY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const onEnterHoverable = () => {
      gsap.to(dot, { scale: 2.5, opacity: 0.5, duration: 0.3 });
      gsap.to(ring, { scale: 1.8, opacity: 0.3, borderColor: "rgba(212, 145, 26, 0.6)", duration: 0.3 });
    };

    const onLeaveHoverable = () => {
      gsap.to(dot, { scale: 1, opacity: 1, duration: 0.3 });
      gsap.to(ring, { scale: 1, opacity: 0.5, borderColor: "rgba(212, 145, 26, 0.3)", duration: 0.3 });
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    // Attach hover listeners to interactive elements
    const hoverables = document.querySelectorAll("a, button, [role='button']");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", onEnterHoverable);
      el.addEventListener("mouseleave", onLeaveHoverable);
    });

    // MutationObserver to handle dynamically added elements
    const observer = new MutationObserver(() => {
      const newHoverables = document.querySelectorAll("a, button, [role='button']");
      newHoverables.forEach((el) => {
        el.addEventListener("mouseenter", onEnterHoverable);
        el.addEventListener("mouseleave", onLeaveHoverable);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterHoverable);
        el.removeEventListener("mouseleave", onLeaveHoverable);
      });
      observer.disconnect();
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{
          width: 8,
          height: 8,
          marginLeft: -4,
          marginTop: -4,
          borderRadius: "50%",
          background: "#d4911a",
          boxShadow: "0 0 12px rgba(212, 145, 26, 0.6)",
          mixBlendMode: "screen",
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block"
        style={{
          width: 36,
          height: 36,
          marginLeft: -18,
          marginTop: -18,
          borderRadius: "50%",
          border: "1px solid rgba(212, 145, 26, 0.3)",
          opacity: 0.5,
          boxShadow: "0 0 20px rgba(212, 145, 26, 0.1)",
        }}
      />
    </>
  );
}
