import {
  RECEIVE_STUDENT,
  RECEIVE_ALL_STUDENTS,
  RECEIVE_NEW_STUDENT
} from "../actions/student_actions";

const StudentsReducer = (
  state = {},
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_STUDENTS:
      return Object.assign({}, state, action.students.data)
    case RECEIVE_STUDENT:
      newState.students = action.student.data;
      return newState;
    case RECEIVE_NEW_STUDENT:
      newState.students = action.student.data;
      return newState;
    default:
      return state;
  }
};

export default StudentsReducer;
