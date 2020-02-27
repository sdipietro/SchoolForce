import React from 'react';

const studentItem = props => {
    return (
    <li key={props.student._id}>
        <input type="checkbox" name="student.name" onClick={() => props.handleStudentCheck(props.student)}/>
        <div className="student-name">
            <p>{props.student.firstName}</p>
            <p>{props.student.lastName}</p>
        </div>
        <div className='allergies'>{props.student.allergies.map( allergy => (
            <p>{allergy}</p>
        ))}</div>
         <div className='specialNeeds'>{props.student.specialNeeds.map( specialNeed => (
            <p>{specialNeed}</p>
        ))}</div>
         <div className='medicalConditions'>{props.student.medicalConditions.map( medicalCondition => (
            <p>{medicalCondition}</p>
        ))}</div>
        <div className='gender'><p>{props.student.gender}</p></div>
        <div className='grade'><p>{props.student.grade}</p></div>
    </li>
    )}

export default studentItem;