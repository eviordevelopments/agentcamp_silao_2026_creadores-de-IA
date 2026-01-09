import React from 'react';
import { RichContentLayout } from '../../components/layout/RichContentLayout';
import { PageHeader } from '../../components/ui/PageHeader';
import { NotebookBlock } from '../../components/ui/NotebookBlock';

export const GuiaImplementacion: React.FC = () => {
    return (
        <RichContentLayout>
            <PageHeader
                title="Guía de Implementación Paso a Paso"
                description="Tutorial detallado para configurar Antigravity y Azure Foundry desde cero."
                badge="TECHNICAL GUIDE"
            />

            <h2>Parte 1: Setup Inicial</h2>

            <h3>1.1 Crear Cuenta Antigravity</h3>
            <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
                <li>Ve a <code>https://antigravity.ai</code> y regístrate.</li>
                <li>Crea un "New Workspace" llamado <code>AgentCamp-[TuNombre]</code>.</li>
                <li>Invita a los miembros de tu equipo.</li>
                <li>En Settings, genera tu API Key para futuras integraciones.</li>
            </ol>

            <h3>1.2 Azure Foundry (Alternativa Gratuita)</h3>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-4">
                <p>Usa el código educativo: <strong>2J4KV9</strong> en <code>aka.ms/JoinEduLab</code></p>
            </div>

            <h2>Parte 2: Usar Antigravity para Generar MVP</h2>

            <h3>2.1 Preparar Especificación</h3>
            <p>Crea el archivo <code>spec-requirements.md</code> usando el Prompt #1. Este será la base de conocimiento de tu agente.</p>

            <NotebookBlock
                code={`# MVP Specification Template

## 1. Problem Statement
[2-3 sentences]

## 2. Core Features
- Feature A
- Feature B

## 3. Tech Stack
- Frontend: Next.js
- Backend: Python FastAPI
- DB: PostgreSQL`}
                title="spec-requirements.md Template"
                height="250px"
            />

            <h3>2.2 Configurar el Agente</h3>
            <p>
                Sube tus documentos a la "Knowledge Base" del proyecto. Luego configura el System Prompt copiando el <strong>Prompt #3</strong>.
                Asegúrate de poner el "Autonomy Level" en <strong>Level 2: Autonomous</strong>.
            </p>

            <h2>Parte 3: Monitoreo y Troubleshooting</h2>
            <p>
                Tu rol cambia de "escribir código" a "supervisar al agente". Revisa el dashboard cada 6 horas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10 p-4 rounded-lg">
                    <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">Si los tests fallan:</h4>
                    <p className="text-sm">Pon pausa. Revisa los logs. Aprobá la sugerencia de fix del agente. Resume.</p>
                </div>
                <div className="border border-yellow-200 dark:border-yellow-900/30 bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-700 dark:text-yellow-400 mb-2">Si el coverage baja:</h4>
                    <p className="text-sm">El agente te avisará. Puedes pedirle explícitamente "Increase test coverage for [module]".</p>
                </div>
            </div>

        </RichContentLayout>
    );
};
