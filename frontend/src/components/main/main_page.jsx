import React from "react";
import "./main_page.css";
import StudentSearchContainer from '../search/students_search_container';
import NotLoggedInMain from './not_logged_in_main';


class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    //ternery controlling what shows when user is logged in or not    
    const toRender = this.props.currentUser ? <StudentSearchContainer /> : <NotLoggedInMain/>;
    
      return (
        <div id="main-page">
          {toRender}
         </div >
      );
  }
}


export default MainPage;
