import React from 'react'
import { connect } from 'react-redux'
import { toggleGoal, removeGoal } from "../actions/actions";
import { FILTER_COMPLETED } from '../actions/types'
import GoalsList from '../components/GoalsList'

const getVisibleGoals = (goals = [], filter) => {

    let visibleGoals;

    switch (filter) {

        case FILTER_COMPLETED:
            visibleGoals = goals.filter(g => g.completed);
            break;

        default:
            visibleGoals = goals;
            break;
    }

    return visibleGoals;
};

const mapDispatchToProps = ({
    onClick: toggleGoal,
    onRemove: removeGoal
});

const mapStateToProps = state => ({
    data: getVisibleGoals(state.goals.present, state.filter)
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalsList)
