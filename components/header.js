"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [["About", "#about"], ["Skills", "#skills"], ["Journey", "#experience"], ["Projects", "#projects"]];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const toggleRef = useRef(null);
  useEffect(() => {
    document.body.classList.toggle("nav-open", isOpen);
    if (!isOpen) return () => document.body.classList.remove("nav-open");
    const handleKey = (event) => {
      if (event.key === "Escape") { setIsOpen(false); toggleRef.current?.focus(); }
      if (event.key === "Tab") {
        const items = [...headerRef.current.querySelectorAll("a, button")].filter(item => item.getClientRects().length);
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    const desktop = window.matchMedia("(min-width: 621px)");
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false); };
    document.addEventListener("keydown", handleKey);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.classList.remove("nav-open");
      document.removeEventListener("keydown", handleKey);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen]);

  return <header ref={headerRef} className={`site-header ${isOpen ? "mobile-menu-open" : ""}`}>
    <div className="header-inner">
      <a className="logo" href="#home" aria-label="Hsu Thinzar, home" onClick={() => setIsOpen(false)}><span className="logo" style={{ color: "inherit" }}>Hsu<span>.</span></span></a>
      <button ref={toggleRef} className="menu-toggle" type="button" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} aria-controls="main-navigation">
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav id="main-navigation" className={`site-nav ${isOpen ? "is-open" : ""}`} aria-label="Main navigation">
        {links.map(([label, href]) => <a className={href === "#experience" ? "nav-journey" : undefined} key={href} href={href} onClick={() => setIsOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setIsOpen(false)}>Let&apos;s connect <span>↗</span></a>
      </nav>
    </div>
  </header>;
}
