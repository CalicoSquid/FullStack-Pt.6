import axios from "axios";

const baseURL = "http://localhost:3001/notes";

const getNotes = async () => {
  const response = await axios.get(baseURL);
  return response.data;
};

const addNote = async (content) => {
  const note = { content, important: true };
  const response = await axios.post(baseURL, note);
  return response.data;
};

const updateNote = async (note) => {
  const response = await axios.put(`${baseURL}/${note.id}`, note);
  return response.data;
};

export default { getNotes, addNote, updateNote };
