import { CHANGE_DATE_RANGE_START, CHANGE_DATE_RANGE_END } from '../actions/types'
import moment from 'moment'
const fmt = 'YYYY-MM-DD';

const range = (state = {
    start: moment().startOf('month').format(fmt),
    end: moment().endOf('month').format(fmt)
}, action) => {

    switch (action.type) {

        case CHANGE_DATE_RANGE_START:
            return {
                ...state,
                start: action.start
            };

        case CHANGE_DATE_RANGE_END:
            return {
                ...state,
                end: action.end
            };

        default:
            return state;

    }

};

export default range