import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FloatingArticleSidebar } from '../../components/ui/FloatingArticleSidebar';
import { Sparkles, Terminal, Box, Cloud, Shield, Database, ChevronRight } from 'lucide-react';

const sections = [
    { id: 'definition', title: 'I. Qué es IA Agéntica 2026' },
    { id: 'evolution', title: 'II. Evolución: De Chatbots a Agentes' },
    { id: 'microsoft-framework', title: 'III. Microsoft Agent Framework' },
    { id: 'foundry-azure', title: 'IV. Azure AI Foundry' },
    { id: 'palantir', title: 'V. Palantir Foundry y OSDK' },
    { id: 'other-sdks', title: 'VI. SDKs: AWS, Google, Claude' }
];

export const AgenticIAArticle = () => {
    const [activeSection, setActiveSection] = useState('definition');

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map(s => document.getElementById(s.id));
            const scrollPosition = window.scrollY + 150;

            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const el = sectionElements[i];
                if (el && el.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative flex min-h-screen">
            <FloatingArticleSidebar sections={sections} activeSection={activeSection} />

            <div className="flex-1 max-w-4xl mx-auto py-20 px-6 content-area">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-12"
                >
                    {/* Header */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-black uppercase tracking-widest border border-accent/20">
                            <Sparkles className="w-4 h-4" />
                            Evolución 2026: IA Agéntica y Prototipado
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-[var(--foreground)] leading-[1.1]">
                            Del Chatbot al <span className="text-gradient">Agente Inteligente</span>
                        </h1>
                        <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl">
                            La IA agéntica deja de ser reactiva para convertirse en sistemas proactivos que planean, colaboran y operan dentro del ciclo de vida del software.
                        </p>
                    </div>

                    <img src="/assets/architecture agents.png" alt="Agentic Architecture" className="article-img" />

                    {/* Section I */}
                    <section id="definition" className="scroll-mt-32">
                        <h2 className="article-h2">I. Qué es IA Agéntica en 2026</h2>
                        <div className="article-p">
                            Es una arquitectura donde los modelos actúan como agentes con <strong>objetivos, memoria, estado y capacidad de usar APIs</strong>, bases de datos y repositorios pipelines CI/CD.
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 my-10">
                            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/5">
                                <Terminal className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold mb-2">Planificación y Reflexión</h4>
                                <p className="text-sm opacity-70">Los agentes no solo ejecutan; razonan sobre sus propios pasos y corrigen errores en tiempo real.</p>
                            </div>
                            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/5">
                                <Box className="w-8 h-8 text-accent mb-4" />
                                <h4 className="font-bold mb-2">Orquestación Multi-Agente</h4>
                                <p className="text-sm opacity-70">Equipos virtuales de agentes colaborando en análisis, diseño, coding y testing.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section II: Evolution */}
                    <section id="evolution" className="scroll-mt-32 space-y-8">
                        <h2 className="article-h2">II. Evolución: De Chatbots a Sistemas Agénticos Autónomos</h2>
                        <div className="article-p">
                            La transición del 2024 al 2026 ha sido marcada por el paso de simples interfaces de chat (reactivas) a <strong>sistemas autónomos de agentes</strong> capaces de operar en segundo plano.
                        </div>

                        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/5">
                            <h4 className="font-bold mb-4 text-primary">Sistemas Inteligentes y de Toma de Decisiones</h4>
                            <p className="text-sm dark:text-slate-300 leading-relaxed">
                                El diseño de agentes modernos ya no se basa solo en un prompt, sino en arquitecturas de razonamiento (Chain-of-Thought, ReAct) que permiten la toma de decisiones dinámicas. Los agentes ahora diseñan sus propios sub-planes para alcanzar objetivos complejos.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xl font-bold">Ciclo de evolución en IA agéntica</h4>
                            <img
                                src="/assets/hype-cycle-para-la-ia-generativa-de-2025.png"
                                alt="Hype Cycle IA Agéntica 2025-2026"
                                className="article-img shadow-2xl"
                            />
                            <p className="text-xs text-center text-slate-500 italic">
                                Visualización de la madurez tecnológica: De la exageración a la productividad real en sistemas de agentes.
                            </p>
                        </div>
                    </section>

                    {/* Section III */}
                    <section id="microsoft-framework" className="scroll-mt-32">
                        <h2 className="article-h2">III. Microsoft Agentic Framework</h2>
                        <p className="article-p">
                            Microsoft está empujando una visión de <strong>Agentic DevOps</strong> unificada. El Microsoft Agent Framework es un SDK y runtime para construir agentes integrados en .NET y Python.
                        </p>
                        <div className="p-8 rounded-[2rem] bg-slate-900 border border-primary/20 bg-gradient-to-r from-blue-900/20 to-transparent">
                            <h4 className="font-bold text-blue-400 mb-4 flex items-center gap-2">
                                <Cloud className="w-5 h-5" /> Enterprise Readiness
                            </h4>
                            <ul className="space-y-4 text-sm text-slate-300">
                                <li className="flex gap-3">
                                    <ChevronRight className="text-primary flex-shrink-0" />
                                    <span><strong>Estado compartido:</strong> Persistencia de contexto entre sesiones.</span>
                                </li>
                                <li className="flex gap-3">
                                    <ChevronRight className="text-primary flex-shrink-0" />
                                    <span><strong>Políticas de Seguridad:</strong> Integración profunda con Entra ID y auditoría empresarial.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section IV */}
                    <section id="foundry-azure" className="scroll-mt-32">
                        <h2 className="article-h2">IV. Azure AI Foundry</h2>
                        <p className="article-p">
                            En Azure AI Foundry, el <strong>Agent Service SDK</strong> permite gestionar el ciclo de vida completo de un agente de software.
                        </p>
                        <div className="space-y-4 my-8">
                            <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/5 flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 font-bold shrink-0">1</div>
                                <p className="text-sm text-slate-500 dark:text-slate-400"><strong>Configuración Programática:</strong> Definir modelos GPT, herramientas y RAG mediante código.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/5 flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold shrink-0">2</div>
                                <p className="text-sm text-slate-500 dark:text-slate-400"><strong>Integración SDLC:</strong> Agentes que navegan repos, proponen PRs y respetan pipelines de CI/CD.</p>
                            </div>
                        </div>
                        <img src="/assets/agent.png" alt="Azure AI Agent" className="article-img max-w-sm mx-auto" />
                    </section>

                    {/* Section V */}
                    <section id="palantir" className="scroll-mt-32">
                        <h2 className="article-h2">V. Palantir Foundry y Ontology SDK</h2>
                        <p className="article-p">
                            Foundry se ha movido hacia un modelo donde el <strong>Ontology SDK</strong> y el Platform SDK se consumen vía agentes conectados por MCP.
                        </p>
                        <div className="p-10 rounded-[3rem] bg-black border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-20"><Database className="w-24 h-24" /></div>
                            <h4 className="text-xl font-bold mb-4">Gemelo Digital con Agentes</h4>
                            <p className="article-p">
                                Los agentes resumen el dominio operativo de la empresa sobre el grafo de datos, generando código OSDK seguro y alineado con las políticas de datos de la organización.
                            </p>
                        </div>
                    </section>

                    {/* Section VI */}
                    <section id="other-sdks" className="scroll-mt-32">
                        <h2 className="article-h2">VI. El Ecosistema Global: AWS, Google, Claude</h2>
                        <p className="article-p">Las Big Tech están convergiendo:</p>
                        <div className="grid md:grid-cols-3 gap-6 my-8">
                            <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/5 text-center">
                                <h5 className="font-bold mb-2">AWS Bedrock</h5>
                                <p className="text-xs opacity-60">Action groups y esquemas OpenAPI para llamadas a APIs.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/5 text-center">
                                <h5 className="font-bold mb-2">Google Vertex</h5>
                                <p className="text-xs opacity-60">Integración con RAG y orquestación masiva.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/5 text-center">
                                <h5 className="font-bold mb-2">Claude Agent</h5>
                                <p className="text-xs opacity-60">Uso de herramientas avanzado y sesiones persistentes.</p>
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <div className="bg-primary/10 p-10 rounded-[3rem] border border-primary/20 mt-12 flex flex-col md:flex-row gap-8 items-center">
                        <div className="space-y-4 flex-1">
                            <h4 className="text-2xl font-black">Conclusión SDLC 2026</h4>
                            <p className="text-slate-600 dark:text-slate-300">
                                Pasar de "copilots" a sistemas agénticos gobernados e integrados en el SDLC completo es la tendencia definitiva del año.
                            </p>
                            <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase">
                                <Shield className="w-4 h-4" /> Seguridad y Gobernanza Primero
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
