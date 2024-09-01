import HeroSection from "@/components/Home/HeroSection";
import SelectEmotions from "@/components/Home/SelectEmotions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <HeroSection/>
      <SelectEmotions/>
    </main>
  );
}
