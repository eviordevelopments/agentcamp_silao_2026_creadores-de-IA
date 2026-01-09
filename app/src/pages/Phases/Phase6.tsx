import { motion } from 'framer-motion';
import { Flag, Trophy, Target, Heart, ArrowRight } from 'lucide-react';
import { GlassCard } from '../../components/ui/GlassCard';

const principles = [
    {
        title: "Propósito Claro",
        desc: "Cada agente debe resolver un problema real y tangible para el usuario final.",
        icon: Target,
        color: "text-blue-500"
    },
    {
        title: "Ética en el Centro",
        desc: "Transparencia y responsabilidad en cada línea de código y decisión del modelo.",
        icon: Heart,
        color: "text-red-500"
    },
    {
        title: "Escalabilidad",
        desc: "Diseñado para crecer y adaptarse a necesidades cambiantes sin fricción.",
        icon: Trophy,
        color: "text-amber-500"
    }
];

export const Phase6 = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-20 py-12 px-6">
            <header className="space-y-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">
                    <Flag className="w-4 h-4" />
                    Fase 6: El Cierre
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-[var(--foreground)]">
                    Desbloqueando el <br />
                    <span className="text-gradient">Potencial Infinito</span>
                </h1>
                <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                    Has completado la ruta. Ahora eres un Creador de IA con las herramientas para transformar el sector productivo de Guanajuato.
                </p>
            </header>

            <section className="grid md:grid-cols-3 gap-6">
                {principles.map((p, i) => (
                    <motion.div
                        key={p.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <GlassCard className="h-full space-y-4">
                            <div className={`w-12 h-12 rounded-xl bg-slate-50 dark:bg-black flex items-center justify-center shadow-inner`}>
                                <p.icon className={`w-6 h-6 ${p.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--foreground)]">{p.title}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                {p.desc}
                            </p>
                        </GlassCard>
                    </motion.div>
                ))}
            </section>

            <section className="bg-primary/5 rounded-[3rem] p-12 text-center border border-primary/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="relative z-10 space-y-8">
                    <h2 className="text-3xl font-black text-[var(--foreground)]">¿Listo para el siguiente nivel?</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                        Únete a la comunidad de graduados, accede a recursos exclusivos y mantente al día con las últimas tendencias en agentes de IA autónomos.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="btn-premium flex items-center gap-2 group">
                            Unirse a la Comunidad
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <div className="pt-20 text-center space-y-4">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                    Gracias por ser parte de
                </p>
                <div className="flex justify-center items-center gap-4">
                    <img src="/assets/agentcamp_logo.png" alt="AgentCamp" className="h-12 w-auto" />
                    <div className="h-8 w-px bg-slate-200 dark:bg-white/10" />
                    <img src="/assets/main_logo.png" alt="Evior" className="h-10 w-auto" />
                </div>
            </div>

            {/* Footer / Credits */}
            <footer className="text-center space-y-10 pt-24 border-t border-slate-200 dark:border-white/5">
                <div className="flex flex-wrap justify-center items-center gap-16 opacity-90 hover:opacity-100 transition-opacity">
                    <a href="#" className="hover:scale-110 transition-transform"><img src="/assets/logo-emprendhec.png" alt="Sponsor" className="h-12 md:h-16" /></a>
                    <a href="https://eviordevelopments.com" className="hover:scale-110 transition-transform"><img src="/assets/logo-tutor-ia.png" alt="Sponsor" className="h-12 md:h-16" /></a>
                    <a href="https://conedumxcom.netlify.app" className="hover:scale-110 transition-transform"><img src="/assets/colaboracion-conedu-blue.png" alt="CONEDU" className="h-28 md:h-44" /></a>
                    <a href="https://eviordevelopments.com" className="hover:scale-110 transition-transform"><img src="/assets/colaboracion-evior.png" alt="Evior" className="h-28 md:h-44" /></a>
                    <a href="https://www.truedata.com.mx/" className="hover:scale-110 transition-transform"><img src="/assets/true-blue.png" alt="TrueData" className="h-12 md:h-16" /></a>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-10 leading-relaxed">
                    AgentCamp 2026 © Silao, Guanajuato. <br />
                    Powered by E-vior Developments & TrueData.
                </p>
            </footer>
        </div>
    );
};
