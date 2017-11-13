import { ACTIVE_FILTER, FILTER_NONE, FILTER_ACTIVE, FILTER_COMPLETED } from '../actions/types'

const activateFilter = (state = FILTER_NONE, action) => {

    switch (action.type) {

        case ACTIVE_FILTER:
            return action.filter;

        default:
            return state;

    }

};

export default activateFilter