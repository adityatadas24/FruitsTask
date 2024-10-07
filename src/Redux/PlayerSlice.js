import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  player: [
    { id: 1, select: "selector", fruits: "Mango" },
    { id: 2, select: "selector", fruits: "Grape" },
    { id: 3, select: "selector", fruits: "Banana" },
    { id: 4, select: "selector", fruits: "pineapple" },
    { id: 5, select: "selector", fruits: "Apple" },
    { id: 6, select: "selector", fruits: "Kiwi" },
  ],
  finalPlayer: [],
  selectedPlayer: null,
  searchInput: "",
};

const PlayerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setSearchInput(state, action) {
      state.searchInput = action.payload;
    },

    selectPlayer(state, action) {
      state.selectedPlayer = action.payload;
    },

    addPlayerToFinal(state) {
      if (state.selectedPlayer) {
        state.player = state.player.filter(
          (item) => item.id !== state.selectedPlayer.id
        );

        state.finalPlayer.push(state.selectedPlayer);
        state.selectedPlayer = null;
      }
    },

    addPlayerBackToPlayer(state) {
      if (state.selectedPlayer) {
        state.finalPlayer = state.finalPlayer.filter(
          (item) => item.id !== state.selectedPlayer.id
        );
        
        state.player.push(state.selectedPlayer);
        state.selectedPlayer = null;
      }
    },
  },
});

export const {
  setSearchInput,
  selectPlayer,
  addPlayerToFinal,
  addPlayerBackToPlayer,
} = PlayerSlice.actions;

export default PlayerSlice.reducer;
