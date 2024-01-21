import { useDispatch } from "react-redux";
import filterReducer, { filterChange } from "../reducers/filterReducer";

export default function Filter() {
  const dispatch = useDispatch(filterReducer);

  return (
    <div className="filter">
      <input
        placeholder="filter"
        type="text"
        className="filter-text"
        onChange={(e) => dispatch(filterChange(e.target.value))}
      />
    </div>
  );
}
