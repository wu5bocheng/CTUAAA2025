import { siteConfig } from "@/app/config/content";

export default function Logo() {
  return (
    <a
      href={siteConfig.siteUrl}
      className="fixed top-6 left-6 z-30 text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg 
      hover:bg-black/40 transition-all duration-300 font-medium tracking-wider"
    >
      {siteConfig.siteName}
    </a>
  );
}
