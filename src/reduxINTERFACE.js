import "./styles.css";
import data from "./data";
import { useSelector, useStore } from "react-redux";
import { useDispatch } from "react-redux";
import { push } from "./slice";

const ReduxFACE = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <>
      reduxFACE
      <button
        onClick={() => {
          dispatch(push("hello "));
        }}
      >
        append
      </button>
    </>
  );
};

export default ReduxFACE;
