'use client';

import { motion } from 'framer-motion';
import { RefreshCcw, Activity, ShieldCheck } from 'lucide-react';

export default function MaintenanceSection() {
    return (
        <section id="mantenimiento" className="relative py-28 px-4 overflow-hidden">
            {/* Background accent */}
            <div className="absolute right-1/2 top-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-[0.05] rounded-full"
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
                        Soporte Técnico
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white mb-6"
                    >
                        Mantenimiento y <span className="gradient-text-red">Actualizaciones</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
                    >
                        Para asegurar el correcto funcionamiento, seguridad y aprovechar las nuevas funciones 
                        de la aplicación Mi Claro, es vital mantenerla siempre actualizada.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Actualizaciones Automáticas */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="glass hover-glass p-8 md:p-10 rounded-3xl"
                    >
                        <RefreshCcw className="w-10 h-10 text-red-500 mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Actualizaciones automáticas</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Si tienes tu dispositivo configurado para recibir actualizaciones en segundo plano, la 
                            aplicación Mi Claro <strong className="text-white">se actualizará automáticamente</strong>. 
                            Sin embargo, se recomienda verificar que tienes la función activa en la configuración de 
                            tu App Store o Google Play Store.
                        </p>
                    </motion.div>

                    {/* Actualización Manual */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass hover-glass p-8 md:p-10 rounded-3xl relative overflow-hidden group"
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Activity className="w-10 h-10 text-red-500 mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Actualizaciones manuales</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Para forzar una actualización manual, dirígete a la tienda de aplicaciones respectiva de tu dispositivo, busca 
                            <strong className="text-white"> &quot;Mi Claro&quot;</strong> y, si hay una nueva versión disponible, el 
                            botón &quot;Actualizar&quot; te aparecerá disponible en lugar del botón &quot;Abrir&quot;. Púlsalo y espera.
                        </p>
                    </motion.div>

                    {/* ¿Por qué actualizar? */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="glass hover-glass p-8 md:p-10 rounded-3xl"
                    >
                        <ShieldCheck className="w-10 h-10 text-red-500 mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">¿Por qué es importante?</h3>
                        <ul className="text-gray-400 space-y-3 text-sm list-disc pl-5">
                            <li>Integración de nuevas funciones de pago y consulta.</li>
                            <li>Corrección de <strong className="text-white">errores comunes</strong> (Bugs).</li>
                            <li>Mejora sustancial en la <strong className="text-white">seguridad</strong> de tu cuenta y privacidad.</li>
                            <li>Optimización de rendimiento y menor consumo de datos.</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}