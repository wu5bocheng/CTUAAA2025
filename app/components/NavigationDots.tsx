"use client";

interface NavigationDotsProps {
  totalSections: number;
  currentSection: number;
}

export default function NavigationDots({ totalSections, currentSection }: NavigationDotsProps) {
  return (
    <div
      className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-[999] 
      bg-black/10 backdrop-blur-sm p-2 rounded-full"
    >
      {Array.from({ length: totalSections }).map((_, index) => (
        <div
          key={index}
          className={`transition-all duration-300 bg-white rounded-full cursor-pointer
            hover:scale-150 hover:bg-white
            ${currentSection === index ? "h-8 w-2 opacity-100" : "h-2 w-2 opacity-50 hover:opacity-100"}`}
          onClick={() => {
            const element = document.querySelector(`section:nth-of-type(${index + 1})`);
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }}
        />
      ))}
    </div>
  );
}
