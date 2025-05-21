import { StaticImageData } from "next/image";
import Image from "next/image";
// import Location from "@/public/assets/icon/mdi_location.svg"
// import { types } from "node:util";
import React from "react";

interface CardData {
  image: string | StaticImageData;
  name: string;
  location: string;
  participants: string;
  prize: number;
  date: string; // Expected format: "YYYY-MM-DD HH:mm:ss" or similar
  mode: string;
  startTime: string;
  organization: string;
  entry: string;
  type: string;
}

const HackathonCard: React.FC<CardData> = ({
  image,
  name,
  location,
  participants,
  prize,
  date,
  mode,
  startTime,
  organization,
  entry,
  type
}) => {
  const now = new Date().getTime();
  
  const hackathonTime = new Date(date).getTime();

  const hoursLeft = Math.max(0, Math.floor((hackathonTime - now) / (1000 * 60 * 60)));

  return (
    <div className="flex gap-4 md:gap-10  flex-wrap md:flex-nowrap mt-10  border rounded-lg shadow-md justify-center py-5 md:py-0">
      <div className="flex gap-4 flex-wrap md:flex-nowrap md:border-r-2 px-3  xl:w-[60%] justify-center lg:gap-20  md:py-10">
      <Image src={image} alt={name} className="rounded-lg w-full md:w-[40%]" />
      <div className="space-y-4">
       <h2 className="text-xl font-semibold text-[#282828]">{name}</h2>
       <p className=" text-[#1E1E1E] border rounded-full flex justify-center items-center px-2 py-2">Time Left: {hoursLeft} hours</p>
       <p>{location}</p>
       <p> <span className="text-[#282828] font-bold"> {participants} </span> participants</p>
       <p>Prize: <span className="text-[#282828] font-bold">${prize}</span></p>


       </div>


      </div>

      <div className="space-y-4 md:mt-10 md:py-10">
      <p className=" text-[#1E1E1E] border rounded-full flex justify-center items-center px-2 py-2">Organization: {organization}</p>
      <p>Date: {date}</p>
      <p>Mode: {mode}</p>
      <p>Start Time: {startTime}</p>
      <p>Entry: {entry}</p>
      <p>Type: {type}</p>
      </div>
     
    </div>
  );
};

export default HackathonCard;
