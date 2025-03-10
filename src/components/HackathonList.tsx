import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SearchForm from "@/components/Search-form";
import { HackathonCard } from "../types/index";

interface HackathonCardProps {
  hackathons?: HackathonCard[];
}

const defaultHackathons: HackathonCard[] = Array(6).fill({
  id: "1",
  title: "One Trillion Agents Hackathon",
  daysLeft: 18,
  venue: "Online",
  participants: 1000,
  prize: 20000,
});

const HackathonListing: React.FC<HackathonCardProps> = ({
  hackathons = defaultHackathons,
}) => {
  return (
    <div>
      <div className=" w-full bg-[#F5F7FA] py-20 px-4">
        <SearchForm />
      </div>
      <main className=" min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className=" max-w-7xl mx-auto ">
          <div className="mb-8 md:flex items-center md:gap-2  justify-center ">
            <h1 className="text-3xl font-semibold text-gray-900 md:mb-0 mb-2">
              Hackathons for you
            </h1>
            <Link
              href="/recommendations"
              className="text-[#009AFF] hover:text-blue-500 text-xl 
            border-b-[#82BCFC] border-b-2 px-0 py-0 "
            >
              Edit your recommendations
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-20 lg:gap-y-10 gap-6 mb-8">
            {hackathons.map((hackathon, index) => (
              <div
                key={`${hackathon.id}-${index}`}
                className="bg-white rounded-2xl shadow-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {hackathon.title}
                </h3>
                <div className="space-y-2 text-sm text-[#4D4D4D] mb-4">
                  <p>{hackathon.daysLeft} days left</p>
                  <p>Venue: {hackathon.venue}</p>
                  <p>{hackathon.participants.toLocaleString()} participants</p>
                  <p>${hackathon.prize.toLocaleString()} prize</p>
                </div>
                <Link
                  href={`/hackathon/${hackathon.id}`}
                  className="inline-flex items-center text-[#009AFF] hover:text-blue-500 
            border-b-[#82BCFC] border-b-2 px-0 py-2 
                "
                >
                  Learn More
                  <ArrowRight className="h-6 w-8" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="primary" className="min-w-[200px] cursor-pointer">
              View all hackathons
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HackathonListing;
