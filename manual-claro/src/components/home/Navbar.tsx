'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { href: '/#introduccion', label: 'Introducción' },
    { href: '/#guias', label: 'Guías' },
    { href: '/pagar-factura', label: 'Pagar Factura' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-dark shadow-2xl shadow-black/50 py-3' : 'py-5'
                    }`}
            >
                <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group" id="nav-logo">
                        <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:glow-red-sm"
                            style={{ background: 'linear-gradient(135deg, #e8002d, #b5001f)' }}
                        >
                            <span className="text-white font-black text-lg">C</span>
                        </div>
                        <div>
                            <div className="text-white font-bold text-base leading-tight">Mi Claro</div>
                            <div className="text-gray-500 text-xs leading-tight">Manual de Usuario</div>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                id={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${pathname === item.href
                                        ? 'text-white bg-white/10'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA button */}
                    <div className="hidden md:block">
                        <Link
                            href="/#guias"
                            id="nav-cta"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-300 glow-red-sm hover:glow-red"
                            style={{ background: 'linear-gradient(135deg, #e8002d, #b5001f)' }}
                        >
                            <BookOpen className="w-4 h-4" />
                            Ver Guías
                        </Link>
                    </div>

                    {/* Mobile menu toggle */}
                    <button
                        id="nav-mobile-toggle"
                        className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>
            </header>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-[65px] left-4 right-4 z-40 glass-dark rounded-2xl p-4 md:hidden"
                    >
                        <div className="flex flex-col gap-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all font-medium"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                href="/#guias"
                                onClick={() => setMenuOpen(false)}
                                className="mt-2 px-4 py-3 rounded-xl text-center text-white font-bold text-sm"
                                style={{ background: 'linear-gradient(135deg, #e8002d, #b5001f)' }}
                            >
                                Ver Guías
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
