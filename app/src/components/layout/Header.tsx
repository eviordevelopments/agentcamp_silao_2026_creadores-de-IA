import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="nav-blur h-20 flex items-center justify-between px-8">
            <div className="flex items-center gap-8">
                <Link to="/" className="flex items-center group">
                    <img
                        src="/assets/agentcamp_logo.png"
                        alt="AgentCamp Logo"
                        className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                </Link>

                <div className="h-8 w-px bg-slate-200 dark:bg-white/20 mx-1" />

                <div className="flex items-center gap-6">
                    <a href="https://eviordevelopments.com" target="_blank" rel="noreferrer" className="hover:opacity-100 opacity-80 transition-all hover:scale-105 active:scale-95">
                        <img
                            src="/assets/main_logo.png"
                            alt="Evior Logo"
                            className="h-9 w-auto object-contain"
                        />
                    </a>

                    <div className="h-6 w-px bg-slate-200 dark:bg-white/10" />

                    <a href="https://www.truedata.com.mx/" target="_blank" rel="noreferrer" className="hover:opacity-100 opacity-80 transition-all hover:scale-105 active:scale-95">
                        <img
                            src="/assets/true.png"
                            alt="True Logo"
                            className="h-8 w-auto object-contain"
                        />
                    </a>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <LanguageSwitcher />
                <div className="w-px h-8 bg-slate-200 dark:bg-slate-800 mx-2" />
                <ThemeToggle />
            </div>
        </header>
    );
};
