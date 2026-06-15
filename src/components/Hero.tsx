import { motion } from 'motion/react';
import { ArrowRight, Terminal } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const easeOutCubic = [0.22, 1, 0.36, 1];

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[40rem] w-[40rem] rounded-full bg-[#0055ff]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutCubic }}
          className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.4em] text-[#0055ff]"
        >
          <Terminal className="h-4 w-4" />
          <span>{t.hero.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOutCubic, delay: 0.1 }}
          className="mb-8 font-sans text-5xl font-bold leading-[0.9] tracking-tighter text-white sm:text-7xl"
        >
          {t.hero.title1} <br className="hidden sm:block" />
          {t.hero.title2} <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">{t.hero.titleHighlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOutCubic, delay: 0.2 }}
          className="mx-auto mb-10 mt-8 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOutCubic, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#portofolio"
            className="group flex w-full items-center justify-center gap-2 bg-[#0055ff] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(0,85,255,0.4)] transition-all hover:bg-[#0055ff]/80 sm:w-auto"
          >
            {t.hero.viewPortfolio}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#layanan"
            className="flex w-full items-center justify-center border border-gray-800 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black sm:w-auto"
          >
            {t.hero.learnServices}
          </a>
        </motion.div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
    </section>
  );
}
