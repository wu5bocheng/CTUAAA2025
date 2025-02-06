"use client";

import { useState } from "react";
import Section from "./Section";
import NavigationDots from "./NavigationDots";
import ContentRenderer from "./ContentRenderer";
import TabSection from "./TabSection";
import { siteConfig } from "@/app/config/content";
import { TabItem, Content } from "@/app/types/content";

export default function ContentSection() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = siteConfig.sections;
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
          key={section.id}
          className={index % 2 === 0 ? "" : "bg-gradient-to-b from-gray-50 to-white"}
          onInView={(inView) => handleSectionInView(index, inView)}
          index={index}
        >
          {section.type === "tabs" ? <TabSection items={section.items as TabItem[]} /> : <ContentRenderer content={section as Content} />}
        </Section>
      ))}
    </div>
  );
}
