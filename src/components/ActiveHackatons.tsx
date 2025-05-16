import React from "react";
import image1 from "@/public/assets/image1.svg";
import Image from "next/image";
export default function ExploreActiveHackathons() {
  const hackathons = Array(12).fill({
    title: "Global AI Agents League",
    prize: "$15,000",
    participants: "67",
    days: "14",
    status: "Online",
  });

  return (
    <div className="max-w-5xl mx-auto p-6 ">
      <h2 className="text-lg font-medium text-indigo-500 mb-6">
        Explore Active Hackathons
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
        {hackathons.map((hackathon, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-[#605DEC] flex overflow-hidden"
          >
            {/* Left part - Image */}
            <div className="relative">
              <Image src={image1} alt="img" className="lg:w-36 w-40 h-full" />
            </div>

            {/* Right part - Content */}
            <div className="flex-1 p-3">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-sm">Global AI Agents League</h3>
                <div className="flex items-center space-x-1 text-xs text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Online</span>
                </div>
              </div>

              <div className="flex mt-3 space-x-2">
                <div className="bg-gray-100 rounded px-2 py-1 text-xs flex items-center">
                  <span className="text-gray-500">Time:</span>
                  <span className="ml-1">{hackathon.days} Days</span>
                </div>
              </div>

              <div className="mt-4 flex items-center">
                <div className="text-indigo-600 font-semibold">
                  ${hackathon.prize}
                </div>
                <div className="text-xs text-gray-500 ml-1">in prizes</div>
              </div>

              <div className="mt-1 text-xs text-gray-500">
                {hackathon.participants} participants
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
