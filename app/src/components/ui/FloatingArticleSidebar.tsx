import { ChevronRight, List } from 'lucide-react';

interface Section {
    id: string;
    title: string;
}

interface FloatingArticleSidebarProps {
    sections: Section[];
    activeSection: string;
}

export const FloatingArticleSidebar = ({ sections, activeSection }: FloatingArticleSidebarProps) => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <aside className="fixed right-10 top-32 w-64 hidden xl:block">
            <div className="glass p-6 rounded-[2rem] border-primary/10 shadow-float dark:shadow-float-dark">
                <div className="flex items-center gap-2 mb-6 text-primary">
                    <List className="w-5 h-5" />
                    <span className="font-bold uppercase tracking-widest text-xs">Contenido</span>
                </div>

                <nav className="space-y-4">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`flex items-center gap-3 w-full text-left text-sm transition-all duration-300 group ${activeSection === section.id
                                ? "text-primary font-bold translate-x-1"
                                : "text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary"
                                }`}
                        >
                            <ChevronRight className={`w-3 h-3 transition-transform ${activeSection === section.id ? "rotate-90 text-primary" : "group-hover:translate-x-1"
                                }`} />
                            <span className="flex-1">{section.title}</span>
                        </button>
                    ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10">
                    <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                        <p className="text-[10px] text-primary font-bold uppercase mb-2">Editor's Note</p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                            Fundamentos actualizados a Enero 2026. Revisión técnica por el equipo de Evior.
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    );
};
