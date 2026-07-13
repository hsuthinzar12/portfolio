"use client";
import { useState, useEffect } from "react";
import { ModeToggle } from "./mode";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
        if (isOpen) {
            document.body.classList.add("nav-open");
        } else {
            document.body.classList.remove("nav-open");
        }

        return () => {
            document.body.classList.remove("nav-open");
        };
    }, [isOpen]);
  return (
    <header>
      <div className="h-inr">
        <div className="logo">
          <a href="/">Hsu</a>
        </div>
        <div className="sp-menu sp">
        <button
          className={`menu-trigger ${isOpen ? "is-active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="mode-toggle">
          <ModeToggle />
        </div>
        </div>
        <nav className={`gnav ${isOpen ? "is-open" : ""}`}>
          <ul className="gnav-list">
            <li>
              <a href="#about" onClick={closeMenu}>About</a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>Skills</a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
          <div className="mode-toggle pc">
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
