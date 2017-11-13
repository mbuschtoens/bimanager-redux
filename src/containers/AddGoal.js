import React from 'react'
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
                    deadline: deadline.value
                }));
                title.value = '';
                text.value = '';
                deadline.value = '';
            }}>
                <input ref={n => { title = n }} />
                <input ref={n => { text = n }} />
                <input ref={n => { deadline = n }} type="date"/>
                <button type="submit">Ziel hinzufügen</button>
            </form>
        )

    }

}

export default connect()(AddGoal)
