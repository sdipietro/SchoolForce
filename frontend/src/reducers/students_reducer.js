import {
  RECEIVE_STUDENT,
  RECEIVE_ALL_STUDENTS,
  RECEIVE_NEW_STUDENT
} from "../actions/student_actions";

const StudentsReducer = (
  state = { all: {}, user: {}, new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_STUDENTS:
      newState.all = action.students.data;
      return newState;
    case RECEIVE_STUDENT:
      newState.all = action.student.data;
      return newState;
    case RECEIVE_NEW_STUDENT:
      newState.new = action.student.data;
      return newState;
    default:
      return state;
  }
};

export default StudentsReducer;