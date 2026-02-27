'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Download,
    CreditCard,
    RefreshCw,
    Settings,
    Wifi,
    HelpCircle,
    ChevronRight,
    Clock,
    BarChart2,
} from 'lucide-react';

interface GuideCard {
    id: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    steps: number;
    duration: string;
    href: string;
    difficulty: 'Fácil' | 'Medio' | 'Avanzado';
    available: boolean;
    color: string;
}

const guides: GuideCard[] = [
    {
        id: 'payment',
        icon: CreditCard,
        title: 'Pagar Factura',
        description: 'Aprende a pagar tus facturas de forma rápida y segura desde la aplicación Mi Claro.',
        steps: 8,
        duration: '3 min',
        href: '/pagar-factura',
        difficulty: 'Fácil',
        available: true,
        color: '#e8002d',
    },
    {
        id: 'install',
        icon: Download,
        title: 'Instalar la Aplicación',
        description: 'Guía de descarga e instalación de Mi Claro para dispositivos iOS y Android.',
        steps: 5,
        duration: '5 min',
        href: '/instalar-app',
        difficulty: 'Fácil',
        available: false,
        color: '#6366f1',
    },
    {
        id: 'recharge',
        icon: RefreshCw,
        title: 'Recargar Saldo',
        description: 'Recarga el saldo de tu línea prepago de forma sencilla en pocos pasos.',
        steps: 6,
        duration: '2 min',
        href: '/recargar-saldo',
        difficulty: 'Fácil',
        available: false,
        color: '#10b981',
    },
    {
        id: 'consumption',
        icon: BarChart2,
        title: 'Ver Consumo',
        description: 'Consulta el detalle de tu consumo de datos, minutos y mensajes del período.',
        steps: 4,
        duration: '2 min',
        href: '/ver-consumo',
        difficulty: 'Fácil',
        available: false,
        color: '#f59e0b',
    },
    {
        id: 'settings',
        icon: Settings,
        title: 'Configurar Cuenta',
        description: 'Actualiza tus datos personales, cambia contraseña y personaliza notificaciones.',
        steps: 6,
        duration: '3 min',
        href: '/configurar-cuenta',
        difficulty: 'Medio',
        available: false,
        color: '#8b5cf6',
    },
    {
        id: 'support',
        icon: HelpCircle,
        title: 'Soporte Técnico',
        description: 'Cómo contactar al soporte, reportar problemas y hacer seguimiento de tus tickets.',
        steps: 5,
        duration: '3 min',
        href: '/soporte',
        difficulty: 'Fácil',
        available: false,
        color: '#ec4899',
    },
];

const difficultyColor: Record<string, string> = {
    Fácil: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    Medio: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    Avanzado: 'text-red-400 bg-red-400/10 border-red-400/20',
};

export default function GuidesSection() {
    return (
        <section id="guias" className="relative py-[60px] px-4 overflow-hidden min-h-screen">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 opacity-5"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, #e8002d, transparent 60%)' }} />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="badge mx-auto mb-6"
                    >
                        Guías del Manual
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white mb-4"
                    >
                        Selecciona una{' '}
                        <span className="gradient-text-red">guía</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Elige el proceso que deseas aprender. Cada guía incluye capturas reales e instrucciones interactivas.
                    </motion.p>
                </div>

                {/* Cards grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {guides.map((guide, i) => {
                        const Icon = guide.icon;
                        const isAvailable = guide.available;

                        return (
                            <motion.div
                                key={guide.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.07 }}
                            >
                                {isAvailable ? (
                                    <Link
                                        href={guide.href}
                                        id={`guide-${guide.id}`}
                                        className="group block glass rounded-2xl p-6 card-hover relative overflow-hidden"
                                    >
                                        <GuideCardContent guide={guide} Icon={Icon} />
                                    </Link>
                                ) : (
                                    <div
                                        className="group block glass rounded-2xl p-6 relative overflow-hidden opacity-60 cursor-not-allowed"
                                        title="Próximamente"
                                    >
                                        <GuideCardContent guide={guide} Icon={Icon} comingSoon />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-gray-600 text-sm mt-12"
                >
                    ✦ Las guías marcadas como &quot;Próximamente&quot; estarán disponibles en futuras actualizaciones.
                </motion.p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 section-divider" />
        </section>
    );
}

function GuideCardContent({
    guide,
    Icon,
    comingSoon = false,
}: {
    guide: GuideCard;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    comingSoon?: boolean;
}) {
    return (
        <>
            {/* Hover accent background */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at 0% 0%, ${guide.color}15, transparent 60%)` }}
            />

            {/* Coming soon ribbon */}
            {comingSoon && (
                <div className="absolute top-4 right-4 text-xs font-semibold px-2 py-1 rounded-md"
                    style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    Próximamente
                </div>
            )}

            <div className="relative z-10">
                {/* Icon */}
                <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                    style={{
                        background: `linear-gradient(135deg, ${guide.color}25, ${guide.color}08)`,
                        border: `1px solid ${guide.color}30`,
                    }}
                >
                    <Icon className="w-6 h-6" style={{ color: guide.color }} />
                </div>

                {/* Title & description */}
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-white transition-colors">
                    {guide.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{guide.description}</p>

                {/* Meta info */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-md border ${difficultyColor[guide.difficulty]}`}>
                            {guide.difficulty}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-600">
                            <Clock className="w-3 h-3" />
                            {guide.duration}
                        </span>
                        <span className="text-xs text-gray-600">
                            {guide.steps} pasos
                        </span>
                    </div>
                    {!comingSoon && (
                        <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                            style={{ background: `${guide.color}20`, border: `1px solid ${guide.color}30` }}>
                            <ChevronRight className="w-4 h-4" style={{ color: guide.color }} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
