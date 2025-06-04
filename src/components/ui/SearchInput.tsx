"use client";

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-md ">
      <FiSearch className="text-gray-500 w-5 h-5" />
      <input
        type="text"
        placeholder="Search Hackathons"
        value={query}
        onChange={handleInputChange}
        className="flex-1 p-2 bg-transparent outline-none text-gray-700"
      />
    </div>
  );
};

export default SearchInput;


