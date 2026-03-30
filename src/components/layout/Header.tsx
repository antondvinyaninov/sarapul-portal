import { UserCircle } from 'lucide-react';


export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-100 p-6 flex justify-between items-center px-6 md:px-12 w-full">
      <div className="flex items-center gap-6 md:gap-12">
        <a href="/" className="font-bold text-2xl tracking-tighter hover:opacity-80 transition">
          САРАПУЛ<span className="text-orange-600">.</span>
        </a>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-neutral-600">
          <a href="/city" className="hover:text-black transition-colors">О городе</a>
          <a href="/business" className="hover:text-black transition-colors">Бизнес и ТОР</a>
          <a href="/culture" className="hover:text-black transition-colors">Культура</a>
          <a href="/tourism" className="hover:text-black transition-colors">Туризм</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-black transition-colors">
          <UserCircle className="w-5 h-5" />
          Кабинет жителя
        </button>
        <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center font-bold text-xs uppercase text-neutral-700">РУ</div>
      </div>
    </header>
  );
}
