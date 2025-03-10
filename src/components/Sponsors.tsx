import React from "react";
import Image from "next/image";
import { Sponsor } from "../types";
import sponsor1 from "@/public/assets/sponsors/sponsor1.svg";
import sponsor2 from "@/public/assets/sponsors/sponsor2.svg";
import sponsor3 from "@/public/assets/sponsors/sponsor3.svg";
import sponsor4 from "@/public/assets/sponsors/sponsor4.svg";
import sponsor5 from "@/public/assets/sponsors/sponsor5.svg";

interface SponsorsSectionProps {
  sponsors?: Sponsor[];
}

export const Sponsors: React.FC<SponsorsSectionProps> = ({
  sponsors = [
    { logo: sponsor2, name: " Onboard" },
    { logo: sponsor5, name: " CoinEx" },
    { logo: sponsor1, name: " Web3Ladies" },
    { logo: sponsor4, name: "Cloud" },
    { logo: sponsor3, name: "BlockOne" },
  ],
}) => {
  return (
    <div className="bg-white py-12 md:py-10  flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-[#4D4D4D]">
            Some Of Our Sponsors
          </h2>
          <p className="mt-2 text-[#4D4D4D]">
            We have been working with some Fortune 500+ organizations
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name || `Sponsor ${index + 1}`} logo`}
                width={120}
                height={40}
                className="h-auto w-auto max-h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
