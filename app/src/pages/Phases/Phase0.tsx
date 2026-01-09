import { GlassCard } from '../../components/ui/GlassCard';
import { AlertCircle, TrendingUp, Zap } from 'lucide-react';

export const Phase0 = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-12 pb-20">
            <header className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold tracking-tighter uppercase text-sm">
                    <Zap className="w-4 h-4" />
                    Fase 0
                </div>
                <h2 className="text-4xl font-black tracking-tight">Activación y Contexto</h2>
                <p className="text-xl text-slate-500">De Idea a Agente: Principios, Práctica y Ejecución Sistémica</p>
            </header>

            <section className="space-y-8">
                <GlassCard className="bg-slate-950 text-white border-primary/30 overflow-hidden relative group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <AlertCircle className="w-32 h-32" />
                    </div>
                    <div className="relative z-10 space-y-6">
                        <h3 className="text-2xl font-bold font-mono text-primary">2025: La Gran Disrupción</h3>
                        <div className="space-y-2 font-mono text-sm md:text-base">
                            <p className="flex items-center gap-3">
                                <span className="text-red-500">➜</span>
                                <span>172,000 despidos en tech</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-green-500">➜</span>
                                <span>$4.3 trillones de capitalización en NVIDIA</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-primary">➜</span>
                                <span>2026: Dominio de SISTEMA + HERRAMIENTAS</span>
                            </p>
                        </div>
                        <div className="pt-4 border-t border-white/10">
                            <p className="text-lg font-semibold italic text-slate-300">
                                "¿Generaste un MVP con IA en 2025 que FUNCIONÓ en producción?"
                            </p>
                        </div>
                    </div>
                </GlassCard>

                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed">
                        Bienvenidos. En 2025 pasó algo que cambió TODO. La IA dejó de ser un juego de laboratorio.
                        Hoy en día, herramientas como Claude, Cursor y Foundry pueden generar aplicaciones completas en HORAS.
                    </p>
                    <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 my-6">
                        <p className="font-bold text-amber-700 dark:text-amber-400 m-0">El Problema:</p>
                        <p className="italic m-0">70% de esos MVPs fallaron en producción.</p>
                    </div>
                    <p>
                        ¿Por qué? Porque generar código y generar <strong>SISTEMAS</strong> son cosas completamente diferentes.
                        Este taller no es sobre aprender herramientas. Es sobre aprender los PRINCIPIOS que hacen que esas herramientas funcionen.
                    </p>
                </div>

                <section className="grid md:grid-cols-2 gap-6">
                    <GlassCard className="space-y-3">
                        <TrendingUp className="text-primary w-8 h-8" />
                        <h4 className="font-bold">2025: Agentic AI</h4>
                        <p className="text-sm text-slate-500">Agentic AI masivo + infraestructura de primera clase.</p>
                    </GlassCard>
                    <GlassCard className="space-y-3 border-accent/20">
                        <Zap className="text-accent w-8 h-8" />
                        <h4 className="font-bold">2026: Quantum + IA</h4>
                        <p className="text-sm text-slate-500">Convergencia de Quantum, robots en fábricas y educación transformada.</p>
                    </GlassCard>
                </section>
            </section>
        </div>
    );
};
