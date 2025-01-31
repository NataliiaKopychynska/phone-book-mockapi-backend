import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: "", // використовуємо однакову назву для state та initialState
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filters = action.payload; // використовуємо "filter" замість "name"
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
