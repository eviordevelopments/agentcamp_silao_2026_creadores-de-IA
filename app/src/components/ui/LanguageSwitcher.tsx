import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import { motion } from 'framer-motion';

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const nextLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(nextLang);
    };

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-xl glass hover:bg-white/20 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle language"
        >
            <Languages className="w-5 h-5 text-primary" />
            <span className="text-xs font-bold uppercase">{i18n.language}</span>
        </motion.button>
    );
};
