"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { participants, industries, Participant } from "../config/participants";

export default function ParticipantsScroller() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("全部");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredParticipants = selectedIndustry === "全部" ? participants : participants.filter((p) => p.industry === selectedIndustry);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = 300;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">参会嘉宾</h2>

      {/* Industry Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => setSelectedIndustry("全部")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
            ${selectedIndustry === "全部" ? "bg-black text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
        >
          全部
        </button>

        {industries.map((industry) => (
          <button
            key={industry}
            onClick={() => setSelectedIndustry(industry)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${selectedIndustry === industry ? "bg-black text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
          >
            {industry}
          </button>
        ))}
      </div>

      {/* Participants Scroller */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 
            text-white p-2 rounded-full backdrop-blur-sm transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 
            text-white p-2 rounded-full backdrop-blur-sm transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Participants Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-6 pt-2 px-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredParticipants.length > 0 ? (
            filteredParticipants.map((participant) => <ParticipantCard key={participant.id} participant={participant} />)
          ) : (
            <div className="w-full text-center py-12 text-gray-500">暂无该行业的参会嘉宾</div>
          )}
        </div>
      </div>
    </div>
  );
}

function ParticipantCard({ participant }: { participant: Participant }) {
  return (
    <div className="flex-shrink-0 w-64 mx-2 snap-center">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
        <div className="relative h-64 w-full">
          <Image src={participant.image} alt={participant.name} fill className="object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold">{participant.name}</h3>
          <p className="text-gray-600">{participant.title}</p>
          <p className="text-gray-800 font-medium">{participant.company}</p>
          <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">{participant.industry}</span>
        </div>
      </div>
    </div>
  );
}
