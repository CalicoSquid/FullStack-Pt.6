import { useEffect } from "react";
import Anecdotes from "./components/Anecdotes";
import Filter from "./components/Filter";
import NewAnecdote from "./components/NewAnecdote";
import Notification from "./components/Notification";
import { useDispatch } from "react-redux";
import { getAll } from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getAll());
  }, []);

  return (
    <div className="main">
      <Filter />
      <Notification />
      <Anecdotes />
      <NewAnecdote />
    </div>
  );
};

export default App;
