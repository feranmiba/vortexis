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
    <div className="flex gap-10 mt-10  border rounded-lg shadow-md">
      <div className="flex gap-4 border-r-2 px-3 w-3/5 justify-between py-10">
      <Image src={image} alt={name} width={300} height={200} className="rounded-lg" />
      <div className="space-y-4">
       <h2 className="text-xl font-semibold text-[#282828]">{name}</h2>
       <p className=" text-[#1E1E1E] border rounded-full flex justify-center items-center px-2 py-2">Time Left: {hoursLeft} hours</p>
       <p>{location}</p>
       <p> <span className="text-[#282828] font-bold"> {participants} </span> participants</p>
       <p>Prize: <span className="text-[#282828] font-bold">${prize}</span></p>


       </div>


      </div>

      <div className="space-y-4 mt-10 py-10">
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
