import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { addGoal } from '../actions/actions'
import { compose, graphql } from 'react-apollo'
import { GET_ALL_PARTICIPANTS } from './SelectParticipant'
import gql from 'graphql-tag'

let title, text, deadline;

const CREATE_GOAL = gql`
    mutation updateParticipant($participant: ID!, $title: String!, $text: String!, $rangeFrom: DateTime, $rangeTo: DateTime, $deadline: DateTime, $completed: Boolean!) {
        createGoal(
            participantId: $participant,
            title: $title,
            text: $text,
            rangeFrom: $rangeFrom,
            rangeTo: $rangeTo,
            deadline: $deadline,
            completed: $completed
        ) {
            title
            text
            participant {
                surname lastname
            }
        }
    }`;

const withGoalCreation = graphql(CREATE_GOAL, {

    props: ({ ownProps, mutate }) => ({
        submit: ({participant, title, text, rangeFrom, rangeTo, deadline, completed}) => {
            return mutate({
                variables: {
                    participant, title, text, rangeFrom, rangeTo, deadline, completed
                },
                refetchQueries: [{query: GET_ALL_PARTICIPANTS}]
            });
        }
    })

});

class AddGoal extends React.Component {


    render() {
        return (
            <form onSubmit={event => {
                event.preventDefault();
                const goal = {
                    participant: this.props.participant.id,
                    title: title.value,
                    text: text.value,
                    rangeFrom: moment().toISOString(),
                    rangeTo: moment().toISOString(),
                    completed: false,
                    deadline: deadline.value ? moment(deadline.value).toISOString() : moment().toISOString()
                };

                this.props.submit(goal);
                this.props.dispatch(addGoal(goal));
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

export default compose(connect(mapStateToProps), withGoalCreation)(AddGoal)
