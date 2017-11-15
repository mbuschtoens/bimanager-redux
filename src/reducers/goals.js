import undo from 'redux-undo'
import { ADD_GOAL, TOGGLE_GOAL, REMOVE_GOAL, GET_GOALS } from '../actions/types'

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
                    title: action.title,
                    text: action.text,
                    deadline: action.deadline,
                    range: action.range,
                    participant: action.participant,
                    completed: false,
                    archive: false
                }
            ];

        case TOGGLE_GOAL:

            return state.map(s => {

                if (s.id !== action.id) {
                    return s
                }

                return {
                    ...s,
                    completed: !s.completed
                };

            });


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

        default:
            return state;
    }

};

export default undo(goals)