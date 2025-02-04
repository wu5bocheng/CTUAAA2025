"use client";

import { useState } from "react";
import Section from "./Section";
import NavigationDots from "./NavigationDots";
import { siteConfig } from "@/app/config/content";

export default function ContentSection() {
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 2 + siteConfig.content.additionalInfo.length + siteConfig.content.sections.length;

  const handleSectionInView = (index: number, inView: boolean) => {
    if (inView) {
      setCurrentSection(index);
    }
  };

  return (
    <div className="relative z-[1]">
      <NavigationDots totalSections={totalSections} currentSection={currentSection} />

      <Section onInView={(inView) => handleSectionInView(0, inView)} index={0}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl leading-relaxed text-gray-800 font-light tracking-wide">{siteConfig.content.introduction}</p>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-gray-50 to-white" onInView={(inView) => handleSectionInView(1, inView)} index={1}>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">{siteConfig.content.highlights.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteConfig.content.highlights.items.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow
                  border border-gray-100"
              >
                <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {siteConfig.content.sections.map((section, index) => (
        <Section
          key={index}
          className={index % 2 === 0 ? "" : "bg-gradient-to-b from-gray-50 to-white"}
          onInView={(inView) => handleSectionInView(index + 2, inView)}
          index={index + 2}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">{section.title}</h3>
            <p className="text-xl leading-relaxed text-gray-700 font-light">{section.content}</p>
          </div>
        </Section>
      ))}

      {siteConfig.content.additionalInfo.map((info, index) => (
        <Section
          key={index}
          className={index % 2 === 0 ? "" : "bg-gradient-to-b from-gray-50 to-white"}
          onInView={(inView) => handleSectionInView(index + 2 + siteConfig.content.sections.length, inView)}
          index={index + 2 + siteConfig.content.sections.length}
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-xl leading-relaxed text-gray-700 font-light tracking-wide">{info}</p>
          </div>
        </Section>
      ))}

      <Section
        className="bg-gradient-to-b from-gray-50 to-white"
        onInView={(inView) => handleSectionInView(totalSections - 1, inView)}
        index={totalSections - 1}
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-600 italic">{siteConfig.content.notice}</p>
        </div>
      </Section>
    </div>
  );
}
