"use client";

import React from "react";

const ScheduleCard = ({ date, priorityTasks, otherTasks }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md w-full mt-3 border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Upcoming Schedule</h3>
        <button className="bg-gray-100 px-4 py-1 text-sm rounded-md text-gray-600 border">
          {date}
        </button>
      </div>

      {/* Priority Section */}
      <h4 className="text-md font-semibold text-gray-700">Priority</h4>
      {priorityTasks.map((task, index) => (
        <div key={index} className="bg-gray-100 p-3 rounded-lg mt-2 flex justify-between">
          <div>
            <p className="text-gray-800 font-medium">{task.title}</p>
            <p className="text-sm text-gray-500">{task.time}</p>
          </div>
          <span className="text-gray-400">⋮</span>
        </div>
      ))}

      {/* Other Section */}
      <h4 className="text-md font-semibold text-gray-700 mt-4">Other</h4>
      {otherTasks.map((task, index) => (
        <div key={index} className="bg-gray-100 p-3 rounded-lg mt-2 flex justify-between">
          <div>
            <p className="text-gray-800 font-medium">{task.title}</p>
            <p className="text-sm text-gray-500">{task.time}</p>
          </div>
          <span className="text-gray-400">⋮</span>
        </div>
      ))}

      {/* Footer Button */}
      <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600">
        Create a New Schedule
      </button>
    </div>
  );
};

export default ScheduleCard;
