import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';


export default function CityAbout() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-orange-600 selection:text-white pb-0">
      
      {/* Sticky Top Mini-nav */}
      <div className="fixed top-0 inset-x-0 p-6 z-50 mix-blend-difference text-white">
        <a href="/sarapul-portal/" className="inline-flex items-center gap-2 font-medium hover:opacity-70 transition">
          <ArrowLeft className="w-5 h-5" /> Вернуться на главную
        </a>
      </div>

      {/* Hero Massive Title */}
      <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-end p-6 md:p-12 lg:p-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
          <img 
            src="/sarapul-portal/sarapul-ship.jpg" 
            alt="Sarapul hero background" 
            className="w-full h-full object-cover saturate-50 contrast-125 mx-auto max-w-[1920px]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto text-white">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="text-7xl md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-[0.9] uppercase mb-8"
          >
            Сарапул.
          </motion.h1>
          <motion.div 
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col md:flex-row gap-8 md:gap-24 uppercase tracking-widest text-sm font-semibold text-white/80"
          >
            <p className="max-w-[250px] leading-relaxed">
              Историческая жемчужина на реке Каме и современный центр высоких технологий Удмуртии.
            </p>
            <div className="flex flex-col gap-1">
              <span>Широта: 56.47° с.ш.</span>
              <span>Долгота: 53.80° в.д.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Big Numbers (Editorial Stats) */}
      <section className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} className="flex flex-col">
            <h3 className="text-xl font-medium text-neutral-400 mb-6 uppercase tracking-wider">Население</h3>
            <div className="text-7xl md:text-8xl font-light tracking-tighter text-black mb-4">91<span className="text-4xl text-neutral-400">т.</span></div>
            <p className="text-lg text-neutral-500 font-medium leading-relaxed">
              Третий по величине город Удмуртской Республики (после Ижевска и Воткинска).
            </p>
          </motion.div>

          <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.1 }} className="flex flex-col">
            <h3 className="text-xl font-medium text-neutral-400 mb-6 uppercase tracking-wider">Основан</h3>
            <div className="text-7xl md:text-8xl font-light tracking-tighter text-black mb-4">1579</div>
            <p className="text-lg text-neutral-500 font-medium leading-relaxed">
              Первое упоминание вознесенского села. Статус города присвоен повелением Екатерины Великой в 1780.
            </p>
          </motion.div>

          <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="flex flex-col">
            <h3 className="text-xl font-medium text-neutral-400 mb-6 uppercase tracking-wider">Экономика</h3>
            <div className="text-7xl md:text-8xl font-light tracking-tighter text-black mb-4">ТОР</div>
            <p className="text-lg text-neutral-500 font-medium leading-relaxed">
              Режим ТОСЭР с 2017 года: нулевой налог на прибыль и имущество для инвесторов.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section: Ancient Edge */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once:true }} className="max-w-xl">
            <div className="text-sm font-bold tracking-widest text-orange-600 uppercase mb-4">Эпоха Бронзы</div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6">Древняя земля<br/>на Каме.</h2>
            <p className="text-xl text-neutral-500 leading-relaxed mb-6">
              История поселений на месте современного Сарапула уходит корнями во <b>2–3 тысячелетие до нашей эры</b>. 
              Здесь, на высоких берегах реки, процветали древние ананьинская и мазунинская культуры. 
            </p>
            <p className="text-xl text-neutral-500 leading-relaxed">
              Сарапул по праву считается древнейшим городом на территории Удмуртской Республики.
            </p>
          </motion.div>
          <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once:true }} className="h-[400px] bg-neutral-100 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#0a0a0a] z-0" />
            <img src="/sarapul-portal/sarapul-ship.jpg" alt="Древняя Кама" className="w-full h-full object-cover opacity-30 mix-blend-luminosity grayscale group-hover:scale-110 transition duration-1000 z-10 relative" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-20 flex items-end p-8">
              <span className="text-white/60 font-medium tracking-widest uppercase">Археологическое наследие Прикамья</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Przykamiska Barcelona */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} className="max-w-3xl mb-16">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8">«Прикамская Барселона»</h2>
          <p className="text-2xl font-medium text-neutral-500 leading-relaxed">
            В XIX — начале XX века Сарапул был богатейшим купеческим центром. Миллионеры застраивали его роскошными зданиями в стиле модерн, благодаря которым сегодня город напоминает европейские столицы архитектуры.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
          <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once:true }} className="md:col-span-8 bg-neutral-100 rounded-[2.5rem] overflow-hidden group">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Sarapul._Vyatskaya_street_01.jpg" alt="Улица Вятская" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition duration-1000 grayscale hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-white">
              <h4 className="text-2xl font-bold">Исторический центр</h4>
              <p>Улица Вятская — квинтэссенция сарапульской старины.</p>
            </div>
          </motion.div>
          <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.1 }} className="md:col-span-4 bg-black rounded-[2.5rem] overflow-hidden relative group">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Sarapul_Fire_Tower.jpg" alt="Пожарная каланча" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition duration-1000 opacity-60 group-hover:opacity-100" />
            <div className="absolute top-10 left-10 text-white z-10">
              <h4 className="text-3xl font-semibold mb-2">Каланча</h4>
              <p className="text-neutral-300">Символ пожарной стражи</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section: Industrial Glory */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-100">
        <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} className="w-full flex flex-col md:flex-row gap-12 bg-blue-50/50 rounded-[3rem] p-10 md:p-16 border border-blue-100/50">
          <div className="flex-1">
            <div className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Индустриальная мощь</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6 leading-tight">От обувной империи<br/>к радиолокации.</h2>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-xl mb-6">
              До революции Сарапул был главным центром обувной промышленности империи. Но настоящая техническая революция произошла в XX веке, когда сюда переехали сложнейшие высокотехнологичные заводы.
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-center space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex gap-6 items-center hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-2xl shrink-0">1937</div>
              <div>
                <h4 className="font-bold text-xl mb-1">Экспедиция Папанина</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">Аппаратура Сарапульского радиозавода обеспечила первую в мире надежную связь легендарной экспедиции Ивана Папанина на Северном полюсе.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex gap-6 items-center hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-2xl shrink-0">1920</div>
              <div>
                <h4 className="font-bold text-xl mb-1">Первая авиапочта</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">Сарапул навсегда вошел в историю авиации — отсюда стартовал первый в России регулярный рейс почтового тяжелого самолета «Илья Муромец».</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 2: TOSER Business Card */}
      <section className="bg-[#0a0a0a] text-white py-24 md:py-40 md:px-12 border-t border-neutral-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once:true }} className="flex flex-col justify-center">
              <div className="inline-block px-4 py-2 bg-orange-600/20 text-orange-500 font-semibold rounded-full mb-8 text-sm uppercase tracking-wider w-fit">Инвестиционный климат</div>
              <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 leading-[1.1]">ТОР «Сарапул»</h2>
              <p className="text-xl text-neutral-400 leading-relaxed mb-12">
                С 2017 года город имеет статус Территории Опережающего Социально-Экономического Развития. Это беспрецедентные налоговые льготы для бизнеса, логистики и производств, не связанных с историческими монопрофильными предприятиями.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-orange-600 shrink-0" />
                  <div>
                    <h4 className="text-2xl font-semibold mb-1">0% Налог на прибыль</h4>
                    <p className="text-neutral-500">В федеральный бюджет на протяжении первых 5 лет.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-orange-600 shrink-0" />
                  <div>
                    <h4 className="text-2xl font-semibold mb-1">0% Налог на имущество</h4>
                    <p className="text-neutral-500">Полное обнуление регионального налога на старте.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-orange-600 shrink-0" />
                  <div>
                    <h4 className="text-2xl font-semibold mb-1">7.6% Страховые взносы</h4>
                    <p className="text-neutral-500">Вместо стандартных 30% для резидентов.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once:true }} className="relative min-h-[500px] flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-tr from-orange-600 text-white rounded-[3rem] p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                  <div className="absolute -right-20 -top-20 text-[250px] font-black text-black/10 select-none group-hover:scale-110 transition-transform duration-700">0%</div>
                  <h3 className="text-4xl font-semibold z-10 max-w-sm">Инвестируйте в город будущего уже сегодня.</h3>
                  <button className="bg-white text-orange-700 px-8 py-4 rounded-full font-bold text-lg w-fit flex items-center gap-2 hover:scale-105 transition-transform z-10 mt-20">
                    Стать резидентом <ArrowUpRight className="w-5 h-5" />
                  </button>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: History & Durova */}
      <section className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
         <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 max-w-2xl mx-auto leading-[1.1]">Родина легенд над рекой.</h2>
          <p className="text-2xl font-medium text-neutral-500 leading-relaxed">
            Сарапул вошел в историю как родина легендарной кавалерист-девицы Надежды Дуровой (героя войны 1812 года и ординарца М.И. Кутузова), а также как место действия знаменитой «Повести о рыжей девочке».
          </p>
         </motion.div>

         <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once:true }} className="w-full h-[500px] md:h-[700px] bg-neutral-100 rounded-[3rem] overflow-hidden relative">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Kama_River._Sarapul_P6252840_2575.jpg" alt="Панорама Камы" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-12 text-white">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">Живописная набережная Камы</h3>
              <p className="text-xl md:text-2xl max-w-3xl text-neutral-300">Широкие речные просторы всегда были сердцем купеческих путей, связывавших Удмуртию со всей империей.</p>
            </div>
         </motion.div>
      </section>

      {/* Footer Minimal */}
      <footer className="py-12 text-center text-neutral-400 font-medium">
        &copy; {new Date().getFullYear()} Сарапул. Цифровой портал города.
      </footer>
    </div>
  );
}
