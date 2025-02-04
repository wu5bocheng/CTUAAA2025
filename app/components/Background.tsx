import Image from "next/image";

export default function Background() {
  return (
    <div className="fixed inset-0 z-0">
      <Image src="/main_page_background.jpeg" alt="Golden Gate Bridge" fill className="object-cover" priority />
      <div className="absolute inset-0 animate-blur-in" />
    </div>
  );
}
