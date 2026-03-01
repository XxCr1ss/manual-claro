'use client';

import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';

export default function InstallationSection() {
    return (
        <section id="instalacion" className="relative py-28 px-4 overflow-hidden">
            {/* Red accent glow */}
            <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-[0.05] rounded-full"
                style={{ background: 'radial-gradient(ellipse, #e8002d 0%, transparent 70%)', filter: 'blur(80px)' }} />

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="badge mx-auto mb-6"
                    >
                        Comenzar
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white mb-6"
                    >
                        Proceso de <span className="gradient-text-red">Instalación</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Descargar la aplicación Mi Claro es rápido y seguro. Sigue los pasos según tu sistema operativo.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* iOS */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="glass p-8 md:p-10 rounded-[2rem] relative overflow-hidden group hover-glass"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -z-10 group-hover:bg-red-500/10 transition-colors duration-500" />
                        
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white text-white group-hover:text-black transition-all duration-300">
                                <Apple className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold text-white">iOS</h3>
                        </div>

                        <ol className="list-decimal pl-5 space-y-4 text-gray-400">
                            <li>Abre la <strong>App Store</strong> en tu iPhone o iPad.</li>
                            <li>Toca el ícono de <strong>Búsqueda</strong> en la parte inferior.</li>
                            <li>Escribe &quot;Mi Claro&quot; y presiona la opción oficial desarrollada por Claro.</li>
                            <li>Toca <strong>Obtener</strong> (puede requerir tu Face ID, Touch ID o contraseña).</li>
                            <li>Una vez finalizado, busca el ícono de Mi Claro en tu pantalla de inicio y ábrelo.</li>
                        </ol>
                    </motion.div>

                    {/* Android */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="glass p-8 md:p-10 rounded-[2rem] relative overflow-hidden group hover-glass"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -z-10 group-hover:bg-red-500/10 transition-colors duration-500" />
                        
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-[#3DDC84] text-white group-hover:text-black transition-all duration-300">
                                <Play className="w-8 h-8" fill="currentColor" />
                            </div>
                            <h3 className="text-3xl font-bold text-white">Android</h3>
                        </div>

                        <ol className="list-decimal pl-5 space-y-4 text-gray-400">
                            <li>Abre la <strong>Google Play Store</strong> en tu dispositivo.</li>
                            <li>Toca la <strong>barra de búsqueda</strong> en la parte superior.</li>
                            <li>Escribe &quot;Mi Claro&quot; y selecciona la app oficial.</li>
                            <li>Presiona el botón verde <strong>Instalar</strong>.</li>
                            <li>Espera a que finalice la descarga e instalación, y pulsa <strong>Abrir</strong>.</li>
                        </ol>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}