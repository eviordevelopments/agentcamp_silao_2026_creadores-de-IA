import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FloatingArticleSidebar } from '../../components/ui/FloatingArticleSidebar';
import { Zap, Brain, Activity, Target, Cpu } from 'lucide-react';

const sections = [
    { id: 'how-learn', title: 'I. Cómo aprenden las máquinas' },
    { id: 'activation', title: 'II. Funciones de activación' },
    { id: 'classification', title: 'III. Clasificación y regresión' },
    { id: 'deep-learning', title: 'IV. Aprendizaje profundo' },
    { id: 'math', title: 'V. Matemáticas subyacentes' }
];

export const MachineLearningArticle = () => {
    const [activeSection, setActiveSection] = useState('how-learn');

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
                            <Zap className="w-4 h-4" />
                            Exploración Técnica: Machine Learning
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-[var(--foreground)] leading-[1.1]">
                            Teoría y Fundamentos del <span className="text-gradient">Aprendizaje Automático</span>
                        </h1>
                        <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl">
                            Desde el descenso de gradiente hasta las funciones de activación no lineales: un viaje por la ingeniería que permite a las máquinas aprender.
                        </p>
                    </div>

                    <img src="/assets/ml_learning_process.png" alt="ML Learning Process" className="article-img" />

                    {/* Section I */}
                    <section id="how-learn" className="scroll-mt-32">
                        <h2 className="article-h2">I. Cómo aprenden las máquinas: Algoritmos y Optimización</h2>
                        <div className="article-p">
                            Las máquinas aprenden analizando datos para identificar patrones, ajustando parámetros mediante algoritmos como el <strong>descenso de gradiente</strong>. Este proceso implica minimizar una función de error, como el error cuadrático medio, usando derivadas para actualizar pesos y sesgos.
                        </div>
                        <div className="bg-black/50 p-8 rounded-[2rem] border border-primary/20 font-mono text-sm my-8">
                            <p className="text-primary mb-2"># Fórmula de actualización</p>
                            <p className="text-2xl text-center py-4">w = w - α · ∂J/∂w</p>
                            <p className="text-slate-500 text-xs">Donde α es la tasa de aprendizaje y J es la función de pérdida.</p>
                        </div>
                    </section>

                    {/* Section II */}
                    <section id="activation" className="scroll-mt-32">
                        <h2 className="article-h2">II. Funciones de activación no lineales</h2>
                        <p className="article-p">
                            Las funciones de activación como <strong>ReLU, sigmoide y tangente hiperbólica</strong> introducen no linealidad, permitiendo a las redes neuronales modelar relaciones complejas.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 my-10">
                            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/5">
                                <h4 className="font-bold text-primary mb-2">ReLU</h4>
                                <p className="text-xs opacity-70">y = max(0, x). Preferida por su eficiencia computacional en capas ocultas.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/5">
                                <h4 className="font-bold text-accent mb-2">Sigmoide</h4>
                                <p className="text-xs opacity-70">σ(x) = 1 / (1 + e^-x). Útil para mapear valores en el rango [0,1] en clasificación binaria.</p>
                            </div>
                        </div>
                        <img src="/assets/nonlinear_activation.png" alt="Non-linear Activation" className="article-img" />
                    </section>

                    {/* Section III */}
                    <section id="classification" className="scroll-mt-32">
                        <h2 className="article-h2">III. Clasificación y regresión</h2>
                        <p className="article-p">
                            La clasificación estadística organiza datos en categorías (ej. spam o no spam), mientras que la regresión lineal predice valores continuos.
                        </p>
                        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/5 space-y-4">
                            <div className="flex items-center gap-4">
                                <Activity className="text-blue-500" />
                                <div>
                                    <h4 className="font-bold">Regresión Logística</h4>
                                    <p className="text-sm opacity-70">Mejor para clasificadores en redes neuronales, usando la función sigmoide.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Target className="text-orange-500" />
                                <div>
                                    <h4 className="font-bold">Árboles de Decisión</h4>
                                    <p className="text-sm opacity-70">Algoritmos supervisados que dividen datos según atributos numéricos.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section IV */}
                    <section id="deep-learning" className="scroll-mt-32">
                        <h2 className="article-h2">IV. Aprendizaje Profundo y Hardware</h2>
                        <p className="article-p">
                            El aprendizaje profundo usa muchas neuronas en capas ocultas para extraer características complejas. Las GPUs modernas (como la serie RTX) facilitan enormemente este entrenamiento masivo.
                        </p>
                        <ul className="space-y-4 my-8">
                            <li className="flex items-center gap-3 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                                <Cpu className="w-5 h-5 text-primary" />
                                <span><strong>CNNs:</strong> Procesan datos matriciales usando filtros y pooling.</span>
                            </li>
                            <li className="flex items-center gap-3 p-4 rounded-2xl bg-accent/5 border border-accent/10">
                                <Brain className="w-5 h-5 text-accent" />
                                <span><strong>Embeddings:</strong> Representaciones vectoriales para NLP como Word2Vec.</span>
                            </li>
                        </ul>
                        <img src="/assets/ml_vs_dl.webp" alt="Deep Learning Architecture" className="article-img" />
                    </section>

                    {/* Section V */}
                    <section id="math" className="scroll-mt-32">
                        <h2 className="article-h2">V. Matemáticas subyacentes</h2>
                        <p className="article-p">
                            El álgebra lineal, el cálculo matricial y las derivadas son el lenguaje secreto del ML. Sin ellos, no podríamos optimizar los parámetros del modelo.
                        </p>
                        <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-10 rounded-[3rem] border border-white/10">
                            <h4 className="text-xl font-bold mb-4">Jerarquías de estudio</h4>
                            <div className="space-y-6">
                                <div>
                                    <h5 className="font-bold text-primary">Nivel Básico</h5>
                                    <p className="text-sm opacity-80">Arrays (NumPy), Nodos y Parámetros fundamentales.</p>
                                </div>
                                <div>
                                    <h5 className="font-bold text-accent">Nivel Intermedio</h5>
                                    <p className="text-sm opacity-80">Clustering, Atributos numéricos y Algoritmos supervisados.</p>
                                </div>
                                <div>
                                    <h5 className="font-bold text-white">Nivel Avanzado</h5>
                                    <p className="text-sm opacity-80">Capas ocultas, Mecatrónica y control de actuadores mediante IA.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Final Resumen */}
                    <div className="bg-slate-50 dark:bg-black p-10 rounded-[3rem] border border-slate-200 dark:border-white/10 mt-12">
                        <h4 className="text-xl font-bold mb-4">Conclusión</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed italic">
                            "El aprendizaje automático combina matemáticas avanzadas y algoritmos para modelar datos, con aplicaciones críticas en medicina y visión por computadora."
                        </p>
                        <div className="mt-8 flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                            <span>Actualizado: Enero 2026</span>
                            <div className="w-1 h-1 rounded-full bg-slate-400" />
                            <span>Referencia: Analytics Vidhya / Nature</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
