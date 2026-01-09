import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GlassCard } from '../components/ui/GlassCard';
import { clsx } from 'clsx';
import { ArrowRight, Calendar, MapPin, Users, Terminal, Zap, Linkedin, Globe, Mic2, BookOpen, Clock, ChevronRight } from 'lucide-react';

const sponsors = [
    { name: 'EmprendHEC', logo: '/assets/logo-emprendhec.png', url: '#' },
    { name: 'E-vior Developments', logo: '/assets/logo-tutor-ia.png', url: 'https://eviordevelopments.com' },
    { name: 'Global AI Community', logo: '/assets/logo-global-ai.png', url: '#' },
    { name: 'Inst Innovación', logo: '/assets/logo-instinnovacion.png', url: '#' },
    { name: 'CONEDU', logo: '/assets/colaboracion-conedu.png', url: 'https://conedumxcom.netlify.app' },
    { name: 'Evior', logo: '/assets/colaboracion-evior.png', url: 'https://eviordevelopments.com' },
    { name: 'TrueData', logo: '/assets/true.png', url: 'https://www.truedata.com.mx/' },
    { name: 'Global AI León', logo: '/assets/global-ai-leon.png', url: '#' }
];

const speakers = [
    {
        name: "Paulo César Ramírez Silva",
        role: "Organizador (Capítulo León, Global AI Community)",
        sites: ["EmprendHEC", "Tutor-IA"],
        linkedin: "paulocesarramirezs",
        image: "/assets/speaker-paulo-ramirez.jpg",
        sessions: "Bienvenida, charla inaugural e intervención en sesiones ejecutivas (Aceleradores de IA)."
    },
    {
        name: "Luis Antonio Beltrán Prieto",
        role: "Microsoft MVP en IA",
        sites: ["luisbeltran.mx"],
        linkedin: "luisantoniobeltran",
        image: "/assets/speaker-luis-beltran.jpg",
        sessions: "Charla inaugural sobre tendencias 2026, taller de mejores prácticas para Creadores de IA, y sesión para Aceleradores de IA."
    },
    {
        name: "David Emiliano Castillo García",
        role: "Emprendedor especializado en IA - Evior Developments",
        linkedin: "emiliano-castillo-040042336",
        image: "/assets/speaker-emiliano-castillo.jpg",
        sessions: "Taller de técnicas y herramientas de prototipado con IA (Creadores), y co-facilitación en sesión para Aceleradores."
    },
    {
        name: "Diego Pérez Hernández",
        role: "Data Scientist / Emprendedor - TrueData",
        linkedin: "diego-ph",
        image: "/assets/speaker-diego-perez.jpg",
        sessions: "Taller de prototipado con IA (Creadores), y co-facilitación en lecciones para PyMEs (Aceleradores)."
    }
];

