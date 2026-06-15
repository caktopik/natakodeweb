import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactFooter from './components/ContactFooter';
import NotFound from './components/NotFound';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  if (currentPath !== '/') {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#0055ff]/30 selection:text-[#0055ff]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
      </main>
      <ContactFooter />
    </div>
  );
}
