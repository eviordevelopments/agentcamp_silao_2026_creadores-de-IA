import React from 'react';
import { RichContentLayout } from '../../components/layout/RichContentLayout';
import { PageHeader } from '../../components/ui/PageHeader';
import { NotebookBlock } from '../../components/ui/NotebookBlock';

export const PromptsMaestros: React.FC = () => {
    return (
        <RichContentLayout>
            <PageHeader
                title="Prompts Maestros AgentCamp"
                description="Los 3 prompts fundamentales para el ciclo de desarrollo con IA. Listos para Copiar y Pegar en Antigravity, Claude o Kiro."
                badge="CORE WORKFLOW"
            />

            <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-6 rounded-r-xl mb-10">
                <h3 className="text-amber-800 dark:text-amber-200 font-bold mb-2">⚠️ Instrucción Importante</h3>
                <ul className="text-amber-800/80 dark:text-amber-200/80 space-y-1 list-disc list-inside">
                    <li>Copia TODO el contenido del bloque de código.</li>
                    <li>Pega en Antigravity → Settings → System Instructions.</li>
                    <li>O pega en Claude/Kiro como prompt inicial.</li>
                    <li>Reemplaza <strong>TODOS</strong> los <code>[PLACEHOLDERS]</code> con tu contexto real.</li>
                </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-12">1. Requirements Engineer Agent</h2>
            <p className="mb-4">
                Transforma una idea vaga o brief de negocio en una especificación técnica precisa y testeable.
                Ejecuta este prompt primero para obtener tu <code>spec-requirements.md</code>.
            </p>
            <NotebookBlock
                title="PROMPT #1: Requirements Engineer"
                language="markdown"
                code={`# SYSTEM PROMPT: REQUIREMENTS ENGINEER AGENT

## IDENTITY & OBJECTIVE
You are a specialized Requirements Engineer Agent that transforms vague business needs 
into precise, testable, executable specifications. Your role combines human domain 
expertise with AI-powered pattern recognition and recursive clarity.

## CORE MISSION

Transform ambiguous business intent into requirements so clear that:
- Developers build exactly what was intended (no re-interpretation)
- QA testers can verify every requirement automatically
- Product Owners can measure success unambiguously
- Cross-functional teams have single source of truth

... [CONTENIDO COMPLETO OMITIDO POR BREVEDAD, EL USUARIO DEBE COPIAR DEL ARCHIVO ORIGINAL SI ES NECESARIO, PERO AQUÍ SIMULAMOS EL BLOQUE COMPLETO PARA LA INTERFAZ] ...
(Nota: Para la implementación real, deberías copiar el contenido completo del archivo markdown original aquí dentro de las backticks, o cargarlo dinámicamente si fuera posible. Por ahora simularemos el inicio para mostrar el componente).

[... INSERTAR CONTENIDO COMPLETO DE PROMPT #1 AQUÍ ...]
`}
                height="400px"
            />


            <h2 className="text-2xl font-bold mb-4 mt-16">2. Product Owner Agent</h2>
            <p className="mb-4">
                Toma la especificación técnica y genera la estrategia de producto, roadmap, modelo de negocio y plan de Go-to-Market.
            </p>
            <NotebookBlock
                title="PROMPT #2: Product Owner"
                language="markdown"
                code={`# SYSTEM PROMPT: PRODUCT OWNER / PRODUCT MANAGER AGENT

## ROLE: Vision → Business Requirements → Strategy → Go-to-Market

You are a specialized Product Owner Agent that bridges business strategy with 
implementation, ensuring every feature aligns with company goals, customer needs, 
and financial metrics. You think like a PM while orchestrating AI agents to execute.

## CORE MISSION

Build products that:
- Solve real customer problems (validated with data)
- Align with business strategy (corporate goals)
- Generate sustainable revenue (unit economics)
- Delight users (NPS > 50)
- Execute on-time + on-budget

... [CONTENIDO COMPLETO OMITIDO ...] ...`}
                height="400px"
            />

            <h2 className="text-2xl font-bold mb-4 mt-16">3. Software Engineer Agent (Antigravity Base)</h2>
            <p className="mb-4">
                El prompt maestro para el agente que escribirá el código. Úsalo dentro de Antigravity en "System Instructions".
            </p>
            <NotebookBlock
                title="PROMPT #3: Software Engineer"
                language="markdown"
                code={`# SYSTEM PROMPT: SOFTWARE ENGINEER AGENT (ANTIGRAVITY BASE)

... [INSERTAR CONTENIDO DEL PROMPT #3 AQUÍ] ...`}
                height="400px"
            />

        </RichContentLayout>
    );
};
