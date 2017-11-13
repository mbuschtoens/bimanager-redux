import React from 'react'
import { connect } from 'react-redux'
import { toggleGoal, removeGoal } from "../actions/actions";
import { FILTER_NONE, FILTER_COMPLETED } from '../actions/types'
import GoalsList from '../components/GoalsList'

class VisibleGoals extends React.Component {

    render() {
        return <GoalsList data={this.props.data} onClick={this.props.onGoalClick} onRemove={this.props.onGoalRemove} />
    }

}

const filterParticipant = (goals, participant) => {
    return goals.filter(g => parseInt(g.participant, 10) === parseInt(participant, 10))
};

const getVisibleGoals = (goals, filter, participant) => {

    let visibleGoals = [];
    switch (filter) {
        case FILTER_NONE:
            visibleGoals = filterParticipant(goals, participant);
            break;

        case FILTER_COMPLETED:
            visibleGoals = filterParticipant(goals, participant).filter(g => g.completed);
            break;

        default:
            visibleGoals = filterParticipant(goals, participant);
            break;
    }

    return visibleGoals;
};

const mapDispatchToProps = ({
    onGoalClick: toggleGoal,
    onGoalRemove: removeGoal
});

const mapStateToProps = state => ({
    data: getVisibleGoals(state.goals.present, state.filter, state.selectedParticipant)
});

export default connect(mapStateToProps, mapDispatchToProps)(VisibleGoals)