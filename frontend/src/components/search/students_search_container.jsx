import { connect } from 'react-redux';
import StudentsSearch from  './students_search.jsx'
import {fetchAllStudents} from '../../actions/student_actions';
import { fetchAllUsers} from '../../actions/user_actions';
import {withRouter} from 'react-router-dom';


const mapStateToProps = (state) => {
    return {
        students: Object.values(state.entities.students),
        users: state.entities.users,
        adminUserId: state.session.user.id 
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        fetchAllStudents: () => dispatch(fetchAllStudents()),
        fetchAllUsers: () => dispatch(fetchAllUsers())
    }
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentsSearch));