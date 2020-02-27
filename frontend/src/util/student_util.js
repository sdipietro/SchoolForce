import axios from "axios";

export const getStudent = id => {
  return axios.get(`/api/students/${id}`);
};

export const getAllStudents = () => {
  return axios.get("/api/students");
};

export const createStudent = data => {
  
  return axios.post("/api/students", data);
};