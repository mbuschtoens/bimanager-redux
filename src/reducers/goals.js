import undo from 'redux-undo'
import { GET_GOALS, ADD_GOAL, TOGGLE_GOAL, REMOVE_GOAL } from '../actions/types'

const goals = (state = [], action) => {

    switch (action.type) {
        case ADD_GOAL:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    text: action.text,
                    deadline: action.deadline,
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