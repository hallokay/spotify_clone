// 그냥 리덕스스토어에서는 API호출을 하지 않는 것들만
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',

}

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    }
  }
});

export const { setActiveSong, playPause } = playerSlice.actions;
export default playerSlice.reducer;