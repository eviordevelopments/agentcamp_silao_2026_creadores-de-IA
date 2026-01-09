import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Terminal, FileCode } from 'lucide-react';
import { clsx } from 'clsx';

interface NotebookBlockProps {
    language?: string;
    code: string;
    title?: string;
    showLineNumbers?: boolean;
    className?: string;
    height?: string;
}

export const NotebookBlock: React.FC<NotebookBlockProps> = ({
    language = 'markdown',
    code,
    title,
    showLineNumbers = true,
    className,
    height
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const lines = code.trim().split('\n');

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={clsx("rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg bg-[#1e1e1e] text-slate-300 font-mono text-sm my-6 group", className)}
        >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-white/5">
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400 opacity-80" />
                        <div className="w-3 h-3 rounded-full bg-amber-400 opacity-80" />
                        <div className="w-3 h-3 rounded-full bg-emerald-400 opacity-80" />
                    </div>
                    {title && (
                        <span className="text-slate-400 text-xs flex items-center gap-1.5 ml-2 font-sans font-medium">
                            <FileCode size={12} />
                            {title}
                        </span>
                    )}
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{language}</span>
                    <button
                        onClick={handleCopy}
                        className="p-1.5 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                        title="Copy code"
                    >
                        {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    </button>
                </div>
            </div>

            {/* Code Area */}
            <div className={clsx("relative overflow-x-auto custom-scrollbar p-4", height ? `h-[${height}] overflow-y-auto` : "")} style={height ? { height } : {}}>
                <table className="border-collapse w-full">
                    <tbody>
                        {lines.map((line, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                                {showLineNumbers && (
                                    <td className="select-none text-right pr-4 text-slate-600 w-8 border-r border-white/5 opacity-50 text-xs py-0.5">
                                        {i + 1}
                                    </td>
                                )}
                                <td className="pl-4 py-0.5 whitespace-pre">
                                    {/* Basic syntax highlighting simulation */}
                                    {line.startsWith('#') ? (
                                        <span className="text-purple-400 font-bold">{line}</span>
                                    ) : line.startsWith('- ') || line.startsWith('* ') ? (
                                        <span className="text-sky-300">{line}</span>
                                    ) : line.includes('```') ? (
                                        <span className="text-amber-400 opacity-70">{line}</span>
                                    ) : line.startsWith('>') ? (
                                        <span className="text-emerald-400 italic">{line}</span>
                                    ) : (
                                        <span className="text-slate-300">{line}</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Footer / Status Bar style */}
            <div className="bg-[#007acc] text-white text-[10px] px-3 py-1 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2">
                    <Terminal size={10} />
                    <span>UTF-8</span>
                </div>
                <span>Ln {lines.length}, Col {lines[lines.length - 1]?.length || 0}</span>
            </div>
        </motion.div>
    );
};
