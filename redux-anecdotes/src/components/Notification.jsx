import { useSelector } from "react-redux";
import messageReducer, { error, success } from "../reducers/messageReducer";

const Notification = () => {

  const notification = useSelector(({ message }) => message);
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginTop: "30px",
    borderRadius: "7px"
  };
  return <div style={style}>{notification}</div>;
};

export default Notification;
