import React from 'react';
import {createReminder} from '../../actions/reminder_actions';

class ReminderForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.parentsArr = this.props.location.state.users.filteredParentsArr;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.authorId = this.props.history.location.state.adminId.userAdminId;

        this.parentIds = [];
        for (let index = 0; index < this.parentsArr.length; index++) {
            let parentId = this.parentsArr[index][0]._id;
            //only add unique parent Ids to parentIds array
            if (!this.parentIds.includes(parentId)) {
                this.parentIds.push(parentId);
            }
        }

    }

    handleSubmit(e) {
        e.preventDefault();
        alert("no message is sent, we are setting up Twilio API");


        createReminder({title: this.state.title, body: this.state.body, authorId: this.authorId, parentId: this.parentIds});

        //redirect to main page
        this.props.history.push("/");

        // TO DO:
        // SMS_util file functions invoked to send texts
      }


    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    render () {
        debugger
        return (
            <div className='reminderForm'>
                <h1>NOTHING HAPPENS YET WHEN YOU SUBMIT THE FORM but it will soon generate a new reeminder and send it via Twilio API</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Title
                        <input type="text" className='title' onChange={this.update('title')} />
                    </label>
                    <label> Body
                        <input type="textarea" className='body' onChange={this.update('body')} />
                    </label>
                    <button type='submit'>Send Reminder</button>
                </form>

                <ul>
                    {this.parentsArr.map(parent => {
                        return <li>
                            <div className="parentName">{parent[0].firstName} {parent[0].lastName}</div>
                            <div className="parentNumber">{"+1" + parent[0].mobile}</div>
                        </li>
                    })}    
                </ul>
            </div> 
        )
    }
}

export default ReminderForm;