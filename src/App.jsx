import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, Sun, Moon, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";

import navratriGirl from './assets/images/Navratri_AI_Photo_for_Girl.avif';
import BoyRetroEdits from './assets/images/BoyRetroEdits.avif';
import CinematicLion from './assets/images/CinematicLion&VintageCar.avif';
import FloralPortraitEdits from './assets/images/FloralPortraitEdits.avif';
import GiantStatueEdits from './assets/images/GiantStatueEdits.avif';
import LuxuryCarEdits from './assets/images/LuxuryCarEdits.avif';
import MountainCoffee_Edits from './assets/images/MountainCoffee_Edits.avif';
import Mountaincoffeeportrait from './assets/images/Mountaincoffeeportrait.avif';
import Mountaincoffeeportraitfront from './assets/images/Mountaincoffeeportraitfront.avif';
import NoblemanHorseAIEdits from './assets/images/NoblemanHorseAIEdits.avif';
import RetroSareeAIEdits from './assets/images/RetroSareeAIEdits.avif';
import Streetwear_Fashion_Ai from './assets/images/Streetwear_Fashion_Ai.avif';
import SunshineYellowDandiya from './assets/images/SunshineYellowDandiya.avif';
import EmeraldGreenSpin from './assets/images/EmeraldGreenSpin.avif';
import FieryRedGarba from './assets/images/FieryRedGarba.avif';
import GreenGhagraPortrait from './assets/images/GreenGhagraPortrait.avif';
import joyfulDandiyaTwirl from './assets/images/joyfulDandiyaTwirl.avif';
import MagentaGarbaGlow from './assets/images/MagentaGarbaGlow.avif';
import Floralwomanportrait1 from './assets/images/Floralwomanportrait1.avif';
import Floralwomanportrait2 from './assets/images/Floralwomanportrait2.avif';
import Floralwomanportrait3 from './assets/images/Floralwomanportrait3.avif';

const images = {
  navratriGirl, BoyRetroEdits, CinematicLion, FloralPortraitEdits, GiantStatueEdits,
  LuxuryCarEdits, MountainCoffee_Edits, NoblemanHorseAIEdits, RetroSareeAIEdits,
  Streetwear_Fashion_Ai, SunshineYellowDandiya, EmeraldGreenSpin, FieryRedGarba,
  GreenGhagraPortrait, joyfulDandiyaTwirl, MagentaGarbaGlow, Mountaincoffeeportraitfront, Mountaincoffeeportrait, Floralwomanportrait1, Floralwomanportrait2, Floralwomanportrait3
};

const prompts = [
  {
    id: 1,
    title: "Navratri AI Photo for Girl",
    description: "Transform your portrait into a vibrant Navratri festival look.",
    img: images.navratriGirl
  },
  {
    id: 2,
    title: "Mountain Coffee Edits",
    description: "Create cozy mountain coffee-themed visuals with AI.",
    img: images.MountainCoffee_Edits
  },
  {
    id: 3,
    title: "Floral Portrait Edits",
    description: "Add floral patterns and soft vibes to your portraits.",
    img: images.FloralPortraitEdits
  },
  {
    id: 4,
    title: "Nobleman Horse AI Edits",
    description: "Design regal nobleman-on-horse portraits with AI.",
    img: images.NoblemanHorseAIEdits
  },
  {
    id: 5,
    title: "Cinematic Lion & Vintage Car",
    description: "Create dramatic scenes with lions and vintage cars.",
    img: images.CinematicLion
  },
  {
    id: 6,
    title: "Boy Retro Edits",
    description: "Give your photos a cool retro 80s or 90s vibe.",
    img: images.BoyRetroEdits
  },
  {
    id: 7,
    title: "Luxury Car Edits",
    description: "Transform car photos into sleek luxury visuals.",
    img: images.LuxuryCarEdits
  },
  {
    id: 8,
    title: "Retro Saree AI Edits",
    description: "Style portraits with elegant retro saree designs.",
    img: images.RetroSareeAIEdits
  },
  {
    id: 9,
    title: "Giant Statue Edits",
    description: "Create majestic giant statue-inspired edits with AI.",
    img: images.GiantStatueEdits
  },
  {
    id: 10,
    title: "Streetwear Fashion Ai",
    description: "Create cozy mountain coffee-themed visuals with AI.",
    img: images.Streetwear_Fashion_Ai
  }
];

