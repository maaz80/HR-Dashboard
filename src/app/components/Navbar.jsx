"use client";
import { useState } from "react";
import { FiSearch, FiBell, FiMessageSquare } from "react-icons/fi";
import Image from "next/image";
import Profile from '../Profile.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center bg-white shadow-sm px-2 lg:px-6 py-3 w-full ">
      {/* Search Bar */}
      <div className="relative w-48 lg:w-72">
        <input
        style={{backgroundColor:'#FAFAFA' , color:'#686868'}}
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <FiSearch className="absolute right-3 top-2 size-5 text-gray-300" />
      </div>

      {/* Icons & Profile */}
      <div className="flex items-center space-x-2 lg:space-x-6">
        {/* Notification Icon */}
        <div className="relative cursor-pointer">
          <FiBell className="text-xl text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">1</span>
        </div>

        {/* Message Icon */}
        <FiMessageSquare className="text-xl text-gray-600 cursor-pointer" />

        {/* User Profile */}
        <div className="relative">
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2">
            <Image
              src={Profile}
              width={32}
              height={32}
              alt="Profile"
              className="rounded-full"
            />
            <span className="text-gray-700 font-medium hidden lg:block">Admirra John</span>
          </button>

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
