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
        this.props.fetchAllStudents();

        // to comment in later to show parents
        // this.props.fetchAllUsers();
    }

    studentFilters (student) {
        
        let result = true;
        debugger
        if (student) {
            debugger
            result = (student.firstName.toLowerCase().indexOf(this.state.query.text) !== -1 || 
                    student.lastName.toLowerCase().indexOf(this.state.query.text) !== -1);
        }
                  debugger
        

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

        let filteredStudents =[];
        let filteredUsers = [];
        //nonte: need to restructure the students reducer at some point
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

                <label>Include Disabilities Search?
                    <input type="checkbox" name='disabilities' onChange={this.handleFilterCheck('disabilities')}/>
                </label>

                <label>Include Medical Conditions Search?
                    <input type="checkbox" name='medicalConditions' onChange={this.handleFilterCheck('medicalConditions')}/>
                </label>
            </div>

            <div className='studentoptions'>
                <select className='gender' onChange={this.filterUpdate('gender')}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
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
                    // key={student._id}
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