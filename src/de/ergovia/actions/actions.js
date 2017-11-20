import {SELECT_PARTICIPANT, ACTIVE_FILTER, ADD_GOAL, EDIT_GOAL, EDIT_GOAL_TITLE_CHANGED, EDIT_GOAL_TEXT_CHANGED, EDIT_GOAL_RANGE_FROM_CHANGED, EDIT_GOAL_RANGE_TO_CHANGED,
    EDIT_GOAL_COMPLETED_CHANGED, REMOVE_GOAL, GET_GOALS, GET_PARTICIPANTS} from './types'

let goalIdSequence = 8;

export const getParticipants = (participants) => ({
    type: GET_PARTICIPANTS,
    participants
});

export const selectParticipant = (id) => ({
    type: SELECT_PARTICIPANT,
    id
});

export const addFilter = (filter) => ({
    type: ACTIVE_FILTER,
    filter
});

export const addGoal = (goal) => ({
    type: ADD_GOAL,
    id: goalIdSequence++,
    ...goal
});

export const editGoal = (id) => ({
    type: EDIT_GOAL,
    id
});

export const editGoalTitleChanged = (id, title) => ({
    type: EDIT_GOAL_TITLE_CHANGED,
    id, title
});

export const editGoalTextChanged = (id, text) => ({
    type: EDIT_GOAL_TEXT_CHANGED,
    id, text
});

export const editGoalRangeFromChanged = (id, rangeFrom) => ({
    type: EDIT_GOAL_RANGE_FROM_CHANGED,
    id, rangeFrom
});

export const editGoalRangeToChanged = (id, rangeTo) => ({
    type: EDIT_GOAL_RANGE_TO_CHANGED,
    id, rangeTo
});

export const editGoalCompletedChanged = (id, completed) => ({
    type: EDIT_GOAL_COMPLETED_CHANGED,
    id, completed
});

export const removeGoal = (id) => ({
    type: REMOVE_GOAL,
    id
});

export const getGoals = (goals) => ({
    type: GET_GOALS,
    goals
});