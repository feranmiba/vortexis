
"use client";

import Link from "next/link";
import { Button } from "../components/ui/Button";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#E0D9FB] via-[#D8DBFF] to-[#F4F4FF] overflow-hidden">
      {/* Gradient circles */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#B5A8F8] opacity-30 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#9D8CFF] opacity-30 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#212121] leading-tight mb-4">
          Run. Join. Win.
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#212121] mb-6">
          Everything Hackathon, All In One Place.
        </h2>

        <p className="text-lg sm:text-xl text-[#212121] max-w-2xl mx-auto mb-8 font-medium">
          Vortexis makes it easy to{" "}
          <span className="font-semibold">host hackathons</span>,
          <span className="font-semibold"> collaborate with teammates</span>,
          and <span className="font-semibold">build innovative projects</span> —
          whether {`you're an `}
          <span className="font-bold">organizer</span>,{" "}
          <span className="font-bold">participant</span>, 
          <span className="font-bold"> or judge</span>.
        </p>

        <div className="flex justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            className="bg-[#605DEC] text-white px-6 py-3 text-lg"
          >
            <Link href="/participants">
            For Participants
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="px-6 py-3 text-lg">
            <Link href="/organizers">
            For Organizers
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
