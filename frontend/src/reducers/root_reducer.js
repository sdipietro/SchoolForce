import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import students from "./students_reducer";
import users from "./users_reducer";
import reminders from "./reminders_reducer";


const RootReducer = combineReducers({
  errors,
  session,
  students,
  users,
  reminders
});

export default RootReducer;