import React from "react";
// import { DayeBisoyData } from "@/app/data/data";

const Tally = ({ data }) => {
  const getBackgroundColor = (percentage) => {
    if (percentage >= 80) {
      return "bg-teal-500"; // Greenish Teal for 80% or higher
    } else if (percentage >= 50) {
      return "bg-amber-500"; // Yellow for 50% to 79%
    } else {
      return "bg-red-500"; // Red for less than 50%
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white border shadow-lg rounded-lg p-4 w-full">
          <h2 className="text-center text-xl font-bold mb-4">{data.title}</h2>

          <div className="space-y-3 p-4">
            {data.data.map((item, index) => {
              const percentage = (item.value / item.max) * 100; // Calculate progress percentage
              return (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs sm:text-sm font-medium">
                      {item.label}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold">
                      {item.value}
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className={`h-4 rounded-full ${getBackgroundColor(
                        percentage
                      )}`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tally;
