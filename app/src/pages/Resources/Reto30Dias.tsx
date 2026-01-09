import React from 'react';
import { RichContentLayout } from '../../components/layout/RichContentLayout';
import { PageHeader } from '../../components/ui/PageHeader';
import { NotebookBlock } from '../../components/ui/NotebookBlock';

export const Reto30Dias: React.FC = () => {
    return (
        <RichContentLayout>
            <PageHeader
                title="Reto de 30 Días"
                description="Tu hoja de ruta día a día para pasar de una idea a un MVP validado usando IA."
                badge="ACTION PLAN"
            />

            <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white shadow-lg mb-10">
                <h3 className="text-2xl font-bold mb-2">🚀 Tu Misión</h3>
                <p className="opacity-90">Construir un producto SaaS funcional, validado y desplegado en 30 días con un presupuesto menor a $500 MXN.</p>
            </div>

            <h2>Semana 1: Especificación (Días 1-3)</h2>
            <div className="space-y-4">
                <div className="border border-slate-200 dark:border-white/10 p-5 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <h4 className="font-bold text-lg mb-2">Día 1-2: Preparación</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Revisar materiales, definir la idea y llenar los placeholders iniciales.</p>
                </div>
                <div className="border border-slate-200 dark:border-white/10 p-5 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <h4 className="font-bold text-lg mb-2">Día 3: Requirements Engineering</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Ejecutar <strong>PROMPT #1</strong> para generar tu especificación técnica detallada (30-40 páginas).</p>
                </div>
            </div>

            <h2 className="mt-10">Semana 2: Producto & Estrategia (Días 4-7)</h2>
            <div className="space-y-4">
                <div className="border border-slate-200 dark:border-white/10 p-5 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <h4 className="font-bold text-lg mb-2">Día 4-7: Product Ownership</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Ejecutar <strong>PROMPT #2</strong>. Definir Roadmap, Unit Economics y Go-to-Market.</p>
                </div>
            </div>

            <h2 className="mt-10">Semanas 3-4: Código Autónomo (Días 8-26)</h2>
            <div className="space-y-4">
                <div className="border border-slate-200 dark:border-white/10 p-5 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <h4 className="font-bold text-lg mb-2">Día 8-9: Setup Antigravity</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Crear workspace, conectar GitHub, subir Knowledge Base.</p>
                </div>
                <div className="border border-slate-200 dark:border-white/10 p-5 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <h4 className="font-bold text-lg mb-2">Día 10: Launch Generation</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Ejecutar <strong>PROMPT #3</strong>. Configurar nivel de autonomía y comenzar.</p>
                </div>
                <div className="border border-slate-200 dark:border-white/10 p-5 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <h4 className="font-bold text-lg mb-2">Día 11-26: Monitoreo Diario</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Dedica 10-20 min diarios a revisar PRs, coverage y métricas. Desbloquea al agente si es necesario.</p>
                </div>
            </div>

            <h2 className="mt-10">Semana 5: Validación (Días 27-30)</h2>
            <div className="space-y-4">
                <div className="border border-slate-200 dark:border-white/10 p-5 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <h4 className="font-bold text-lg mb-2">Día 27: Demo Prep</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Despliegue a producción/staging final. Preparar script de demo.</p>
                </div>
                <div className="border border-slate-200 dark:border-white/10 p-5 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <h4 className="font-bold text-lg mb-2">Día 28-29: User Testing</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Entrevista a 10 usuarios con tu producto real. Recolecta feedback honesto.</p>
                </div>
                <div className="border border-slate-200 dark:border-white/10 p-5 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <h4 className="font-bold text-lg mb-2">Día 30: Aprendizajes</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Documentar métricas, feedback y roadmap Q2. ¡Celebrar!</p>
                </div>
            </div>

            <h2 className="mt-12">Placeholder: Define tu Idea</h2>
            <p>Copia este bloque y llénalo antes de empezar con los prompts maestros.</p>
            <NotebookBlock
                code={`CONTEXTO: [Describe el problema local que quieres resolver]

USUARIOS: [Quién sufre este problema?]

MERCADO: [Dónde? (localidad, región, país)]

RESTRICCIONES: 
├─ Budget: $[X] USD / $[Y] MXN
├─ Timeline: [X] días
├─ Team: [#] personas con skills [lista]
└─ Tech: [Stack preferences, si tienes]

MEDIDA DE ÉXITO:
├─ Métrica 1: [Baseline] → [Target]
├─ Métrica 2: [Baseline] → [Target]
└─ Métrica 3: [Baseline] → [Target]`}
                title="Plantilla de Definición de Idea"
            />

        </RichContentLayout>
    );
};
