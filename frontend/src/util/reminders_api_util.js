import axios from "axios";

export const getAllReminders = () => {
  return axios.get("/api/reminders");
};

export const createReminder = data => {
  debugger
  return axios.post("/api/reminders", data);
};