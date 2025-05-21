import React from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
export default function HackathonCTA() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        <div className="relative w-full bg-[#605DEC] overflow-hidden rounded-2xl p-8">
          <div className="w-full flex gap-0 flex-row justify-center items-center h-screen absolute top-0 bottom-0 left-0 right-0">
            <div className=" w-[10em] h-[10em] bg-[#d2bcff] rounded-full opacity-50 z-0 mix-blend-multiply mt-[-12em] absolute left-10" />
            <div className=" w-[10em] h-[10em] bg-[#ffffff] rounded-full opacity-50 z-0 mt-[16em] " />
            <div className=" w-[10em] h-[10em] bg-[#c5c3ff] rounded-full opacity-50 z-0 mix-blend-multiply mt-[-12em] absolute right-20" />
          </div>
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
        <div className="relative w-full bg-[#605DEC]  rounded-2xl p-8">
          <div className="w-full flex gap-0 flex-row justify-center items-center h-screen absolute top-0 bottom-0 left-0 right-0">
            <div className=" w-[10em] h-[10em] bg-[#d2bcff] rounded-full opacity-50 z-0 mix-blend-multiply mt-[-12em] absolute left-10" />
            <div className=" w-[10em] h-[10em] bg-[#ffffff] rounded-full opacity-50 z-0 mt-[16em] " />
            <div className=" w-[10em] h-[10em] bg-[#c5c3ff] rounded-full opacity-50 z-0 mix-blend-multiply mt-[-12em] absolute right-20" />
          </div>
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
