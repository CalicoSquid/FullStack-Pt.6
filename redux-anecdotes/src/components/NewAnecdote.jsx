import { useDispatch } from "react-redux";
import anecdoteReducer, { create } from "../reducers/anecdoteReducer";

export default function NewAnecdote() {
  const dispatch = useDispatch(anecdoteReducer);

  const addAnecdote = async (e) => {
    e.preventDefault();
    const content = e.target.text.value;
    e.target.text.value = "";
    dispatch(create(content));
  };

  return (
    <form onSubmit={(e) => addAnecdote(e)}>
      <h2>Create New</h2>
      <div>
        <input name="text" />
      </div>
      <button type="submit">create</button>
    </form>
  );
}
