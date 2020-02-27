import React from "react";
import { withRouter } from "react-router-dom";

class CreateStudentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      parentId: [this.props.currentUser.id],
      allergies: [],
      specialNeeds: ["wheelchair"],
      medicalConditions: ["epilepsy"],
      gender: "male",
      dateOfBirth: new Date(),
      startDate: new Date(),
      grade: "5",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  addData(field) {
    debugger
    return e =>
      this.setState({
        [field]: this.state.field << e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let student = Object.assign({}, this.state);

    return this.props.createNewStudent(student);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="student-form-page">
        <div className="student-form-container">
          <form onSubmit={this.handleSubmit} className="student-form-box">
            <div className="student-form-title">Create Student</div>
            <div className="student-form">
              <label>
                <input
                  type="text"
                  value={this.state.firstName}
                  onChange={this.update("firstName")}
                  placeholder="First Name"
                  className="student-form-input"
                />
              </label>
              <label>
                <input
                  type="text"
                  value={this.state.lastName}
                  onChange={this.update("lastName")}
                  placeholder="Last Name"
                  className="student-form-input"
                />
              </label>
              <label>
                <input
                  type="text"
                  value={this.state.allergies}
                  onChange={this.addData("allergies")}
                  placeholder="Allergies"
                  className="student-form-input"
                />
              </label>
              <div className="student-form-error-messages">
                {this.renderErrors()}
              </div>
              <input
                type="submit"
                value="Create Student"
                className="student-form-submit"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateStudentForm);