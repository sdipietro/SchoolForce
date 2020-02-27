import { combineReducers } from "redux";
import students from "./students_reducer";
import users from "./users_reducer";
import reminders from "./reminders_reducer";

const EntitiesReducer = combineReducers({
  students,
  users,
  reminders
});

export default EntitiesReducer;
