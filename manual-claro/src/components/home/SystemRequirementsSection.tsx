'use client';

import { motion } from 'framer-motion';
import { Smartphone, MonitorPlay, Wifi, Cpu } from 'lucide-react';

const requirements = [
    {
        icon: Smartphone,
        title: 'Android',
        description: 'Requiere Android 8.0 o superior. 100 MB de espacio de almacenamiento disponible.',
    },
    {
        icon: MonitorPlay,
        title: 'iOS',
        description: 'Requiere iOS 13.0 o superior. Compatible con iPhone, iPad y iPod touch. 150 MB de espacio.',
    },
    {
        icon: Wifi,
        title: 'Conexión a Internet',
        description: 'Recomendada conexión Wi-Fi, 4G o 5G para un funcionamiento óptimo de las consultas y transacciones.',
    },
    {
        icon: Cpu,
        title: 'Rendimiento recomendado',
        description: '1 GB de memoria RAM como mínimo para asegurar una experiencia fluida sin interrupciones.',
    }
];

export default function SystemRequirementsSection() {
    return (
        <section id="requisitos" className="relative py-28 px-4 overflow-hidden">
            {/* Background accent */}
            <div className="absolute right-1/4 top-1/4 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] rounded-full"
                style={{ background: 'radial-gradient(ellipse, #ffffff 0%, transparent 70%)', filter: 'blur(100px)' }} />

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="badge mx-auto mb-6"
                    >
                        Preparación
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white mb-6"
                    >
                        Requisitos del <span className="gradient-text-red">Sistema</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Asegúrate de que tu dispositivo cumpla con las especificaciones mínimas para disfrutar de 
                        la mejor experiencia al usar Mi Claro.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {requirements.map((req, index) => {
                        const Icon = req.icon;
                        return (
                            <motion.div
                                key={req.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass hover-glass p-8 rounded-3xl text-center group transition-all"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 text-red-500 mb-6 group-hover:bg-red-500/10 group-hover:scale-110 transition-all duration-300">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">{req.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{req.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}