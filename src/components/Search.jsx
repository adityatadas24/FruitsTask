import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchInput } from "../Redux/FruitSlice";

const Search = () => {
  const dispatch = useDispatch();
  const searchInput = useSelector((state) => state.fruit.searchInput);

  return (
    <div>
      <input
        className="border-2 border-black p-2 px-4 rounded-lg"
        type="text"
        value={searchInput}
        onChange={(e) => dispatch(setSearchInput(e.target.value))}
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
