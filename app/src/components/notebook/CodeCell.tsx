import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CodeCellProps {
    code: string;
    language?: string;
    title?: string;
}

export const CodeCell = ({ code, language = 'bash', title }: CodeCellProps) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="notebook-cell shadow-lg group">
            <div className="notebook-header border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <span className="ml-2 text-slate-500 dark:text-slate-400 font-medium">
                        {title || language}
                    </span>
                </div>
                <button
                    onClick={copyToClipboard}
                    className="p-1.5 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400"
                    aria-label="Copy code"
                >
                    <AnimatePresence mode="wait">
                        {copied ? (
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                                key="check"
                            >
                                <Check className="w-4 h-4 text-green-500" />
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                                key="copy"
                            >
                                <Copy className="w-4 h-4" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>
            <div className="notebook-content relative group">
                <pre className="m-0">
                    <code className={`language-${language}`}>{code}</code>
                </pre>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
        </div>
    );
};
