import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";


const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    set(state, action) {
      return action.payload;
    },
    append(state, action) {
      state.push(action.payload)
    },
    update(state, action) {
      const newData = action.payload;
      return state
        .map((a) => (a.id !== newData.id ? a : newData))
        .sort((a, b) => b.votes - a.votes);
    }, 
  }

})


export const {append, update, set} = anecdoteSlice.actions;

export const getAll = () => {
  return async dispatch => {
    const data = await anecdoteService.getAll();
    dispatch(set(data))
  }
}

export const create = (data) => {
  return async dispatch => {
    const newData = await anecdoteService.add(data);
    dispatch(append(newData))
  }
}

export const vote = (data) => {
  return async dispatch => {
    const newData = await anecdoteService.vote(data);
    dispatch(update(newData))
  }
}

export default anecdoteSlice.reducer;
