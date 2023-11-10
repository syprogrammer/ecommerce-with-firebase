import React from "react";
import CardsShimmer from "./CardsShimmer";

const SearchShimmer = () => {
  return (
    <div className="py-2">
      <div className="border p-5 bg-gray-200 animate-pulse md:p-6 dark:border-gray-700"></div>
      <div className="flex">
        <div className="hidden lg:inline-block w-1/2 my-5 bg-gray-200 animate-pulse"></div>
        <CardsShimmer />
      </div>
    </div>
  );
};

export default SearchShimmer;
