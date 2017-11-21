import {
    ADD_GOAL,
    EDIT_GOAL_COMPLETED_CHANGED,
    EDIT_GOAL_RANGE_FROM_CHANGED,
    EDIT_GOAL_RANGE_TO_CHANGED,
    EDIT_GOAL_TEXT_CHANGED,
    EDIT_GOAL_TITLE_CHANGED,
    GET_GOALS,
    REMOVE_GOAL
} from '../actions/types'

const goals = (state = [], action) => {

    switch (action.type) {
        case GET_GOALS:
            return [
                ...action.goals
            ];

        case ADD_GOAL:
            return [
                ...state,
                {
                    id: action.id,
                    rangeFrom: action.rangeFrom,
                    rangeTo: action.rangeTo,
                    participant: action.participant,
                    completed: action.completed,
                    archive: action.archive
                }
            ];

        case REMOVE_GOAL:

            return state.map(s => {

                if (s.id !== action.id) {
                    return s;
                }

                return {
                    ...s,
                    archive: !s.archive
                }

            });

        case EDIT_GOAL_TITLE_CHANGED:

            return state.map(s => {

                if (s.id !== action.id) {
                    return s;
                }

                return {
                    ...s,
                    title: action.title
                }

            });

        case EDIT_GOAL_TEXT_CHANGED:

            return state.map(s => {

                if (s.id !== action.id) {
                    return s;
                }

                return {
                    ...s,
                    text: action.text
                }

            });


        case EDIT_GOAL_RANGE_FROM_CHANGED:

            return state.map(s => {

                if (s.id !== action.id) {
                    return s;
                }

                return {
                    ...s,
                    rangeFrom: action.rangeFrom
                }

            });


        case EDIT_GOAL_RANGE_TO_CHANGED:

            return state.map(s => {

                if (s.id !== action.id) {
                    return s;
                }

                return {
                    ...s,
                    rangeTo: action.rangeTo
                }

            });

        case EDIT_GOAL_COMPLETED_CHANGED:

            return state.map(s => {

                if (s.id !== action.id) {
                    return s;
                }

                return {
                    ...s,
                    completed: !s.completed
                }

            });

        default:
            return state;
    }

};

export default goals