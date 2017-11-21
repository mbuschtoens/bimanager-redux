import {showGoalList, editGoalCompletedChanged, editGoalRangeFromChanged, editGoalRangeToChanged, editGoalTextChanged, editGoalTitleChanged} from "../actions/actions";
import {connect} from 'react-redux'
import {compose, graphql} from 'react-apollo';
import gql from 'graphql-tag';

import { GET_GOALS } from '../containers/VisibleGoals';
import { GET_PARTICIPANTS } from "./VisibleParticipants";
import GoalForm from "../components/GoalForm";


const CREATE_GOAL = gql`
    mutation updateGoal($id: ID!, $title: String!, $text: String!, $rangeFrom: DateTime, $rangeTo: DateTime, $completed: Boolean!) {
        updateGoal(
            id: $id,
            title: $title,
            text: $text,
            rangeFrom: $rangeFrom,
            rangeTo: $rangeTo,
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

    props: ({ownProps, mutate}) => ({
        submit: ({id, title, text, rangeFrom, rangeTo, completed, participant}) => {
            console.log(ownProps.range.start);
            console.log(ownProps.range.end);
            return mutate({
                variables: {
                    id, title, text, rangeFrom, rangeTo, completed, participant
                },
                refetchQueries: [
                    {query: GET_GOALS, variables: { participant, start: ownProps.range.start, end: ownProps.range.end }},
                    {query: GET_PARTICIPANTS, variables: { start: ownProps.range.start, end: ownProps.range.end }}
                ]
            });
        }
    })

});


const mapDispatchToProps = ({
    onClose: showGoalList,
    onCreate: showGoalList,
    changeTitle: editGoalTitleChanged,
    changeText: editGoalTextChanged,
    changeRangeFrom: editGoalRangeFromChanged,
    changeRangeTo: editGoalRangeToChanged,
    changeCompleted: editGoalCompletedChanged
});

const mapStateTopProps = state => {
    console.log(state);
    return ({
        participant: state.views.participant,
        goal: state.goals.filter(g => g.id === state.views.goal)[0],
        range: state.range
    });
};

export default compose(connect(mapStateTopProps, mapDispatchToProps), withGoalCreation)(GoalForm)
