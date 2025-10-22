import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import TransitionSection from '@/components/TransitionSection';

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="bg-white">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <TransitionSection />
        <AboutSection />
        <ContactSection />
      </main>
    
    </div>
  );
}