import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, MapPin, Coffee, ArrowRight, Loader2 } from 'lucide-react';

interface AIChatModalProps {
  isOpen: boolean;
  initialQuery: string;
  onClose: () => void;
}

export default function AIChatModal({ isOpen, initialQuery, onClose }: AIChatModalProps) {
  const [messages, setMessages] = useState<{role: 'user'|'bot', text: string, hasCard?: boolean}[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');

  // Reset and trigger initial chat when opened
  useEffect(() => {
    if (isOpen && initialQuery) {
      setMessages([{ role: 'user', text: initialQuery }]);
      setIsTyping(true);
      
      // Fake AI delay
      const timer = setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [
          ...prev, 
          { 
            role: 'bot', 
            text: `Я подобрал отличную локацию по вашему запросу: "${initialQuery}". Одно из лучших мест в городе — Surf Coffee на центральной улице.`, 
            hasCard: true 
          }
        ]);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, initialQuery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text: inputValue }]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        { role: 'bot', text: 'Понял! Добавил это в ваш дневной маршрут на карте.' }
      ]);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-auto">
          {/* Backdrop Blur */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white/60 backdrop-blur-2xl"
            onClick={onClose}
          />
          
          {/* Main Terminal/Modal Modal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative z-10 w-full max-w-4xl bg-white border border-neutral-200 rounded-[2.5rem] shadow-2xl h-[80vh] max-h-[800px] flex flex-col overflow-hidden mx-4"
          >
            {/* Header */}
            <header className="flex items-center justify-between p-6 border-b border-neutral-100 bg-neutral-50/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold tracking-tight text-lg leading-tight">City AI Concierge</h3>
                  <p className="text-xs text-neutral-500 font-medium">Работает на языковой модели</p>
                </div>
              </div>
              <button onClick={onClose} className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition">
                <X className="w-5 h-5 text-neutral-600" />
              </button>
            </header>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 flex flex-col gap-6 no-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex flex-col max-w-[85%] ${msg.role === 'user' ? 'self-end items-end' : 'self-start items-start'}`}>
                  {msg.role === 'user' ? (
                    <div className="bg-neutral-900 text-white px-6 py-4 rounded-[2rem] rounded-tr-sm text-lg shadow-sm">
                      {msg.text}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4 w-full">
                      <div className="bg-neutral-50 border border-neutral-100 text-neutral-900 px-6 py-4 rounded-[2rem] rounded-tl-sm text-lg leading-relaxed shadow-sm">
                        {msg.text}
                      </div>

                      {/* Mock Rich Card (Always rendered if hasCard is true) */}
                      {msg.hasCard && (
                        <div className="w-full bg-white border border-neutral-200 rounded-[2rem] overflow-hidden shadow-sm self-start group cursor-pointer hover:border-black/20 transition-colors max-w-[360px]">
                          <div className="h-48 bg-neutral-200 relative">
                            <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80" alt="Cafe" className="w-full h-full object-cover" />
                            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 text-black">
                              <MapPin className="w-3.5 h-3.5" /> Университетская, 20
                            </div>
                          </div>
                          <div className="p-5">
                            <div className="flex items-center gap-2 text-sm font-medium text-orange-600 mb-2">
                              <Coffee className="w-4 h-4" /> Кофейня
                            </div>
                            <h4 className="font-semibold text-xl mb-1">Surf Coffee x Innopolis</h4>
                            <p className="text-neutral-500 text-sm mb-4">Отличная музыка, спешлти-кофе и быстрый Wi-Fi. Идеально для работы.</p>
                            <button className="w-full bg-neutral-100 hover:bg-neutral-200 py-3 rounded-xl text-sm font-medium transition flex items-center justify-center gap-2">
                              Построить маршрут
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="self-start bg-neutral-50 border border-neutral-100 text-neutral-500 px-6 py-4 rounded-[2rem] rounded-tl-sm text-sm font-medium flex items-center gap-2 shadow-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-blue-600" /> Соберу информацию...
                </div>
              )}
            </div>

            {/* Input Footer */}
            <div className="p-6 border-t border-neutral-100 bg-white">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ответить консьержу..." 
                  className="flex-1 bg-neutral-50 border border-neutral-200 rounded-[1.5rem] px-6 py-4 outline-none placeholder:text-neutral-400 focus:bg-white focus:border-blue-500 transition-colors text-lg"
                  autoFocus
                />
                <button type="submit" disabled={!inputValue.trim()} className="w-16 h-16 bg-blue-600 disabled:opacity-50 text-white rounded-[1.5rem] flex items-center justify-center hover:bg-blue-700 transition shrink-0">
                  <ArrowRight className="w-6 h-6" />
                </button>
              </form>
            </div>
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
