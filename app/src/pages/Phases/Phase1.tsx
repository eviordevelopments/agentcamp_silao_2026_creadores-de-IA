import { useState } from 'react';
import { GlassCard } from '../../components/ui/GlassCard';
import { HelpCircle, ChevronRight, Brain, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const challenges = [
    {
        id: 1,
        title: "El Dilema del Vibecoding",
        description: "Un developer usó Cursor para generar una app de gestión de inventario en 2 días. Se ve perfecta. Pero después de 2 meses: colapsa bajo carga, nadie entiende el código, no hay tests y la deuda técnica es explosiva.",
        question: "¿Qué faltó en el SISTEMA que permitió que esto sucediera?",
        answers: ["Falta de testing", "Falta de arquitectura", "Falta de plan de escalabilidad", "Herramienta vs Ingeniería sistémica"]
    },
    {
        id: 2,
        title: "La Paradoja de la Automatización",
        description: "172,000 personas perdieron sus trabajos en 2025 por IA. Pero los salarios de especialistas en IA explotaron ($200-300k/año). La IA no eliminó trabajos: los CAMBIÓ.",
        question: "¿Qué habilidades necesitas para NO quedar fuera del juego?",
        answers: ["Pensamiento sistémico", "Liderazgo en IA", "Principios de ingeniería", "Capacidad de adaptación"]
    },
    {
        id: 3,
        title: "Elon Musk vs Iteración Lenta",
        description: "Elon dice: 'Razona desde primeros principios, no por analogía.' Un startup típico construye un MVP sin pensar en estructura.",
        question: "¿Cómo aplicas 'primeros principios' en desarrollo de agentes?",
        answers: ["Resolver el problema real primero", "Entender el sistema subyacente", "Identificar el apalancamiento (80/20)", "Diseñar antes de elegir la herramienta"]
    }
];

export const Phase1 = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-12 pb-20">
            <header className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold uppercase text-sm">
                    <Brain className="w-4 h-4" />
                    Fase 1
                </div>
                <h2 className="text-4xl font-black tracking-tight">Retos de Pensamiento Sistémico</h2>
                <p className="text-xl text-slate-500">Activar pensamiento divergente antes de construir.</p>
            </header>

            <div className="grid gap-8">
                {challenges.map((challenge) => (
                    <ChallengeCard key={challenge.id} challenge={challenge} />
                ))}
            </div>
        </div>
    );
};

const ChallengeCard = ({ challenge }: { challenge: typeof challenges[0] }) => {
    const [showSolution, setShowSolution] = useState(false);

    return (
        <GlassCard className="space-y-6">
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="text-primary w-6 h-6" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-bold">{challenge.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic border-l-2 border-slate-200 dark:border-slate-800 pl-4">
                        "{challenge.description}"
                    </p>
                </div>
            </div>

            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-xl">
                <p className="font-bold text-sm uppercase tracking-wider text-slate-500 mb-2">Pregunta:</p>
                <p className="text-lg font-medium">{challenge.question}</p>
            </div>

            <div className="flex justify-end">
                <button
                    onClick={() => setShowSolution(!showSolution)}
                    className="flex items-center gap-2 text-primary font-bold text-sm hover:underline"
                >
                    <Lightbulb className="w-4 h-4" />
                    {showSolution ? "Ocultar Análisis" : "Revelar Análisis Técnico"}
                </button>
            </div>

            <AnimatePresence>
                {showSolution && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-3">
                            {challenge.answers.map((answer, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-white/5 p-3 rounded-lg border border-white/10">
                                    <ChevronRight className="w-4 h-4 text-primary" />
                                    {answer}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </GlassCard>
    );
};
