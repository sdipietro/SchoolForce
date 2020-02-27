import { connect } from "react-redux";
import { createNewStudent } from "../../actions/student_actions";
import { clearErrors } from "../../actions/session_actions";
import CreateStudentForm from "./create_student_form.jsx";
import "./create_student_form.css";

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNewStudent: payload => dispatch(createNewStudent(payload)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateStudentForm);