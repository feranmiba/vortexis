"use client";
import Deliverables from "@/components/judgeReview/deliverables";
import Vote from "@/components/judgeReview/vote";
import { useState } from "react";

const tabs = [
  {
    name: "Project Details",
    tab_no: 1,
  },
  {
    name: "Deliverables",
    tab_no: 2,
  },
  {
    name: "Team Info",
    tab_no: 3,
  },
  {
    name: "Evaluation",
    tab_no: 4,
  },
];

export default function SubmissionReviewPage({
  params,
}: {
  params: { id: string };
}) {
  //   const submissionId = params.id;

  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div>
        <h1 className="text-2xl mb-2 font-semibold text-[#605DEC]">
          Submission Review
        </h1>
        <p>Reviewing submissions</p>
      </div>

      <div className="bg-[#FFFFFF] my-5  shadow-md rounded-md border border-[#E4E4E4]">
        <div className="md:w-[55%] px-3 py-8">
          <div className="flex mb-6 -mt-1.5 cursor-pointer gap-4 ">
            {tabs.map((tab, i) => {
              return (
                <div key={i} onClick={() => setActiveTab(tab.tab_no)}>
                  <p
                    className={`text-center px-7 py-2 ${
                      activeTab === i + 1
                        ? "bg-[#605DEC] text-white"
                        : "bg-[#F4F3FE] text-[#C5C0DB]"
                    } transition-all duration-300 rounded-md `}
                  >
                    {tab.name}
                  </p>
                </div>
              );
            })}
          </div>

          {activeTab === 1 && <Vote />}
          {activeTab === 2 && <Deliverables />}
        </div>
      </div>
    </div>
  );
}
