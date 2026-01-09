import { GlassCard } from '../components/ui/GlassCard';
import { CodeCell } from '../components/notebook/CodeCell';
import { motion } from 'framer-motion';
import {
    Book,
    Code,
    Cpu,
    Server,
    Shield,
    Activity,
    Layers,
    ChevronRight,
    Zap,
    Lock,
    Search,
    Workflow
} from 'lucide-react';

export const TechnicalDeepDive = () => {
    return (
        <div className="max-w-5xl mx-auto space-y-24 pb-32">
            {/* Header */}
            <header className="space-y-8 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-accent/10 text-accent font-black uppercase tracking-[0.3em] text-[10px] border border-accent/20"
                >
                    <Book className="w-4 h-4" />
                    Technical Deep Dive
                </motion.div>

                <div className="space-y-4">
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                        Material <br />
                        <span className="text-gradient">Profundo</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl leading-relaxed">
                        La guía definitiva para la implementación de arquitecturas agénticas industriales.
                    </p>
                </div>
            </header>

            {/* Index Navigation */}
            <div className="flex flex-wrap gap-4">
                {[
                    { id: 'mcp', label: 'MCP Protocol', icon: Server },
                    { id: 'foundry', label: 'AI Foundry', icon: Cpu },
                    { id: 'observability', label: 'Observabilidad', icon: Activity },
                    { id: 'advanced', label: 'Retos Pro', icon: Code }
                ].map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-accent transition-all duration-300 text-sm font-bold shadow-sm"
                    >
                        <item.icon className="w-4 h-4 text-accent" />
                        {item.label}
                    </a>
                ))}
            </div>

            <section className="space-y-32">

                {/* 1. MCP Section */}
                <div id="mcp" className="space-y-12 pt-20">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-2xl bg-accent text-white shadow-xl shadow-accent/20">
                            <Server className="w-8 h-8" />
                        </div>
                        <h3 className="text-4xl font-black">1. Model Context Protocol (MCP)</h3>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                MCP es el estándar que permite que cualquier modelo de IA (Claude, GPT-4o, Gemini) se conecte a cualquier fuente de datos mediante JSON-RPC.
                            </p>

                            <GlassCard className="bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 space-y-6">
                                <h4 className="font-bold flex items-center gap-2 text-accent uppercase tracking-widest text-xs">Beneficios Clave</h4>
                                <ul className="space-y-4">
                                    {[
                                        "Unificación de herramientas para múltiples LLMs.",
                                        "Seguridad mejorada mediante local execution.",
                                        "Plug-and-play para data sources (SQL, GitHub, Slack)."
                                    ].map((text, i) => (
                                        <li key={i} className="flex gap-3 text-sm font-bold text-slate-500">
                                            <ChevronRight className="w-4 h-4 text-accent flex-shrink-0" />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </GlassCard>
                        </div>

                        <div className="space-y-6">
                            <CodeCell
                                title="mcp_server.py"
                                language="python"
                                code={`import mcp.server as mcp

server = mcp.Server("data-fetcher")

@server.tool("get_market_data")
def fetch_data(symbol: str):
    """Obtiene datos financieros en tiempo real."""
    return {"symbol": symbol, "price": 142.50}

if __name__ == "__main__":
    server.run(transport="stdio")`}
                            />
                            <p className="text-xs text-slate-400 italic text-center uppercase tracking-widest">
                                Implementación mínima de un servidor MCP via stdio.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. AI Foundry Section */}
                <div id="foundry" className="space-y-12">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/20">
                            <Cpu className="w-8 h-8" />
                        </div>
                        <h3 className="text-4xl font-black">2. Azure AI Foundry & Orchestration</h3>
                    </div>

                    <div className="space-y-8">
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                            La orquestación multi-agente industrial requiere una plataforma de gobernanza. Azure AI Foundry proporciona el "Control Plane" para gestionar flotas de agentes con seguridad.
                        </p>

                        <div className="grid lg:grid-cols-5 gap-10">
                            <div className="lg:col-span-3">
                                <CodeCell
                                    title="orchestrator.py"
                                    language="python"
                                    code={`from azure.ai.projects import AIProjectClient
from azure.identity import DefaultAzureCredential

client = AIProjectClient.from_connection_string(
    conn_str="AZURE_AI_FOUNDRY_URI",
    credential=DefaultAzureCredential()
)

# Definición de agentes especializados
researcher = client.agents.create(
    model="gpt-4o",
    instructions="Busca tendencias de manufactura en Gto.",
    tools=[{"type": "bing_search"}]
)

analyst = client.agents.create(
    model="gpt-4o",
    instructions="Crea reportes financieros basados en búsqueda.",
    tools=[{"type": "code_interpreter"}]
)`}
                                />
                            </div>

                            <GlassCard className="lg:col-span-2 p-10 bg-slate-950 text-white border-primary/20 space-y-8">
                                <h4 className="text-xl font-black border-b border-white/10 pb-4">Gobernanza Pro</h4>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <Lock className="text-primary w-6 h-6 flex-shrink-0" />
                                        <div className="space-y-1">
                                            <p className="font-bold">Managed Identity</p>
                                            <p className="text-xs text-slate-400">Sin contraseñas en el código. Auth nativo por roles.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Search className="text-primary w-6 h-6 flex-shrink-0" />
                                        <div className="space-y-1">
                                            <p className="font-bold">Full Traceability</p>
                                            <p className="text-xs text-slate-400">Cada llamada al LLM queda registrada para auditoría.</p>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                    </div>
                </div>

                {/* 3. Observability Section */}
                <div id="observability" className="space-y-12">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-2xl bg-green-500 text-white shadow-xl shadow-green-500/20">
                            <Activity className="w-8 h-8" />
                        </div>
                        <h3 className="text-4xl font-black">3. Observabilidad & DevOps</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Traces (Traza)",
                                desc: "Seguimiento de cada 'pensamiento' y acción del agente. Vital para entender por qué un agente tomó una ruta equivocada.",
                                icon: Workflow
                            },
                            {
                                title: "Evaluación (Evalla)",
                                desc: "Tests automatizados de 'Groundness' y 'Relevance'. El agente debe responder basado solo en tus datos.",
                                icon: Shield
                            },
                            {
                                title: "Monitoring",
                                desc: "Dashboard de tokens consumidos, latencia y errores de tool-calling en tiempo real.",
                                icon: Layers
                            }
                        ].map((card, i) => (
                            <GlassCard key={i} className="p-10 space-y-6 border-slate-200 dark:border-white/5">
                                <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center">
                                    <card.icon className="w-6 h-6 text-slate-400" />
                                </div>
                                <h4 className="text-2xl font-black">{card.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">{card.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>

                {/* 4. Advanced Challenges */}
                <div id="advanced" className="space-y-12 pt-12 border-t border-slate-200 dark:border-white/5">
                    <div className="flex items-center gap-4">
                        <h3 className="text-4xl font-black">4. Retos Avanzados para Expertos</h3>
                    </div>

                    <div className="grid gap-10">
                        <GlassCard className="p-12 border-accent/20 bg-accent/[0.02] flex flex-col md:flex-row gap-12 items-center group">
                            <div className="flex-1 space-y-6">
                                <div className="flex items-center gap-3">
                                    <Zap className="text-accent w-6 h-6 animate-pulse" />
                                    <h4 className="text-3xl font-black">Reto: Agente Multi-Rol Distribuido</h4>
                                </div>
                                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Diseña un sistema que reciba tickets de Jira, analice la dificultad técnica, asigne a un desarrollador senior o junior basándose en su carga de trabajo (fetch via API de Jira), y reporte blockers a Slack automáticamente.
                                </p>
                                <div className="flex gap-4">
                                    <span className="px-5 py-2 rounded-full border border-accent/20 text-[10px] font-black uppercase text-accent">Dificultad: Senior</span>
                                    <span className="px-5 py-2 rounded-full border border-accent/20 text-[10px] font-black uppercase text-accent">Stack: Azure + Jira API</span>
                                </div>
                            </div>
                            <button className="btn-premium group-hover:scale-110 transition-transform">
                                Ver Solución Base
                            </button>
                        </GlassCard>
                    </div>
                </div>

            </section>
        </div>
    );
};
