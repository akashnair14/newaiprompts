import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, Sun, Moon, ArrowLeft, Sparkles, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SupportModal from "./SupportModal";
// Import your original images
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
import polaroid from './assets/images/polaroid.avif';
import noblemanorange from './assets/images/noblemanorange.png';
import noblemanred from './assets/images/noblemanred.png';
import noblemanblue from './assets/images/noblemanblue.png';
import Purpleretrosaree from './assets/images/Purpleretrosaree.png';
import Redchiffonretro from './assets/images/Redchiffonretro.png';
import Yellowchiffonretro from './assets/images/Yellowchiffonretro.png';
import Royalbluesilkretro from './assets/images/Royalbluesilkretro.png';
import Blackretrosaree from './assets/images/Blackretrosaree.png';
import Bluecottonretro from './assets/images/Bluecottonretro.png';
import couplebenchscene from './assets/images/couplebenchscene.png';

// Your original images object
const images = {
  navratriGirl,
  BoyRetroEdits,
  CinematicLion,
  FloralPortraitEdits,
  GiantStatueEdits,
  LuxuryCarEdits,
  MountainCoffee_Edits,
  Mountaincoffeeportrait,
  Mountaincoffeeportraitfront,
  NoblemanHorseAIEdits,
  RetroSareeAIEdits,
  Streetwear_Fashion_Ai,
  SunshineYellowDandiya,
  EmeraldGreenSpin,
  FieryRedGarba,
  GreenGhagraPortrait,
  joyfulDandiyaTwirl,
  MagentaGarbaGlow,
  Floralwomanportrait1,
  Floralwomanportrait2,
  Floralwomanportrait3,
  polaroid,
  noblemanorange,
  noblemanred,
  noblemanblue,
  Purpleretrosaree,
  Redchiffonretro,
  Royalbluesilkretro,
  Yellowchiffonretro,
  Blackretrosaree,
  Bluecottonretro,
  couplebenchscene,
};

// Your original prompts with added category field for compatibility
const prompts = [
  {
    id: 1,
    title: "Navratri AI Photo for Girl",
    description: "Transform your portrait into a vibrant Navratri festival look.",
    img: images.navratriGirl,
    category: "Festival",
  },
  {
    id: 2,
    title: "Retro Couple AI Edits",
    description: "Create Retro Style Couple AI Edits.",
    img: images.couplebenchscene,
    category: "Couple",
  },
  {
    id: 3,
    title: "Floral Portrait Edits",
    description: "Add floral patterns and soft vibes to your portraits.",
    img: images.FloralPortraitEdits,
    category: "Portrait",
  },
  {
    id: 4,
    title: "Nobleman Horse AI Edits",
    description: "Design regal nobleman-on-horse portraits with AI.",
    img: images.noblemanorange,
    category: "Fantasy",
  },
  {
    id: 5,
    title: "Gemini Polaroid Prompt",
    description: "Give your couple photos a cool retro polaroid effect.",
    img: images.polaroid,
    category: "Retro",
  },
  {
    id: 6,
    title: "Retro Saree AI Edits",
    description: "Style portraits with elegant retro saree designs.",
    img: images.Redchiffonretro,
    category: "Fashion",
  },
  {
    id: 7,
    title: "Cinematic Lion & Vintage Car",
    description: "Create dramatic scenes with lions and vintage cars.",
    img: images.CinematicLion,
    category: "Cinematic",
  },
  {
    id: 8,
    title: "Boy Retro Edits",
    description: "Give your photos a cool retro 80s or 90s vibe.",
    img: images.BoyRetroEdits,
    category: "Retro",
  },
  {
    id: 9,
    title: "Luxury Car Edits",
    description: "Transform car photos into sleek luxury visuals.",
    img: images.LuxuryCarEdits,
    category: "Automotive",
  },
  {
    id: 10,
    title: "Giant Statue Edits",
    description: "Create majestic giant statue-inspired edits with AI.",
    img: images.GiantStatueEdits,
    category: "Fantasy",
  },
  {
    id: 11,
    title: "Streetwear Fashion Ai",
    description: "Create Street Style fashionwear with AI.",
    img: images.Streetwear_Fashion_Ai,
    category: "Fashion",
  },
  {
    id: 12,
    title: "Mountain Coffee Edits",
    description: "Create cozy mountain coffee-themed visuals with AI.",
    img: images.MountainCoffee_Edits,
    category: "Lifestyle",
  },
];

