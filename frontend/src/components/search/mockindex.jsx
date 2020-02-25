import React from 'react'


class MockIndex extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            query: '',
            allergies: false,
            disabilitie: false,
            medicalConditions: false,
            gender: '',
            grade: ''
        }
    }




    updateSearch (field) {

        return e => {
            this.setState({
               [field]: e.currentTarget.value
        })};

    };

    filter (student) {
        let result = (student.firstName.toLowerCase.indexOf(this.state.query) !== -1 || 
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

    }


    render () {
        let filteredStudents = this.props.students.filter(
            (student) => {
                this.filter(student);
            });

        return (
            filteredStudents
        );

    }
}