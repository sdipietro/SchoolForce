import { connect } from 'react-redux';
import StudentsIndex from  './students_search.jsx'
import fetchStudents from '';
import {withRouter} from 'react-router-dom';


const mapStateToProps = ({entities: {students}}) => 
    (
    {
        students: Object.values(students)
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        fetchStudents: () => dispatch(fetchStudents())
    }
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentsIndex));