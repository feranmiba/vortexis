import { Users, BarChart2, Clock, ListChecks } from "lucide-react";

export default function PlatformOverview() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-center text-indigo-500 mb-8">Platform Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Participants Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <img 
              src="/api/placeholder/400/260" 
              alt="Person working on laptop with sticky notes" 
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <div className="text-indigo-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L20 9V21H4V9L12 3Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 21V15C8 13.8954 8.89543 13 10 13H14C15.1046 13 16 13.8954 16 15V21" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="ml-4 text-indigo-500 text-lg font-medium">PARTICIPANTS</div>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center">
                <Users size={20} className="text-gray-600" />
              </div>
              <p className="ml-4 text-gray-700">Discover and join hackathons</p>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center">
                <Users size={20} className="text-gray-600" />
              </div>
              <p className="ml-4 text-gray-700">Form teams and submit projects</p>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center">
                <Users size={20} className="text-gray-600" />
              </div>
              <p className="ml-4 text-gray-700">Access toolkits, APIs, and Live updates</p>
            </div>
          </div>
        </div>
        
        {/* Organizers Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <div className="text-indigo-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L20 9V21H4V9L12 3Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 21V15C8 13.8954 8.89543 13 10 13H14C15.1046 13 16 13.8954 16 15V21" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="ml-4 text-indigo-500 text-lg font-medium">ORGANIZERS</div>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center">
                <Users size={20} className="text-gray-600" />
              </div>
              <p className="ml-4 text-gray-700">Create & manage hackathons effortlessly</p>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center">
                <Users size={20} className="text-gray-600" />
              </div>
              <p className="ml-4 text-gray-700">Invite judges, track teams, and monitor submissions</p>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center">
                <Users size={20} className="text-gray-600" />
              </div>
              <p className="ml-4 text-gray-700">Access analytics on participation and engagement</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <img 
              src="/api/placeholder/400/260" 
              alt="Person gesturing during discussion with laptop" 
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
