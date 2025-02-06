import Background from "@/app/components/Background";
import ContentSection from "@/app/components/ContentSection";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import Logo from "@/app/components/Logo";

export default function Home() {
  return (
    <div className="relative">
      <Logo />
      <Background />
      <HeroSection />
      <div className="relative z-20 bg-white">
        <ContentSection />
        <Footer />
      </div>
    </div>
  );
}
