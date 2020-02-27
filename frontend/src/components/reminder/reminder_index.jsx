import React from "react";
import "./reminder_index.css";
import { Link } from 'react-router-dom';

class ReminderIndex extends React.Component {
  render() {
        return (
          <div>
            <Link to="/student/new">Create Student</Link>
            <h1>Reminder Index</h1>
          </div>
        );
    }
}

export default ReminderIndex;
