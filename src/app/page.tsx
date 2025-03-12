import { Hero } from "@/components/Hero";
import { Sponsors } from "@/components/Sponsors";
import HackathonListing from "@/components/HackathonList";
import { HackathonThemes } from "@/components/HackathonThemes";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <Sponsors />
      <HackathonListing />
      <HackathonThemes />
    </div>
  );
}
