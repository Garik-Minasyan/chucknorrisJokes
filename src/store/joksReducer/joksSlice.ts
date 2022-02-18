const { createSlice } = require("@reduxjs/toolkit");

const defaultState = {
  joks: {},
  favoriteList: [],
}

const joksSlice = createSlice({
  name: 'joks',
  initialState: defaultState,
  reducers: {
    addJoke(state: any, action: any) {
      state.joks = action.payload;
    },
    everyThreeSecond(state: any, action: any) {
      state.joks = action.payload;
    },
    addToFavoriteList(state: any, action: any) {
      localStorage.setItem("favoritItem", JSON.stringify([...state.favoriteList, action.payload.value]));
      state.favoriteList = [...state.favoriteList, action.payload.value];
      if (state.favoriteList.length > 10) {
        state.favoriteList.shift();
      }
    },
    deleteAllJoksForLS(state: any) {
      state.favoriteList = [];
    },
    deleteOneJokeFromFL(state: any, action: any) {
      state.favoriteList = state.favoriteList.filter((item: string, index: number) => index !== action.payload)
    }
  }
});

export default joksSlice.reducer;
export const { addJoke, everyThreeSecond, addToFavoriteList, deleteAllJoksForLS, deleteOneJokeFromFL } = joksSlice.actions;
