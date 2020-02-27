import React from 'react'
import StudentItem from './student_item'
import {Link} from 'react-router-dom'


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
        this.selectedStudents = this.state.selectedStudents;
        this.query = this.props.query;
        this.filterUpdate = this.filterUpdate.bind(this);
        this.handleStudentCheck = this.handleStudentCheck.bind(this);
    }

   filterUpdate (field) {
        return e => {
            let newState = Object.assign({}, this.state.query, {[field]: e.target.value});
            this.setState(newState);
        }
    };

    handleFilterCheck (field) {
        return () => {
        let newState = Object.assign({}, this.state.query, {[field]: !this.state.field});
        this.setState(newState);
        }
    }

    handleStudentCheck (student) {
       
        if (this.selectedStudents[student.id]) {
            let newState = delete this.selectedStudents;
            newState = Object.assign({}, this.selectedStudents, newState);
            this.setState(newState);
        } else {
            let newState = Object.assign({}, this.selectedStudents, {[student.id]: student});
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
        });

        let filteredUsers = filteredStudents.filter ( student => {
           
            return  [this.props.users[student.parent1Id], this.props.users[student.parent2Id]];
        });

        return ( 
            
            <div className='studentSelect'>
            <div className='studentFilter'>
                <input type="text" value={`${this.state.query.text}`} onChange={this.filterUpdate('text')} /> 
            </div>

            <div className='studentChecks'>
                <input type="checkbox" name='allergies' onChange={this.handleFilterCheck('disabilities')}/>
                <input type="checkbox" name='disabilities' onChange={this.handleFilterCheck('disabilities')}/>
                <input type="checkbox" name='medicalConditions' onChange={this.handleFilterCheck('disabilities')}/>
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
                <ul>
                { filteredStudents.map ( student =>
                    <StudentItem 
                    student={student} 
                    handleStudentCheck={this.handleStudentCheck}
                    key={student.id}
                    />
                    )
                }
                </ul>
            </div>
            <Link to={`/reminders`} users={filteredUsers} />
        </div>
        )
    }
}

export default StudentsSearch;