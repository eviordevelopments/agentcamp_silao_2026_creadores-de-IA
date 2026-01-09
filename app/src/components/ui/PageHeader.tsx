import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
    title: string;
    description: string;
    badge?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description, badge }) => {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-black text-white p-8 mb-12 shadow-xl border border-white/10">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10">
                {badge && (
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold tracking-wider uppercase mb-4 text-indigo-200 border border-white/10"
                    >
                        {badge}
                    </motion.span>
                )}

                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70"
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-indigo-200 max-w-2xl leading-relaxed"
                >
                    {description}
                </motion.p>
            </div>
        </div>
    );
};
