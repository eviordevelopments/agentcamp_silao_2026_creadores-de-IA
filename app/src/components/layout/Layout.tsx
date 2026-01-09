import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();

    return (
        <div className={`min-h-screen transition-colors duration-500`}>
            {/* Header fixed at top */}
            <Header />

            <div className="flex relative">
                {/* Sidebar fixed at left-4 */}
                <Sidebar />

                {/* Main Content with margin to avoid overlap with fixed sidebar */}
                <main className="flex-1 w-full lg:ml-72 min-h-[calc(100vh-5rem)]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
};
