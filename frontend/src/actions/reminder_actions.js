import * as APIUtil from "../util/reminders_api_util";

export const RECEIVE_ALL_REMINDERS = "RECEIVE_ALL_REMINDERS";

export const receiveAllReminders = reminders => ({
  type: RECEIVE_ALL_REMINDERS,
  reminders
});

export const fetchAllReminders = () => dispatch =>
  APIUtil.getAllReminders()
    .then(reminders => dispatch(receiveAllReminders(reminders)))
    .catch(err => console.log(err));
