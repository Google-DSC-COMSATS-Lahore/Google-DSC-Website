import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/sections/HeroSection";
import UpcomingEventSection from "@/components/sections/UpcomingEventSection";
import PastEventsSection from "@/components/sections/PastEventsSection";
import TeamSection from "@/components/sections/TeamSection";

export default function Home() {
  return (
    <main className="bg-[#f6f6f6] sm:m-[20px] sm:rounded-[16px] flex flex-col gap-[160px] pt-[20px] pb-[20px] sm:py-[30px]">
      <div>
        <Header />
        <HeroSection />
      </div>
      <UpcomingEventSection />
      <PastEventsSection />
      <TeamSection />
      <Footer />
    </main>
  );
}
