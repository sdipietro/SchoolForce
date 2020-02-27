import { connect } from "react-redux";
import { fetchAllReminders } from "../../actions/reminder_actions";
import ReminderIndex from "./reminder_index.jsx";

const mapStateToProps = state => {
  return {
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllReminders: () => dispatch(fetchAllReminders())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReminderIndex);
