import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import students from "./students_reducer";


const RootReducer = combineReducers({
  errors,
  session,
  students
});

export default RootReducer;