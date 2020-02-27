import axios from "axios";

export const getReminder = id => {
  return axios.get(`/api/reminders/${id}`);
};

export const getAllReminders = () => {
  return axios.get("/api/reminders");
};

export const creatReminder = data => {
  return axios.post("/api/reminders", data);
};

export const deleteReminder = id => {
  return axios.delete(`/api/reminders/${id}`);
};
