import React from 'react';

const studentIndex = props => (

    <li>
        <input type="checkbox" name="student.name" onClick={() => props.handleStudentCheck(props.student)}/>
        <div className="student-name">
            <p>{props.student.firstName}</p>
            <p>{props.student.lastName}</p>
        </div>
        <div className='allergies'>{props.student.allergies.map( allergy => (
            <p>{allergy}</p>
        ))}</div>
         <div className='disabilities'>{props.student.disabilities.map( disability => (
            <p>{disability}</p>
        ))}</div>
         <div className='medicalConditions'>{props.student.allergies.map( medicalCondition => (
            <p>{medicalCondition}</p>
        ))}</div>
        <div className='gender'><p>{props.student.gender}</p></div>
        <div className='grade'><p>{props.student.grade}</p></div>
    </li>
)

export default studentIndex;