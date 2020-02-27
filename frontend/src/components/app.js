import React from "react";
import { AuthRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";



import MainPageContainer from "./main/main_page_container";

import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import CreateStudentFormContainer from "./student/create_student_form_container";

const App = () => (
  <div id="appContainer">
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={MainPageContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/student/new" component={CreateStudentFormContainer} />
    </Switch>

    <footer className="main-page-footer">
      <div> Copyright &copy; 2020 SchoolForce</div>
    </footer>
  </div>
  
);

export default App;