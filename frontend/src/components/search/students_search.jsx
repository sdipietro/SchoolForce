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
                specialNeeds: false,
                medicalConditions: false,
                gender: '',
                grade: ''
            },
            selectedStudents: {}
        }
        // this.students = this.props.students.students;
        this.fetchAllStudents = this.props.fetchAllStudents;
        this.selectedStudents = this.state.selectedStudents;
        // this.query = this.props.query;
        this.filterUpdate = this.filterUpdate.bind(this);
        this.handleStudentCheck = this.handleStudentCheck.bind(this);
    }

   filterUpdate (field) {
        return e => {
            let newQuery = Object.assign({}, this.state.query, {[field]: e.target.value});
            let newState = Object.assign({}, this.state, {query: newQuery})
            this.setState(newState);
        }
    };

    handleFilterCheck (field) {
        return () => {
            let newQuery = Object.assign({}, this.state.query, { [field]: !this.state.query[field] });
            let newState = Object.assign({}, this.state, { query: newQuery })
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
        this.props.fetchAllStudents();

        // to comment in later to show parents
        // this.props.fetchAllUsers();
    }

    studentFilters (student) {
        let displayStudent = true;
        if (student) {
            displayStudent = (student.firstName.toLowerCase().indexOf(this.state.query.text) !== -1 || 
                    student.lastName.toLowerCase().indexOf(this.state.query.text) !== -1);
        }

        if (this.state.query.allergies || this.state.query.specialNeeds || this.state.query.medicalConditions) {
            displayStudent = false;
            if (this.state.query.allergies && Boolean(student.allergies[0])) {
                displayStudent = true;
            }
            if (this.state.query.specialNeeds && Boolean(student.specialNeeds[0])) {
                displayStudent = true;
            }
            if (this.state.query.medicalConditions && Boolean(student.medicalConditions[0])) {
                displayStudent = true;
            }
        }
        
        if (this.state.query.gender) {
            displayStudent = student.gender === this.state.query.gender;
        };
        
        if (this.state.query.grade) {
            displayStudent = student.grade === this.state.query.grade;
        };
        return displayStudent;

    };


    render () {
        let filteredStudents =[];
        let filteredUsers = [];
        //nonte: need to restructure the students reducer at some point
        debugger
        if (this.props.students.students[0]) {
            filteredStudents = this.props.students.students.filter( (student) => {
                return this.studentFilters(student);
            })
    
            // filteredUsers = filteredStudents.filter ( student => {
            //     return  [this.props.users[student.parent1Id], this.props.users[student.parent2Id]];
            // });
        }
        
        return ( 
            
            <div className='studentSelect'>
            <div className='studentFilter'>Student Name Filter
                <input type="text" value={`${this.state.query.text}`} onChange={this.filterUpdate('text')} /> 
            </div>

            <div className='studentChecks'>
                <label>Include Allergies Search?
                    <input type="checkbox" name='allergies' onChange={this.handleFilterCheck('allergies')}/>
                </label>

                <label>Include Special Needs Search?
                    <input type="checkbox" name='specialNeeds' onChange={this.handleFilterCheck('specialNeeds')}/>
                </label>

                <label>Include Medical Conditions Search?
                    <input type="checkbox" name='medicalConditions' onChange={this.handleFilterCheck('medicalConditions')}/>
                </label>
            </div>

            <div className='studentoptions'>
                <select className='gender' onChange={this.filterUpdate('gender')}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <label>Grade
                    <input type="text" value={`${this.state.query.grade}`} onChange={this.filterUpdate('grade')}></input>
                </label>
            </div>

            <div className='studentIndex'>
                <ul>
                { filteredStudents.map ( student => (
                    <StudentItem 
                    student={student} 
                    handleStudentCheck={this.handleStudentCheck}
                    key={student._id}
                    />)
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