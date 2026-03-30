import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import Header from '../components/layout/Header';

export default function Tourism() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 font-sans selection:bg-blue-600 selection:text-white pb-32">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-medium text-sm mb-6">
          <Compass className="w-4 h-4" /> Прикамская Ривьера
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-semibold tracking-tighter text-black mb-6 leading-[1.05]">
          Откройте для себя Сарапул.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-neutral-500 font-medium max-w-3xl">
          От купеческих дач и Музея истории до видовых ресторанов на Горе Урал. Прикоснитесь к историческому наследию.
        </motion.p>
      </section>

      {/* Excursion Booking Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">Бронирование экскурсий</h2>
            <p className="text-xl text-neutral-500 max-w-2xl">Откройте для себя Сарапул вместе с профессиональными краеведами или отправляйтесь в плавание по Каме.</p>
          </div>
          <button className="hidden md:flex bg-neutral-200 hover:bg-neutral-300 text-black px-6 py-3 rounded-full font-semibold transition mt-6 md:mt-0">
            Все маршруты (12)
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Excursion 1 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} className="bg-white border border-neutral-200 rounded-[2rem] p-8 flex flex-col hover:shadow-2xl hover:shadow-neutral-200/50 hover:border-black transition-all duration-300 group cursor-pointer">
            <div className="bg-orange-50 text-orange-600 font-bold px-4 py-1.5 rounded-full text-sm w-fit mb-6">Пешеходная</div>
            <h3 className="text-2xl font-bold mb-3">Купеческая роскошь</h3>
            <p className="text-neutral-500 mb-8 flex-1 leading-relaxed">Прогулка по историческому центру, архитектура русского модерна и посещение знаменитой усадьбы — Дачи Башенина.</p>
            <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
              <div>
                <span className="block font-bold text-xl">500 ₽</span>
                <span className="text-sm text-neutral-400 font-medium">2 часа</span>
              </div>
              <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-neutral-800 transition">Записаться</button>
            </div>
          </motion.div>

          {/* Excursion 2 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.1 }} className="bg-white border border-neutral-200 rounded-[2rem] p-8 flex flex-col hover:shadow-2xl hover:shadow-blue-200/50 hover:border-blue-500 transition-all duration-300 group cursor-pointer">
            <div className="bg-blue-50 text-blue-600 font-bold px-4 py-1.5 rounded-full text-sm w-fit mb-6">Теплоходная</div>
            <h3 className="text-2xl font-bold mb-3">Легенды Камы</h3>
            <p className="text-neutral-500 mb-8 flex-1 leading-relaxed">Вечерняя речная прогулка на теплоходе. История судоходства на Каме и потрясающие виды на набережную.</p>
            <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
              <div>
                <span className="block font-bold text-xl">800 ₽</span>
                <span className="text-sm text-neutral-400 font-medium">1.5 часа</span>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">Записаться</button>
            </div>
          </motion.div>

          {/* Excursion 3 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="bg-white border border-neutral-200 rounded-[2rem] p-8 flex flex-col hover:shadow-2xl hover:shadow-neutral-200/50 hover:border-black transition-all duration-300 group cursor-pointer">
            <div className="bg-purple-50 text-purple-600 font-bold px-4 py-1.5 rounded-full text-sm w-fit mb-6">Семейная</div>
            <h3 className="text-2xl font-bold mb-3">Город рыжей девочки</h3>
            <p className="text-neutral-500 mb-8 flex-1 leading-relaxed">Увлекательный квест-маршрут по следам героини знаменитой повести Будогоской и легендарной Надежды Дуровой.</p>
            <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
              <div>
                <span className="block font-bold text-xl">400 ₽</span>
                <span className="text-sm text-neutral-400 font-medium">1.5 часа</span>
              </div>
              <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-neutral-800 transition">Записаться</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Attraction Grid */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 pb-20">
        
        {/* Item 1 */}
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} className="md:col-span-8 h-[450px] bg-black text-white rounded-[2.5rem] p-10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('/sarapul-bashenina.jpg')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-80 group-hover:mix-blend-normal transition-all duration-1000 z-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-0" />
          <div className="relative z-10 h-full flex flex-col justify-end">
            <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium w-fit mb-4 border border-white/20">Исторический комплекс</span>
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">ХВК «Дача Башенина»</h3>
            <p className="text-lg text-neutral-300 max-w-xl">Усадьба городского головы, построенная в начале XX века. Настоящий шедевр загородной архитектуры в стиле романтического модерна.</p>
          </div>
        </motion.div>

        {/* Item 2 */}
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.1 }} className="md:col-span-4 h-[450px] bg-neutral-100 border border-neutral-200 rounded-[2.5rem] p-10 relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-full h-1/2 bg-[url('https://upload.wikimedia.org/wikipedia/commons/1/1f/Kama_River_in_Sarapul-2.jpg')] bg-cover bg-center rounded-t-[2.5rem] group-hover:scale-105 transition duration-700" />
           <div className="absolute inset-0 bg-gradient-to-t from-neutral-100 via-neutral-100/90 to-transparent z-0" />
           <div className="relative z-10 h-full flex flex-col justify-end">
            <h3 className="text-3xl font-semibold tracking-tight mb-4">Гора Урал</h3>
            <p className="text-neutral-500 leading-relaxed text-sm">Лучшая смотровая площадка Сарапула. Отсюда открывается панорамный вид на изгибы Камы и бескрайние леса Прикамья.</p>
           </div>
        </motion.div>

        {/* Item 3 */}
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="md:col-span-4 h-[450px] bg-white border border-neutral-200 rounded-[2.5rem] p-10 relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-full h-[60%] bg-red-50 rounded-t-[2.5rem] group-hover:scale-105 transition duration-700 flex items-center justify-center">
             <div className="text-red-600/20">
               <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"/><path d="M10 10V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7"/><path d="m7 14 5-1.5c1 0 2 0 3 1.5"/><path d="M12 2v8"/><path d="M22 17H2"/></svg>
             </div>
           </div>
           <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent z-0" />
           <div className="relative z-10 h-full flex flex-col justify-end">
            <span className="text-xs font-bold tracking-widest text-red-600 uppercase mb-3">Символ Города</span>
            <h3 className="text-3xl font-semibold tracking-tight mb-4">Пожарная каланча</h3>
            <p className="text-neutral-500 leading-relaxed text-sm">Уникальный исторический архитектурный памятник 1887 года. Единственная сохранившаяся каланча на территории всей Удмуртской Республики.</p>
           </div>
        </motion.div>

        {/* Item 4 */}
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.3 }} className="md:col-span-8 h-[450px] bg-black border border-neutral-800 rounded-[2.5rem] p-10 relative overflow-hidden group">
           <div className="absolute inset-0 bg-black z-0" />
           <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-neutral-900 group-hover:bg-neutral-800 transition duration-1000 z-0 overflow-hidden">
             <div className="w-full h-full bg-[url('/sarapul-bashenina.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity grayscale group-hover:scale-105 group-hover:opacity-50 transition-all duration-1000" />
           </div>
           <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-0" />
           
           <div className="relative z-10 h-full flex flex-col justify-end max-w-xl">
            <span className="bg-orange-500/20 text-orange-400 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium w-fit mb-4 border border-orange-500/20">Шедевр Архитектуры</span>
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">Особняк Н.В. Смагина</h3>
            <p className="text-lg text-neutral-400 leading-relaxed max-w-md">Величественное здание в стиле модерн, выстроенное по проекту знаменитого архитектора И.А. Чарушина. Настоящий символ былого богатства и вкуса купеческого Сарапула.</p>
           </div>
        </motion.div>

      </section>
      
      {/* Footer Minimal */}
      <footer className="py-12 text-center text-neutral-400 font-medium border-t border-neutral-100 max-w-[1600px] mx-auto px-6">
        &copy; {new Date().getFullYear()} Сарапул. Туристический портал.
      </footer>
    </div>
  );
}
