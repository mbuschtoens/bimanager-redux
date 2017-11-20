import {EDIT_GOAL} from '../actions/types'

const editGoal = (state = "", action) => {

    switch (action.type) {
        case EDIT_GOAL:
            return action.id;


        default:
            return state;
    }

};


export default editGoal