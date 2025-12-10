'use client';
import { useState } from "react";
import { ModeToggle } from "./mode";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
            <div>
                <a href="/" className="text-2xl font-bold text-gray-900 dark:text-white">Hsu ツ</a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul>
                    <li><a href="#about" className="hover:underline">about</a></li>
                    <li><a href="#skills" className="hover:underline">skills</a></li>
                    <li><a href="#projects" className="hover:underline">projects</a></li>
                    <li><a href="#designs" className="hover:underline">designs</a></li>
                    <li><a href="#contact" className="hover:underline">contact</a></li>
                </ul>
            </nav>

            {/* Right Section: ModeToggle + Hamburger on Mobile */}
            <div className="flex items-center space-x-4 md:hidden">
                <ModeToggle />
                <button
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    className="text-gray-700 dark:text-gray-200 transition duration-300"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Desktop ModeToggle */}
            <div className="hidden md:block">
                <ModeToggle />
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white dark:bg-black h-screen w-full md:hidden">
                    <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 dark:text-gray-200 h-screen pt-40">
                        <li><a href="#about" className="hover:underline" onClick={toggleMenu}>About</a></li>
                        <li><a href="#skills" className="hover:underline" onClick={toggleMenu}>Skills</a></li>
                        <li><a href="#projects" className="hover:underline" onClick={toggleMenu}>Projects</a></li>
                        <li><a href="#designs" className="hover:underline" onClick={toggleMenu}>Designs</a></li>
                        <li><a href="#contact" className="hover:underline" onClick={toggleMenu}>Contact</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
}
