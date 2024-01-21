import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: "Initial Message",
  reducers: {
    success(state, action) {
      return action.payload;
    },
    error(state, action) {
      return action.payload;
    },
    reset(state, action) {
      return "";
    },
  },
});

export const { success, error, reset } = messageSlice.actions;

export const message = (data, timeout) => {
  return (dispatch) => {
    dispatch(success(data));
    setTimeout(() => {
      dispatch(reset());
    }, timeout * 1000);
  };
};
export default messageSlice.reducer;
