'use client';
import { useState } from "react";
import { ModeToggle } from "./mode";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
            <h1>
                <a href="/" className="text-2xl font-bold text-gray-900 dark:text-white">Hsu</a>
            </h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="flex items-center space-x-6 text-gray-700 dark:text-gray-200">
                    <li><a href="#about" className="hover:underline">About</a></li>
                    <li><a href="#skills" className="hover:underline">Skills</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
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
                <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 h-screen w-full md:hidden">
                    <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 dark:text-gray-200">
                        <li><a href="#about" className="hover:underline" onClick={toggleMenu}>About</a></li>
                        <li><a href="#skills" className="hover:underline" onClick={toggleMenu}>Skills</a></li>
                        <li><a href="#contact" className="hover:underline" onClick={toggleMenu}>Contact</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
}
