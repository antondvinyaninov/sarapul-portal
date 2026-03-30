import { motion } from 'framer-motion';
import { TrendingUp, Building2, Landmark, ShieldCheck, MapPin, Truck, Ship, ArrowRight } from 'lucide-react';
import Header from '../components/layout/Header';

export default function Business() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-blue-600 selection:text-white pb-32">
      {/* We use a specialized Header container to blend with dark mode, or keep the original one. 
          Usually Apple keeps a white/system header, but for a standalone page, dark is better.
          Here we use the default Header, which is light, so we add padding. */}
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-start mt-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-2 bg-blue-900/30 text-blue-400 border border-blue-800/50 px-4 py-2 rounded-full font-medium text-sm mb-8 uppercase tracking-wider backdrop-blur-md">
          <TrendingUp className="w-4 h-4" /> Территория опережающего развития
        </motion.div>
        
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-6xl md:text-[7rem] font-semibold tracking-tighter text-white mb-8 leading-[0.95] max-w-5xl">
          Инвестируйте<br />в Сарапул.
        </motion.h1>
        
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-3xl text-neutral-400 font-medium max-w-3xl leading-relaxed mb-12">
          Мы создали беспрецедентные условия для бизнеса. Налоговые льготы до 10 лет, логистический хаб на Каме и мощнейший промышленный кластер Удмуртии.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
           <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
             Стать резидентом ТОР <ArrowRight className="w-5 h-5" />
           </button>
           <button className="bg-neutral-900 border border-neutral-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-neutral-800 transition-colors">
             Свободные площадки
           </button>
        </motion.div>
      </section>

      {/* Tax Benefits Grid (Numbers focus) */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto py-24 border-t border-neutral-900">
        <div className="mb-16 md:flex justify-between items-end">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter">Налоговые льготы</h2>
          <p className="text-neutral-500 max-w-md mt-4 md:mt-0 text-lg">Нулевые ставки на ключевые налоги позволяют окупить производство в 2 раза быстрее.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat 1 */}
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} className="bg-[#141414] border border-neutral-800 rounded-[2rem] p-8 flex flex-col group hover:border-blue-500/50 transition-colors">
            <div className="text-blue-500 mb-6"><Landmark className="w-8 h-8" /></div>
            <div className="text-5xl font-bold tracking-tighter mb-2 text-white group-hover:text-blue-400 transition-colors">0%</div>
            <h3 className="text-xl font-medium text-neutral-300 mb-2">Налог на имущество</h3>
            <p className="text-neutral-600 text-sm mt-auto">Вместо стандартных 2.2% в первые 5 лет работы.</p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.1 }} className="bg-[#141414] border border-neutral-800 rounded-[2rem] p-8 flex flex-col group hover:border-green-500/50 transition-colors">
            <div className="text-green-500 mb-6"><MapPin className="w-8 h-8" /></div>
            <div className="text-5xl font-bold tracking-tighter mb-2 text-white group-hover:text-green-400 transition-colors">0%</div>
            <h3 className="text-xl font-medium text-neutral-300 mb-2">Земельный налог</h3>
            <p className="text-neutral-600 text-sm mt-auto">Вместо 1.5%. Действует в течение 10 лет с момента получения статуса.</p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="bg-[#141414] border border-neutral-800 rounded-[2rem] p-8 flex flex-col group hover:border-orange-500/50 transition-colors">
            <div className="text-orange-500 mb-6"><TrendingUp className="w-8 h-8" /></div>
            <div className="text-5xl font-bold tracking-tighter mb-2 text-white group-hover:text-orange-400 transition-colors">5%</div>
            <h3 className="text-xl font-medium text-neutral-300 mb-2">Налог на прибыль</h3>
            <p className="text-neutral-600 text-sm mt-auto">Вместо 20%. Первые 5 лет — 5%, следующие 5 лет — 10%.</p>
          </motion.div>

          {/* Stat 4 */}
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.3 }} className="bg-[#141414] border border-neutral-800 rounded-[2rem] p-8 flex flex-col group hover:border-purple-500/50 transition-colors">
             <div className="text-purple-500 mb-6"><ShieldCheck className="w-8 h-8" /></div>
            <div className="text-5xl font-bold tracking-tighter mb-2 text-white group-hover:text-purple-400 transition-colors">7.6%</div>
            <h3 className="text-xl font-medium text-neutral-300 mb-2">Страховые взносы</h3>
            <p className="text-neutral-600 text-sm mt-auto">Вместо 30%. Льготный период длится 10 лет.</p>
          </motion.div>
        </div>
      </section>

      {/* Industrial Hub & Logistics */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-6">
          
          {/* Main Industry */}
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} className="bg-neutral-900 border border-neutral-800 rounded-[2.5rem] p-10 md:p-14 min-h-[500px] relative overflow-hidden group">
            {/* Animated industrial background gradient blur */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full group-hover:bg-blue-600/30 transition-colors duration-1000" />
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-14 h-14 bg-neutral-800 border border-neutral-700 rounded-2xl flex items-center justify-center mb-8 text-white shadow-sm">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-4xl font-semibold tracking-tight mb-4">Промышленный Хаб</h3>
              <p className="text-neutral-400 text-lg leading-relaxed max-w-md mb-8">Сарапул исторически является центром тяжелой, радиоэлектронной и пищевой промышленности. Квалифицированные кадры и готовая инфраструктура.</p>
              
              <div className="mt-auto grid grid-cols-2 gap-4">
                <div className="bg-black/50 border border-neutral-800 p-4 rounded-xl backdrop-blur-md">
                   <div className="text-2xl font-bold mb-1">160+</div>
                   <div className="text-xs text-neutral-500 uppercase tracking-widest font-bold">Предприятий</div>
                </div>
                <div className="bg-black/50 border border-neutral-800 p-4 rounded-xl backdrop-blur-md">
                   <div className="text-2xl font-bold mb-1">45%</div>
                   <div className="text-xs text-neutral-500 uppercase tracking-widest font-bold">Доля ВРП региона</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Logistics */}
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.1 }} className="bg-neutral-900 border border-neutral-800 rounded-[2.5rem] p-10 md:p-14 min-h-[500px] relative overflow-hidden group">
            <div className="absolute right-0 bottom-0 w-[60%] h-[70%] bg-[url('/sarapul-ship.jpg')] bg-cover bg-center mix-blend-luminosity opacity-20 grayscale group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000 z-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-transparent z-0" />

            <div className="relative z-10 w-full md:max-w-md">
              <h3 className="text-4xl font-semibold tracking-tight mb-4 text-white">Идеальная Логистика</h3>
              <p className="text-neutral-400 text-lg leading-relaxed mb-12">Уникальное географическое положение обеспечивает прямой выход на рынки Поволжья, Урала и Сибири.</p>
              
              <ul className="space-y-6">
                <li className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover/item:text-white group-hover/item:bg-neutral-700 transition">
                     <Ship className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Речной Порт на Каме</h4>
                    <p className="text-sm text-neutral-500">Выход к пяти морям России.</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover/item:text-white group-hover/item:bg-neutral-700 transition">
                     <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Трасса М7 (60 км)</h4>
                    <p className="text-sm text-neutral-500">Быстрый доступ к федеральной сети.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Minimal (Dark) */}
      <footer className="py-12 text-center text-neutral-600 font-medium border-t border-neutral-900 max-w-[1600px] mx-auto px-6">
        &copy; {new Date().getFullYear()} Сарапул. Инвестиционный портал ТОСЭР.
      </footer>
    </div>
  );
}
