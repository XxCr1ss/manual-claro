'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Target, Users, BookOpen } from 'lucide-react';

const features = [
    {
        icon: Lightbulb,
        title: 'Guías Paso a Paso',
        description: 'Cada proceso está dividido en pasos claros con imágenes interactivas de la aplicación real.',
    },
    {
        icon: Target,
        title: 'Hotspots Interactivos',
        description: 'Haz clic directamente en las áreas marcadas de la pantalla para avanzar en el flujo.',
    },
    {
        icon: Users,
        title: 'Para Todos los Usuarios',
        description: 'Desde usuarios nuevos hasta avanzados, este manual cubre todos los niveles de experiencia.',
    },
    {
        icon: BookOpen,
        title: 'Documentación Completa',
        description: 'Cubre los procesos más importantes de la aplicación Mi Claro de forma estructurada.',
    },
];

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1 },
    }),
};

export default function IntroSection() {
    return (
        <section id="introduccion" className="relative py-28 px-4 overflow-hidden">
            {/* Decorative line */}
            <div className="absolute top-0 left-0 right-0 section-divider" />

            {/* Background accent */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-5 rounded-full"
                style={{ background: 'radial-gradient(ellipse, #e8002d 0%, transparent 70%)', filter: 'blur(80px)' }} />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="badge mx-auto mb-6"
                    >
                        Introducción
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white mb-6"
                    >
                        ¿Para qué sirve este{' '}
                        <span className="gradient-text-red">manual?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
                    >
                        Este manual interactivo ha sido creado para guiarte en el uso de la aplicación{' '}
                        <span className="text-white font-semibold">Mi Claro</span>. Aquí encontrarás instrucciones
                        detalladas para realizar las operaciones más comunes de forma rápida y sin complicaciones.
                        Desde instalar la aplicación hasta pagar tus facturas, este manual lo cubre todo.
                    </motion.p>
                </div>

                {/* Intro text block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="glass rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden"
                >
                    {/* Red accent line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl"
                        style={{ background: 'linear-gradient(180deg, #e8002d 0%, transparent 100%)' }} />

                    {/* Shine effect overlay */}
                    <div className="absolute inset-0 shine rounded-3xl" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                La aplicación <span className="gradient-text-red">Mi Claro</span>
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Mi Claro es la aplicación oficial de Claro para gestionar todos tus servicios en un solo lugar.
                                Con ella puedes ver y pagar tus facturas, revisar tu consumo, recargar saldo, contratar nuevos
                                servicios y mucho más.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Este manual te acompaña de principio a fin con <span className="text-white">pantallas reales</span> de la
                                aplicación y puntos interactivos que simulan exactamente dónde debes tocar en tu dispositivo.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: 'iOS', label: 'App Store' },
                                { value: 'Android', label: 'Google Play' },
                                { value: 'Gratis', label: 'Descarga' },
                                { value: '24/7', label: 'Disponible' },
                            ].map(({ value, label }) => (
                                <div key={label}
                                    className="rounded-2xl p-4 text-center"
                                    style={{ background: 'rgba(232, 0, 45, 0.08)', border: '1px solid rgba(232, 0, 45, 0.15)' }}>
                                    <div className="text-2xl font-black text-white mb-1">{value}</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Features grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            custom={i}
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="glass rounded-2xl p-6 card-hover group"
                        >
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:glow-red-sm"
                                style={{ background: 'linear-gradient(135deg, rgba(232,0,45,0.2), rgba(232,0,45,0.05))', border: '1px solid rgba(232,0,45,0.2)' }}>
                                <feature.icon className="w-6 h-6 text-red-400" />
                            </div>
                            <h4 className="text-white font-bold text-lg mb-2">{feature.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 section-divider" />
        </section>
    );
}
