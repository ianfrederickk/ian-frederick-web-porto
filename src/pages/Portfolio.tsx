import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import FeaturedSection from '@/components/FeaturedSection';
import ContactSection from '@/components/ContactSection';
import TransitionSection from '@/components/TransitionSection';

import Footer from '@/components/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <TransitionSection />
        <AboutSection />
        <FeaturedSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}