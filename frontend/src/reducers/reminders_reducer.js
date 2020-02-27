import { RECEIVE_ALL_REMINDERS } from "../actions/reminder_actions";

const RemindersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_REMINDERS:
      newState.reminders = action.reminders.data;
      return newState;
    default:
      return state;
  }
};

export default RemindersReducer;
