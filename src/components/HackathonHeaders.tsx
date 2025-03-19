import React from 'react';

interface HeaderProps {
  title: string;
}

const HackathonHeaders: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className='px-16 py-10 bg-[#071E2D] text-white text-center font-semibold text-3xl md:text-6xl'>
      <h1>{title}</h1>
    </div>
  );
};

export default HackathonHeaders;
