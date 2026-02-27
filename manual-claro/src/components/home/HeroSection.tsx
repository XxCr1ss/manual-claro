'use client';

import { motion } from 'framer-motion';
import { BookOpen, ChevronDown, Shield, Zap, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="relative py-20 min-h-screen flex flex-col items-center justify-center overflow-hidden animated-gradient mesh-gradient">
            {/* Background grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Red glow blob top */}
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20"
                style={{ background: 'radial-gradient(ellipse, #e8002d 0%, transparent 70%)', filter: 'blur(60px)' }} />

            {/* Red glow blob bottom right */}
            <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-10"
                style={{ background: 'radial-gradient(ellipse, #e8002d 0%, transparent 70%)', filter: 'blur(80px)' }} />

            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="badge mb-8"
                >
                    <Star className="w-3 h-3 fill-current" />
                    Documentación Oficial
                    <Star className="w-3 h-3 fill-current" />
                </motion.div>

                {/* Logo / Brand */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
                    className="relative mb-8 animate-float"
                >
                    {/* Pulse rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-red-600 rounded-2xl pulse-ring opacity-30" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-red-600 rounded-2xl pulse-ring opacity-20"
                            style={{ animationDelay: '0.5s' }} />
                    </div>

                    <div className="relative w-24 h-24 glow-red rounded-2xl flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, #c9c9c9 0%, #c9c9c9 100%)' }}>
                        <Image src="/claro-logo.png" alt="Logo" width={128} height={128} />
                    </div>
                </motion.div>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">
                        <span className="text-white">Manual de</span>
                        <br />
                        <span className="gradient-text-red">Usuario</span>
                        <br />
                        <span className="text-white text-4xl md:text-5xl font-bold opacity-90">Mi Claro</span>
                    </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Tu guía completa e interactiva para dominar la aplicación <strong className="text-white">Mi Claro</strong>.
                    Aprende paso a paso cómo gestionar tus servicios, pagar facturas y mucho más.
                </motion.p>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-center gap-8 mb-12 flex-wrap justify-center"
                >
                    {[
                        { icon: BookOpen, label: 'Guías', value: '4+' },
                        { icon: Zap, label: 'Pasos interactivos', value: '30+' },
                        { icon: Shield, label: 'Procesos cubiertos', value: '100%' },
                    ].map(({ icon: Icon, label, value }) => (
                        <div key={label} className="flex flex-col items-center gap-1">
                            <div className="flex items-center gap-2">
                                <Icon className="w-4 h-4 text-red-500" />
                                <span className="text-2xl font-bold text-white">{value}</span>
                            </div>
                            <span className="text-xs text-gray-500 uppercase tracking-widest">{label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a
                        href="#guias"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all duration-300 glow-red-sm hover:glow-red"
                        style={{ background: 'linear-gradient(135deg, #e8002d 0%, #b5001f 100%)' }}
                    >
                        <BookOpen className="w-5 h-5" />
                        Explorar el Manual
                    </a>
                    <a
                        href="#introduccion"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-lg glass card-hover"
                    >
                        Leer Introducción
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
            >
                <span className="text-xs uppercase tracking-widest">Desplázate</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
}
