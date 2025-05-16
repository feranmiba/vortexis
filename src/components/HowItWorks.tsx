import React from 'react';
import { MessageSquare, Users, BarChart2, Code } from 'lucide-react';

export default function HowItWorks() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-medium text-indigo-600 text-center mb-8">Platform Overview</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side - How It Works with image */}
        <div>
          <h2 className="text-2xl font-medium text-gray-800 mb-3">How It Works</h2>
          <p className="text-gray-600 text-sm mb-6">
            Bringing organizations and developers together to create, inspire, and innovate
          </p>
          
          <div className="mt-6">
            <img 
              src="/api/placeholder/500/300" 
              alt="Team collaboration with laptops around a table" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
        
        {/* Right side - Features */}
        <div className="space-y-4">
          {/* All-In-One Platform */}
          <div className="flex">
            <div className="mr-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                <MessageSquare className="text-white" size={24} />
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">All-In-One Platform</h3>
              <p className="text-sm text-gray-600">
                Manage, build, and ideate in one workspace without switching between tools.
              </p>
            </div>
          </div>
          
          {/* Team Collaboration */}
          <div className="flex">
            <div className="mr-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                <Users className="text-white" size={24} />
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Team Collaboration</h3>
              <p className="text-sm text-gray-600">
                Work seamlessly across time zones and roles with integrated communication tools.
              </p>
            </div>
          </div>
          
          {/* Real-Time Analytics */}
          <div className="flex">
            <div className="mr-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                <BarChart2 className="text-white" size={24} />
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Real-Time Analytics</h3>
              <p className="text-sm text-gray-600">
                Get actionable data on participation, engagement, and submissions.
              </p>
            </div>
          </div>
          
          {/* Built For Devs */}
          <div className="flex">
            <div className="mr-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                <Code className="text-white" size={24} />
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Built For Devs</h3>
              <p className="text-sm text-gray-600">
                API support, submission tracking, and powerful toolkits for technical teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}