const subPromptsData = {
  "Navratri AI Photo for Girl": [
    {
      id: 1,
      title: "Joyful Dandiya Twirl",
      text: "Beautiful woman extract face from image playing dandiya with joyful abandon. She has a bright smile, her hair flying as she twirls, holding decorated dandiya sticks, dressed in a colorful, traditional ghagra choli with intricate embroidery and mirror work. The background is a lively blurred scene of a nighttime Navratri festival with other dancers, twinkling lights, and festive decorations. The image is captured from a slightly low angle, emphasizing her dynamic movement.",
      img: images.joyfulDandiyaTwirl
    },
    {
      id: 2,
      title: "Green Ghagra Portrait",
      text: "A stunning 4K portrait of a radiant young woman dancing dandiya at a Navratri festival. Her parrot-green ghagra choli with mirror work glitters under the festive lights. She twirls gracefully, hair flying, her joyful smile illuminated. She holds decorated dandiya sticks in mid-motion, surrounded by blurred dancers, glowing lanterns, and a vibrant nighttime celebration.",
      img: images.GreenGhagraPortrait
    },
    {
      id: 3,
      title: "Fiery Red Garba",
      text: "A lively 4K festival scene of a beautiful woman immersed in Garba dance. Dressed in a fiery red embroidered ghagra choli with shimmering mirror details, she beams with delight while spinning, dandiya sticks raised. The background glows with colorful string lights and other dancers in motion, creating a sense of energy and celebration.",
      img: images.FieryRedGarba
    },
    {
      id: 4,
      title: "Sunshine Yellow Dandiya",
      text: "A dynamic 4K low-angle capture of a young woman playing dandiya with passion and joy. Her outfit is a sunshine yellow ghagra choli richly embroidered with silver and mirror accents. She laughs brightly, hair caught mid-swing as she twirls, dandiya sticks flashing in her hands. The blurred Navratri fairground glimmers with twinkling lights and festive décor.",
      img: images.SunshineYellowDandiya
    },
    {
      id: 5,
      title: "Emerald Green Spin",
      text: "A cinematic 4K action shot of a glowing woman enjoying dandiya at Navratri. Her emerald green ghagra choli sparkles with intricate embroidery, reflecting the stage lights. She is caught mid-spin, smiling with abandon, her sticks clashing in rhythm. Behind her, the night is filled with dancers, lanterns, and strings of golden fairy lights.",
      img: images.EmeraldGreenSpin
    },
    {
      id: 6,
      title: "Magenta Garba Glow",
      text: "A vibrant 4K festival portrait of a beautiful woman dancing Garba. She wears a flowing magenta pink ghagra choli with ornate embroidery and mirror work that glistens as she moves. Her joyful expression and playful twirl make her the heart of the scene, dandiya sticks in motion. The background is softly blurred, alive with lights, decorations, and fellow dancers in traditional attire.",
      img: images.MagentaGarbaGlow
    }
  ],
  "Mountain Coffee Edits": [
    {
      id: 1,
      title: "Mountain coffee portrait",
      text: "Editkan foto ini menjadi seorang wanita yang sedang bergaya posisi duduk di puncak gunung dengan kedua kaki lurus agak sedikit menekuk, sambil memegang cup kopi. Wanita ini memakai jaket gunung hitam, cargo putih, sneakers putih. Dengan rambut lurus panjang tergerai dan bagian bawah rambut curly. Background pemandangan banyak pegunungan yang indah dengan awan awan yang realistis. di suasana cerah pagi hari. Wajah seperti di foto. ในอัตราส่วนภาพ 9:16.",
      img: images.Mountaincoffeeportrait
    },
    {
      id: 2,
      title: "Mountain coffee portrait",
      text: "Editkan foto ini menjadi seorang wanita yang sedang bergaya posisi duduk di puncak gunung dengan kedua kaki lurus agak sedikit menekuk, sambil memegang cup kopi. Wanita ini memakai jaket gunung hitam, cargo putih, sneakers putih. Dengan rambut lurus panjang tergerai dan bagian bawah rambut curly. Background pemandangan banyak pegunungan yang indah dengan awan awan yang realistis. di suasana cerah pagi hari. Wajah seperti di foto. ในอัตราส่วนภาพ 9:16.",
      img: images.Mountaincoffeeportraitfront
    }
  ],
  "Floral Portrait Edits": [
    {
      id: 1,
      title: "Floral woman portrait",
      text: "Create an image of this woman. Copy her facial features. MAKE IT REALISTIC. A serene portrait of a woman with long, dark, wavy hair, lying on her stomach with her chin in her hands. She is wearing a light-colored, off-the-shoulder top with puff sleeves. A white flower partially covers her eye, and she is surrounded by various flowers, plants, and a vase of lilies. The image has soft, diffused lighting and a high-resolution, natural quality. lu อัตราส่วนภาพ 9:16.",
      img: images.Floralwomanportrait1
    },
    {
      id: 2,
      title: "Floral woman portrait",
      text: "Create an image of this woman. Copy her facial features. MAKE IT REALISTIC. A serene portrait of a woman with long, dark, wavy hair, lying on her stomach with her chin in her hands. She is wearing a light-colored, off-the-shoulder top with puff sleeves. A white flower partially covers her eye, and she is surrounded by various flowers, plants, and a vase of lilies. The image has soft, diffused lighting and a high-resolution, natural quality. lu อัตราส่วนภาพ 9:16.",
      img: images.Floralwomanportrait2
    },
    {
      id: 3,
      title: "Floral woman portrait",
      text: "Create an image of this woman. Copy her facial features. MAKE IT REALISTIC. A serene portrait of a woman with long, dark, wavy hair, lying on her stomach with her chin in her hands. She is wearing a light-colored, off-the-shoulder top with puff sleeves. A white flower partially covers her eye, and she is surrounded by various flowers, plants, and a vase of lilies. The image has soft, diffused lighting and a high-resolution, natural quality. lu อัตราส่วนภาพ 9:16.",
      img: images.Floralwomanportrait3
    }
  ],
  "Nobleman Horse AI Edits": [
    {
      id: 1,
      title: "Orange nobleman horse",
      text: "9:16, Use 100% face above uploaded photo. A cinematic and dramatic portrait of a handsome, pensive young nobleman in late 20s with black hair like uploaded photo, with dark, windswept hair, mounted on a majestic black stallion in a desolate, snow-covered winter forest. He is impeccably dressed in a heavy, flowing orange wool overcoat over a dark tailored waistcoat and trousers, complemented by high leather riding boots and dark gloves. The lighting is soft and diffused. Face same uploaded picture.",
      img: images.Floralwomanportrait1
    },
    {
      id: 2,
      title: "Red nobleman horse",
      text: "9:16, Use 100% face above uploaded photo. A cinematic and dramatic portrait of a handsome, pensive young nobleman in late 20s with black hair like uploaded photo, with dark, windswept hair, mounted on a majestic black stallion in a desolate, snow-covered winter forest. He is impeccably dressed in a heavy, flowing crimson-red wool overcoat over a dark tailored waistcoat and trousers, complemented by high leather riding boots and dark gloves. The lighting is soft and diffused. Face same uploaded picture.",
      img: images.Floralwomanportrait2
    },
    {
      id: 3,
      title: "Blue nobleman horse",
      text: "9:16, Use 100% face above uploaded photo. A cinematic and dramatic portrait of a handsome, pensive young nobleman in late 20s with black hair like uploaded photo, with dark, windswept hair, mounted on a majestic black stallion in a desolate, snow-covered winter forest. He is impeccably dressed in a heavy, flowing blue wool overcoat over a dark tailored waistcoat and trousers, complemented by high leather riding boots and dark gloves. The lighting is soft and diffused. Face same uploaded picture.",
      img: images.Floralwomanportrait3
    }
  ]
};

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const exploreRef = useRef(null);

  const toggleTheme = () => setDarkMode(prev => !prev);
  const scrollToExplore = () => exploreRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    if (selectedPrompt) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedPrompt]);

  const filteredPrompts = searchTerm.length >= 3
    ? prompts.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.description.toLowerCase().includes(searchTerm.toLowerCase()))
    : prompts;

  const copyToClipboard = (text) => { navigator.clipboard.writeText(text); alert("Prompt copied!"); };

  const themeClasses = darkMode
    ? "bg-gray-900 text-white"
    : "bg-gray-100 text-gray-900";

  const cardBgClass = darkMode
    ? "bg-zinc-900 border border-gray-700"
    : "bg-white border border-gray-300";

  const textPrimary = darkMode ? "text-white" : "text-gray-900";
  const textSecondary = darkMode ? "text-gray-400" : "text-gray-600";

  const subPrompts = subPromptsData[selectedPrompt] || [];

  return (
    <div className={`${themeClasses} min-h-screen transition-colors duration-500`}>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 backdrop-blur-md bg-black/20 dark:bg-black/30 sticky top-0 z-50">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
        >
          NewAIPrompt
        </motion.h1>
        <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 transition">
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence mode="wait">
        {!selectedPrompt ? (
          <>
            {/* Hero Section */}
            <section className="flex flex-col items-center text-center px-6 mt-20 relative">
              <div className="absolute w-72 h-72 bg-pink-500/10 blur-3xl top-10 left-10 rounded-full"></div>
              <div className="absolute w-96 h-96 bg-purple-600/10 blur-3xl bottom-10 right-10 rounded-full"></div>

              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-red-400 to-purple-500 bg-clip-text text-transparent"
              >
                NewAIPrompt
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="mt-4 text-lg max-w-2xl"
              >
                Discover premium AI prompts tailored for ChatGPT, Claude, Gemini, and more.
              </motion.p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-8 w-full max-w-md rounded-full flex items-center shadow-lg overflow-hidden focus-within:ring-2 focus-within:ring-pink-500"
              >
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search AI prompts (min 3 characters)..."
                  className={`flex-1 px-5 py-3 bg-transparent focus:outline-none placeholder-gray-500 text-sm ${textPrimary}`}
                />
                <Search className="w-5 h-5 mx-4 text-gray-400" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                onClick={scrollToExplore}
                className="flex flex-col items-center mt-10 cursor-pointer hover:text-pink-400 transition"
              >
                <span className="text-sm">Explore AI Prompts</span>
                <ChevronDown className="w-6 h-6 animate-bounce mt-2" />
              </motion.div>
            </section>

            {/* Prompt Grid */}
            <section ref={exploreRef} className="py-24 px-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                Featured Prompts
              </h2>

              {filteredPrompts.length === 0 ? (
                <p className="text-center text-gray-400">No prompts found.</p>
              ) : (
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">

                  {filteredPrompts.map((prompt) => (
                    <motion.div
                      key={prompt.id}
                      whileHover={{ scale: 1.03 }}
                      onClick={() => setSelectedPrompt(prompt.title)}
                      className={`relative ${cardBgClass} rounded-xl overflow-hidden shadow-lg w-full cursor-pointer`}
                    >
                      <img src={prompt.img} alt={prompt.title} className="w-full h-60 sm:h-64 md:h-72 lg:h-80 object-cover" />
                      <div className="p-4">
                        <h3 className={`font-semibold text-lg ${textPrimary}`}>{prompt.title}</h3>
                        <p className={`text-sm line-clamp-2 ${textSecondary}`}>{prompt.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </section>
          </>
        ) : (
          // Sub Prompts Page
          <section className="py-20 px-6 max-w-6xl mx-auto">
            <button
              onClick={() => setSelectedPrompt(null)}
              className="flex items-center mb-6 text-pink-400 hover:text-pink-500"
            >
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Prompts
            </button>
            <h2 className="text-3xl font-bold mb-8">{selectedPrompt}</h2>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {subPrompts.map((sp) => (
                <motion.div
                  key={sp.id}
                  whileHover={{ scale: 1.05 }}
                  className={`relative  bg-zinc-900 rounded-2xl overflow-hidden border border-pink-500/30 shadow-lg ${cardBgClass} shadow-pink-500/20 hover:shadow-pink-500/40 transition-all duration-300 cursor-pointer`}
                >
                  <img src={sp.img} alt={sp.title} className="w-full h-60 sm:h-64 md:h-72 lg:h-80 object-cover" />

                  <div className="p-4">
                    <h3 className="text-white font-bold text-lg mb-1">{sp.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-4">{sp.text}</p>
                    <button
                      onClick={() => copyToClipboard(sp.text)}
                      className="w-full px-3 py-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-sm font-semibold rounded-lg shadow-md transition-all duration-300"
                    >
                      Copy Prompt
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </AnimatePresence>

      <Footer darkMode={darkMode} />
    </div>
  );
}
