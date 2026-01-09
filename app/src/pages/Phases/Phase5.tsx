import { GlassCard } from '../../components/ui/GlassCard';
import { CodeCell } from '../../components/notebook/CodeCell';
import { Code2, Github, Layout, Play } from 'lucide-react';

export const Phase5 = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-12 pb-20">
            <header className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold uppercase text-sm">
                    <Code2 className="w-4 h-4" />
                    Fase 5
                </div>
                <h2 className="text-4xl font-black tracking-tight">Prototipado Guiado</h2>
                <p className="text-xl text-slate-500">Construye algo REAL en menos de 10 minutos.</p>
            </header>

            <section className="space-y-10">
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                        <Github className="text-primary w-6 h-6" />
                        5.1 Setup Pre-Taller
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                        Cada participante cuenta con un entorno pre-configurado en GitHub Codespaces que incluye todas las dependencias y templates necesarios.
                    </p>
                    <CodeCell
                        title="Project Starter"
                        language="bash"
                        code={`# Clonar el repositorio starter
git clone https://github.com/AgentCamp-Gto/agentcamp-starter

# Abrir en Codespaces y configurar entorno
cd agentcamp-starter
cp .env.example .env # Agrega tus API Keys`}
                    />
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                        <Layout className="text-primary w-6 h-6" />
                        5.2 Estructura del Template
                    </h3>
                    <GlassCard className="p-0 overflow-hidden border-slate-200 dark:border-slate-800">
                        <div className="bg-slate-50 dark:bg-slate-900 px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                            <span className="text-xs font-mono text-slate-500">Project Directory</span>
                        </div>
                        <div className="p-6 font-mono text-xs md:text-sm text-slate-600 dark:text-slate-300 space-y-1">
                            <p>agentcamp-starter/</p>
                            <p className="pl-4">├── ruta-1-system-agent/ <span className="text-slate-500"># Azure AI Foundry</span></p>
                            <p className="pl-4">├── ruta-2-multi-agent/ <span className="text-slate-500"># CrewAI Templates</span></p>
                            <p className="pl-4">├── ruta-3-rag/ <span className="text-slate-500"># LlamaIndex Project</span></p>
                            <p className="pl-4">├── ruta-4-custom/ <span className="text-slate-500"># AWS Lambda + MCP</span></p>
                            <p className="pl-4">└── README.md</p>
                        </div>
                    </GlassCard>
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                        <Play className="text-primary w-6 h-6 animate-pulse" />
                        5.3 Live Build Flow (10 min)
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
                            <div className="text-primary font-bold text-xs uppercase tracking-widest">Paso 1-4</div>
                            <h4 className="font-bold">Elección y Problema</h4>
                            <p className="text-sm text-slate-500">
                                Selecciona tu arquitectura y define un problema local (e.g. "Bot de soporte para PYMES en Silao").
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
                            <div className="text-primary font-bold text-xs uppercase tracking-widest">Paso 5-8</div>
                            <h4 className="font-bold">First Build</h4>
                            <p className="text-sm text-slate-500">
                                Modifica los archivos de configuración y lanza el agente inicial.
                            </p>
                            <CodeCell
                                language="bash"
                                code={`python main.py --task "Analiza manufactura en Gto"`}
                            />
                        </div>
                    </div>
                </div>

                <GlassCard className="bg-primary/5 border-primary/20 text-center space-y-4 py-12">
                    <h3 className="text-2xl font-bold">¿Listo para construir?</h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                        Accede al repositorio completo y comienza tu primer MVP siguiendo las guías paso a paso.
                    </p>
                    <button className="btn-premium">Abrir GitHub Codespace</button>
                </GlassCard>
            </section>
        </div>
    );
};
