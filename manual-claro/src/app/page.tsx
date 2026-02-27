import Navbar from '@/components/home/Navbar';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import GuidesSection from '@/components/home/GuidesSection';
import FooterSection from '@/components/home/FooterSection';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <GuidesSection />
      <IntroSection />
      <FooterSection />
    </main>
  );
}