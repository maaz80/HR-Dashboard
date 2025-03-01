"use client";
import { FiHome, FiUsers, FiCalendar, FiBriefcase, FiSettings, FiHelpCircle } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { useState } from "react";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div style={{color:'#686868'}} className="flex bg-gray-50 border-r border-gray-200  min-h-screen">
      {/* Sidebar */}
      <div className={`  p-2 lg:p-5 transition-all duration-300 `}>
        {/* Logo */}
        <div className="flex justify-start lg:justify-center items-center">
          <h1 className={`text-sm lg:text-3xl font-bold text-black `}>WeHR</h1>
        </div>

        {/* Menu */}
        <nav style={{color:'#686868'}} className="mt-6 hidden lg:block">
          <h2 className={` uppercase text-sm mb-2 `}>Main Menu</h2>
          <SidebarItem icon={MdDashboard} text="Dashboard" active={activeItem === "Dashboard"} onClick={() => setActiveItem("Dashboard")} />
          <SidebarItem icon={FaUserTie} text="Recruitment" active={activeItem === "Recruitment"} onClick={() => setActiveItem("Recruitment")} />
          <SidebarItem icon={FiCalendar} text="Schedule" active={activeItem === "Schedule"} onClick={() => setActiveItem("Schedule")} />
          <SidebarItem icon={FiUsers} text="Employee" active={activeItem === "Employee"} onClick={() => setActiveItem("Employee")} />
          <SidebarItem icon={FiBriefcase} text="Department" active={activeItem === "Department"} onClick={() => setActiveItem("Department")} />

          <h2 className={`text-gray-500 uppercase text-sm mt-4 `}>Others</h2>
          <SidebarItem icon={FiHelpCircle} text="Support" active={activeItem === "Support"} onClick={() => setActiveItem("Support")} />
          <SidebarItem icon={FiSettings} text="Settings" active={activeItem === "Settings"} onClick={() => setActiveItem("Settings")} />
        </nav>

        {/* Menu  MObile*/}
        <nav style={{color:'#686868'}} className="mt-6 lg:hidden block">
          <SidebarItem icon={MdDashboard} active={activeItem === "Dashboard"} onClick={() => setActiveItem("Dashboard")} />
          <SidebarItem icon={FaUserTie} active={activeItem === "Recruitment"} onClick={() => setActiveItem("Recruitment")} />
          <SidebarItem icon={FiCalendar} active={activeItem === "Schedule"} onClick={() => setActiveItem("Schedule")} />
          <SidebarItem icon={FiUsers} active={activeItem === "Employee"} onClick={() => setActiveItem("Employee")} />
          <SidebarItem icon={FiBriefcase} active={activeItem === "Department"} onClick={() => setActiveItem("Department")} />
          <SidebarItem icon={FiHelpCircle} active={activeItem === "Support"} onClick={() => setActiveItem("Support")} />
          <SidebarItem icon={FiSettings} active={activeItem === "Settings"} onClick={() => setActiveItem("Settings")} />
        </nav>
      </div>
    </div>
  );
}

function SidebarItem({ icon: Icon, text, active, onClick }) {
  return (
    <div 
      className={`flex items-center p-3 space-x-4 rounded-lg cursor-pointer ${active ? 'text-red-600' : 'hover:text-red-600'}`}
      onClick={onClick}
    >
      <Icon className="text-2xl lg:text-xl" />
      <span className={`text-lg`}>{text}</span>
    </div>
  );
}