const subPromptsData = {
  "Navratri AI Photo for Girl": [
    {
      id: 1,
      title: "Joyful Dandiya Twirl",
      text: "Beautiful woman extract face from image playing dandiya with joyful abandon. She has a bright smile, her hair flying as she twirls, holding decorated dandiya sticks, dressed in a colorful, traditional ghagra choli with intricate embroidery and mirror work. The background is a lively blurred scene of a nighttime Navratri festival with other dancers, twinkling lights, and festive decorations. The image is captured from a slightly low angle, emphasizing her dynamic movement.",
      img: images.joyfulDandiyaTwirl,
    },
    {
      id: 2,
      title: "Green Ghagra Portrait",
      text: "A stunning 4K portrait of a radiant young woman dancing dandiya at a Navratri festival. Her parrot-green ghagra choli with mirror work glitters under the festive lights. She twirls gracefully, hair flying, her joyful smile illuminated. She holds decorated dandiya sticks in mid-motion, surrounded by blurred dancers, glowing lanterns, and a vibrant nighttime celebration.",
      img: images.GreenGhagraPortrait,
    },
    {
      id: 3,
      title: "Fiery Red Garba",
      text: "A lively 4K festival scene of a beautiful woman immersed in Garba dance. Dressed in a fiery red embroidered ghagra choli with shimmering mirror details, she beams with delight while spinning, dandiya sticks raised. The background glows with colorful string lights and other dancers in motion, creating a sense of energy and celebration.",
      img: images.FieryRedGarba,
    },
    {
      id: 4,
      title: "Sunshine Yellow Dandiya",
      text: "A dynamic 4K low-angle capture of a young woman playing dandiya with passion and joy. Her outfit is a sunshine yellow ghagra choli richly embroidered with silver and mirror accents. She laughs brightly, hair caught mid-swing as she twirls, dandiya sticks flashing in her hands. The blurred Navratri fairground glimmers with twinkling lights and festive décor.",
      img: images.SunshineYellowDandiya,
    },
    {
      id: 5,
      title: "Emerald Green Spin",
      text: "A cinematic 4K action shot of a glowing woman enjoying dandiya at Navratri. Her emerald green ghagra choli sparkles with intricate embroidery, reflecting the stage lights. She is caught mid-spin, smiling with abandon, her sticks clashing in rhythm. Behind her, the night is filled with dancers, lanterns, and strings of golden fairy lights.",
      img: images.EmeraldGreenSpin,
    },
    {
      id: 6,
      title: "Magenta Garba Glow",
      text: "A vibrant 4K festival portrait of a beautiful woman dancing Garba. She wears a flowing magenta pink ghagra choli with ornate embroidery and mirror work that glistens as she moves. Her joyful expression and playful twirl make her the heart of the scene, dandiya sticks in motion. The background is softly blurred, alive with lights, decorations, and fellow dancers in traditional attire.",
      img: images.MagentaGarbaGlow,
    },
  ],
  "Mountain Coffee Edits": [
    {
      id: 1,
      title: "Mountain coffee portrait",
      text: "Editkan foto ini menjadi seorang wanita yang sedang bergaya posisi duduk di puncak gunung dengan kedua kaki lurus agak sedikit menekuk, sambil memegang cup kopi. Wanita ini memakai jaket gunung hitam, cargo putih, sneakers putih. Dengan rambut lurus panjang tergerai dan bagian bawah rambut curly. Background pemandangan banyak pegunungan yang indah dengan awan awan yang realistis. di suasana cerah pagi hari. Wajah seperti di foto. ในอัตราส่วนภาพ 9:16.",
      img: images.Mountaincoffeeportrait,
    },
    {
      id: 2,
      title: "Mountain coffee portrait",
      text: "Editkan foto ini menjadi seorang wanita yang sedang bergaya posisi duduk di puncak gunung dengan kedua kaki lurus agak sedikit menekuk, sambil memegang cup kopi. Wanita ini memakai jaket gunung hitam, cargo putih, sneakers putih. Dengan rambut lurus panjang tergerai dan bagian bawah rambut curly. Background pemandangan banyak pegunungan yang indah dengan awan awan yang realistis. di suasana cerah pagi hari. Wajah seperti di foto. ในอัตราส่วนภาพ 9:16.",
      img: images.Mountaincoffeeportraitfront,
    },
  ],
  "Floral Portrait Edits": [
    {
      id: 1,
      title: "Floral woman portrait",
      text: "Create an image of this woman. Copy her facial features. MAKE IT REALISTIC. A serene portrait of a woman with long, dark, wavy hair, lying on her stomach with her chin in her hands. She is wearing a light-colored, off-the-shoulder top with puff sleeves. A white flower partially covers her eye, and she is surrounded by various flowers, plants, and a vase of lilies. The image has soft, diffused lighting and a high-resolution, natural quality. lu อัตราส่วนภาพ 9:16.",
      img: images.Floralwomanportrait1,
    },
    {
      id: 2,
      title: "Floral woman portrait",
      text: "Create an image of this woman. Copy her facial features. MAKE IT REALISTIC. A serene portrait of a woman with long, dark, wavy hair, lying on her stomach with her chin in her hands. She is wearing a light-colored, off-the-shoulder top with puff sleeves. A white flower partially covers her eye, and she is surrounded by various flowers, plants, and a vase of lilies. The image has soft, diffused lighting and a high-resolution, natural quality. lu อัตราส่วนภาพ 9:16.",
      img: images.Floralwomanportrait2,
    },
    {
      id: 3,
      title: "Floral woman portrait",
      text: "Create an image of this woman. Copy her facial features. MAKE IT REALISTIC. A serene portrait of a woman with long, dark, wavy hair, lying on her stomach with her chin in her hands. She is wearing a light-colored, off-the-shoulder top with puff sleeves. A white flower partially covers her eye, and she is surrounded by various flowers, plants, and a vase of lilies. The image has soft, diffused lighting and a high-resolution, natural quality. lu อัตราส่วนภาพ 9:16.",
      img: images.Floralwomanportrait3,
    },
  ],
  "Nobleman Horse AI Edits": [
    {
      id: 1,
      title: "Orange nobleman horse",
      text: "9:16, Use 100% face above uploaded photo. A cinematic and dramatic portrait of a handsome, pensive young nobleman in late 20s with black hair like uploaded photo, with dark, windswept hair, mounted on a majestic black stallion in a desolate, snow-covered winter forest. He is dressed in a Orange wool overcoat over a dark tailored waistcoat and trousers, complemented by high leather riding boots and dark gloves. The lighting is soft and diffused. Face same uploaded picture.",
      img: images.noblemanorange,
    },
    {
      id: 2,
      title: "Red nobleman horse",
      text: "9:16, Use 100% face above uploaded photo. A cinematic and dramatic portrait of a handsome, pensive young nobleman in late 20s with black hair like uploaded photo, with dark, windswept hair, mounted on a majestic black stallion in a desolate, snow-covered winter forest. He is dressed in a Red wool overcoat over a dark tailored waistcoat and trousers, complemented by high leather riding boots and dark gloves. The lighting is soft and diffused. Face same uploaded picture.",
      img: images.noblemanred,
    },
    {
      id: 3,
      title: "Blue nobleman horse",
      text: "9:16, Use 100% face above uploaded photo. A cinematic and dramatic portrait of a handsome, pensive young nobleman in late 20s with black hair like uploaded photo, with dark, windswept hair, mounted on a majestic black stallion in a desolate, snow-covered winter forest. He is dressed in a royale Blue wool overcoat over a dark tailored waistcoat and trousers, complemented by high leather riding boots and dark gloves. The lighting is soft and diffused. Face same uploaded picture.",
      img: images.noblemanblue,
    },
  ],
  "Boy Retro Edits": [
    {
      id: 1,
      title: "Black kurta portrait",
      text: "Convert 4k HD realistic, a stunning portrait of a young Indian man with dark, wavy hair. He is wearing a translucent elegant black kurta, looking slightly to his right with a soft serene expression. I want same face as I uploaded on alternation 100 percent same. The background is a plain warm-toned wall illuminated by a warm light source from the right, creating a distinct, soft-edged shadow of his profile and hair on the wall behind him. The overall mood is retro and artistic.",
      img: images.BoyRetroEdits,
    },
    {
      id: 2,
      title: "Green retro outfit",
      text: "Create a retro vintage grainy but bright image of the reference picture but draped in a perfect plain chiffon dark green shirt and beige colour pants Pinteresty aesthetic retro outfit. It must feel like a 90s movie — dark brown wavy curly hair with a small flower tucked visibly into his curls and romanticising windy environment. The guy is standing against a solid wall, deep shadows and contrast drama creating a mysterious and artistic atmosphere. The lighting is warm with golden tones, evoking a sunset or golden hour glow. The background is minimalist and slightly textured. The expression on his face is moody, calm yet happy and introspective.",
      img: images.BoyRetroEdits,
    },
    {
      id: 4,
      title: "Dreamy Boy",
      text: "Create a dreamy soft-focus image of the reference picture, styled in an ethereal modern surrealist aesthetic. The boy is wearing a loose ivory linen shirt with delicate embroidery and light sage trousers, giving a poetic, timeless look. His dark brown wavy curls are glowing in the light, with tiny scattered petals caught in his hair instead of just one flower, as if carried by the wind. The atmosphere feels airy and magical — pastel skies with faint watercolor-like clouds behind him, a gentle painterly texture to the background. The lighting is diffused and pearly, evoking dawn or an overcast day, with soft flares that feel like a dream sequence. His expression is serene, contemplative, almost as if lost in thought, creating a tender emotional depth. The style should feel like a blend of fine art photography and impressionist painting rather than vintage film.",
      img: images.BoyRetroEdits,
    },
    {
      id: 5,
      title: "Retro red wine look",
      text: "Create a retro vintage grainy but bright image of the reference picture but draped in a perfect red wine color Pinterest aesthetic retro shirt with white pants and holding a rose flower in hands. It must feel like a 90s movie and romanticising windy environment. The boy is standing against a solid wall, deep shadows and contrast drama, creating a mysterious and artistic atmosphere where the lighting is warm with golden tones evoking a sunset or golden hour glow. The background is minimalist and slightly textured. The expression on his face is moody, calm yet happy and introspective.",
      img: images.BoyRetroEdits,
    },
    {
      id: 6,
      title: "Sherwani silver portrait",
      text: "Convert, 4K HD realistic, a stunning portrait of a young Indian man with hair like mine. He is wearing a white and silver sherwani with dhoti & dupatta slaying down from his neck, and a silver watch in his hand. He is looking slightly straight, with a soft, serene expression. I want same face as I uploaded, no alternation, 100% same. The background is a plain, warm-toned wall illuminated by a warm light source from the right, creating a distinct, soft-edged shadow of his profile and hair on the wall behind him. The overall mood is retro and artistic.",
      img: images.BoyRetroEdits,
    },
    {
      id: 7,
      title: "Urban staircase edit",
      text: "A highly realistic photo of a young man sitting stylishly on an old iron staircase outside a building, wearing a loose beige T-shirt, faded blue jeans, white sneakers, a gold wristwatch, and round sunglasses. He is resting one elbow on the railing and the other hand on his chin in a confident pose. The background shows faded concrete walls and soft cinematic lighting with a slightly warm tone. The hairstyle is neat and voluminous, similar to a trendy urban young look. Keep everything exactly the same — pose, outfit, light, body, angle, and background — but replace the face with [user's face], keeping skin tone and lighting natural.",
      img: images.BoyRetroEdits,
    },
    {
      id: 8,
      title: "Luxury penthouse portrait",
      text: "DSLR style 4K ultra-realistic photo — a stylish man (face and hairstyle must be exactly the same and perfect as the uploaded image) is sitting casually on a sleek black leather lounge chair. He wears a crisp white polo shirt, slim-fit navy chinos, and white sneakers. A silver wristwatch and aviator sunglasses complete the look. His posture is relaxed with a confident smile.Background: A luxury penthouse living room with floor-to-ceiling windows, modern grey sofas, indoor plants, and warm natural daylight streaming in.",
      img: images.BoyRetroEdits,
    },
  ],
  "Retro Saree AI Edits": [
    {
      id: 1,
      title: "Red chiffon retro",
      text: "In a perfect plain chiffon saree red color Pinterest aesthetic retro saree. It must feel like a 90s movie dark brown wavy curly hair with a small flower tucked visibly into her curls and romanticising windy environment. The girl is standing against a solid wall deep shadows and contrast drama, creating a mysterious and artistic atmosphere where the lighting is warm with a golden tones of evoking a sunset or golden hour glow. The background is minimalist and slightly textured the expression on her face is moody, calm yet happy and introspective.",
      img: images.Redchiffonretro,
    },
    {
      id: 2,
      title: "Yellow chiffon retro",
      text: "Create a retro vintage grainy but bright image of the reference picture but draped in a perfect plain chiffon saree yellow color Pinteresty aesthetic retro saree. It must feel like a 90s movie dark brown wavy curly hair with a small flower tucked visibly into her curls and romanticising windy environment. The girl is standing against a solid wall deep shadows and contrast drama, creating a mysterious and artistic atmosphere where the lighting is warm with golden tones of evoking a sunset or golden hour glow. The background is minimalist and slightly textured the expression on her face is moody, calm yet happy and introspective.",
      img: images.Yellowchiffonretro,
    },
    {
      id: 3,
      title: "Blue cotton retro",
      text: "Create a retro, vintage-inspired image - grainy yet bright based on the reference picture. The girl should be draped in a perfect blue cotton saree with small white flower prints, paired with a white blouse with sleeves above the elbow, styled in a Pinterest-inspired aesthetic. The vibe must capture the essence of a 90s movie dark-brown-haired baddie, with silky hair and a small flower tucked visibly into her hair, enhanced by a windy, romantic atmosphere. She is sitting on a wooden bench as a few leaves blow in the air, while dramatic contrasts add mystery and artistry to the scene, creating a moody yet enchanting cinematic effect. Her pose should suggest that she is reading a book.",
      img: images.Bluecottonretro,
    },
    {
      id: 4,
      title: "Purple retro saree",
      text: "Create a retro, vintage-inspired image grainy yet bright - based on the reference picture. The girl should be draped in a perfect plain purple saree paired with a black sleeveless blouse on it, Pinterest style aesthetic saree. The vibe must capture the essence of a 90s movie dark brown-haired baddie, with silky hair and a small flower tucked visibly into her hair enhanced by a windy, romantic atmosphere. She stands against an old wooden door, where deep shadows and dramatic contrasts add mystery and artistry to the scene, creating a moody yet enchanting cinematic effect. Make a pose like she is adjusting her saree.",
      img: images.Purpleretrosaree,
    },
    {
      id: 5,
      title: "Black retro saree",
      text: "Create a retro vintage grainy but bright image of the reference picture but draped in a perfect black color Pinterest's aesthetic retro saree. It must feel like a 90s movie brown hair baddie with a small flower tucked visibly into her curls and romanticizing windy environment. The girl is standing against a solid wall deep shadows and contrast drama, creating a mysterious and artistic atmosphere where the lighting is warm with a golden tones of evoking a sunset or golden hour glow. The background is minimalist and slightly textured the expression on her face is moody, calm yet happy and introspective.",
      img: images.Blackretrosaree,
    },
    {
      id: 6,
      title: "Royal blue silk retro",
      text: "Create a retro vintage grainy but bright image of the reference picture but draped in a perfect an elegant royal blue silk saree with golden motifs and a golden border, in Pinteresty aesthetic retro saree. It must feel like a 90s movie brown hair baddie with a small flower tucked visibly into her curls and romanticising windy environment. The girl is standing against a solid wall deep shadows and contrast drama, creating a mysterious and artistic atmosphere where the lighting is warm with golden tones of evoking a sunset or golden hour glow. The background is minimalist and slightly textured the expression on her face is moody, calm yet happy and introspective.",
      img: images.Royalbluesilkretro,
    },
  ], "Retro Couple AI Edits": [
    {
      id: 1,
      title: "Blue Saree Hair Touch Scene",
      text: "Generate a moody retro-inspired close-up with cinematic grain and soft brightness. The girl wears a blue retro saree with wavy curls blowing in the wind, a small flower pinned in her hair. The guy in a white Chinese collar kurta tucks a loose strand of her hair behind her ear while gazing into her eyes. The romantic windy atmosphere enhances the essence of a 90s film scene, with deep shadows adding dramatic artistry.",
      img: images.BluesareeHairTouch,
    },
    {
      id: 2,
      title: "Durga Pandal",
      text: "Convert a 4k HD realistic stunning portrait. Face must be same as uploaded – no alteration, 100% same. Female: Woman with long, dark, wavy hair cascading over her shoulders, wearing a translucent elegant red saree draped over one shoulder, with white flowers tucked behind her right ear. She is looking slightly to her man. Male: Wearing a yellow punjabi and white pajama, a watch on his hand, looking towards her with his hand on her shoulder. Background: Blurred festive 'Maa Durga' backdrop illuminated by warm side light, evoking a retro mood.",
      img: images.DurgaPandalCouple,
    },
    {
      id: 3,
      title: "Romantic Pose Couple",
      text: "Create a retro, vintage-inspired image – grainy yet bright – based on the reference picture. The girl is draped in a purple chiffon Pinterest-style saree with dark brown silky hair and a flower tucked visibly into it. She stands against a wall with the shadow of a tree, and the man wears matching clothes, both in a romantic pose. The mood is artistic, moody, and cinematic.",
      img: images.RomanticPoseCouple,
    },
    {
      id: 4,
      title: "Red Saree Rose Petals Bench Scene",
      text: "A cinematic scene where the girl is sitting on a wooden bench and the boy stands behind her, gently kissing her cheek. She wears a red saree with white flower prints and a white sleeveless blouse. Her wavy hair is tousled by the wind as she holds roses. The bench and surrounding area are scattered with rose petals, evoking nostalgic romance.",
      img: images.RosePetalsBenchScene,
    },
    {
      id: 5,
      title: "Cozy Mirror Selfie Couple",
      text: "A young couple takes a mirror selfie in a softly lit hallway. Both wear matching oversized white sweatshirts with black sleeve text. The girl holds the phone and smiles gently, while the boy stands behind her, arm around her shoulders, chin near her head. A cozy, pastel-toned atmosphere highlights their affectionate bond.",
      img: images.MirrorSelfieCouple,
    },
    {
      id: 6,
      title: "Red Saree Waist Hold Couple",
      text: "A 90s retro cinematic image with the girl in a red aesthetic saree and the guy in a white Chinese collar kurta. Her hair blows in the wind with a flower tucked in, while he holds her waist and looks into her eyes. They stand against a solid wall with warm golden lighting and moody contrast.",
      img: images.RedSareeWaistHold,
    },
    {
      id: 7,
      title: "Purple Saree & Black Shirt Couple",
      text: "Create a retro-style image with the girl in a purple chiffon saree adjusting her hair, standing against a wall with dramatic tree shadows. The guy wears a black shirt and pants with a watch, positioned just behind her. Lighting is moody, romantic, and artistic.",
      img: images.PurpleSareeBlackShirt,
    },
    {
      id: 8,
      title: "Brown Saree & Suit Couple",
      text: "The girl wears a brown retro saree and the guy is in a suit. She has long wavy black hair with a small flower tucked in, wind blowing to set a nostalgic mood. They stand against a textured wall in warm golden light with dramatic shadows, evoking introspective calmness.",
      img: images.BrownSareeSuitCouple,
    },
    {
      id: 9,
      title: "Red Saree & White Kurta Couple",
      text: "The girl wears a red retro saree, and the boy is in a white Chinese collar kurta. Her wavy hair blows with a flower tucked in. He holds her waist, gazing into her eyes. They’re against a solid wall with warm lighting and moody shadows, creating a cinematic 90s vibe.",
      img: images.RedSareeWhiteKurta,
    },
    {
      id: 10,
      title: "Brown Saree & Retro Suit Couple",
      text: "The girl wears a brown Pinteresty saree with red hair and flower tucked into curls. The guy is in a 582-style retro suit. They stand together against a textured wall with dramatic contrast and moody lighting, evoking a retro romantic aura.",
      img: images.BrownSareeRetroSuit,
    },
    {
      id: 11,
      title: "Brown Saree & Black Suit Golden Hour",
      text: "Girl in a brown Pinteresty saree with black-brown hair and flower tucked in, stands with her partner in a black suit. The environment is romantic and windy, bathed in golden hour light. Solid wall background with grainy vintage contrast.",
      img: images.BrownSareeBlackSuit,
    },
    {
      id: 12,
      title: "Retro Couple",
      text: "The girl is in an off-white cotton saree with a red blouse, and the guy in an off-white kurta. She stands by an old wooden door, with moody lighting and dramatic contrasts. Windy and romantic, the look channels a nostalgic 90s cinematic style.",
      img: images.OffwhiteSareeCouple,
    },
    {
      id: 13,
      title: "Hair Touch",
      text: "With cinematic grain and soft brightness, the girl in a blue saree and flower in her hair has her curls blown by wind. The boy, in a white Chinese collar kurta, tucks a strand of her hair behind her ear while gazing into her eyes. Romantic 90s film essence captured.",
      img: images.HairTouchBlueSaree,
    },
    {
      id: 14,
      title: "Bollywood 90s White Outfit Couple",
      text: "Transform this into a vibrant 90s Bollywood retro portrait. The woman wears a white translucent saree, red rose in hair, dramatic eyeliner, red lipstick, and voluminous 90s hair. The man wears a translucent white shirt, formal pants, and classic sunglasses. Warm light and film grain complete the look.",
      img: images.BollywoodWhiteCouple,
    },
    {
      id: 15,
      title: "Moonlit Beach Couple",
      text: "A moonlit romantic beach scene. The girl wears a lavender chiffon saree with pink blouse and a diamond mangalsutra, hair in a bun with red flower. The guy wears a black formal suit. They hold each other close, surrounded by gentle wind and waves in a dreamy retro tone.",
      img: images.MoonlitBeachCouple,
    },
    {
      id: 16,
      title: "Royal Archway Elegant Couple",
      text: "A regal portrait in a traditional archway. The woman wears a deep maroon saree with golden embroidery and bridal jewelry, gazing at the man in a black tailored suit. The lighting is soft and royal, evoking heritage and romance with a retro cinematic finish.",
      img: images.RoyalArchwayCouple,
    },
  ],

};

