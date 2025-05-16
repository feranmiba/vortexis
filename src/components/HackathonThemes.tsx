import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
} from "../components/ui/Table";
import { Checkbox } from "../components/ui/Checkbox";
import { MoreVertical } from "lucide-react";
import SearchForm from "./Search-form";
interface ThemeData {
  theme: string;
  hackathons: number;
  totalPrizes: string;
}

interface ThemesTableProps {
  themes?: ThemeData[];
}

const defaultThemes: ThemeData[] = [
  { theme: "Beginner Friendly", hackathons: 50, totalPrizes: "$888,000" },
  { theme: "Machine Learning/AI", hackathons: 49, totalPrizes: "$888,000" },
  { theme: "Social Good", hackathons: 32, totalPrizes: "$888,000" },
  { theme: "Open Ended", hackathons: 28, totalPrizes: "$888,000" },
  { theme: "Education", hackathons: 20, totalPrizes: "$888,000" },
  { theme: "Health", hackathons: 18, totalPrizes: "$888,000" },
  { theme: "Web", hackathons: 20, totalPrizes: "$889,000" },
  { theme: "Low/No Code", hackathons: 22, totalPrizes: "$888,000" },
  { theme: "Blockchain", hackathons: 15, totalPrizes: "$888,000" },
  { theme: "Design", hackathons: 10, totalPrizes: "$889,000" },
  { theme: "Productivity", hackathons: 9, totalPrizes: "$888,000" },
  { theme: "Fintech", hackathons: 8, totalPrizes: "$888,000" },
  { theme: "Enterprise", hackathons: 7, totalPrizes: "$69,000" },
  { theme: "IoT", hackathons: 5, totalPrizes: "$55,000" },
];

export const HackathonThemes: React.FC<ThemesTableProps> = ({
  themes = defaultThemes,
}) => {
  return (
    <>
      <div className="text-center mb-6 bg-white ">
        <h2 className="text-4xl font-bold text-[#4D4D4D]">
          Top Hackathons Themes
        </h2>
      </div>
      <div className="py-12 bg-[#F5F7FA] ">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {themes.length > 0 ? (
            <div className=" rounded-md shadow overflow-hidden ">
              <Table className="">
                <TableHead>
                  <TableRow>
                    <TableHeader></TableHeader>
                    <TableHeader>Theme</TableHeader>
                    <TableHeader>Hackathons</TableHeader>
                    <TableHeader>Total prizes</TableHeader>
                    <TableHeader></TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {themes.map((theme, index) => {
                    const { theme: themeName, hackathons, totalPrizes } = theme;

                    return (
                      <TableRow key={index}>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>{themeName}</TableCell>
                        <TableCell>{hackathons}</TableCell>
                        <TableCell>{totalPrizes}</TableCell>
                        <TableCell>
                          <button className="p-2 lg:mr-[-4rem] hover:bg-gray-100 rounded-full">
                            <MoreVertical className="h-5 w-5 text-gray-500" />
                          </button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              No theme data available
            </div>
          )}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <h2 className="lg:text-5xl text-2xl font-bold text-center text-[#263238]">
            Hackathons are the news of
            <br />
            innovation
          </h2>
        </div>
        <div className=" mt-10 px-4 ">
          <SearchForm />
        </div>
      </div>
    </>
  );
};

export default HackathonThemes;
