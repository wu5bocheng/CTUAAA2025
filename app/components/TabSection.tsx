"use client";

import { useState } from "react";
import { siteConfig } from "@/app/config/content";
import ContentRenderer from "./ContentRenderer";
import type { TabItem } from "@/app/types/content";

export default function TabSection() {
  const [activeTab, setActiveTab] = useState(siteConfig.tabs.items[0].id);

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {siteConfig.tabs.items.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeTab === tab.id ? "bg-black text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {(siteConfig.tabs.items as TabItem[]).map((tab) => (
          <div
            key={tab.id}
            className={`transition-all duration-500 
              ${activeTab === tab.id ? "opacity-100" : "opacity-0 hidden"}`}
          >
            <ContentRenderer
              content={{
                ...tab.content,
                priority: activeTab === tab.id,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
