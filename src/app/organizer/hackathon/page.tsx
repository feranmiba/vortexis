"use client";

import React, { useState } from 'react';
import Details from './component/Details';
import Visibility from './component/Visibility';
import Invitation from './component/Invitation';
import Submission from './component/Submission';
import Team from './component/Team';

function Hackathon() {
  const [activeButton, setActiveButton] = useState("Hackathon Details");

  const Buttons = [
    "Hackathon Details",
    "Submission",
    "Team Configuration",
    "Visibility",
    "Invite judges"
  ];

  const renderComponent = () => {
    switch (activeButton) {
      case "Hackathon Details":
        return <Details />;
      case "Submission":
        return <Submission />;
      case "Team Configuration":
        return <Team />;
      case "Visibility":
        return <Visibility />;
      case "Invite judges":
        return <Invitation />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-white px-10 rounded-2xl py-5">

      <div className='space-y-3'>
        <h1 className='text-3xl font-bold text-[#605DEC]'>{activeButton}</h1>
        <p>Enter the basic information about your hackathon.</p>
      </div>
      <div className="flex gap-3 mb-6 flex-wrap mt-4">
        {Buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => setActiveButton(btn)}
            className={`px-8 py-4 rounded-lg transition cursor-pointer ${
              activeButton === btn
                ? "bg-[#605DEC] text-white"
                : "bg-[#F4F3FE] text-[#C5C0DB]"
            }`}
          >
            {btn}
          </button>
        ))}
      </div>

      <div className="mt-4">{renderComponent()}</div>
    </section>
  );
}

export default Hackathon;
