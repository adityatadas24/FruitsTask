import React from "react";
import { useDispatch } from "react-redux";

const Table = ({
  fruits,
  isFruitSelected,
  toggleFruit,
  addFruit,
  selectedToFruits,
  button,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="mt-3 flex-col">
      <ul>
        {fruits.map((item) => (
          <li
            className="flex mt-1 gap-6 max-sm:mt-[2px] max-sm:text-sm"
            key={item.id}
          >
            <input
              type="checkbox"
              checked={isFruitSelected(item)}
              onChange={() => dispatch(toggleFruit(item))}
            />
            <p>{item.text}</p>
          </li>
        ))}
      </ul>

      <button
        className={` bg-black p-2 text-white rounded-xl px-6 hover:bg-white hover:text-black hover:border-2 border-black mt-4 max-sm:mt-2 max-sm:px-3 max-sm:text-sm ${
          selectedToFruits.length === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => dispatch(addFruit())}
      >
        {button}
      </button>
    </div>
  );
};

export default Table;
