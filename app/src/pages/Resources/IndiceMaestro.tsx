import React from 'react';
import { RichContentLayout } from '../../components/layout/RichContentLayout';
import { PageHeader } from '../../components/ui/PageHeader';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Code, Map, CheckSquare, Terminal } from 'lucide-react';

export const IndiceMaestro: React.FC = () => {
    const resources = [
        {
            title: "Ruta AgentCamp 2026",
            desc: "La teoría fundamental, pilares y visión general del programa.",
            icon: <Map className="w-6 h-6 text-indigo-500" />,
            link: "/resources/ruta-agentcamp",
            color: "border-indigo-500"
        },
        {
            title: "Prompts Maestros",
            desc: "Los 3 prompts esenciales para copiar y pegar: Requirements, Product, Software.",
            icon: <Terminal className="w-6 h-6 text-emerald-500" />,
            link: "/resources/prompts-maestros",
            color: "border-emerald-500"
        },
        {
            title: "Reto de 30 Días",
            desc: "Plan de acción día a día para construir tu MVP.",
            icon: <CheckSquare className="w-6 h-6 text-pink-500" />,
            link: "/resources/reto-30-dias",
            color: "border-pink-500"
        },
        {
            title: "Guía de Implementación",
            desc: "Tutorial paso a paso para configurar Antigravity y Azure.",
            icon: <BookOpen className="w-6 h-6 text-amber-500" />,
            link: "/resources/guia-implementacion",
            color: "border-amber-500"
        },
        {
            title: "Prompts Especializados",
            desc: "Instrucciones avanzadas para roles específicos (QA, DevOps, Frontend).",
            icon: <Code className="w-6 h-6 text-blue-500" />,
            link: "/resources/prompts-antigravity",
            color: "border-blue-500"
        }
    ];

    return (
        <RichContentLayout>
            <PageHeader
                title="Índice Maestro AgentCamp"
                description="Tu centro de comando. Accede a todos los recursos, guías y prompts desde aquí."
                badge="DIRECTORY"
            />

            <div className="grid grid-cols-1 gap-6">
                {resources.map((item, idx) => (
                    <Link
                        key={idx}
                        to={item.link}
                        className={`group flex items-center p-6 bg-white dark:bg-white/5 rounded-xl border-l-4 ${item.color} shadow-sm hover:shadow-md transition-all hover:translate-x-1`}
                    >
                        <div className="mr-6 p-3 bg-slate-50 dark:bg-white/10 rounded-lg group-hover:scale-110 transition-transform">
                            {item.icon}
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold group-hover:text-indigo-500 transition-colors">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{item.desc}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-500 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0" />
                    </Link>
                ))}
            </div>

            <div className="mt-12 p-8 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 text-center">
                <h3 className="text-2xl font-bold mb-4">¿No sabes por dónde empezar?</h3>
                <p className="mb-6 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                    Si es tu primera vez en AgentCamp, te recomendamos comenzar entendiendo la filosofía y la ruta completa.
                </p>
                <Link
                    to="/resources/ruta-agentcamp"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors"
                >
                    Comenzar la Ruta <ArrowRight size={18} />
                </Link>
            </div>

        </RichContentLayout>
    );
};
