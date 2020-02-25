import React from 'react'


class StudentsIndex extends React.Component {

    constructor(props) {
        super(props);
        this.students = this.props.students;
        this.fetchStudents = this.props.fetchStudents;
        this.query = this.props.query;
    }


    componentDidMount() {
        this.fetchPosts(this.props.match.params.schoolId);
    }

    filter () {
        
        let result = (
            student.firstName.toLowerCase.indexOf(this.state.query) !== -1 || 
            student.firstName.toLowerCase.indexOf(this.state.query) !== -1
        );

        if (this.state.allergies || this.state.disabilities || this.state.medicalConditions) { 
            result = (Boolean(student.allergies.first) === this.state.allergies || 
                    Boolean(student.disabilities.first) === this.state.disabilities ||  
                    Boolean(student.disabilities.first)) === this.state.medicalConditions
        };

        if (this.state.gender) {
        result = student.gender === this.state.gender;
        }

        if (this.state.grade) {
        result = student.grade === this.state.grade;
        }

        return result;

    };


    render () {

        
        return {


        }
    }
}