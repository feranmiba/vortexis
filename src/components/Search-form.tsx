"use client";

import type React from "react";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import Search from "@/public/assets/Search.svg";
import Image from "next/image";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="relative flex-1">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <Image src={Search} alt="Search" width={20} height={20} />
        </div>
        <Input
          type="search"
          placeholder="Find your next hackathon"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 py-3 rounded-md"
        />
      </div>
      <Button type="submit">Search Hackathons</Button>
    </form>
  );
}
