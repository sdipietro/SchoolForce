import React from 'react';
import "./student_search_item.css";


const studentItem = props => {
    return (
    <li>
        <div className="checkboxAndName">

            {/* pulled from online experiments w checkbox styling: */}
                <label class="toggle">
                    {/* <input class="toggle__input" type="checkbox" checked> */}
                    <input className="checkboxStudent toggle__input" checked={Boolean(props.selectedStudents[props.student._id])} type="checkbox" name="student.name" onChange={() => props.handleStudentCheck(props.student)} />
                        <span className="toggle__label">
                            <span className="toggle__text"></span>
                        </span>
                </label>




            {/* <input className="checkboxStudent" checked={Boolean(props.selectedStudents[props.student._id])} type="checkbox" name="student.name" onChange={() => props.handleStudentCheck(props.student)}/> */}
            <div className="student-name">
                {props.student.firstName} {props.student.lastName}
            </div>
        </div>
        <div className="nonNameInfo">
            <div className='allergies'>
                <label className="title">Allergies</label>
                 {props.student.allergies.map( (allergy, idx) => (
                <p key={`allergy${idx}`}>{allergy}</p>
            ))}</div>
            <div className='specialNeeds'>
                <label className="title">Special Needs</label>
                 {props.student.specialNeeds.map( (specialNeed, idx) => (
                <p key={`specialNeed${idx}`}>{specialNeed}</p>
            ))}</div>
            <div className='medicalConditions'>
                <label className="title">Medical Conditions</label>
                 {props.student.medicalConditions.map( (medicalCondition, idx) => (
                <p key={`medicalCondition${idx}`}>{medicalCondition}</p>
            ))}</div>
            <div className='gender'>
                    <label className="title"> Gender</label>
                    <p>{props.student.gender}</p>
            </div>
            <div className='grade'>
                <label className="title">Grade</label>
                <p> {props.student.grade}</p>
            </div>
        </div>
    </li>
    )}

export default studentItem;