import { FILTER_COMPLETED, FILTER_UNCOMPLETED, FILTER_NONE } from "../actions/types";

export default (goals, activeFilter) => {

    switch (activeFilter) {
        case FILTER_COMPLETED:
            return goals.filter(g => g.completed);

        case FILTER_UNCOMPLETED:
            return goals.filter(g => !g.completed);

        case FILTER_NONE:
            return goals;

        default:
            return goals;
    }

};