import Navbar from '@/components/home/Navbar';

export default function ApendicesPage() {
    return (
        <main className="relative min-h-screen pt-20">
            <Navbar />
            
            <section className="py-28 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="badge mb-6">Próximamente</div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                        Información <span className="gradient-text-red">Adicional</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                        Apéndices, documentación legal, y referencias externas.
                    </p>
                    
                    <div className="mt-16 glass p-10 rounded-3xl text-center">
                        <p className="text-white text-xl">🚧 Esta sección se encuentra en construcción 🚧</p>
                    </div>
                </div>
            </section>
        </main>
    );
}