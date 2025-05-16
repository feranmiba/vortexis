import React from 'react';

export default function HackathonCTA() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      {/* Cards section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {/* New To Hackathons? Card */}
        <div className="bg-indigo-500 rounded-xl p-6 text-white shadow-md">
          <h2 className="text-xl font-medium mb-3">New To Hackathons?</h2>
          <p className="text-sm mb-6">
            Jump into innovation. Collaborate, build, and showcase 
            your talent. Connect with like-minded individuals and 
            build innovative solutions as a team.
          </p>
          <button className="bg-white text-indigo-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-50 transition-colors">
            Register as a Participant
          </button>
        </div>
        
        {/* Ready To Host? Card */}
        <div className="bg-indigo-500 rounded-xl p-6 text-white shadow-md">
          <h2 className="text-xl font-medium mb-3">Ready To Host?</h2>
          <p className="text-sm mb-6">
            Create impactful events with streamlined tools and 
            built-in judging. Organize, manage, and get insights 
            from your hackathon event seamlessly.
          </p>
          <button className="bg-white text-indigo-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-50 transition-colors">
            Register as an Organizer
          </button>
        </div>
      </div>
      
      {/* Newsletter section */}
      <div className="text-center">
        <h3 className="text-lg font-medium mb-2 text-gray-800">Stay Up to date with Hackathons</h3>
        <p className="text-sm text-gray-600 mb-4">Subscribe to our news letter</p>
        <div className="flex justify-center">
          <button className="bg-indigo-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}