import { motion } from 'motion/react';
import { Mail, MapPin, Code2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactFooter() {
  const { t } = useLanguage();
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <footer id="kontak" className="relative mt-20 border-t border-gray-900 bg-[#050505] pb-12 pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <motion.div {...fadeUp} className="grid gap-12 lg:grid-cols-2">
          {/* CTA Area */}
          <div>
            <h2 className="mb-6 font-sans text-4xl font-bold tracking-tighter text-white">
              {t.contact.title1} <span className="text-[#0055ff]">{t.contact.titleHighlight}</span>
            </h2>
            <p className="mb-10 max-w-md text-lg text-gray-400">
              {t.contact.description}
            </p>
            <a 
              href="mailto:hello@natakode.com"
              className="inline-flex h-14 items-center justify-center border border-gray-800 bg-transparent px-8 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
            >
              {t.contact.consultation}
            </a>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6 lg:items-end lg:justify-center">
             <div className="flex items-center gap-4 text-gray-300">
               <div className="flex h-12 w-12 items-center justify-center border border-gray-800 bg-gray-900">
                 <Mail className="h-5 w-5 text-[#0055ff]" />
               </div>
               <div>
                 <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#0055ff]">{t.contact.emailLabel}</p>
                 <a href="mailto:hello@natakode.com" className="font-medium hover:text-white transition-colors">hello@natakode.com</a>
               </div>
             </div>
             
             <div className="flex items-center gap-4 text-gray-300">
               <div className="flex h-12 w-12 items-center justify-center border border-gray-800 bg-gray-900">
                 <MapPin className="h-5 w-5 text-[#0055ff]" />
               </div>
               <div>
                 <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#0055ff]">{t.contact.basedInLabel}</p>
                 <span className="font-medium">{t.contact.basedIn}</span>
               </div>
             </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-16 h-px w-full bg-gray-900" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
           <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#0055ff]">
              <Code2 className="h-5 w-5 text-black" />
            </div>
            <span className="text-xl font-semibold uppercase tracking-tighter text-white">
              Nata<span className="text-[#0055ff]">kode</span>
            </span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
            &copy; {new Date().getFullYear()} Natakode. {t.contact.rights}
          </p>
          <div className="flex gap-6">
            <a href="#" className="flex gap-2 text-sm font-bold uppercase text-gray-400 transition-colors hover:text-[#0055ff]">Behance</a>
            <a href="#" className="flex gap-2 text-sm font-bold uppercase text-gray-400 transition-colors hover:text-[#0055ff]">LinkedIn</a>
            <a href="#" className="flex gap-2 text-sm font-bold uppercase text-gray-400 transition-colors hover:text-[#0055ff]">GitHub</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
