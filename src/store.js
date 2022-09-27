import { configureStore } from "@reduxjs/toolkit";

import cartREDUCER from "./slice";

export default configureStore({
  reducer: {
    cart: cartREDUCER
  }
});
