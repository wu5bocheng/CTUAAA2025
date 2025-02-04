"use client";

import { useState } from "react";
import Section from "./Section";
import NavigationDots from "./NavigationDots";
import ContentRenderer from "./ContentRenderer";
import TabSection from "./TabSection";
import { siteConfig } from "@/app/config/content";

export default function ContentSection() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [
    { type: "tabs" as const }, // Add "as const" to narrow the type
    siteConfig.content.introduction,
    siteConfig.content.highlights,
    ...siteConfig.content.sections,
    siteConfig.content.notice,
  ];
  const totalSections = sections.length;

  const handleSectionInView = (index: number, inView: boolean) => {
    if (inView) {
      setCurrentSection(index);
    }
  };

  return (
    <div className="relative z-[1]">
      <NavigationDots totalSections={totalSections} currentSection={currentSection} />

      {sections.map((section, index) => (
        <Section
          key={index}
          className={index % 2 === 0 ? "" : "bg-gradient-to-b from-gray-50 to-white"}
          onInView={(inView) => handleSectionInView(index, inView)}
          index={index}
        >
          {section.type === "tabs" ? <TabSection /> : <ContentRenderer content={section} />}
        </Section>
      ))}
    </div>
  );
}
