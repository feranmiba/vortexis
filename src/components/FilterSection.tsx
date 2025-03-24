import React from 'react';

interface FilterSectionProps {
  title: string;
  options: string[];
  selectedOption: string;
  onChange: (value: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, options, selectedOption, onChange }) => {
  return (
    <section>
      <h1 className="uppercase">{title}</h1>
      <div className="flex flex-wrap gap-5 mt-5">
        {options.map((option, index) => (
          <label
            key={index}
            className="flex items-center space-x-2 border-[#E4DEFE] border rounded-lg h-[48px] px-3 text-sm pl-5 cursor-pointer"
          >
            <input
              type="radio"
              name={title.toLowerCase()}
              value={option}
              checked={selectedOption === option}
              onChange={() => onChange(option)}
              className="w-5 h-5 appearance-none border-2 border-gray-400 rounded-full checked:bg-blue-500 checked:border-blue-500 transition-all duration-200"
            />
            <span className="text-[#282828]">{option}</span>
          </label>
        ))}
      </div>
    </section>
  );
};

export default FilterSection;
