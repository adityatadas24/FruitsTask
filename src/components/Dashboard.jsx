import React from "react";
import { useSelector } from "react-redux";
import {
  setSearchInputFruit1,
  setSearchInputFruit2,
  toggleSelectToFruit1,
  toggleSelectToFruit2,
  addFruitsToFruit2,
  addFruitsBackToFruit1,
} from "../Redux/FruitSlice";
import Search from "./Search";
import Table from "./Table";

const Dashboard = () => {
  const fruit1 = useSelector((state) =>
    state.fruit.fruit1.filter((item) =>
      item.text
        .toLowerCase()
        .includes(state.fruit.searchInputFruit1.toLowerCase())
    )
  );

  const fruit2 = useSelector((state) =>
    state.fruit.fruit2.filter((item) =>
      item.text
        .toLowerCase()
        .includes(state.fruit.searchInputFruit2.toLowerCase())
    )
  );

  const searchInputFruit1 = useSelector(
    (state) => state.fruit.searchInputFruit1
  );
  
  const searchInputFruit2 = useSelector(
    (state) => state.fruit.searchInputFruit2
  );

  const selectedToFruit1 = useSelector((state) => state.fruit.selectedToFruit1);
  const selectedToFruit2 = useSelector((state) => state.fruit.selectedToFruit2);

  const isFruitSelectedFromFruit1 = (fruit) =>
    selectedToFruit1.some((selected) => selected.id === fruit.id);

  const isFruitSelectedFromFruit2 = (fruit) =>
    selectedToFruit2.some((selected) => selected.id === fruit.id);

  return (
    <div className="flex justify-center items-center text-center flex-col gap-5">
      <h1 className="text-xl font-bold max-sm:text-sm ">
        Select and Transfer your favourite Fruits...
      </h1>

      <div className="flex max-md:flex-col gap-10 max-sm:gap-8">
        <div className=" flex-col shadow-[0_0_10px_rgba(0,0,0,0.5)] px-10 p-2  rounded-xl bg-slate-100 h-80 max-sm:h-64">
          <h1 className="text-center text-2xl font-semibold mb-2 max-sm:text-lg max-sm:mb-1">
            Left Basket
          </h1>

          <Search
            setSearchInput={setSearchInputFruit1}
            searchInputFruit={searchInputFruit1}
          />

          <Table
            fruits={fruit1}
            isFruitSelected={isFruitSelectedFromFruit1}
            toggleFruit={toggleSelectToFruit1}
            addFruit={addFruitsToFruit2}
            selectedToFruits={selectedToFruit1}
            button="Moved To Right"
          />
        </div>

        <div className=" flex-col shadow-[0_0_10px_rgba(0,0,0,0.5)] px-10 p-2  rounded-xl bg-slate-100 h-80 max-sm:h-64">
          <h1 className="text-center text-2xl font-semibold mb-2 max-sm:text-lg max-sm:mb-1">
            Right Basket
          </h1>

          <Search
            setSearchInput={setSearchInputFruit2}
            searchInputFruit={searchInputFruit2}
          />

          <Table
            fruits={fruit2}
            isFruitSelected={isFruitSelectedFromFruit2}
            toggleFruit={toggleSelectToFruit2}
            addFruit={addFruitsBackToFruit1}
            selectedToFruits={selectedToFruit2}
            button="Moved to Left"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
