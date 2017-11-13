import { SELECT_PARTICIPANT } from "../actions/types";

const selectedParticipant = (state = 1, action) => {
    switch (action.type) {
        case SELECT_PARTICIPANT:
            return action.id;

        default:
            return state;
    }

};

export default selectedParticipant