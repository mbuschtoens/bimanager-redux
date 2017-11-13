import { SELECT_PARTICIPANT, ACTIVE_FILTER, ADD_GOAL, TOGGLE_GOAL, REMOVE_GOAL } from './types'

let goalIdSequence = 8;

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

export const toggleGoal = (id) => ({
    type: TOGGLE_GOAL,
    id
});

export const removeGoal = (id) => ({
   type: REMOVE_GOAL,
    id
});