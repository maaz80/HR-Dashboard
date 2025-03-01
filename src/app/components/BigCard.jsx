"use client";

import Image from "next/image";
import React from "react";

const BigCard = ({ title, total, men, women, growth,graph }) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-sm w-full border border-gray-200 flex items-center justify-between h-48">
            <div >
                {/* Title */}
                <h3 className="text-xl font-medium text-gray-900">{title}</h3>

                {/* Total Employees */}
                <p className="text-4xl font-semibold text-gray-900 mt-3">{total}</p>

                {/* Men & Women Stats */}
                <p className="text-sm text-gray-500 mt-3">{men} Men</p>
                <p className="text-sm text-gray-500 mt-1">{women} Women</p>
            </div>

            {/* Growth Chart & Indicator */}
            <div className="mt-3 flex flex-col justify-between items-center">
                {/* Placeholder for Graph */}
                <div className="w-32  rounded-lg relative">
                   <Image src={graph} width={'100%'} alt="Graph"/>
                </div>

                {/* Growth Label */}
                <span className="text-xs bg-red-50  px-2 py-1 rounded-md">
                    +{growth}% Past month
                </span>
            </div>
        </div>
    );
};

export default BigCard;
