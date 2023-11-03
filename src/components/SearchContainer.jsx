import React, { useEffect, useState } from "react";
import useSuggestions from "../hooks/useSuggestions";

const SearchContainer = () => {
  const [searchText, setSearchText] = useState();
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
    <>
      <label className="">
        <img src="/search.svg" className="w-6 lg:w-8 " 
        onClick={()=>setSearchBox(!searchBox)}
        />
      </label>
      <input
        type="text"
        placeholder="hidden lg:inline Search for Products,Brands and More"
        className="hidden lg:inline-block w-full p-2  lg:bg-[#f0f5ff] focus:border-transparent outline-none"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={openSearchBox}
        onBlur={closeSearchBox}
      />
      {searchBox && (
        <div className="absolute w-full top-[42px] min-h-40  rounded-md bg-white p-5">
          {suggestionData?.suggestions?.map((suggestion) => (
            <div className="w-full flex gap-2 items-center p-2 cursor-pointer hover:bg-gray-100 rounded-md">
                <img src="/search.svg" className="w-6"/>
              {suggestion.value}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchContainer;
