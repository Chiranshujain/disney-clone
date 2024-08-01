import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
  pixar:null,
  disney: null,
  marvel: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
      state.pixar = action.payload.pixar;
      state.disney = action.payload.disney;
      state.marvel = action.payload.marvel;
    
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;
export const selectPixar = (state) => state.movie.pixar;
export const selectDisney= (state) => state.movie.disney;
export const selectMarvel= (state) => state.movie.marvel;

export const movieReducer = movieSlice.reducer;