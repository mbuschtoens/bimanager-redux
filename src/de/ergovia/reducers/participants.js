import { GET_PARTICIPANTS, SELECT_PARTICIPANT } from "../actions/types";

const selectedParticipant = (state = "", action) => {
    switch (action.type) {
        case GET_PARTICIPANTS:
            return [
                ...action.participants
            ];

        case SELECT_PARTICIPANT:
            return action.id;

        default:
            return state;
    }

};

export default selectedParticipant