import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFruits,
  handleFruits1,
  handleFruits2,
} from "../Redux/FruitSlice";
import Table from "./Table";
import Search from "./Search";

const Dashboard = () => {
  const dispatch = useDispatch();

  const fruitsDatas = useSelector((state) =>
    state.fruit.fruit.filter((item) =>
      item.fruits
        .toLowerCase()
        .includes(state.fruit.searchInput.toLowerCase())
    )
  );

  const fruitsDatas2 = useSelector((state) =>
    state.fruit.fruit2.filter((item) =>
      item.fruits
        .toLowerCase()
        .includes(state.fruit.searchInput.toLowerCase())
    )
  );

  const selectedFruits = useSelector(
    (state) => state.fruit.selectedFruits
  );

  return (
    <div className="flex justify-center items-center flex-col gap-8">
      <h1 className="text-xl font-bold">Hi! Select your favourite Fruits...</h1>
      <Search />

      <div className="flex gap-5 max-xl:flex-col">
        <Table table={fruitsDatas} selectFruits={selectFruits} />

        <div className="flex justify-center items-center flex-col gap-3 max-xl:flex-row">
          <button
            className={`bg-black p-2 text-white rounded-xl px-6 hover:bg-white hover:text-black hover:border-2 border-black ${
              !selectedFruits ||
              !fruitsDatas.some((fruit) => fruit.id === selectedFruits?.id)
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={() => dispatch(handleFruits1())}
          >
            LEFT
          </button>

          <button
            className={`bg-black p-2 text-white rounded-xl px-6 hover:bg-white hover:text-black hover:border-2 border-black ${
              !selectedFruits ||
              !fruitsDatas2.some((fruit) => fruit.id === selectedFruits?.id)
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={() => dispatch(handleFruits2())}
          >
            Right
          </button>
        </div>

        <Table table={fruitsDatas2} selectFruits={selectFruits} />
      </div>
    </div>
  );
};

export default Dashboard;
