import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50/30 via-white to-slate-50/40 overflow-x-hidden">
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-rose-600 text-white px-4 py-2 rounded-md z-50 focus-ring"
      >
        Vai al contenuto principale
      </a>
      
      <Header />
      <main 
        id="main-content" 
        className="relative"
        role="main"
        aria-label="Contenuto principale"
      >
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}