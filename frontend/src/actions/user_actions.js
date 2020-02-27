import * as APIUtil from "../util/users_api_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const fetchAllUsers = () => dispatch =>
  APIUtil.getAllUsers()
    .then(users => dispatch(receiveAllUsers(users)))
    .catch(err => console.log(err));
