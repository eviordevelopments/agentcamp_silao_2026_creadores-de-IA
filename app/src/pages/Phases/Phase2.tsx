import { GlassCard } from '../../components/ui/GlassCard';
import { Cpu, Layers, ShieldCheck, Zap } from 'lucide-react';

export const Phase2 = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-12 pb-20">
            <header className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold uppercase text-sm">
                    <Layers className="w-4 h-4" />
                    Fase 2
                </div>
                <h2 className="text-4xl font-black tracking-tight">Teoría Acelerada</h2>
                <p className="text-xl text-slate-500">Fundamentos rigurosos para creadores técnicos.</p>
                <img src="/assets/metafora_arquitectura_transformer.jpg" alt="Transformer Architecture" className="h-64 w-full object-cover rounded-3xl border border-slate-200 dark:border-white/10" />
            </header>

            <div className="space-y-10">
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                        <Zap className="text-primary w-6 h-6" />
                        2.1 Fundamentos de IA
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <GlassCard className="space-y-4 border-l-4 border-l-primary">
                            <h4 className="font-bold text-lg">Tokenización y Embeddings</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                El modelo convierte palabras en números. "Hola" = [8234, 502, 1023].
                                Cada token es un punto en un espacio matemático de miles de dimensiones.
                            </p>
                            <ul className="text-xs space-y-2 font-mono bg-slate-100 dark:bg-slate-900 p-3 rounded-lg">
                                <li>• Límite de Kontext = Límite de Tokens</li>
                                <li>• Costo = $ por millón de tokens</li>
                                <li>• Optimización = LoRA + Cuantización</li>
                            </ul>
                        </GlassCard>

                        <GlassCard className="space-y-4 border-l-4 border-l-accent">
                            <h4 className="font-bold text-lg">Arquitectura Transformer</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Un LLM no "entiende" conceptos, entiende relaciones estadísticas.
                                Predice la siguiente palabra más probable mediante atención multicapa.
                            </p>
                            <div className="flex justify-between items-center px-4 py-2 bg-slate-100 dark:bg-slate-900 rounded-lg text-xs font-mono">
                                <span>Input</span>
                                <span>→</span>
                                <span className="text-primary">Attention</span>
                                <span>→</span>
                                <span>Output</span>
                            </div>
                        </GlassCard>
                    </div>
                </section>

                <section className="space-y-6">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                        <Cpu className="text-primary w-6 h-6" />
                        2.2 Sistemas Agenticos
                    </h3>
                    <GlassCard className="bg-slate-950 text-white border-white/10 p-0 overflow-hidden">
                        <div className="p-6 border-b border-white/10">
                            <h4 className="font-bold">Anatomía de un Agente</h4>
                        </div>
                        <div className="p-8 flex flex-col items-center space-y-4 font-mono text-sm">
                            <div className="w-full max-w-sm p-3 border border-dashed border-white/30 text-center">INPUT (Prompt + Context)</div>
                            <div className="w-1 h-4 bg-primary" />
                            <div className="w-full max-w-sm p-3 border border-primary text-center bg-primary/10">REASONING (LLM Thinking)</div>
                            <div className="w-1 h-4 bg-primary" />
                            <div className="w-full max-w-sm p-3 border border-white/30 text-center">TOOL CALLING (MCP Integration)</div>
                            <div className="w-1 h-4 bg-primary" />
                            <div className="w-full max-w-sm p-3 border border-green-500/50 text-center bg-green-500/10">ACTION (World Execution)</div>
                            <div className="w-1 h-4 bg-primary" />
                            <div className="w-full max-w-sm p-3 border border-amber-500/50 text-center">FEEDBACK LOOP</div>
                        </div>
                    </GlassCard>
                </section>

                <section className="space-y-6">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                        <ShieldCheck className="text-primary w-6 h-6" />
                        2.3 Ética y Sesgos
                    </h3>
                    <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            Los agentes toman decisiones que afectan vidas reales. Un modelo entrenado en datos sesgados
                            producirá salidas sesgadas, derivando en riesgos regulatorios y éticos profundos.
                        </p>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                                <p className="text-xs font-bold text-red-500">Auditoría</p>
                            </div>
                            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                                <p className="text-xs font-bold text-red-500">Explicabilidad</p>
                            </div>
                            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                                <p className="text-xs font-bold text-red-500">Monitoreo</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
