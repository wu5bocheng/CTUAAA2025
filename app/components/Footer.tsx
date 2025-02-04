import { siteConfig } from "@/app/config/content";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8 mt-16">
      <div className="max-w-4xl mx-auto px-6">
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm mb-6">
          {siteConfig.footer.links.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-gray-600 transition-colors">
              {link.text}
            </a>
          ))}
        </nav>
        <div className="text-center text-sm text-gray-500 mt-4">{siteConfig.footer.copyright}</div>
      </div>
    </footer>
  );
}
