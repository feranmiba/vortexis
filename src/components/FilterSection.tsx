import React, { useState, useEffect } from "react";

interface FilterSectionProps {
  title: string;
  options: string[];
  selectedOption: string;
  onChange: (value: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  options,
  selectedOption,
  onChange,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <h1 className="uppercase">{title}</h1>

      {isMobile ? (
    
        <select
          className="w-full h-[48px] border-[#E4DEFE] border rounded-lg px-3 text-sm cursor-pointer mt-5"
          value={selectedOption}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">Select {title}</option> {/* Default empty option */}
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
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
      )}

    
      {selectedOption && (
        <button
          onClick={() => onChange("")}
          className="mt-3 text-[#009aff] hover:text-blue-800 text-sm font-semibold cursor-pointer"
        >
          Clear Filter
        </button>
      )}
    </section>
  );
};

export default FilterSection;


