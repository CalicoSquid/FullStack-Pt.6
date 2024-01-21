import Notes from "./components/Notes";
import CreateNotes from "./components/CreateNotes";
import VisibilityFilter from "./components/VisibilityFilter";
import { useEffect } from "react";
import { initializeNotes } from "./reducers/noteReducer";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes());
  }, []);

  return (
    <div className="main">
      <CreateNotes />
      <VisibilityFilter />
      <Notes />
    </div>
  );
}
