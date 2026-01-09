import React from 'react';
import { RichContentLayout } from '../../components/layout/RichContentLayout';
import { PageHeader } from '../../components/ui/PageHeader';
import { NotebookBlock } from '../../components/ui/NotebookBlock';

export const RutaAgentCamp: React.FC = () => {
    return (
        <RichContentLayout>
            <PageHeader
                title="Ruta AgentCamp 2026"
                description="Prototipado de Soluciones MVP de Alta Fidelidad con IA para Startups. La guía teórica y estratégica completa."
                badge="TEORÍA FUNDAMENTAL"
            />

            <h2>Visión General</h2>
            <p>
                <strong>AgentCamp</strong> es un programa intensivo donde equipos multidisciplinarios crean <strong>MVPs de alta fidelidad</strong> en 5 días, aprovechando el poder de los agentes de IA para multiplicar su productividad.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <div className="p-6 bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm">
                    <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">Objetivos</h3>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                        <li>✅ Crear 3 conceptos SaaS viables</li>
                        <li>✅ Validar en contexto local (México)</li>
                        <li>✅ Producto &lt; $5,000 MXN</li>
                        <li>✅ Código production-ready</li>
                    </ul>
                </div>
                <div className="p-6 bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm">
                    <h3 className="text-xl font-bold mb-4 text-pink-600 dark:text-pink-400">Metodología</h3>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                        <li>🔹 Pensamiento de Sistemas</li>
                        <li>🔹 Arquitectura de Agentes</li>
                        <li>🔹 Lean Startup (Build-Measure-Learn)</li>
                        <li>🔹 DevOps & CI/CD Cloud</li>
                    </ul>
                </div>
            </div>

            <h2>Teoría Fundamental</h2>
            <h3>1. Pensamiento de Sistemas</h3>
            <p>
                Entender que los problemas locales en México son parte de un sistema complejo (económico, social, tecnológico). Buscamos soluciones sistémicas, no parches.
            </p>

            <NotebookBlock
                code={`┌─────────────────────────────────────────────────────┐
│         MERCADO LOCAL (MÉXICO)                      │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐       │
│  │ USUARIOS │◄──►│ PRODUCTO │◄──►│ NEGOCIO  │       │
│  │ (Personas)    │ (MVP)    │    │ (Model)  │       │
│  └──────────┘    └──────────┘    └──────────┘       │
│       │               │               │             │
│       ▼               ▼               ▼             │
│   Feedback       Code + AI        Revenue           │
│   (NPS)          (Antigravity)    (Metrics)         │
│                                                     │
└─────────────────────────────────────────────────────┘`}
                title="Modelo de Sistemas Integrado"
                height="300px"
            />

            <h3>2. Diseño de Agentes</h3>
            <p>
                Tres roles de IA trabajando en cascada para garantizar calidad y viabilidad.
            </p>
            <ul className="space-y-4 my-6">
                <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold shrink-0">1</div>
                    <div>
                        <h4 className="font-bold">Requirements Engineer</h4>
                        <p className="text-sm">Elimina la ambigüedad. Traduce "ideas" a "especificaciones testeables".</p>
                    </div>
                </li>
                <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 font-bold shrink-0">2</div>
                    <div>
                        <h4 className="font-bold">Product Owner</h4>
                        <p className="text-sm">Asegura la viabilidad de negocio. Roadmap, Pricing, Go-to-Market.</p>
                    </div>
                </li>
                <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 font-bold shrink-0">3</div>
                    <div>
                        <h4 className="font-bold">Software Engineer (Antigravity)</h4>
                        <p className="text-sm">Genera código autónomo, tests y documentación técnica.</p>
                    </div>
                </li>
            </ul>

            <h2>Ruta Práctica por Fases</h2>

            <h3>Semana Previa (Online)</h3>
            <p>Fundamentos, ideación, entrevistas con usuarios y validación de problemas.</p>

            <h3>Día 1: Specification (Jueves)</h3>
            <p>Kickoff por la mañana. Por la tarde, uso intensivo del Requirements Engineer Agent y Product Owner Agent para definir QUÉ construir.</p>

            <h3>Día 2: Architecture & Setup (Viernes)</h3>
            <p>Definición del stack tecnológico, diagrama de arquitectura y configuración de entornos (Antigravity, Cloud).</p>

            <h3>Día 3-4: Sprint Ágil 48h (Sábado-Domingo)</h3>
            <p>
                Sprint de desarrollo acelerado con Antigravity.
                <br />
                <strong>Fase 1 (0-12h):</strong> Backend, DB, API.
                <br />
                <strong>Fase 2 (12-24h):</strong> Frontend, UI Components.
                <br />
                <strong>Fase 3 (24-36h):</strong> Integration, Logic, Tests.
                <br />
                <strong>Fase 4 (36-48h):</strong> Polish, Deploy, Docs.
            </p>

            <h3>Día 5: Demo & Pitch (Lunes)</h3>
            <p>Presentación final ante jurado. Evaluación de innovación, viabilidad técnica, y modelo de negocio.</p>

        </RichContentLayout>
    );
};
