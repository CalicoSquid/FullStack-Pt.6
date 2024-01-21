import { useDispatch } from "react-redux";
import { createNote } from '../reducers/noteReducer';

export default function CreateNotes() {

    const dispatch = useDispatch();

    const addNote = async (e) => {
        e.preventDefault();
        const content = e.target.note.value
        e.target.note.value = "";
        dispatch(createNote(content));
      };

  return (
    <form onSubmit={(e) => addNote(e)}>
        <input name="note" />
        <button type="submit">Add</button>
      </form>
  )
}
