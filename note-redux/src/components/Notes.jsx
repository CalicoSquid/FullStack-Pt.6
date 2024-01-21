import { useDispatch, useSelector } from "react-redux";
import { toggleImportance } from "../reducers/noteReducer";

const Note = ({ note, handleClick }) => {
  return (
    <li key={note.id} className="note-main" onClick={handleClick}>
      {note.content}{" "}
      <strong>{note.important ? "important" : "Not Important"}</strong>
    </li>
  );
};

export default function Notes() {
  const dispatch = useDispatch();
  const notes = useSelector(({ notes, filter }) => {
    return filter === "ALL"
      ? notes
      : filter === "IMPORTANT"
      ? notes.filter((note) => note.important)
      : notes.filter((note) => !note.important);
  });

  const handleToggle = async (note) => {
    const newNote = { ...note, important: !note.important };
    dispatch(toggleImportance(newNote));
  };

  return (
    <ul className="list-main">
      {notes.map((note) => (
        <Note note={note} handleClick={() => handleToggle(note)} />
      ))}
    </ul>
  );
}
