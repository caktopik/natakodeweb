import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#050505] px-6 text-center text-white selection:bg-[#0055ff]/30 selection:text-[#0055ff]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center"
      >
        <div className="mb-6 flex h-24 w-24 items-center justify-center border border-gray-800 bg-gray-900">
          <span className="font-sans text-4xl font-bold text-[#0055ff]">
            {t.notFound.title}
          </span>
        </div>
        
        <h1 className="mb-4 font-sans text-4xl font-bold tracking-tighter sm:text-5xl">
          {t.notFound.subtitle}
        </h1>
        <p className="mb-10 max-w-md text-lg text-gray-400">
          {t.notFound.description}
        </p>
        
        <a
          href="/"
          className="group flex items-center gap-2 border border-gray-800 bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:border-[#0055ff] hover:bg-[#0055ff]"
        >
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          {t.notFound.backHome}
        </a>
      </motion.div>
    </div>
  );
}
