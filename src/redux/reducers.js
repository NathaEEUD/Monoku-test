import { combineReducers } from "redux";
import todos from "./todos/reducers";

const reducers = combineReducers({ todos });

export default reducers;
