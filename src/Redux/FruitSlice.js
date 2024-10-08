import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fruit1: [
    { id: 1, text: "Mango" },
    { id: 2, text: "Grape" },
    { id: 3, text: "Banana" },
    { id: 4, text: "Watermelon" },
    { id: 5, text: "Kiwi" },
  ],
  fruit2: [
    { id: 6, text: "Dragon Fruit" },
    { id: 7, text: "Orange" },
  ],
  selectedToFruit1: [],
  selectedToFruit2: [],
  searchInputFruit1: "",
  searchInputFruit2: "",
};

const FruitSlice = createSlice({
  name: "fruit",
  initialState,
  reducers: {
    setSearchInputFruit1(state, action) {
      state.searchInputFruit1 = action.payload;
    },
    setSearchInputFruit2(state, action) {
      state.searchInputFruit2 = action.payload;
    },

    clearSelectedToFruit1(state) {
      state.selectedToFruit1 = [];
    },
    clearSelectedToFruit2(state) {
      state.selectedToFruit2 = [];
    },

    toggleSelectToFruit1(state, action) {
      const selectedFruit = action.payload;
      const exists = state.selectedToFruit1.find(
        (fruit) => fruit.id === selectedFruit.id
      );
      if (exists) {
        state.selectedToFruit1 = state.selectedToFruit1.filter(
          (fruit) => fruit.id !== selectedFruit.id
        );
      } else {
        state.selectedToFruit1.push(selectedFruit);
      }
    },

    toggleSelectToFruit2(state, action) {
      const selectedFruit = action.payload;
      const exists = state.selectedToFruit2.find(
        (fruit) => fruit.id === selectedFruit.id
      );
      if (exists) {
        state.selectedToFruit2 = state.selectedToFruit2.filter(
          (fruit) => fruit.id !== selectedFruit.id
        );
      } else {
        state.selectedToFruit2.push(selectedFruit);
      }
    },

    addFruitsToFruit2(state) {
      state.selectedToFruit1.forEach((selectedFruit) => {
        state.fruit1 = state.fruit1.filter(
          (item) => item.id !== selectedFruit.id
        );
        state.fruit2.push(selectedFruit);
      });
      state.selectedToFruit1 = [];
      state.searchInputFruit1 = ''; 
    },

    addFruitsBackToFruit1(state) {
      state.selectedToFruit2.forEach((selectedFruit) => {
        state.fruit2 = state.fruit2.filter(
          (item) => item.id !== selectedFruit.id
        );
        state.fruit1.push(selectedFruit);
      });
      state.selectedToFruit2 = []; 
      state.searchInputFruit2 = ''; 

    },
  },
});

export const {
  setSearchInputFruit1,
  setSearchInputFruit2,
  toggleSelectToFruit1,
  toggleSelectToFruit2,
  addFruitsToFruit2,
  addFruitsBackToFruit1,
  clearSelectedToFruit1,
  clearSelectedToFruit2,
} = FruitSlice.actions;

export default FruitSlice.reducer;
