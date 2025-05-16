import React from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
export default function HackathonCTA() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        <div className="bg-indigo-500 rounded-xl p-6 text-white shadow-md">
          <h2 className="text-xl font-medium mb-3">New To Hackathons?</h2>
          <p className="text-sm mb-6">
            Jump into innovation. Collaborate, build, and showcase your talent.
            Connect with like-minded individuals and build innovative solutions
            as a team.
          </p>
          <Button variant="outline" size="lg" className="px-6 py-3 text-lg">
            <Link href="/participants">Register as participant</Link>
          </Button>
        </div>

        {/* Ready To Host? Card */}
        <div className="bg-indigo-500 rounded-xl p-6 text-white shadow-md">
          <h2 className="text-xl font-medium mb-3">Ready To Host?</h2>
          <p className="text-sm mb-6">
            Create impactful events with streamlined tools and built-in judging.
            Organize, manage, and get insights from your hackathon event
            seamlessly.
          </p>
          <Button variant="outline" size="lg" className="px-6 py-3 text-lg">
            <Link href="/organizers">Register as Organizer</Link>
          </Button>
        </div>
      </div>

      {/* Newsletter section */}
      <div className="text-center">
        <h3 className="text-lg font-medium mb-2 text-gray-800">
          Stay Up to date with Hackathons
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Subscribe to our news letter
        </p>
        <Button variant="primary" size="lg" className="px-6 py-3 text-lg">
          Subscribe
        </Button>
      </div>
    </div>
  );
}
