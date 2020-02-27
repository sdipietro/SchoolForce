import { connect } from 'react-redux';
import StudentsSearch from  './students_search.jsx'
import {fetchAllStudents} from '../../actions/student_actions';
import { fetchAllUsers} from '../../actions/user_actions';
import {withRouter} from 'react-router-dom';


const mapStateToProps = ({students}, {users}) => 
    (
    {
        students: students,
        users: users
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        fetchAllStudents: () => dispatch(fetchAllStudents()),
        fetchAllUsers: () => dispatch(fetchAllUsers())
    }
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentsSearch));