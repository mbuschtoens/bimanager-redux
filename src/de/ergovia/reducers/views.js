import { SHOW_PARTICIPANT_LIST, SHOW_CREATE_FORM, SHOW_EDIT_FORM, SHOW_GOAL_LIST } from '../actions/types'

const views = (state = {}, action) => {

    switch (action.type) {
        case SHOW_EDIT_FORM:
            return {
                type: SHOW_EDIT_FORM,
                goal: action.id,
                participant: action.participant
            };

        case SHOW_CREATE_FORM:
            return {
                type: SHOW_CREATE_FORM,
                goal: action.id,
                participant: action.participant
            };


        case SHOW_GOAL_LIST:
            return {
                type: SHOW_GOAL_LIST,
                participant: action.participant
            };

        case SHOW_PARTICIPANT_LIST:
            return {
                type: SHOW_PARTICIPANT_LIST
            };

        default:
            return state;
    }

};


export default views