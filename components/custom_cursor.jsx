"use client";
import { useEffect, useRef } from "react";
import "./custom_cursor.css";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!finePointer || reducedMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    const mouse = { x: 0, y: 0 };
    const ringPos = { x: 0, y: 0 };

    let frameId;
    let active = false;

    document.documentElement.classList.add("has-custom-cursor");

    const animate = () => {
      // Smooth trailing effect
      ringPos.x += (mouse.x - ringPos.x) * 0.15;
      ringPos.y += (mouse.y - ringPos.y) * 0.15;

      ring.style.transform =
        `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`;

      frameId = requestAnimationFrame(animate);
    };

    const handleMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!active) {
        ringPos.x = mouse.x;
        ringPos.y = mouse.y;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        active = true;
      }

      dot.style.transform =
        `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;

      const isHovering = e.target.closest(
        "a, button, [role='button']"
      );

      ring.classList.toggle("ring-hover", !!isHovering);
    };

    const handleLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      active = false;
    };

    window.addEventListener("pointermove", handleMove);
    document.addEventListener("pointerleave", handleLeave);

    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerleave", handleLeave);
      cancelAnimationFrame(frameId);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
