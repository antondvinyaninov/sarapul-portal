import { motion } from 'framer-motion';
import { Ticket, Palette, Theater } from 'lucide-react';
import Header from '../components/layout/Header';

export default function Culture() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-purple-600 selection:text-white pb-32">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full font-medium text-sm mb-6 uppercase tracking-wider">
          <Palette className="w-4 h-4" /> Искусство и Наследие
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-8xl font-semibold tracking-tighter text-black mb-8 leading-[1]">
          Культурный код<br />Сарапула.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-neutral-500 font-medium max-w-3xl leading-relaxed">
          От старейшего Драматического театра в республике до современных выставок в Музейном квартале. Город, где традиции русского модерна живут в каждом событии.
        </motion.p>
      </section>

      {/* Afisha / Upcoming Events Block */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto mb-32">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">Афиша событий</h2>
            <p className="text-xl text-neutral-500 max-w-2xl">Куда сходить в Сарапуле на этих выходных: премьеры, концерты и выставки.</p>
          </div>
          <button className="hidden md:flex bg-neutral-100 hover:bg-neutral-200 text-black px-6 py-3 rounded-full font-semibold transition mt-6 md:mt-0">
            Календарь мероприятий
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Event 1 */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} className="bg-neutral-50 border border-neutral-200 rounded-[2.5rem] p-8 flex flex-col hover:border-black hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-300 group cursor-pointer h-[400px]">
            <div className="flex items-center justify-between mb-8">
               <span className="bg-purple-100 text-purple-600 font-bold px-4 py-1.5 rounded-full text-sm">Спектакль</span>
               <span className="text-sm font-bold tracking-widest text-neutral-400">12 ОКТЯБРЯ</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 tracking-tight leading-sm">Капитанская дочка</h3>
            <p className="text-neutral-500 mb-8 flex-1">Премьера на главной сцене старейшего Драматического театра Удмуртии. Новое прочтение классики в постановке приезжего режиссера.</p>
            <div className="flex items-center justify-between border-t border-neutral-200/60 pt-6">
              <span className="font-bold text-xl">от 600 ₽</span>
              <button className="bg-black text-white px-6 py-2.5 rounded-full font-medium flex items-center gap-2 hover:bg-neutral-800 transition">
                <Ticket className="w-4 h-4" /> Билеты
              </button>
            </div>
          </motion.div>

          {/* Event 2 */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.1 }} className="bg-neutral-50 border border-neutral-200 rounded-[2.5rem] p-8 flex flex-col hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-200/50 transition-all duration-300 group cursor-pointer h-[400px]">
            <div className="flex items-center justify-between mb-8">
               <span className="bg-orange-100 text-orange-600 font-bold px-4 py-1.5 rounded-full text-sm">Выставка</span>
               <span className="text-sm font-bold tracking-widest text-neutral-400">ДО 1 НОЯБРЯ</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 tracking-tight leading-sm">Золотой Век Купечества</h3>
            <p className="text-neutral-500 mb-8 flex-1">Экспозиция в стенах Дачи Башенина. Уникальные архивные документы, предметы быта и роскоши конца XIX века.</p>
            <div className="flex items-center justify-between border-t border-neutral-200/60 pt-6">
              <span className="font-bold text-xl">350 ₽</span>
              <button className="bg-black text-white px-6 py-2.5 rounded-full font-medium flex items-center gap-2 hover:bg-neutral-800 transition">
                <Ticket className="w-4 h-4" /> Купить
              </button>
            </div>
          </motion.div>

          {/* Event 3 */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="bg-black border border-neutral-800 rounded-[2.5rem] p-8 flex flex-col hover:border-neutral-600 transition-all duration-300 group cursor-pointer h-[400px] relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black z-0" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                 <span className="bg-white/10 text-white font-bold px-4 py-1.5 rounded-full text-sm backdrop-blur-md">Концерт</span>
                 <span className="text-sm font-bold tracking-widest text-neutral-400">ЗАВТРА</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight leading-sm">Духовой оркестр в парке</h3>
              <p className="text-neutral-400 mb-8 flex-1">Вечер живой музыки под открытым небом в историческом Саду имени А.С. Пушкина. Мелодии советской эстрады и джаз.</p>
              <div className="flex items-center justify-between border-t border-neutral-800 pt-6">
                <span className="font-bold text-xl text-green-400">Вход свободный</span>
                <button className="bg-white text-black px-6 py-2.5 rounded-full font-medium hover:bg-neutral-200 transition">
                  Подробнее
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cultural Institutions Grid */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto pb-32">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">Учреждения Культуры</h2>
          <p className="text-xl text-neutral-500 max-w-2xl">Места, где создается и бережно хранится творческий потенциал Сарапула.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-6">
          {/* Main Theater */}
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} className="bg-neutral-50 border border-neutral-200 rounded-[2.5rem] p-10 md:p-14 min-h-[450px] relative overflow-hidden group cursor-pointer flex flex-col justify-end">
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-[url('/sarapul-bashenina.jpg')] bg-cover bg-center mix-blend-multiply opacity-20 grayscale group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700 z-0" />
             <div className="absolute inset-0 bg-gradient-to-t from-neutral-100 via-neutral-100/90 to-transparent z-0" />
            <div className="relative z-10 w-full md:max-w-[70%]">
              <div className="w-14 h-14 bg-white border border-neutral-200 rounded-2xl flex items-center justify-center mb-8 text-neutral-900 shadow-sm">
                <Theater className="w-6 h-6" />
              </div>
              <h3 className="text-4xl font-semibold tracking-tight mb-4 group-hover:text-purple-600 transition-colors">Драматический театр</h3>
              <p className="text-neutral-500 text-lg leading-relaxed">Старейший профессиональный театр Удмуртии. Более 100 лет на сцене театра рождаются мощные и смелые спектакли, объединяющие поколения зрителей.</p>
            </div>
          </motion.div>

          {/* Art Schools */}
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.1 }} className="bg-[#1a1a1a] text-white border border-neutral-800 rounded-[2.5rem] p-10 md:p-14 min-h-[450px] relative overflow-hidden group cursor-pointer flex flex-col justify-end">
             <div className="absolute right-0 top-0 w-[50%] h-[70%] bg-blue-500 opacity-20 blur-[100px] z-0 rounded-full" />
            <div className="relative z-10 w-full md:max-w-[70%]">
              <h3 className="text-4xl font-semibold tracking-tight mb-4">Детские школы искусств</h3>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">Три ведущие школы города (ДШИ №1, №2, №3) ведут фундаментальную подготовку будущих музыкантов, художников и актеров. <b>Одаренное детство Сарапула.</b></p>
              <div className="flex gap-4">
                <span className="px-4 py-2 border border-neutral-700 rounded-full text-sm">Художественная</span>
                <span className="px-4 py-2 border border-neutral-700 rounded-full text-sm">Музыкальная</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Third Row (Museum and Parks) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
           <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="bg-orange-50/50 border border-orange-100 rounded-[2.5rem] p-10 md:p-14 min-h-[350px] group cursor-pointer flex flex-col justify-between hover:bg-orange-50 transition-colors">
            <div>
              <span className="text-orange-600 font-bold tracking-widest text-sm uppercase mb-4 block">Музейный комплекс</span>
              <h3 className="text-4xl font-semibold tracking-tight mb-4">Истории и Культуры</h3>
              <p className="text-neutral-500 text-lg leading-relaxed mb-6">Главный городской музей Среднего Прикамья. Уникальные археологические находки, история обувной славы империи и радиозавода эпохи СССР.</p>
            </div>
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.3 }} className="bg-green-50/80 border border-green-100 rounded-[2.5rem] p-10 md:p-14 min-h-[350px] group cursor-pointer flex flex-col justify-between hover:bg-green-50 transition-colors relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 opacity-10 rotate-12 pointer-events-none">
               {/* Abstract leaf shape to indicate park */}
               <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor" className="text-green-800"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-1.5l1-5-3-2 5-1V3l4 6-4 1v5.5z"/></svg>
            </div>
            <div className="relative z-10 w-full md:max-w-md">
              <span className="text-green-600 font-bold tracking-widest text-sm uppercase mb-4 block">Исторические Парки</span>
              <h3 className="text-4xl font-semibold tracking-tight mb-4">Сад имени А.С. Пушкина</h3>
              <p className="text-neutral-600 text-lg leading-relaxed">Центр притяжения горожан в теплое время года. Летние кинопоказы, духовой оркестр и зеленые аллеи, заложенные более века назад.</p>
            </div>
          </motion.div>
        </div>

      </section>

      {/* Footer Minimal */}
      <footer className="py-12 text-center text-neutral-400 font-medium border-t border-neutral-100 max-w-[1600px] mx-auto px-6">
        &copy; {new Date().getFullYear()} Сарапул. Культурный портал.
      </footer>
    </div>
  );
}
