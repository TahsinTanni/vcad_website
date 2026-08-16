import Hero from "@/components/home/Hero";
import SchoolsCarousel from "@/components/home/SchoolsCarousel";
import StatsSection from "@/components/home/StatsSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <Hero />
      <SchoolsCarousel />
      <StatsSection />
    </div>
  );
}