// Footer component
function Footer({ darkMode }) {
  const linkHover = { scale: 1.05, y: -2 };

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-purple-900/20 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-blue-500/5"></div>

      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="relative z-10 py-20 px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-16 space-y-6"
        >
          <div className="relative group">
            <motion.div
              whileHover={{ scale: 1.1, rotateY: 180 }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-1 rounded-3xl"
            >
              <div className="bg-black/40 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
                <Sparkles className="h-12 w-12 text-white" />
              </div>
            </motion.div>
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <motion.h2
            className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
            whileHover={{ scale: 1.05 }}
          >
            NewAIPrompt
          </motion.h2>

          <motion.p
            className="text-gray-300 text-center max-w-md text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Unleash creativity with premium AI prompts designed for the future
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {["Privacy Policy", "Terms & Conditions", "Contact Us", "About Us", "DMCA Policy"].map(
            (link, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={linkHover}
                className="px-6 py-3 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {link}
              </motion.a>
            )
          )}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
          <p className="text-gray-400 text-sm">
            © 2025 <span className="font-semibold text-white">NewAIPrompt</span>. Crafted with{" "}
            <motion.span
              className="text-pink-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              ❤️
            </motion.span>
            {" "}for AI enthusiasts worldwide.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
const HowToUseBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-16 w-full z-60 bg-black/80 backdrop-blur-xl border-b border-white/5">
      <motion.div
        className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-sm text-purple-300 font-semibold">How to Use This Prompt</span>
        <ChevronDown className={`w-5 h-5 text-white transition-transform ${isOpen ? "rotate-180" : ""}`} />

        {isOpen && (
          <motion.div
            className="mt-2 text-gray-300 text-sm space-y-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p>Step 1: Sign in to <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">gemini.google.com</a></p>
            <p>Step 2: Upload your image and select the banana icon</p>
            <p>Step 3: Paste the prompt and hit enter</p>
            <p>Step 4: Your AI image will be generated</p>
          </motion.div>
        )}
      </motion.div>
    </div>);
};
export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedStates, setCopiedStates] = useState({});
  const exploreRef = useRef(null);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
    // Also update <html> for consistency
    document.documentElement.classList.toggle('dark', !darkMode);
  };
  const scrollToExplore = () => exploreRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    if (selectedPrompt) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedPrompt]);

  const filteredPrompts = searchTerm.length >= 3
    ? prompts.filter(p =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : prompts;

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedStates(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const subPrompts = subPromptsData[selectedPrompt] || [];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10">
          <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/10 border-b border-white/5">
            <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
              >
                NewAIPrompt
              </motion.h1>

              {/* <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button> */}
            </div>
          </nav>
          <HowToUseBanner />
          <AnimatePresence mode="wait">
            {!selectedPrompt ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <section className="flex flex-col items-center text-center px-6 pt-32 pb-20 relative">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-8"
                  >
                    <div className="relative">
                      <motion.h1
                        className="text-7xl sm:text-8xl md:text-9xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight"
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        style={{ backgroundSize: "200% 200%" }}
                      >
                        NewAI
                        <br />
                        Prompt
                      </motion.h1>

                      <motion.div
                        className="absolute -top-4 -right-4 w-8 h-8 bg-pink-500/30 rounded-full blur-sm"
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500/30 rounded-full blur-sm"
                        animate={{
                          y: [0, 20, 0],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                      />
                    </div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed"
                    >
                      Unlock the full potential of AI with our curated collection of premium prompts.
                      <br />
                      <span className="text-purple-400 font-semibold">Designed for creators, by creators.</span>
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                      className="relative w-full max-w-2xl"
                    >
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/50 via-purple-500/50 to-blue-500/50 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative flex items-center bg-black/30 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden">
                          <Search className="w-6 h-6 ml-6 text-gray-400" />
                          <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search AI prompts, categories, styles..."
                            className="flex-1 px-6 py-6 bg-transparent focus:outline-none placeholder-gray-500 text-lg font-medium"
                          />
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      onClick={scrollToExplore}
                      className="flex flex-col items-center mt-16 cursor-pointer group"
                    >
                      <span className="text-lg text-gray-400 group-hover:text-purple-400 transition-colors mb-4">
                        Explore Premium Collection
                      </span>
                      <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 group-hover:bg-purple-500/20 transition-all duration-300"
                      >
                        <ChevronDown className="w-8 h-8" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </section>

                <section ref={exploreRef} className="py-24 px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                  >
                    <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-6">
                      Featured Collection
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                      Handcrafted prompts that push the boundaries of AI creativity
                    </p>
                  </motion.div>

                  {filteredPrompts.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-20"
                    >
                      <div className="text-6xl mb-4">🔍</div>
                      <p className="text-2xl text-gray-400">No prompts found matching your search.</p>
                    </motion.div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
                      {filteredPrompts.map((prompt, index) => (
                        <motion.div
                          key={prompt.id}
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.1,
                            ease: "easeOut"
                          }}
                          whileHover={{ y: -10 }}
                          onClick={() => setSelectedPrompt(prompt.title)}
                          className="group relative cursor-pointer h-[420px]" // Increased overall card height
                        >
                          <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:bg-white/10 group-hover:border-purple-500/30 h-full">
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative overflow-hidden rounded-t-3xl h-[280px]"> {/* Increased image height to h-72 (288px) for better face visibility */}
                              <img
                                src={prompt.img}
                                alt={prompt.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />

                              <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-xl rounded-full text-xs font-semibold text-purple-300 border border-white/20">
                                {prompt.category}
                              </div>

                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            <div className="p-6 relative z-10 flex-1 flex flex-col justify-between"> {/* Added flex for better content distribution */}
                              <div>
                                <h3 className="font-bold text-xl mb-3 text-white group-hover:text-purple-300 transition-colors">
                                  {prompt.title}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                                  {prompt.description}
                                </p>
                              </div>

                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileHover={{ opacity: 1, y: 0 }}
                                className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                              >
                                <div className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl text-white text-sm font-semibold inline-flex items-center space-x-2">
                                  <span>Explore Variations</span>
                                  <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                  >
                                    →
                                  </motion.div>
                                </div>
                              </motion.div>
                            </div>

                            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </section>
              </motion.div>
            ) : (
              <motion.section
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="py-32 px-6 max-w-7xl mx-auto"
              >
                <motion.button
                  onClick={() => setSelectedPrompt(null)}
                  whileHover={{ x: -10 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center mb-8 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 text-purple-400 hover:text-white"
                >
                  <ArrowLeft className="w-5 h-5 mr-3" />
                  <span className="font-semibold">Back to Collection</span>
                </motion.button>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-12"
                >
                  <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-4">
                    {selectedPrompt}
                  </h2>
                  <p className="text-xl text-gray-300">Choose from these curated variations</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {subPrompts.map((sp, index) => (
                    <motion.div
                      key={sp.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="group relative flex flex-col items-center"
                    >
                      {/* --- Card --- */}
                      <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:bg-white/10 group-hover:border-purple-500/30 h-[480px] w-full">
                        <div className="relative overflow-hidden h-[350px]">
                          <img
                            src={sp.img}
                            alt={sp.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        </div>

                        <div className="p-6 flex flex-col justify-between h-[160px]">
                          <div>
                            <h3 className="text-white font-bold text-xl mb-3 group-hover:text-purple-300 transition-colors">
                              {sp.title}
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                              {sp.text}
                            </p>
                          </div>
                        </div>

                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                      </div>

                      {/* --- Button BELOW the card --- */}
                      <div className="relative flex justify-center">
                        <motion.button
                          onClick={() => copyToClipboard(sp.text, sp.id)}
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                          className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group
      ${copiedStates[sp.id]
                              ? "bg-gradient-to-br from-green-400 to-green-600"
                              : "bg-gradient-to-br from-pink-500 to-purple-500"}`}
                        >
                          {copiedStates[sp.id] ? (
                            <Check className="w-6 h-6 text-white" />
                          ) : (
                            <Copy className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                          )}
                          {/* Ripple effect */}
                          <span className="absolute inset-0 rounded-full bg-white/30 opacity-0 group-hover:opacity-100 blur-lg"></span>
                        </motion.button>
                        {copiedStates[sp.id] && (
                          <span className="absolute top-full mt-2 px-2 py-1 text-sm bg-gray-800 text-white rounded-md shadow-md animate-fade">
                            Copied!
                          </span>
                        )}
                      </div>



                    </motion.div>
                  ))}
                </div>

              </motion.section>
            )}

          </AnimatePresence>

          <Footer darkMode={darkMode} />
        </div>
      </div >
      <SupportModal />
    </div>
  );
}