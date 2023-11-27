import React from "react";

const DescriptionShimmer = () => {
  return (
    <div className="p-2">
      <div className="flex flex-col lg:flex-row p-2 gap-5">
        <div className="w-[95%] lg:w-1/2 h-52 animate-pulse bg-gray-200"></div>
        <div className="w-[95%] lg:w-1/2 h-80 animate-pulse ">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-4"></div>
          <div className="h-40 bg-gray-200 border  mb-2.5"></div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionShimmer;
