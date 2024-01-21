import { useDispatch, useSelector } from "react-redux";
import { filterChange } from "../reducers/filterReducer";

export default function VisibilityFilter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const filterSelected = (value) => {
    dispatch(filterChange(value));
  };

  return (
    <div className="radio-container">
      <label className="radio-label">
        All
        <input
          type="radio"
          name="filter"
          className="radio-input"
          onChange={() => filterSelected("ALL")}
        />
        <span className="custom-radio"></span>
      </label>
      <label className="radio-label">
        Important{" "}
        <input
          type="radio"
          name="filter"
          className="radio-input"
          onChange={() => filterSelected("IMPORTANT")}
        />
        <span className="custom-radio"></span>
      </label>
      <label className="radio-label">
        Non-Important
        <input
          type="radio"
          name="filter"
          className="radio-input"
          onChange={() => filterSelected("NONIMPORTANT")}
        />
        <span className="custom-radio"></span>
      </label>
    </div>
  );
}
