import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactFooter from './components/ContactFooter';

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
      <SpeedInsights />
    </div>
  );
}
