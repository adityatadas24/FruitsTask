import React from "react";
import { useDispatch } from "react-redux";

const Search = ({ searchInputFruit, setSearchInput }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        className="border-[1px] border-black p-2 pl-2 px-4 rounded-lg max-sm:p-1"
        type="text"
        value={searchInputFruit}
        onChange={(e) => dispatch(setSearchInput(e.target.value))}
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
