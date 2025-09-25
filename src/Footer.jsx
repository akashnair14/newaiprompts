import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Instagram } from "lucide-react";

export default function Footer({ darkMode }) {
    const linkHover = { scale: 1.1, color: darkMode ? "#fff" : "#111" };
    const iconHover = { scale: 1.2, color: "#ec4899" };

    const bgClass = darkMode
        ? "bg-gradient-to-t from-gray-900 via-black to-gray-900 text-gray-300"
        : "bg-gradient-to-t from-gray-100 via-white to-gray-100 text-gray-800";

    const textSecondary = darkMode ? "text-gray-400" : "text-gray-600";

    return (
        <footer className={`${bgClass} py-16 px-6 sm:px-12 transition-colors duration-500`}>
            {/* Brand Section */}
            <div className="flex flex-col items-center mb-10 space-y-3">
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-2xl shadow-lg shadow-pink-500/30"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 11c0-1.104-.896-2-2-2H6a2 2 0 00-2 2v0a2 2 0 002 2h4c1.104 0 2-.896 2-2zM18 5H8a2 2 0 00-2 2v0a2 2 0 002 2h10a2 2 0 002-2v0a2 2 0 00-2-2zM16 17H8a2 2 0 00-2 2v0a2 2 0 002 2h8a2 2 0 002-2v0a2 2 0 00-2-2z"
                        />
                    </svg>
                </motion.div>
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                    GenXPrompt
                </h2>
                <p className={`${textSecondary} text-center max-w-md`}>
                    Discover premium AI prompts optimized for creativity and productivity.
                </p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 mb-10">
                {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                    <motion.a key={i} href="#" whileHover={iconHover} className={textSecondary}>
                        <Icon className="w-6 h-6" />
                    </motion.a>
                ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
                {["Privacy Policy", "Terms & Conditions", "Contact Us", "About Us", "DMCA Policy"].map(
                    (link, i) => (
                        <motion.a
                            key={i}
                            href="#"
                            whileHover={linkHover}
                            className={`text-sm hover:text-white transition-colors duration-200`}
                        >
                            {link}
                        </motion.a>
                    )
                )}
            </div>

            {/* Bottom Text */}
            <p className={`text-xs text-center max-w-lg mx-auto transition-colors duration-200 ${textSecondary}`}>
                © 2025 <span className="font-semibold text-white">GenXPrompt</span>. Made with{" "}
                <span className="text-pink-500 animate-pulse">❤️</span> for AI enthusiasts.
            </p>
        </footer>
    );
}
