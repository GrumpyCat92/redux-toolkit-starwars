import { configureStore } from "@reduxjs/toolkit";
import factsReducer from "./Slices/FactsSlice";

const store = configureStore({
  reducer: {
    facts: factsReducer,
  },
});

export default store;
