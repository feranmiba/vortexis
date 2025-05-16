"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

interface SearchFormProps {
  placeholder?: string
  buttonText?: string
  searchPath?: string
  className?: string
  onSearch?: (query: string) => void
}

export default function SearchForm({
  placeholder = "Search...",
  buttonText = "Search",
  searchPath = "/search",
  className = "",
  onSearch,
}: SearchFormProps) {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (onSearch) {
      // Use custom search handler if provided
      onSearch(query)
    } else {
      // Default behavior: navigate to search page
      router.push(`${searchPath}?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`flex gap-3 ${className}`}>
      <div className="relative flex-1">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
          <Search size={20} />
        </div>
        <Input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 py-3 rounded-md"
        />
      </div>
      <Button type="submit">{buttonText}</Button>
    </form>
  )
}

