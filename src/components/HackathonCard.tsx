import { StaticImageData } from "next/image";
import Image from "next/image";
import { types } from "node:util";
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
    <div className="flex  p-5 border rounded-lg shadow-md">
      <div className="flex gap-4 border-r-2 px-3">
      <Image src={image} alt={name} width={300} height={200} className="rounded-lg" />
      <div>
       <h2 className="text-xl font-semibold">{name}</h2>
       <p className="font-bold text-red-500 border rounded-full flex justify-center items-center px-3 py-4">Time Left: {hoursLeft} hours</p>
       <p>{location}</p>
       <p>{participants} participants</p>
       <p>Prize: ${prize}</p>


       </div>


      </div>

      <div>
      <p>Date: {date}</p>
      <p>Mode: {mode}</p>
      <p>Start Time: {startTime}</p>
      <p>Organization: {organization}</p>
      <p>Entry: {entry}</p>
      <p>Type: {type}</p>
      </div>
     
    </div>
  );
};

export default HackathonCard;
