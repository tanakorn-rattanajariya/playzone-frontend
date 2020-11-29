import { combineReducers } from "redux";
import component from "./component";
import play from './play'
const reducers = combineReducers({
  component,
  play
});

export default reducers;
