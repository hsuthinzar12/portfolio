"use client";

import { useState, useEffect } from "react";

export default function PageTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      href="#"
      className={`page-top-btn ${isVisible ? "is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to Top"
    >
      ↑
    </a>
  );
}
