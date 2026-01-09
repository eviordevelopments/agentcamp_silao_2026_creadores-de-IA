import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FloatingArticleSidebar } from '../../components/ui/FloatingArticleSidebar';
import { BookOpen, Brain, Network, ChevronRight } from 'lucide-react';

const sections = [
    { id: 'intro', title: 'I. Introducción a la IA, ML y DL' },
    { id: 'types', title: 'II. Tipos de Aprendizaje Automático' },
    { id: 'networks', title: 'III. Redes Neuronales' },
    { id: 'cnn', title: 'IV. CNNs y Aprendizaje Profundo' },
    { id: 'regression', title: 'V. Regresión y Clasificación' },
    { id: 'explainability', title: 'VI. Explicabilidad' },
    { id: 'training', title: 'VII. Entrenamiento' }
];

export const AIFundamentals = () => {
    const [activeSection, setActiveSection] = useState('intro');

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
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest border border-primary/20">
                            <BookOpen className="w-4 h-4" />
                            Artículo Destacado: Fundamentos IA
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-[var(--foreground)] leading-[1.1]">
                            Fundamentos de la IA: <br />
                            <span className="text-gradient">De Redes Neuronales a Agentes Inteligentes</span>
                        </h1>
                        <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl">
                            Un análisis profundo sobre el procesamiento de imágenes, redes neuronales y aplicaciones médicas que están definiendo el 2026.
                        </p>
                    </div>

                    <img src="/assets/metafora_arquitectura_transformer.jpg" alt="IA Architecture" className="article-img" />

                    {/* Section I */}
                    <section id="intro" className="scroll-mt-32">
                        <h2 className="article-h2">I. Introducción a la Inteligencia Artificial, Aprendizaje Automático y Aprendizaje Profundo</h2>
                        <div className="article-p">
                            La <strong>Inteligencia Artificial (IA)</strong> es el campo de la informática que busca desarrollar sistemas capaces de realizar tareas que normalmente requieren inteligencia humana, como razonamiento, aprendizaje, toma de decisiones y percepción.
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 my-10">
                            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                                <Brain className="w-10 h-10 text-primary mb-4" />
                                <h4 className="font-bold mb-2">Aprendizaje Automático (ML)</h4>
                                <p className="text-sm opacity-70">Subdisciplina de la IA centrada en algoritmos que aprenden de datos para hacer predicciones.</p>
                            </div>
                            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                                <Network className="w-10 h-10 text-accent mb-4" />
                                <h4 className="font-bold mb-2">Aprendizaje Profundo (DL)</h4>
                                <p className="text-sm opacity-70">Rama del ML que utiliza redes neuronales multicapa para modelar patrones complejos.</p>
                            </div>
                        </div>
                        <img src="/assets/ml_vs_dl.webp" alt="ML vs DL" className="article-img" />
                    </section>

                    {/* Section II */}
                    <section id="types" className="scroll-mt-32">
                        <h2 className="article-h2">II. Tipos de Aprendizaje Automático</h2>
                        <p className="article-p">Dividimos el ML en tres categorías principales:</p>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center font-bold text-blue-500">1</div>
                                <div>
                                    <h3 className="font-bold text-lg">Aprendizaje Supervisado</h3>
                                    <p className="article-p">Utiliza datos etiquetados (ej. detección de spam). Algoritmos: Regresión lineal, SVM.</p>
                                </div>
                            </div>
                            <img src="/assets/perceptron_multicapa.png" alt="Decision Tree" className="article-img" />
                        </div>
                    </section>

                    {/* Section III */}
                    <section id="networks" className="scroll-mt-32">
                        <h2 className="article-h2">III. Redes Neuronales</h2>
                        <h3 className="article-h3">Estructura y Funcionamiento</h3>
                        <p className="article-p">
                            Las redes neuronales son <strong>modelos computacionales inspirados en el cerebro humano</strong>, compuestos por nodos (neuronas) conectados por aristas con pesos asociados.
                        </p>
                        <div className="p-8 rounded-[2rem] bg-black border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                            <ul className="space-y-4 text-slate-300">
                                <li className="flex items-center gap-3">
                                    <ChevronRight className="w-4 h-4 text-primary" />
                                    <span><strong>Entrada:</strong> Recibe píxeles de una imagen.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ChevronRight className="w-4 h-4 text-primary" />
                                    <span><strong>Ocultas:</strong> Transforman los datos mediante pesos y funciones de activación (ReLU, Sigmoid).</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ChevronRight className="w-4 h-4 text-primary" />
                                    <span><strong>Salida:</strong> Genera la probabilidad final.</span>
                                </li>
                            </ul>
                        </div>
                        <img src="/assets/retropropagación.jpg" alt="Backpropagation" className="article-img" />
                    </section>

                    {/* Section IV */}
                    <section id="cnn" className="scroll-mt-32">
                        <h2 className="article-h2">IV. Redes Neuronales Convolucionales (CNNs)</h2>
                        <p className="article-p">
                            Ideales para el procesamiento de imágenes por su capacidad de detectar patrones locales.
                        </p>
                        <ul className="grid md:grid-cols-2 gap-6 my-8">
                            <li className="p-6 rounded-2xl border border-slate-200 dark:border-white/5">
                                <strong className="block mb-2">Capas Convolucionales</strong> Aplican kernels que destacan bordes y texturas.
                            </li>
                            <li className="p-6 rounded-2xl border border-slate-200 dark:border-white/5">
                                <strong className="block mb-2">Max Pooling</strong> Reduce la dimensionalidad conservando lo más importante.
                            </li>
                        </ul>
                        <img src="/assets/transformer_neural_network_architecture.jpg" alt="CNN Arch" className="article-img" />
                        <img src="/assets/architecture agents.png" alt="Agent Arch" className="article-img" />
                    </section>

                    {/* Section V */}
                    <section id="regression" className="scroll-mt-32">
                        <h2 className="article-h2">V. Regresión y Clasificación</h2>
                        <div className="article-p">
                            La regresión produce valores continuos (ej. precios), mientras que la clasificación produce categorías discretas (ej. Sano/Enfermo).
                        </div>
                        <img src="/assets/gpt_architecture.jpg" alt="GPT Architecture" className="article-img" />
                    </section>

                    {/* Section VI */}
                    <section id="explainability" className="scroll-mt-32">
                        <h2 className="article-h2">VI. Explicabilidad en Redes Neuronales</h2>
                        <p className="article-p">
                            Crucial en medicina para garantizar la confianza. Los <strong>Mapas de Saliencia</strong> visualizan qué partes de una imagen influyen más en la predicción de demencia a través de MRIs.
                        </p>
                        <img src="/assets/benefits_agents.png" alt="Explainability" className="article-img" />
                    </section>

                    {/* Section VII */}
                    <section id="training" className="scroll-mt-32">
                        <h2 className="article-h2">VII. Entrenamiento de Redes Neuronales</h2>
                        <div className="article-p">
                            El proceso implica:
                            1. Recopilación
                            2. Aumentación de Datos
                            3. Retropropagación
                            4. Evaluación.
                        </div>
                        <img src="/assets/n8n.png" alt="Automation flow" className="article-img" />
                    </section>

                    {/* Final Word */}
                    <div className="bg-primary/10 p-10 rounded-[3rem] border border-primary/20 mt-12">
                        <h4 className="text-xl font-bold mb-4">Resumen Matemático</h4>
                        <p className="text-slate-600 dark:text-slate-300 italic mb-6">
                            "El ML y DL dependen del álgebra lineal para matrices, cálculo para optimización y probabilidad para interpretar resultados."
                        </p>
                        <div className="flex gap-4">
                            <img src="/assets/agent.png" alt="IA Agent" className="w-16 h-16 rounded-2xl" />
                            <div className="text-sm opacity-80">
                                <strong>Actualizado en vivo</strong><br />
                                AgentCamp Silao, Guanajuato 2026.
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
