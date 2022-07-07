import { combineReducers } from "redux";
import {addTodo} from './reducer'

export const rootReducers = combineReducers({
  addTodo,
});