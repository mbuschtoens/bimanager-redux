import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { addGoal } from '../actions/actions'

let title, text, deadline;

class AddGoal extends React.Component {


    render() {

        return (
            <form onSubmit={event => {
                event.preventDefault();
                this.props.dispatch(addGoal({
                    title: title.value,
                    text: text.value,
                    range: {
                        from: moment(),
                        to: moment()
                    },
                    participant: this.props.participant,
                    deadline: deadline.value ? deadline.value : moment()
                }));
                title.value = '';
                text.value = '';
                deadline.value = '';
            }}>
                <input ref={n => { title = n }} />
                <input ref={n => { text = n }} />
                <input ref={n => { deadline = n }} type="date" defaultValue={moment()}/>
                <button type="submit">Add Goal</button>
            </form>
        )

    }

}

const mapStateToProps = state => ({
    participant: state.selectedParticipant
});

export default connect(mapStateToProps)(AddGoal)
