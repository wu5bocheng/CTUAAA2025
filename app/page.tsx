import Background from "@/app/components/Background";
import ContentSection from "@/app/components/ContentSection";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import Logo from "@/app/components/Logo";
import ArticleSlider from "@/app/components/ArticleSlider";

export default function Home() {
  return (
    <div className="relative">
      <Logo />
      <Background />
      <HeroSection />
      <div className="relative z-20 bg-white">
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">最新资讯</h2>
          <ArticleSlider />
        </section>
        <ContentSection />
        <Footer />
      </div>
    </div>
  );
}
