import { useState } from 'react';
import { GlassCard } from '../../components/ui/GlassCard';
import {
    Network,
    Database,
    Workflow,
    MessageSquare,
    ChevronRight,
    Info,
    Github,
    ExternalLink,
    Layout,
    Zap,
    GraduationCap,
    Cpu,
    Layers,
    Bot
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const routes = [
    {
        id: 'system',
        icon: MessageSquare,
        title: "Ruta 1: System Agent",
        subtitle: "Azure AI Foundry",
        color: "blue",
        description: "Ideal para soporte al cliente 24/7 y automatización de procesos internos con gobernanza completa.",
        architecture: "Customer inquiry → System Agent (Foundry) → Tools (CRM, KB, Escalation) → Response",
        benefit: "ROI: 30x en costos, disponibilidad 24/7, mejora continua mediante logs de Foundry."
    },
    {
        id: 'multi',
        icon: Network,
        title: "Ruta 2: Multi-Agent Orchestration",
        subtitle: "CrewAI",
        color: "purple",
        description: "Orquestación de múltiples agentes especializados para tareas complejas como investigación de mercado.",
        architecture: "Task → Manager Agent → [Researcher Ag, Analyst Ag, Writer Ag] → Final Report",
        benefit: "Paralelización: Ejecuta tareas complejas 5x-10x más rápido que un humano o agente único."
    },
    {
        id: 'rag',
        icon: Database,
        title: "Ruta 3: RAG + Data-Centric",
        subtitle: "LlamaIndex",
        color: "green",
        description: "Búsqueda y síntesis de información sobre grandes volúmenes de documentos internos (Confluence, Drive).",
        architecture: "Query → Embedding → Vector DB Search → Context → LLM Synthesis → Answer",
        benefit: "Cero alucinaciones: Respuestas basadas estrictamente en tus propios documentos actualizados."
    },
    {
        id: 'custom',
        icon: Workflow,
        title: "Ruta 4: Custom Workflow",
        subtitle: "Claude Code + MCP",
        color: "orange",
        description: "Para MVPs extremadamente rápidos y startups con necesidades de integración plug-and-play.",
        architecture: "Problem → MCP Server (Standard Interface) → Claude Agent → Real-world Action",
        benefit: "Velocidad: MVP funcional de idea a producción en menos de una semana con mínimo overhead."
    }
];

export const Phase4 = () => {
    const [activeRoute, setActiveRoute] = useState(routes[0]);

    return (
        <div className="max-w-4xl mx-auto space-y-12 pb-20">
            <header className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold uppercase text-sm">
                    <Workflow className="w-4 h-4" />
                    Fase 4
                </div>
                <h2 className="text-4xl font-black tracking-tight">Rutas Especializadas</h2>
                <p className="text-xl text-slate-500">Arquitecturas del mundo real para diferentes necesidades.</p>
                <img src="/assets/architecture agents.png" alt="Multi-Agent Architecture" className="h-64 object-contain rounded-3xl border border-slate-200 dark:border-white/10" />
            </header>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {routes.map((route) => (
                    <button
                        key={route.id}
                        onClick={() => setActiveRoute(route)}
                        className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center gap-3 text-center
              ${activeRoute.id === route.id
                                ? 'bg-primary/10 border-primary ring-2 ring-primary/20 shadow-lg'
                                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-primary/50 opacity-60 hover:opacity-100'}`}
                    >
                        <route.icon className={`w-8 h-8 ${activeRoute.id === route.id ? 'text-primary' : 'text-slate-400'}`} />
                        <span className="text-xs font-bold leading-tight">{route.title}</span>
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeRoute.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    <GlassCard className="space-y-8 border-t-4" style={{ borderTopColor: activeRoute.color }}>
                        <div className="flex justify-between items-start">
                            <div className="space-y-1">
                                <h3 className="text-2xl font-black">{activeRoute.title}</h3>
                                <p className="text-primary font-bold text-sm tracking-widest uppercase">{activeRoute.subtitle}</p>
                            </div>
                            <div className={`p-3 rounded-xl bg-${activeRoute.color}-500/10`}>
                                <activeRoute.icon className={`w-6 h-6 text-${activeRoute.color}-500`} />
                            </div>
                        </div>

                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed italic">
                            "{activeRoute.description}"
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
                                <Info className="w-4 h-4" />
                                Arquitectura del Flujo
                            </div>
                            <div className="p-6 bg-slate-950 text-primary-light font-mono text-sm rounded-xl border border-white/5 leading-relaxed">
                                {activeRoute.architecture.split('→').map((node, i, arr) => (
                                    <span key={i}>
                                        <span className={i % 2 === 0 ? "text-white font-bold" : "text-primary/70"}>{node.trim()}</span>
                                        {i < arr.length - 1 && <span className="text-slate-600 mx-3">→</span>}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-xl flex gap-4 items-center">
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                <ChevronRight className="text-green-500 w-6 h-6" />
                            </div>
                            <p className="text-sm font-medium text-green-700 dark:text-green-400">
                                <span className="font-bold uppercase mr-2 text-xs opacity-70">Beneficio Lean:</span>
                                {activeRoute.benefit}
                            </p>
                        </div>
                    </GlassCard>
                </motion.div>
            </AnimatePresence>

            <section className="space-y-6">
                <h3 className="text-2xl font-bold">Resumen Comparativo</h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                            <tr>
                                <th className="px-6 py-4 font-bold">Ruta</th>
                                <th className="px-6 py-4 font-bold">Dificultad</th>
                                <th className="px-6 py-4 font-bold">Tiempo MVP</th>
                                <th className="px-6 py-4 font-bold text-primary">ROI Estimado</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            <tr>
                                <td className="px-6 py-4 font-medium">System Agent</td>
                                <td className="px-6 py-4">Media</td>
                                <td className="px-6 py-4">2-3 sem</td>
                                <td className="px-6 py-4 font-bold text-green-500">Muy Alto</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">Multi-Agent</td>
                                <td className="px-6 py-4">Alta</td>
                                <td className="px-6 py-4">3-4 sem</td>
                                <td className="px-6 py-4 font-bold text-green-500">Alto (Velocidad)</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">RAG</td>
                                <td className="px-6 py-4">Baja</td>
                                <td className="px-6 py-4">1-2 sem</td>
                                <td className="px-6 py-4 font-bold text-green-500">Inmediato</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">Custom MVP</td>
                                <td className="px-6 py-4">Baja</td>
                                <td className="px-6 py-4">1-2 sem</td>
                                <td className="px-6 py-4 font-bold text-green-500">Agilidad Total</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="space-y-8 pt-10 border-t border-slate-200 dark:border-white/10">
                <h3 className="text-2xl font-black flex items-center gap-3">
                    <ExternalLink className="text-primary w-6 h-6" />
                    Recursos y Enlaces del Ecosistema
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Gamma Presentation */}
                    <a
                        href="https://de-idea-a-agente-princip-xq8a6md.gamma.site"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-lg"
                    >
                        <div className="p-3 rounded-lg bg-pink-500/10 text-pink-500 group-hover:scale-110 transition-transform">
                            <Layout className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">Presentación: Idea a Agente</h4>
                            <p className="text-xs text-slate-500">Diapositivas oficiales del taller</p>
                        </div>
                        <ChevronRight className="ml-auto text-slate-400 group-hover:text-pink-500 transition-colors" />
                    </a>

                    {/* TrueData Semantic Suite */}
                    <a
                        href="https://semantic-suite.truedata.com.mx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-lg"
                    >
                        <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                            <Zap className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">TrueData Semantic Suite</h4>
                            <p className="text-xs text-slate-500">Plataforma de IA empresarial</p>
                        </div>
                        <ChevronRight className="ml-auto text-slate-400 group-hover:text-blue-500 transition-colors" />
                    </a>

                    {/* TrueData GitHub */}
                    <a
                        href="https://github.com/TRUEDATAMX/Semantic-Suite-Tutorial"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-lg"
                    >
                        <div className="p-3 rounded-lg bg-slate-800 text-white group-hover:scale-110 transition-transform">
                            <Github className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">Semantic Suite Tutorial</h4>
                            <p className="text-xs text-slate-500">Repositorio y código fuente</p>
                        </div>
                        <ChevronRight className="ml-auto text-slate-400 group-hover:text-white transition-colors" />
                    </a>

                    {/* AgentCamp Practices */}
                    <a
                        href="https://github.com/eviordevelopments/agentcamp_silao_2026_creadores-de-IA-practices"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-lg"
                    >
                        <div className="p-3 rounded-lg bg-slate-800 text-white group-hover:scale-110 transition-transform">
                            <Github className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">AgentCamp Practices</h4>
                            <p className="text-xs text-slate-500">Repositorio oficial del evento</p>
                        </div>
                        <ChevronRight className="ml-auto text-slate-400 group-hover:text-white transition-colors" />
                    </a>

                    {/* Microsoft Learn - Develop AI Agents */}
                    <a
                        href="https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-on-azure/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-lg"
                    >
                        <div className="p-3 rounded-lg bg-blue-600/10 text-blue-600 group-hover:scale-110 transition-transform">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">Develop AI Agents on Azure</h4>
                            <p className="text-xs text-slate-500">Learning Path Oficial</p>
                        </div>
                        <ChevronRight className="ml-auto text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </a>

                    {/* Azure AI Foundry */}
                    <a
                        href="https://learn.microsoft.com/en-us/azure/ai-foundry/?view=foundry-classic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-lg"
                    >
                        <div className="p-3 rounded-lg bg-purple-600/10 text-purple-600 group-hover:scale-110 transition-transform">
                            <Cpu className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">Azure AI Foundry Docs</h4>
                            <p className="text-xs text-slate-500">Documentación técnica</p>
                        </div>
                        <ChevronRight className="ml-auto text-slate-400 group-hover:text-purple-600 transition-colors" />
                    </a>

                    {/* Semantic Kernel */}
                    <a
                        href="https://learn.microsoft.com/en-us/training/modules/orchestrate-semantic-kernel-multi-agent-solution/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-lg"
                    >
                        <div className="p-3 rounded-lg bg-emerald-600/10 text-emerald-600 group-hover:scale-110 transition-transform">
                            <Layers className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">Semantic Kernel Multi-Agent</h4>
                            <p className="text-xs text-slate-500">Orquestación avanzada</p>
                        </div>
                        <ChevronRight className="ml-auto text-slate-400 group-hover:text-emerald-600 transition-colors" />
                    </a>

                    {/* Copilot Studio */}
                    <a
                        href="https://learn.microsoft.com/en-us/training/modules/build-copilot-ai-studio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-lg"
                    >
                        <div className="p-3 rounded-lg bg-sky-600/10 text-sky-600 group-hover:scale-110 transition-transform">
                            <Bot className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">Build Copilot with AI Studio</h4>
                            <p className="text-xs text-slate-500">Creación de asistentes</p>
                        </div>
                        <ChevronRight className="ml-auto text-slate-400 group-hover:text-sky-600 transition-colors" />
                    </a>
                </div>
            </section>
        </div>
    );
};
