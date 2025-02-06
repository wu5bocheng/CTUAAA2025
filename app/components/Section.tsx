"use client";

import { useInView } from "react-intersection-observer";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  onInView: (inView: boolean) => void;
  index: number;
}

export default function Section({ children, className = "", onInView, index }: SectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    onChange: (inView) => onInView(inView),
  });

  return (
    <section
      ref={ref}
      data-section-index={index}
      className={`w-full flex items-center justify-center py-6 px-6 
      transition-opacity duration-500
      ${inView ? "opacity-100" : "opacity-0"}
      ${className}`}
    >
      <div className="max-w-4xl w-full">{children}</div>
    </section>
  );
}
