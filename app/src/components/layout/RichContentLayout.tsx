import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface RichContentLayoutProps {
    children: React.ReactNode;
    className?: string;
    sidebar?: React.ReactNode;
}

export const RichContentLayout: React.FC<RichContentLayoutProps> = ({
    children,
    className,
    sidebar
}) => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black pt-28 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={clsx("flex-1", className)}
                >
                    <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto
            prose-headings:font-bold prose-h1:text-4xl prose-h1:mb-8
            prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed
            prose-li:text-slate-600 dark:prose-li:text-slate-300
            prose-strong:text-slate-900 dark:prose-strong:text-white
            prose-code:bg-slate-100 dark:prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-indigo-600 dark:prose-code:text-indigo-400
            prose-pre:bg-transparent prose-pre:p-0
            prose-img:rounded-xl prose-img:shadow-lg
          ">
                        {children}
                    </div>
                </motion.div>

                {/* Optional Sidebar (Table of Contents, etc) */}
                {sidebar && (
                    <aside className="hidden lg:block w-80 shrink-0">
                        <div className="sticky top-32 space-y-8">
                            {sidebar}
                        </div>
                    </aside>
                )}

            </div>
        </div>
    );
};
