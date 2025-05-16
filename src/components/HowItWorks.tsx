import React from "react";
import Image from "next/image";
import image3 from "@/public/assets/image3.svg";
import icon1 from "@/public/assets/icon1.svg";
import icon2 from "@/public/assets/icon2.svg";
import icon3 from "@/public/assets/icon3.svg";
import icon4 from "@/public/assets/icon4.svg";
export default function HowItWorks() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-medium text-indigo-600 text-center mb-8">
        Platform Overview
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-medium text-gray-800 mb-3 text-center">
            How It Works
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Bringing organizations and developers together to
            <br /> create, inspire, and innovate
          </p>

          <div className="mt-6">
            <Image
              src={image3}
              alt="Team collaboration with laptops around a table"
              className="rounded-3xl  w-80 h-auto"
            />
          </div>
        </div>

        {/* Right side - Features */}
        <div className=" lg:mt-7 space-y-4">
          {/* All-In-One Platform */}
          <div className="flex">
            <div className="mr-4">
              <Image src={icon4} alt="icon4" className="text-white w-14 " />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">All-In-One Platform</h3>
              <p className="text-sm text-gray-600">
                Manage, build, and ideate in one workspace without switching
                between tools.
              </p>
            </div>
          </div>

          {/* Team Collaboration */}
          <div className="flex">
            <div className="mr-4">
              <Image src={icon3} alt="icon3" className="text-white w-14" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Team Collaboration</h3>
              <p className="text-sm text-gray-600">
                Work seamlessly across time zones and roles with integrated
                communication tools.
              </p>
            </div>
          </div>

          {/* Real-Time Analytics */}
          <div className="flex">
            <div className="mr-4">
              <Image src={icon2} alt="icon2" className="text-white w-14" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Real-Time Analytics</h3>
              <p className="text-sm text-gray-600">
                Get actionable data on participation, engagement, and
                submissions.
              </p>
            </div>
          </div>

          {/* Built For Devs */}
          <div className="flex">
            <div className="mr-4">
              <Image src={icon1} alt="icon1" className="text-white w-14" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Built For Devs</h3>
              <p className="text-sm text-gray-600">
                API support, submission tracking, and powerful toolkits for
                technical teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
