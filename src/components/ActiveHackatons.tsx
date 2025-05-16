import React from 'react';

export default function ExploreActiveHackathons() {

  const hackathons = Array(12).fill({
    title: "Global AI Agents League",
    prize: "$15,000",
    participants: "67",
    days: "14",
    status: "Online"
  });

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50">
      <h2 className="text-lg font-medium text-indigo-500 mb-6">Explore Active Hackathons</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {hackathons.map((hackathon, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 flex overflow-hidden">
            {/* Left part - Image */}
            <div className="w-24 relative">
              {/* Innovation 100 badge */}
              <div className="absolute top-3 left-2 bg-white text-indigo-600 text-xs px-1 rounded flex items-center">
                <span className="mr-1">i</span>
                <span className="text-[10px]">innovation 100</span>
              </div>
              
              {/* Left image with gradient */}
              <div className="h-full bg-gradient-to-b from-blue-400 to-green-400 flex items-end justify-center pb-2">
                <div className="text-center text-white text-xs">
                  <div className="font-semibold">GLOBAL</div>
                  <div className="font-semibold">AI AGENTS</div>
                  <div className="font-semibold">LEAGUE</div>
                  <div className="text-[8px] mt-1">{hackathon.participants} participants</div>
                </div>
              </div>
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
                <div className="text-indigo-600 font-semibold">${hackathon.prize}</div>
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