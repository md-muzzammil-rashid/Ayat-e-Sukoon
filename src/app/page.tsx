import HeroSection from "@/components/Home/HeroSection";
import SelectEmotions from "@/components/Home/SelectEmotions";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <HeroSection/>
      <SelectEmotions/>
    </main>
  );
}
