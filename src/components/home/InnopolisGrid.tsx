import { motion } from 'framer-motion';
import { Building2, Briefcase, Landmark, Compass, Navigation, Car, HeartPulse, ArrowRight, MapPin } from 'lucide-react';

export default function InnopolisGrid() {
  return (
    <section className="px-6 md:px-12 max-w-[1600px] mx-auto w-full mt-10">
      
      {/* Large Feature Rows */}
      <div className="flex flex-col gap-6 w-full">
        
        {/* Row 1: Business and Edu (Culture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} className="bg-neutral-50 border border-neutral-100 rounded-[2.5rem] p-10 md:p-14 group hover:bg-neutral-100 transition duration-500 cursor-pointer min-h-[400px] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 blur-[100px] rounded-full -mr-10 -mt-10" />
            <div className="relative z-10 w-full">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 text-orange-600">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-semibold tracking-tight mb-4">ТОР «Сарапул»</h2>
              <p className="text-neutral-500 text-lg max-w-md">Территория опережающего развития. Инвестируйте в производство в городе с богатейшими промышленными традициями.</p>
            </div>
            <div className="mt-12 text-orange-600 font-medium flex items-center gap-2 group-hover:translate-x-2 transition-transform">
              Стать резидентом <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.1 }} className="bg-[#1a1a1a] text-white border border-neutral-800 rounded-[2.5rem] p-10 md:p-14 group cursor-pointer min-h-[400px] flex flex-col justify-between relative overflow-hidden">
            
            {/* Right-sided Image Block */}
            <div className="absolute top-0 right-0 bottom-0 w-[60%] group-hover:w-[65%] transition-all duration-700 overflow-hidden z-0">
               {/* Софт-градиент для идеального перехода черного фона в картинку */}
               <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent z-10 pointer-events-none" />
               <img 
                 src="/sarapul-bashenina.jpg" 
                 onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1549646401-49b800ca3674?w=800&q=80" }}
                 alt="Наследие и Культура" 
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
               />
            </div>

            <div className="relative z-10 w-full md:max-w-[55%]">
              <div className="w-14 h-14 bg-neutral-800/80 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg">
                <Landmark className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-semibold tracking-tight mb-4">Наследие и Культура</h2>
              <p className="text-neutral-400 text-lg">Родина Надежды Дуровой. Уникальная купеческая архитектура русского модерна и знаменитые дачи миллионеров XIX века.</p>
            </div>
            <div className="mt-12 text-white font-medium flex items-center gap-2 group-hover:translate-x-2 transition-transform relative z-10">
              Музей-заповедник <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>

        {/* Row 2: Tourism & Travel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} className="col-span-1 md:col-span-2 bg-neutral-50 border border-neutral-100 rounded-[2.5rem] p-10 md:p-14 group hover:bg-neutral-100 transition duration-500 cursor-pointer flex flex-col justify-between relative overflow-hidden min-h-[350px]">
            <div className="relative z-10 w-full md:max-w-[50%]">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 text-blue-600">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-semibold tracking-tight mb-4">Туризм на Каме</h2>
              <p className="text-neutral-500 text-lg">Приезжайте гулять по главной набережной Удмуртии. Посетите смотровую площадку «Гора Урал» и насладитесь пейзажами.</p>
            </div>
            <div className="mt-12 text-blue-600 font-medium flex items-center gap-2 group-hover:translate-x-2 transition-transform relative z-10">
              Построить маршрут <ArrowRight className="w-4 h-4" />
            </div>
            {/* Photo representation */}
            <div className="hidden md:block absolute -bottom-10 -right-12 w-[55%] h-[120%] bg-neutral-200 rounded-[2rem] rotate-[10deg] bg-[url('/sarapul-ship.jpg')] bg-cover bg-center shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.1)] group-hover:rotate-6 group-hover:scale-105 transition-all duration-700" />
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.1 }} className="col-span-1 bg-neutral-50 border border-neutral-100 rounded-[2.5rem] p-10 md:p-14 group hover:bg-neutral-100 transition duration-500 cursor-pointer flex flex-col justify-between min-h-[350px]">
            <div className="w-full">
              <div className="w-14 h-14 bg-white border border-neutral-200 rounded-full flex items-center justify-center mb-8">
                <MapPin className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-semibold tracking-tight mb-4">Жизнь в городе</h2>
            </div>
            <div>
              <ul className="text-neutral-500 space-y-3 font-medium mb-8">
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4"/> Недвижимость</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4"/> Вакансии</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4"/> Образование</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Row 2.5: Official City News */}
        <div className="bg-[#f8f9fa] border border-neutral-200/60 rounded-[2.5rem] p-10 md:p-14 w-full group/main">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 cursor-pointer">
            <div>
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                 <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">Официально portal.adm-sarapul.ru</span>
               </div>
               <h2 className="text-3xl font-semibold tracking-tight">Муниципальный вестник</h2>
            </div>
            <div className="text-blue-600 font-medium flex items-center gap-2 mt-4 md:mt-0 group-hover/main:translate-x-2 transition-transform">
              Архив Администрации <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Video block (Left) */}
            <div className="lg:col-span-7 flex flex-col group/video cursor-pointer">
              <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-sm border border-neutral-200/80 mb-6 relative">
                 {/* Встраиваем реальный (или плейсхолдерный) iframe для новостей */}
                 <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://vk.com/video_ext.php?oid=-126387664&id=456245110&hd=2" 
                  title="Сарапул Новости" 
                  frameBorder="0" 
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" 
                  allowFullScreen>
                 </iframe>
              </div>
              <div className="text-xs font-bold tracking-widest text-[#FF0000] uppercase mb-3 flex items-center gap-2">
                 Программа «Сарапул Новости»
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover/video:text-blue-600 transition-colors">Специальный выпуск: итоги развития города и новые проекты</h3>
              <p className="text-neutral-500 leading-relaxed text-sm">Смотрите еженедельный новостной дайджест. В этом выпуске: строительство инфраструктурных объектов, инициативное бюджетирование и культурные мероприятия выходного дня.</p>
            </div>

            {/* Text news list (Right) */}
            <div className="lg:col-span-5 flex flex-col gap-8 justify-center">
              <div className="group cursor-pointer">
                <div className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2">26 марта 2026</div>
                <h3 className="text-lg font-medium tracking-tight mb-2 group-hover:text-blue-600 transition-colors">Работы по строительству самотечной канализации</h3>
                <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2">В связи с началом производства работ, перекрывается участок дороги по улице Рабочая на 31 день.</p>
              </div>
              
              <div className="group cursor-pointer relative before:content-[''] before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-[1px] before:bg-neutral-200">
                <div className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-2">Бизнес-клуб</div>
                <h3 className="text-lg font-medium tracking-tight mb-2 group-hover:text-orange-600 transition-colors">«Качаем ресурсы: продажа, маркетинг, персонал»</h3>
                <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2">Оффлайн-встреча предпринимателей Сарапула на ул. Жуковского. Обсуждение привлечения кадров.</p>
              </div>
              
              <div className="group cursor-pointer relative before:content-[''] before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-[1px] before:bg-neutral-200">
                <div className="text-xs font-bold tracking-widest text-red-500 uppercase mb-2">МЧС Информирует</div>
                <h3 className="text-lg font-medium tracking-tight mb-2 group-hover:text-red-600 transition-colors">Телефоны дежурно-диспетчерских служб</h3>
                <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2">Актуальный список горячих линий для внештатных и аварийных ситуаций.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Row 3: Smaller Services Widgets */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {[
            { icon: Navigation, title: "Карта Города" },
            { icon: Car, title: "Транспорт" },
            { icon: HeartPulse, title: "Медицина" },
            { icon: Building2, title: "Услуги" }
          ].map((item, i) => (
            <motion.div key={i} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: i*0.1 }} className="bg-white border border-neutral-200 rounded-[2rem] p-8 hover:border-black transition-colors cursor-pointer group flex flex-col items-center text-center justify-center min-h-[220px]">
              <div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-neutral-800" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}
