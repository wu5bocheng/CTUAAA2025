import { siteConfig } from "@/app/config/content";

export default function HeroSection() {
  return (
    <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-white text-center p-4 z-10">
      <h1 className="text-4xl sm:text-6xl font-bold mb-4 opacity-0 animate-fade-in-slow tracking-wide">{siteConfig.event.title}</h1>
      <h2 className="text-xl sm:text-2xl font-medium opacity-0 animate-fade-in-slower tracking-wider mb-8">
        {siteConfig.event.date}·{siteConfig.event.location}
      </h2>

      <a
        href={siteConfig.event.ticketUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-0 animate-fade-in-slower mt-4 px-8 py-3 bg-white text-black rounded-full
          font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105
          shadow-lg hover:shadow-xl"
      >
        立即购票
      </a>

      <div className="absolute bottom-8 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}
