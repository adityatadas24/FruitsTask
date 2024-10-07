import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fruit: [
    { id: 1, select: "selector", fruits: "Mango" },
    { id: 2, select: "selector", fruits: "Grape" },
    { id: 3, select: "selector", fruits: "Banana" },
    { id: 4, select: "selector", fruits: "pineapple" },
    { id: 5, select: "selector", fruits: "Apple" },
    { id: 6, select: "selector", fruits: "Kiwi" },
  ],
  fruit2: [],
  selectedFruits: null,
  searchInput: "",
};

const FruitSlice = createSlice({
  name: "fruit",
  initialState,
  reducers: {
    setSearchInput(state, action) {
      state.searchInput = action.payload;
    },

    selectFruits(state, action) {
      state.selectedFruits = action.payload;
    },

    handleFruits1(state) {
      if (state.selectedFruits) {
        state.fruit = state.fruit.filter(
          (item) => item.id !== state.selectedFruits.id
        );

        state.fruit2.push(state.selectedFruits);
        state.selectedFruits = null;
      }
    },

    handleFruits2(state) {
      if (state.selectedFruits) {
        state.fruit2 = state.fruit2.filter(
          (item) => item.id !== state.selectedFruits.id
        );
        
        state.fruit.push(state.selectedFruits);
        state.selectedFruits = null;
      }
    },
  },
});

export const {
  setSearchInput,
  selectFruits,
  handleFruits1,
  handleFruits2
 
} = FruitSlice.actions;

export default FruitSlice.reducer;
