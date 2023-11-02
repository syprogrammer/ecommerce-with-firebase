import React from "react";

const SortAndFilter = () => {
  return (
    <div className="flex bg-white p-2 lg:hidden">
      <div className="w-1/2 flex justify-center items-center gap-1 border-r">
        <img src="/sort.png" className="w-6 h-4"/>
        <span className="font-medium">Sort</span>
      </div>
      <div className="w-1/2 flex justify-center items-center gap-1 ">
        <img src="/filter.png" className="w-6 h-4"/>
        <span className="font-medium">Filter</span>
      </div>
    </div>
  );
};

export default SortAndFilter;
