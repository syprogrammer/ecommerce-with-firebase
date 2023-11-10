import React from "react";

const SortAndFilter = () => {
  return (
    <div className="flex bg-white py-3 lg:hidden border">
      <div className="w-1/2 flex justify-center items-center gap-1 border-r">
        <img src="/sort.png" className="w-6 "/>
        <span className="font-medium">Sort</span>
      </div>
      <div className="w-1/2 flex justify-center items-center gap-1 ">
        <img src="/filter.png" className="w-6 "/>
        <span className="font-medium">Filter</span>
      </div>
    </div>
  );
};

export default SortAndFilter;
