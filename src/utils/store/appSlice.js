import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSideNavOpen: true,
    sideNavType: 'normal' // mini or none
  },
  reducers: {
    toggleSideNav: (state) => {
      state.isSideNavOpen = !state.isSideNavOpen;
    },
    changeSideNavType: (state, payload) => {
        state.sideNavType = payload.payload;
    }
  },
});

export const { toggleSideNav, changeSideNavType } = appSlice.actions;

export default appSlice.reducer;
