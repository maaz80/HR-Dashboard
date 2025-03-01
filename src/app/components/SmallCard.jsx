"use client";

import React from "react";

const SmallCard = ({ title, value, urgent, bgColor, urgentText }) => {
    return (
        <div className={`${bgColor} p-4 rounded-xl  w-full`}>
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <p className="text-3xl font-semibold text-gray-900 mt-2">{value}</p>
            <p className={`text-sm ${urgentText} mt-1`}>{urgent} </p>
        </div>
    );
};

export default SmallCard;
