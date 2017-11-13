import { GET_PARTICIPANTS, ACTIVE_FILTER, GET_GOALS, ADD_GOAL, TOGGLE_GOAL, REMOVE_GOAL } from './types'

let goalIdSequence = 0;

export const participants = () => ({
   type: GET_PARTICIPANTS
});

export const addFilter = (filter) => ({
   type: ACTIVE_FILTER,
   filter
});

export const goals = () => ({
    type: GET_GOALS
});

export const addGoal = (goal) => ({
    type: ADD_GOAL,
    id: goalIdSequence++,
    ...goal
});

export const toggleGoal = (id) => ({
    type: TOGGLE_GOAL,
    id
});

export const removeGoal = (id) => ({
   type: REMOVE_GOAL,
    id
});