import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactFooter from './components/ContactFooter';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#0055ff]/30 selection:text-[#0055ff]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
      </main>
      <ContactFooter />
      <Analytics />
    </div>
  );
}
