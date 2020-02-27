import react from 'react';

class ReminderForm extends React.Component {

    constructor(props) {

        this.state = {
            title: '',
            body: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
      }

    render () {



        return (
            <div className='reminderForm'>
                <div className='recepients'>Recepients:
                        {this.props.users.flat().map( user => (
                            <>
                            <p>{user.firstName}
                                {user.lastName}
                            </p>
                            </>
                        ))}
                </div>

                <form>
                    <label>Title
                        <input type="text" className='title' onChange={this.update('title')}/>
                    </label>
                    <label> Body
                        <input type="textarea" className='body' onChange={this.update('body')}/>
                    </label>
                    <button type='submit'/>
                </form>

            </div>

        )

    }


}