import React from "react";
import Image from "next/image";
import { Button } from "../components/ui/Button";
import cuate from "@/public/assets/cuate.svg";

export const Hero: React.FC = () => {
  return (
    <div className="bg-[#F5F7FA] overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-gray-900">The home for</span>
              <br />
              <span className="text-[#407BFF]">hackathons</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-lg">
              Where organizations and developers come together <br/> to build,
              inspire, and innovate.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="lg"
                className="bg-blue-500 text-white px-6"
              >
                For Organizers
              </Button>
              <Button variant="outline" size="lg" className=" px-6">
                For Participants
              </Button>
            </div>
          </div>
          <div className="relative h-72 md:h-96 w-full">
            <Image
              src={cuate}
              alt="Hackathon illustration with developers and data visualization"
              layout="fill"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
