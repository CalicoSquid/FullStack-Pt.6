import axios from "axios";

const baseUrl = "http://localhost:3001/notes";

export const getNotes = async () => {
  const notes = await axios.get(baseUrl);
  return notes.data;
};

export const createNote = async (data) => {
  const res = await axios.post(baseUrl, data);
  return res.data;
};

export const updateNote = async (data) => {
  const res = await axios.put(`${baseUrl}/${data.id}`, data);
  return res.data;
};
