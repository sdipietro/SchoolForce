import React from 'react'
import StudentIndex from './student_index'


class StudentsSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: {
                text: '',
                allergies: false,
                disabilities: false,
                medicalConditions: false,
                gender: '',
                grade: ''
            },
            selectedStudents: {}
        }
        this.students = this.props.students;
        this.fetchStudents = this.props.fetchStudents;
        this.query = this.props.query;
        this.filterUpdate = this.filterUpdate.bind(this);
    }

   filterUpdate (field) {
        return e => {
            let newState = Object.assign({}, this.state.query, {[field]: e.target.value});
            this.setState(newState);
        }
    };

    handleCheck (field) {
        return () => {
        let newState = Object.assign({}, this.state.query, {[field]: !this.state.field});
        this.setState(newState);
        }
    }

    componentDidMount() {
        // this.fetchStudents(this.props.match.params.schoolId);
        // optional: change so that it only fetches students of the school + need to change schema
        this.fetchStudents()
    }

    studentFilters (student) {
        
        let result = false;
        
        result = (student.firstName.toLowerCase.indexOf(this.state.query.text) !== -1 || 
                  student.firstName.toLowerCase.indexOf(this.state.query.text) !== -1);
        

        if (this.state.allergies || this.state.disabilities || this.state.medicalConditions) { 
            result = (Boolean(student.allergies.first) === this.state.allergies || 
                    Boolean(student.disabilities.first) === this.state.disabilities ||  
                    Boolean(student.disabilities.first)) === this.state.medicalConditions
        } 
        
        if (this.state.gender) {
        result = student.gender === this.state.gender;
        };
        
        if (this.state.grade) {
        result = student.grade === this.state.grade;
        };

        return result;

    };


    render () {

        let filteredStudents = this.props.students.filter( (student) => {
            return this.studentFilters(student);
        })

        
        return (

        <div className='studentSelect'>
            <div className='studentFilter'>
                <input type="text" value={`${this.state.query.text}`} onChange={this.filterUpdate('text')} /> 
            </div>

            <div className='studentChecks'>
                <input type="checkbox" name='allergies' onChange={this.handleCheck('disabilities')}/>
                <input type="checkbox" name='disabilities' onChange={this.handleCheck('disabilities')}/>
                <input type="checkbox" name='medicalConditions' onChange={this.handleCheck('disabilities')}/>
            </div>

            <div className='studentoptions'>
                <select className='gender' onChange={this.filterUpdate('gender')}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="other">Other</option>
                </select>
                <input type="text" value={`${this.state.query.text}`} onChange={this.filterUpdate('grade')}></input>
            </div>

            <div className='studentIndex'>
                <StudentIndex filteredStudents={filteredStudents} />
            </div>
            

        </div>
        )
    }
}

export default StudentsSearch;