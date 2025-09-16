import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, X } from "lucide-react";

export default function SupportModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const upiId = "nairakash128@okaxis";

    const copyUPI = () => {
        navigator.clipboard.writeText(upiId);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <>
            {/* Floating Button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-6 right-6 z-[9999] px-5 py-3 rounded-full 
             bg-gradient-to-r from-pink-500 to-purple-500 text-white 
             font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
                ☕ Support Me
            </motion.button>


            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-2xl shadow-2xl w-80 p-6 relative"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <h2 className="text-xl font-bold mb-4 text-center">Support My Work</h2>
                            <p className="text-center text-sm mb-4">
                                If you enjoy this project, you can support me via UPI.
                            </p>

                            {/* QR Code */}
                            <img
                                src="/upi-qr.jpg"
                                alt="UPI QR Code"
                                className="mx-auto w-40 h-40 mb-4 rounded-lg shadow-md"
                            />

                            {/* UPI ID with Copy */}
                            <div className="flex items-center justify-center space-x-3">
                                <span className="font-mono text-sm">{upiId}</span>
                                <button
                                    onClick={copyUPI}
                                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                                >
                                    {copied ? (
                                        <Check className="w-4 h-4 text-green-500" />
                                    ) : (
                                        <Copy className="w-4 h-4" />
                                    )}
                                </button>
                            </div>

                            <p className="text-xs text-center mt-4 text-gray-500 dark:text-gray-400">
                                Thank you for your support! ❤️
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
