import Navbar from '@/components/home/Navbar';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import GuidesSection from '@/components/home/GuidesSection';
import SystemRequirementsSection from '@/components/home/SystemRequirementsSection';
import InstallationSection from '@/components/home/InstallationSection';
import MaintenanceSection from '@/components/home/MaintenanceSection';
import FooterSection from '@/components/home/FooterSection';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <SystemRequirementsSection />
      <InstallationSection />
      <GuidesSection />
      <MaintenanceSection />
      <FooterSection />
    </main>
  );
}