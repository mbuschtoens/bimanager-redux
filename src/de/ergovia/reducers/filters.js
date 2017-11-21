import { ACTIVE_FILTER, FILTER_NONE } from '../actions/types'

const activeFilter = (state = FILTER_NONE, action) => {

    switch (action.type) {

        case ACTIVE_FILTER:
            return action.filter;

        default:
            return state;

    }

};

export default activeFilter