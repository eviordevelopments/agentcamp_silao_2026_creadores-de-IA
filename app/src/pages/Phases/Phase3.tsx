import { GlassCard } from '../../components/ui/GlassCard';
import { CodeCell } from '../../components/notebook/CodeCell';
import { Terminal, AppWindow, Layers } from 'lucide-react';

export const Phase3 = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-12 pb-20">
            <header className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold uppercase text-sm">
                    <Terminal className="w-4 h-4" />
                    Fase 3
                </div>
                <h2 className="text-4xl font-black tracking-tight">Herramientas Vivas</h2>
                <p className="text-xl text-slate-500">Demostración de las herramientas líderes en la industria para 2026.</p>
                <img src="/assets/n8n.png" alt="Automation Workflow" className="h-48 object-contain rounded-3xl border border-slate-200 dark:border-white/10" />
            </header>

            <section className="space-y-12">
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-slate-900">
                            <Terminal className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold">Claude Code (Terminal-First)</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">
                        Claude Code es la herramienta definitiva para automatización de sistemas y refactorización masiva desde la terminal.
                    </p>
                    <CodeCell
                        title="Claude Code CLI"
                        language="bash"
                        code={`# Instalar Claude Code
npm install -g @anthropic-ai/claude-code

# Iniciar agente en el repositorio
claude code "Crea un agente RAG que lea .txt, embeba docs y tenga tests unitarios"`}
                    />
                    <GlassCard className="bg-primary/5 border-primary/20">
                        <h4 className="font-bold mb-2">Insight Crítico:</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                            Claude no solo genera código. Genera un <strong>SISTEMA</strong>: estructura modular, tests integrados, documentación y versionamiento Git automático.
                        </p>
                    </GlassCard>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-600">
                            <AppWindow className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold">Cursor: Predicción + Contexto</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">
                        Donde Claude brilla en arquitectura, Cursor brilla en velocidad de ejecución mediante predicción inline "telepática".
                    </p>
                    <CodeCell
                        title="Cursor AI Refactoring"
                        language="javascript"
                        code={`// Cursor predice automáticamente el flujo de auth
const authenticateUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user || !await user.matchPassword(password)) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  return { user, token };
};`}
                    />
                </div>

                <section className="space-y-6">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                        <Layers className="text-primary w-6 h-6" />
                        Tabla Comparativa 2026
                    </h3>
                    <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                                <tr>
                                    <th className="px-6 py-4 font-bold">Aspecto</th>
                                    <th className="px-6 py-4 font-bold text-primary">Claude Code</th>
                                    <th className="px-6 py-4 font-bold">Cursor</th>
                                    <th className="px-6 py-4 font-bold">Copilot</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                <tr>
                                    <td className="px-6 py-4 font-medium">Terminal-first</td>
                                    <td className="px-6 py-4">✓✓✓</td>
                                    <td className="px-6 py-4">-理论</td>
                                    <td className="px-6 py-4">-</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium">Contexto Multi-archivo</td>
                                    <td className="px-6 py-4">✓✓✓</td>
                                    <td className="px-6 py-4">✓✓✓</td>
                                    <td className="px-6 py-4">✓</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium">Integración MCP</td>
                                    <td className="px-6 py-4">✓✓✓</td>
                                    <td className="px-6 py-4">✓</td>
                                    <td className="px-6 py-4">-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </section>
        </div>
    );
};
