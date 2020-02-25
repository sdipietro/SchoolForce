import { connect } from 'react-redux';
import StudentsIndex from  './students_index.jsx'
import fetchStudents from '';
import {withRouter} from 'react-router-dom';


const mapStateToProps = ({entities: {students}}) => (
    {
        students: students,
        query: {
            query: '',
            allergies: false,
            disabilitie: false,
            medicalConditions: false,
            gender: '',
            grade: ''
        }
    }
)

const mapDispatchToProps = (fetchStudents) => (
    {
        fetchStudents: fetchStudents
    }
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentsIndex));