import { motion } from 'motion/react';
import { Smartphone, MonitorPlay, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  const icons = [MonitorPlay, Smartphone, Zap];
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <section id="layanan" className="relative pb-32 pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div {...fadeUp} className="mb-16 max-w-2xl">
          <h2 className="font-sans text-3xl font-bold tracking-tighter text-white sm:text-4xl">
            {t.services.title1} <span className="text-[#0055ff]">{t.services.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            {t.services.description}
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
              className="group relative overflow-hidden border border-gray-800 bg-gray-900 p-8 transition-all hover:border-[#0055ff]/50"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center bg-black text-gray-500 transition-colors group-hover:bg-[#0055ff] group-hover:text-white">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 font-sans text-xl font-bold text-white">
                {service.title}
              </h3>
              <p className="leading-relaxed text-gray-400">
                {service.description}
              </p>
              
              {/* Hover Glow */}
              <div className="absolute -right-20 -top-20 -z-10 h-64 w-64 bg-[#0055ff]/0 blur-[80px] transition-all group-hover:bg-[#0055ff]/10"></div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
