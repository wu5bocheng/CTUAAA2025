"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { participants, industries, Participant } from "../config/participants";

export default function ParticipantsScroller() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("全部");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const filteredParticipants = selectedIndustry === "全部" ? participants : participants.filter((p) => p.industry === selectedIndustry);

  // Track previous filter selection to detect changes
  const prevIndustryRef = useRef(selectedIndustry);

  // Check scroll position to determine arrow visibility
  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const isScrollable = container.scrollWidth > container.clientWidth;
    const isAtEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth;

    setShowLeftArrow(container.scrollLeft > 20);
    setShowRightArrow(isScrollable && !isAtEnd);
  };

  // Setup auto-scroll
  useEffect(() => {
    // Clear any existing interval
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }

    if (!isPaused) {
      // Create new interval that scrolls right every 3 seconds
      autoScrollIntervalRef.current = setInterval(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const cardWidth = 336; // Same as in handleScroll

          // Check if we're near the end
          if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            // If at end, smooth scroll back to start
            container.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            // Otherwise scroll one card over
            container.scrollBy({ left: cardWidth, behavior: "smooth" });
          }
          checkScrollPosition();
        }
      }, 3000); // Scroll every 3 seconds
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
    };
  }, [isPaused, filteredParticipants]);

  // Add scroll event listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const handleScrollEvent = () => {
        checkScrollPosition();
      };

      container.addEventListener("scroll", handleScrollEvent);
      // Check initial scroll position
      checkScrollPosition();

      // Reset scroll position to start ONLY when filter changes
      if (prevIndustryRef.current !== selectedIndustry) {
        container.scrollTo({ left: 0, behavior: "auto" });
        prevIndustryRef.current = selectedIndustry;
      }

      // Check again after content might have changed
      setTimeout(checkScrollPosition, 100);

      return () => container.removeEventListener("scroll", handleScrollEvent);
    }
  }, [filteredParticipants, selectedIndustry]);

  // Temporarily pause auto-scroll when user manually interacts with the scroller
  const handleManualInteraction = () => {
    setIsPaused(true);

    // Clear any existing timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    // Resume auto-scroll after 2 seconds of inactivity
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  const handleScroll = (direction: "left" | "right") => {
    // Temporarily pause auto-scroll
    handleManualInteraction();

    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = 336; // 320px card width + 16px (2*8px margins)
    const scrollAmount = cardWidth;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Industry Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => {
            setSelectedIndustry("全部");
            handleManualInteraction();
          }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
            ${selectedIndustry === "全部" ? "bg-black text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
        >
          全部
        </button>

        {industries.map((industry) => (
          <button
            key={industry}
            onClick={() => {
              setSelectedIndustry(industry);
              handleManualInteraction();
            }}
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
        {showLeftArrow && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 
              text-white p-2 rounded-full backdrop-blur-sm transition-all"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {showRightArrow && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 
              text-white p-2 rounded-full backdrop-blur-sm transition-all"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Participants Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-6 pt-2 px-4 scrollbar-hide snap-x snap-mandatory scroll-px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollBehavior: "smooth" }}
          onMouseDown={handleManualInteraction}
          onTouchStart={handleManualInteraction}
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
    <div className="flex-shrink-0 w-80 mx-2 snap-center">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="relative aspect-[3091/4000] w-full">
          <Image src={participant.image} alt={participant.id} fill className="object-cover" priority={participant.industry === "主旨演讲嘉宾"} />
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-black/50 text-white rounded-full text-sm backdrop-blur-sm">{participant.industry}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
