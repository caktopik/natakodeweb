import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const projectImages = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600&h=900',
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1600&h=900',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600&h=900'
];

export default function Portfolio() {
  const { t } = useLanguage();
  return (
    <section id="portofolio" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <h2 className="font-sans text-3xl font-bold tracking-tighter text-white sm:text-4xl">
              {t.portfolio.title1} <span className="text-[#0055ff]">{t.portfolio.titleHighlight}</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              {t.portfolio.description}
            </p>
          </div>
        </motion.div>

        <div className="grid gap-10">
          {t.portfolio.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              className="group relative overflow-hidden border border-gray-800 bg-gray-900 p-4 transition-all hover:border-[#0055ff]/30 lg:p-6"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                
                {/* Image Wrap */}
                <div className="relative aspect-video w-full overflow-hidden bg-gray-800 lg:w-3/5">
                  <div className="absolute inset-0 z-10 bg-[#0055ff]/20 mix-blend-color opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                  <img 
                    src={projectImages[index]} 
                    alt={project.title} 
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Info Text */}
                <div className="flex flex-col justify-center px-4 pb-4 lg:w-2/5 lg:px-8">
                  <span className="mb-4 inline-block text-[10px] uppercase tracking-widest text-[#0055ff] font-bold">
                    {project.category}
                  </span>
                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mb-8 text-gray-400">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-4">
                    <a href="#" className="flex h-12 w-12 items-center justify-center bg-white text-black transition-transform hover:scale-110">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a href="#" className="flex h-12 w-12 items-center justify-center border border-gray-800 text-white transition-colors hover:bg-[#0055ff] hover:border-[#0055ff]">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
