import { motion } from 'motion/react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const { language, t, toggleLanguage } = useLanguage();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-900 bg-[#050505]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <img src="/favicon.svg" alt="Natakode Logo" className="h-8 w-8 rounded-sm" />
          <span className="text-xl font-semibold uppercase tracking-tighter">
            Nata<span className="text-[#0055ff]">kode</span>
          </span>
        </div>

        <nav className="hidden items-center gap-10 md:flex">
          <a href="#layanan" className="text-sm font-medium uppercase tracking-widest text-gray-400 transition-colors hover:text-[#0055ff]">
            {t.nav.services}
          </a>
          <a href="#portofolio" className="text-sm font-medium uppercase tracking-widest text-gray-400 transition-colors hover:text-[#0055ff]">
            {t.nav.portfolio}
          </a>
          <a href="#kontak" className="text-sm font-medium uppercase tracking-widest text-gray-400 transition-colors hover:text-[#0055ff]">
            {t.nav.contact}
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 transition-colors hover:text-[#0055ff]"
          >
            <Globe className="h-4 w-4" />
            {language === 'id' ? 'ID' : 'EN'}
          </button>
          
          <a
            href="#kontak"
            className="hidden md:inline-flex border border-gray-800 px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-white hover:text-black"
          >
            {t.nav.startProject}
          </a>
        </div>
      </div>
    </motion.header>
  );
}
