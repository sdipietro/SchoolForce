import axios from "axios";

export const getAllReminders = () => {
  return axios.get("/api/reminders");
};