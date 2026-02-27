'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, ExternalLink } from 'lucide-react';

export default function FooterSection() {
    return (
        <footer className="relative py-16 px-4 bg-black/40">
            <div className="absolute top-0 left-0 right-0 section-divider" />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-center gap-8"
                >
                    {/* Brand */}
                    <div className="flex items-center gap-4">
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center glow-red-sm"
                            style={{ background: 'linear-gradient(135deg, #e8002d, #b5001f)' }}
                        >
                            <span className="text-white font-black text-2xl">C</span>
                        </div>
                        <div>
                            <div className="text-white font-bold text-lg">Mi Claro</div>
                            <div className="text-gray-600 text-sm">Manual de Usuario Oficial</div>
                        </div>
                    </div>

                    {/* Contact links */}
                    <div className="flex flex-col sm:flex-row gap-4 text-sm">
                        <a
                            href="tel:*611"
                            className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            Línea de Ayuda: *611
                        </a>
                        <a
                            href="https://www.claro.com.co"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-500 hover:text-red-400 transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                            claro.com.co
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-10 pt-8 text-center text-gray-700 text-xs"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
                >
                    © {new Date().getFullYear()} Manual de Usuario Mi Claro · Todos los derechos reservados
                </motion.div>
            </div>
        </footer>
    );
}
