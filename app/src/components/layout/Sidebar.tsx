import { Link, useLocation } from 'react-router-dom';
import {
    Home,
    Terminal,
    ChevronRight,
    Sparkles,
    Zap,
    Code2,
    Box,
    Cpu,
    Flag,
    BookOpen
} from 'lucide-react';
import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';

const phases = [
    { id: 0, icon: Zap, label: "Fase 0: Activación", path: "/fase-0" },
    { id: 1, icon: Cpu, label: "Fase 1: Retos", path: "/fase-1" },
    { id: 2, icon: Sparkles, label: "Fase 2: Teoría", path: "/fase-2" },
    { id: 3, icon: Terminal, label: "Fase 3: Herramientas", path: "/fase-3" },
    { id: 4, icon: Box, label: "Fase 4: Rutas", path: "/fase-4" },
    { id: 5, icon: Code2, label: "Fase 5: Prototipado", path: "/fase-5" },
    { id: 6, icon: Flag, label: "Fase 6: Cierre", path: "/fase-6" },
];

export const Sidebar = () => {
    const { t } = useTranslation();
    const location = useLocation();

    return (
        <aside className="fixed left-4 top-20 w-64 hidden lg:block z-40">
            <div className="sidebar-blur h-[calc(100vh-6rem)] p-6 space-y-8 overflow-y-auto w-full relative">
                <div>
                    <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-4 px-3">
                        {t('nav.home') || 'INICIO'}
                    </h3>
                    <nav className="space-y-1">
                        <Link
                            to="/"
                            className={clsx(
                                "flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200",
                                location.pathname === '/'
                                    ? "bg-primary/10 text-primary font-bold shadow-sm"
                                    : "text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
                            )}
                        >
                            <Home className="w-5 h-5" />
                            <span className="text-sm">Overview</span>
                        </Link>
                    </nav>
                </div>

                <div>
                    <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-4 px-3">
                        {t('nav.workshop') || 'TALLER'}
                    </h3>
                    <nav className="space-y-1">
                        {phases.map((phase) => (
                            <Link
                                key={phase.id}
                                to={phase.path}
                                className={clsx(
                                    "flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all duration-200 group",
                                    location.pathname === phase.path
                                        ? "bg-primary/10 text-primary font-bold shadow-sm"
                                        : "text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
                                )}
                            >
                                <phase.icon className={clsx(
                                    "w-5 h-5 transition-transform duration-300 group-hover:scale-110",
                                    location.pathname === phase.path ? "text-primary" : "text-slate-500 dark:text-slate-300"
                                )} />
                                <span className="text-sm flex-1">{phase.label}</span>
                                {location.pathname === phase.path && <ChevronRight className="w-4 h-4" />}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div>
                    <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-4 px-3">
                        {t('nav.resources') || 'RECURSOS'}
                    </h3>
                    <nav className="space-y-1">
                        <Link
                            to="/articles/fundamentos-ia"
                            className={clsx(
                                "flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all duration-200",
                                location.pathname === '/articles/fundamentos-ia'
                                    ? "bg-accent/10 text-accent font-bold"
                                    : "text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
                            )}
                        >
                            <BookOpen className="w-5 h-5" />
                            <span className="text-sm">Fundamentos IA</span>
                        </Link>
                        <Link
                            to="/articles/machine-learning"
                            className={clsx(
                                "flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all duration-200",
                                location.pathname === '/articles/machine-learning'
                                    ? "bg-accent/10 text-accent font-bold"
                                    : "text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
                            )}
                        >
                            <Zap className="w-5 h-5" />
                            <span className="text-sm">Machine Learning</span>
                        </Link>
                        <Link
                            to="/articles/ia-agentica"
                            className={clsx(
                                "flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all duration-200",
                                location.pathname === '/articles/ia-agentica'
                                    ? "bg-accent/10 text-accent font-bold"
                                    : "text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
                            )}
                        >
                            <Sparkles className="w-5 h-5" />
                            <span className="text-sm">IA Agéntica</span>
                        </Link>
                        <Link
                            to="/technical"
                            className={clsx(
                                "flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all duration-200",
                                location.pathname === '/technical'
                                    ? "bg-indigo-500/10 text-indigo-500 font-bold"
                                    : "text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
                            )}
                        >
                            <Code2 className="w-5 h-5" />
                            <span className="text-sm">Deep Dive Técnico</span>
                        </Link>

                        <div className="pt-4 pb-2">
                            <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-2 px-3">
                                Material de Taller
                            </h4>
                        </div>

                        <Link
                            to="/resources/ruta-agentcamp"
                            className={clsx(
                                "flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all duration-200",
                                location.pathname === '/resources/ruta-agentcamp'
                                    ? "bg-indigo-500/10 text-indigo-500 font-bold"
                                    : "text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
                            )}
                        >
                            <Zap className="w-5 h-5" />
                            <span className="text-sm">Ruta AgentCamp</span>
                        </Link>
                        <Link
                            to="/resources/prompts-maestros"
                            className={clsx(
                                "flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all duration-200",
                                location.pathname === '/resources/prompts-maestros'
                                    ? "bg-emerald-500/10 text-emerald-500 font-bold"
                                    : "text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
                            )}
                        >
                            <Terminal className="w-5 h-5" />
                            <span className="text-sm">Prompts Maestros</span>
                        </Link>
                        <Link
                            to="/resources/reto-30-dias"
                            className={clsx(
                                "flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all duration-200",
                                location.pathname === '/resources/reto-30-dias'
                                    ? "bg-pink-500/10 text-pink-500 font-bold"
                                    : "text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
                            )}
                        >
                            <Flag className="w-5 h-5" />
                            <span className="text-sm">Reto 30 Días</span>
                        </Link>
                        <Link
                            to="/resources/guia-implementacion"
                            className={clsx(
                                "flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all duration-200",
                                location.pathname === '/resources/guia-implementacion'
                                    ? "bg-amber-500/10 text-amber-500 font-bold"
                                    : "text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
                            )}
                        >
                            <BookOpen className="w-5 h-5" />
                            <span className="text-sm">Guía Implementación</span>
                        </Link>
                    </nav>
                </div>
            </div>
        </aside>
    );
};
