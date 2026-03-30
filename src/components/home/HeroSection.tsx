import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onSearchSubmit: (query: string) => void;
}

export default function HeroSection({ onSearchSubmit }: HeroSectionProps) {
  const [isAiFocused, setIsAiFocused] = useState(false);
  const [query, setQuery] = useState('');

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (query.trim()) {
      onSearchSubmit(query);
      setQuery('');
    }
  };

  return (
    <section className="relative w-full pt-32 md:pt-48 pb-20 px-6 md:px-12 flex flex-col items-center">
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-orange-50/80 to-white -z-10" />
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
        className="text-center w-full max-w-4xl mx-auto mb-12"
      >
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-neutral-900 mb-6 leading-[1.05]">
          Город на Каме, который<br/>понимает с полуслова.
        </h1>
        <p className="text-xl md:text-2xl text-neutral-500 font-medium tracking-tight">
          Купеческое наследие, живописная набережная и новые технологии опережающего развития. 
        </p>
      </motion.div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
        className="w-full max-w-3xl relative z-10"
      >
        <form onSubmit={handleSubmit} 
          className={`flex flex-col bg-white rounded-[2rem] border transition-all duration-500 ${isAiFocused ? 'border-orange-500 shadow-[0_20px_60px_-15px_rgba(234,88,12,0.2)]' : 'border-neutral-200 shadow-xl shadow-neutral-200/50'}`}
        >
          <div className="flex items-center p-2 px-4 md:px-6 relative w-full h-16 md:h-20">
            <Sparkles className={`w-6 h-6 mr-4 transition-colors ${isAiFocused ? 'text-orange-600' : 'text-neutral-400'}`} />
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Спросите AI-консьержа: «Рейс до Ижевска» или «Где погулять»..." 
              className="flex-1 min-w-0 bg-transparent py-4 text-lg md:text-xl outline-none placeholder:text-neutral-400 font-medium text-black"
              onFocus={() => setIsAiFocused(true)}
              onBlur={() => setIsAiFocused(false)}
            />
            <button type="submit" className="bg-orange-600 text-white p-3 rounded-2xl hover:bg-orange-700 transition ml-2">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>

        <div className="flex gap-3 justify-center mt-6 flex-wrap">
          {['Экскурсии и музеи', 'Дача Башенина', 'Где выпить кофе?', 'Инвестиции в ТОР'].map((tag, i) => (
            <button 
              key={i} 
              onClick={() => onSearchSubmit(tag)}
              className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-full text-sm font-medium text-neutral-600 transition"
            >
              {tag}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
