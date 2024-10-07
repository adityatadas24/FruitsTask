import { configureStore } from "@reduxjs/toolkit";
import fruitReducer from "./FruitSlice";

const store = configureStore({
  reducer: {
    fruit: fruitReducer,
  },
});

export default store;
