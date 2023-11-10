import React, { useEffect, useState } from "react";
import useSuggestions from "../hooks/useSuggestions";

const SearchContainer = () => {
  const [searchText, setSearchText] = useState("trending");
  const [searchBox, setSearchBox] = useState(false);
  const suggestionData = useSuggestions(searchText);
  const openSearchBox = () => {
    if (searchBox.length < 1) {
      setSearchText("trending");
    }
    setSearchBox(true);
  };
  const closeSearchBox = () => setSearchBox(false);

  return (
    <div className="md:relative border fixed w-full min-h-[32px] bg-white top-[59px] md:top-0 left-0  flex md:rounded-md  items-center lg:px-2   lg:border lg:bg-[#f0f5ff]">
      <label className="px-1">
        <img src="/search.svg" className="w-6 lg:w-8 " 
        onClick={()=>setSearchBox(!searchBox)}
        />
      </label>
      <input
        type="text"
        placeholder="Search for Products,Brands and More"
        className="w-full h-fit p-2  lg:bg-[#f0f5ff] focus:border-transparent outline-none"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={openSearchBox}
        onBlur={closeSearchBox}
      />
      {searchBox && (
        <div className="absolute w-full top-[40px] border-t min-h-screen md:min-h-40  md:rounded-md bg-white ">
          {suggestionData?.suggestions?.map((suggestion) => (
            <div className="w-full flex gap-2 items-center p-2 cursor-pointer hover:bg-gray-100 rounded-md">
                <img src="/search.svg" className="w-6"/>
              {suggestion.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchContainer;