import { createStore } from "redux";
import { rootReducers } from "./reducer/main";

export const store = createStore(rootReducers)