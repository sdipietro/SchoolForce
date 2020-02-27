import { connect } from 'react-redux';
import StudentsIndex from  './students_search.jsx'
import fetchStudents from '';
import {withRouter} from 'react-router-dom';


const mapStateToProps = ({entities: {students}}, {entities: {users}}) => 
    (
    {
        students: Object.values(students),
        users: users
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        fetchStudents: () => dispatch(fetchStudents())
    }
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentsIndex));