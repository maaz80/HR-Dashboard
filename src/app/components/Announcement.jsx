import React from "react";
import { FiClock, FiMoreHorizontal, FiPaperclip } from "react-icons/fi";

const AnnouncementCard = ({ title, time, pinned }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm ">
      <div>
        <h4 className="text-gray-900 font-medium">{title}</h4>
        <p className="text-xs text-gray-500 flex items-center mt-1">
          <FiClock className="mr-1" /> {time}
        </p>
      </div>
      <div className="flex gap-2">
        {pinned && <FiPaperclip className="text-gray-400" />}
        <FiMoreHorizontal className="text-gray-400 cursor-pointer" />
      </div>
    </div>
  );
};

const Announcement = ({ announcements }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full mt-3 border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Announcement</h3>
        <button className="text-sm bg-gray-100 px-3 py-1 rounded-md">
          Today, {new Date().toLocaleDateString()}
        </button>
      </div>

      {/* Announcements List */}
      <div className="mt-4 space-y-2">
        {announcements.map((item, index) => (
          <AnnouncementCard key={index} {...item} />
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 text-center">
        <button className="text-red-500 font-semibold text-sm">See All Announcements</button>
      </div>
    </div>
  );
};

export default Announcement;
