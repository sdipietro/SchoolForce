import React from 'react';

class ReminderForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.parentsArr = this.props.location.state.users.filteredParentsArr;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        alert("no message is sent, we are setting up Twilio API");

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