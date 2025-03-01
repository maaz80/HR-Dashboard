"use client";

import React from "react";

const ActivityCard = ({ time, date, title, description, totalActivity }) => {
  return (
    <div className="bg-[#12163A] text-white overflow-hidden rounded-xl shadow-md w-full mt-14 border border-gray-700">
      {/* Header */}
      <div className="bg-[#1E2451] px-4 py-2 rounded-md mb-4">
        <h3 className="text-lg font-semibold">Recently Activity</h3>
      </div>

    <div className="px-5 pb-5">
          {/* Activity Details */}
      <p className="text-sm text-gray-400">{time}, {date}</p>
      <h4 className="text-xl font-semibold mt-2">{title}</h4>
      <p className="text-sm text-gray-300 mt-2">{description}</p>

      {/* Footer */}
      <div className="mt-4 flex justify-between items-center">
        <p className="text-sm text-gray-400">Today you made {totalActivity} Activities</p>
        <button className="bg-red-500 px-4 py-2 text-sm font-semibold text-white rounded-md hover:bg-red-600">
          See All Activity
        </button>
      </div>
    </div>
    </div>
  );
};

export default ActivityCard;
