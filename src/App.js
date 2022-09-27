import "./styles.css";
import { useSelector } from "react-redux";
import ReduxFACE from "./reduxINTERFACE.js";
import DISPLAYitems from "./dislayITEMS";
export default function App() {
  const cartITEMS = useSelector((state) => state.cart);
  console.log(cartITEMS);

  return (
    <div className="App">
      <DISPLAYitems />

      <ReduxFACE />

      {cartITEMS.value.map((item) => item)}
      <h1>CART ID'S </h1>
    </div>
  );
}
