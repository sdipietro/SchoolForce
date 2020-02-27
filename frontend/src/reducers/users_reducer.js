import {
  RECEIVE_ALL_USERS
} from "../actions/user_actions";

const UsersReducer = (state = { users: {} }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      newState.reminders = action.users.data;
      return newState;
    default:
      return state;
  }
};

export default UsersReducer;
