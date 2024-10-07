import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPlayer,
  addPlayerToFinal,
  addPlayerBackToPlayer,
} from "../Redux/PlayerSlice";
import Table from "./Table";
import Search from "./Search";

const Dashboard = () => {
  const dispatch = useDispatch();

  const player = useSelector((state) =>
    state.player.player.filter((item) =>
      item.fruits.toLowerCase().includes(state.player.searchInput.toLowerCase())
    )
  );
  const finalPlayer = useSelector((state) =>
    state.player.finalPlayer.filter((item) =>
      item.fruits.toLowerCase().includes(state.player.searchInput.toLowerCase())
    )
  );

  const selectedPlayer = useSelector((state) => state.player.selectedPlayer);
  return (
    <div className="flex justify-center items-center flex-col gap-8">
        <h1 className="text-xl font-bold">Hi! Select your favourite Fruits...</h1>
      <Search />

      <div className="flex gap-5 max-xl:flex-col">

        <Table table={player} selectPlayer={selectPlayer} />

        <div className="flex justify-center items-center flex-col gap-3 max-xl:flex-row">
          <button
            className={`bg-black p-2 text-white rounded-xl px-6 hover:bg-white hover:text-black hover:border-2 border-black ${
              !selectedPlayer ||
              !player.some((item) => item.id === selectedPlayer?.id)
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={() => dispatch(addPlayerToFinal())}
          >
            LEFT
          </button>

          <button
            className={`bg-black p-2 text-white rounded-xl px-6 hover:bg-white hover:text-black hover:border-2 border-black ${
              !selectedPlayer ||
              !finalPlayer.some((fp) => fp.id === selectedPlayer?.id)
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={() => dispatch(addPlayerBackToPlayer())}
          >
            Right
          </button>
        </div>

        <Table table={finalPlayer} selectPlayer={selectPlayer} />
      </div>
    </div>
  );
};

export default Dashboard;
