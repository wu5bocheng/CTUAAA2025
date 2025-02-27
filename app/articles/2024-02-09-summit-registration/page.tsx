import { Metadata } from "next";
import { articleContent } from "./content";
import ContentRenderer from "@/app/components/ContentRenderer";
import Footer from "@/app/components/Footer";
import { Content } from "@/app/types/content";

export const metadata: Metadata = {
  title: articleContent.title,
  description: "2025交通大学美洲校友联谊峰会报名开启",
};

export default function SummitRegistrationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{articleContent.title}</h1>
          <p className="text-gray-300">{articleContent.date}</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {articleContent.sections.map((section, index) => (
            <ContentRenderer key={index} content={section as Content} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
