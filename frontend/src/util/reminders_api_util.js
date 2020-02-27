import axios from "axios";

export const getReminder = title => {
  return axios.get(`/api/reminders/${title}`);
};

export const getAllReminders = () => {
  return axios.get("/api/reminders");
};

export const createReminder = data => {

  return axios.post("/api/reminders/new", data);

};

export const deleteReminder = id => {
  return axios.delete(`/api/reminders/${id}`);
};