export const Hero = () => {
    const { t } = useTranslation();

    return (
        <div className="max-w-6xl mx-auto space-y-24 pb-20 pt-10">
            {/* Hero Section */}
            <section className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Live in Silao 2026
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-[var(--foreground)]">
                        {t('hero.title')} <br />
                        <span className="text-gradient">
                            {t('hero.subtitle')}
                        </span>
                    </h1>

                    <p className="text-lg text-slate-600 dark:text-slate-200 max-w-xl leading-relaxed">
                        {t('hero.description')}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link to="/fase-0" className="btn-premium group flex items-center gap-2">
                            {t('hero.cta')}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button className="px-6 py-4 rounded-2xl border border-slate-200 dark:border-white/10 font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-[var(--foreground)]">
                            GitHub Codespaces
                        </button>
                    </div>

                    <div className="flex items-center gap-6 pt-4 text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-2 font-bold">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span className="text-sm">9 Ene 2026</span>
                        </div>
                        <div className="flex items-center gap-2 font-bold">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="text-sm">Silao, Guanajuato</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl rounded-[3rem] -z-10" />
                    <img
                        src="/assets/Silao.png"
                        alt="AgentCamp Silao"
                        className="w-full h-auto rounded-[2rem] shadow-2xl border border-white/10"
                    />
                </motion.div>
            </section>

            {/* Featured Article Widget */}
            <section className="relative">
                <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-1 h-24 bg-primary rounded-full blur-sm" />
                <h2 className="text-3xl font-black mb-10 flex items-center gap-4">
                    <BookOpen className="text-primary" />
                    Artículo <span className="text-primary">Destacado</span>
                </h2>
                <Link to="/articles/fundamentos-ia" className="block group">
                    <GlassCard className="p-0 overflow-hidden border-primary/20 hover:border-primary transition-all">
                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
                                <img
                                    src="/assets/metafora_arquitectura_transformer.jpg"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    alt="AI Fundamentals"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                            </div>
                            <div className="p-10 space-y-6 flex flex-col justify-center bg-white dark:bg-black/40">
                                <div className="flex items-center gap-4 text-xs font-black text-primary uppercase tracking-widest">
                                    <span className="px-2 py-1 bg-primary/10 rounded">Ingeniería</span>
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 12 min lectura</span>
                                </div>
                                <h3 className="text-3xl font-black leading-tight text-[var(--foreground)]">
                                    Fundamentos de la IA: De Redes Neuronales a Agentes Inteligentes
                                </h3>
                                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Explora la ingeniería detrás de las CNNs, LLMs y el procesamiento de imágenes médicas en un reporte técnico detallado de 2026.
                                </p>
                                <div className="flex items-center gap-2 text-primary font-bold group-hover:translate-x-2 transition-transform">
                                    Leer artículo completo <ChevronRight className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </Link>
            </section>

            {/* Features GlassCards */}
            <section className="grid md:grid-cols-3 gap-8">
                <GlassCard className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                        <Users className="text-orange-500 w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--foreground)]">Comunidad Activa</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-200 leading-relaxed">
                        Conecta con creadores de IA, ingenieros y emprendedores técnicos en Guanajuato.
                    </p>
                </GlassCard>
                <GlassCard className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                        <Terminal className="text-blue-500 w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--foreground)]">100% Práctico</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-200 leading-relaxed">
                        Desde la teoría acelerada hasta MVPs funcionales en menos de 90 minutos.
                    </p>
                </GlassCard>
                <GlassCard className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                        <Zap className="text-green-500 w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--foreground)]">Resultados Reales</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-200 leading-relaxed">
                        Prototipado guiado en vivo para resolver problemas reales del sector local.
                    </p>
                </GlassCard>
            </section>

            {/* Speakers Section */}
            <section className="space-y-12">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-black uppercase tracking-widest border border-accent/20">
                        <Mic2 className="w-4 h-4" />
                        Ponentes y Facilitadores
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--foreground)]">
                        Conoce a los <span className="text-gradient">expertos</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-200 max-w-2xl mx-auto">
                        Líderes de la industria que compartirán su conocimiento y experiencia en el AgentCamp Guanajuato 2026.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {speakers.map((speaker, i) => (
                        <motion.div
                            key={speaker.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <GlassCard className="h-full p-0 overflow-hidden flex flex-col group border-slate-200/50 dark:border-white/5">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 dark:opacity-90" />
                                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                                        <a href={`https://linkedin.com/in/${speaker.linkedin}`} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-primary/20 transition-colors text-white">
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                        {speaker.sites?.map(site => (
                                            <a key={site} href={`https://${site}`} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-accent/20 transition-colors text-white">
                                                <Globe className="w-4 h-4" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-6 space-y-3 flex-1 bg-white dark:bg-black transition-colors duration-500">
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{speaker.name}</h4>
                                    <p className="text-xs font-bold text-primary uppercase tracking-wider">{speaker.role}</p>
                                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                                        {speaker.sessions}
                                    </p>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Organizations Section */}
            <section className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em]">
                        Empresas y Organizaciones Colaboradoras
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-16 py-10">
                        {sponsors.map((sponsor) => (
                            <a
                                key={sponsor.name}
                                href={sponsor.url}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:scale-110 active:scale-95 transition-all block group"
                            >
                                <img
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    className={clsx(
                                        "w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300",
                                        (sponsor.name === 'CONEDU' || sponsor.name === 'Evior') ? "h-32 md:h-44" : "h-20 md:h-28"
                                    )}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
