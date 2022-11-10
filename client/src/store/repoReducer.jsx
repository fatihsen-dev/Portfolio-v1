const { createSlice } = require("@reduxjs/toolkit");

const repoReducer = createSlice({
  name: "repoReducer",
  initialState: {
    reposData: false,
  },
  reducers: {
    setReposData: (state, action) => {
      state.reposData = action.payload;
    },
  },
});

export const { setReposData } = repoReducer.actions;
export default repoReducer.reducer;
