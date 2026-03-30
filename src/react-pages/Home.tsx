import { useState } from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/home/HeroSection';
import InnopolisGrid from '../components/home/InnopolisGrid';
import AIChatModal from '../components/ai/AIChatModal';

export default function Home() {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [initialAiQuery, setInitialAiQuery] = useState('');

  const handleOpenAiSearch = (query: string) => {
    setInitialAiQuery(query);
    setIsAiModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-orange-600 selection:text-white pb-32 relative">
      <Header />
      <HeroSection onSearchSubmit={handleOpenAiSearch} />
      <InnopolisGrid />
      <AIChatModal 
        isOpen={isAiModalOpen} 
        initialQuery={initialAiQuery}
        onClose={() => setIsAiModalOpen(false)} 
      />
    </div>
  );
}
