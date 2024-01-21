import { createSlice } from "@reduxjs/toolkit";
import noteService from "../services/notes";

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    toggle(state, action) {
      const changedNote = action.payload;
      return state.map((note) =>
        note.id !== changedNote.id ? note : changedNote
      );
    },
    appendNote(state, action) {
      state.push(action.payload);
    },
    setNotes(state, action) {
      return action.payload;
    },
  },
});

export const { toggle, appendNote, setNotes } = noteSlice.actions;

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteService.getNotes();
    dispatch(setNotes(notes));
  };
};

export const createNote = (content) => {
  return async (dispatch) => {
    const newNote = await noteService.addNote(content);
    dispatch(appendNote(newNote));
  };
};

export const toggleImportance = (note) => {
  return async (dispatch) => {
    const newNote = await noteService.updateNote(note);
    console.log(newNote);
    dispatch(toggle(newNote));
  };
};

export default noteSlice.reducer;
