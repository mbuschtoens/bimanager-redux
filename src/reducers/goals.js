import undo from 'redux-undo'
import moment from 'moment'
import { ADD_GOAL, TOGGLE_GOAL, REMOVE_GOAL } from '../actions/types'

const allGoals = [
    {id:1, participantId: 1, title: 'one', text: 'first goal', range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, deadline: moment('2017-10-31')},
    {id:2, participantId: 1, title: 'two', text: 'second goal', range: {from: moment('2017-02-01'), to: moment('2018-04-30')}, deadline: moment('2017-10-31')},
    {id:3, participantId: 1, title: 'three', text: 'third goal', range: {from: moment('2017-09-01'), to: moment('2018-08-31')}, deadline: moment('2017-10-31')},
    {id:4, participantId: 2, title: 'four', text: 'fourth goal', range: {from: moment('2017-05-31'), to: moment('2017-10-31')}, deadline: moment('2017-10-10')},
    {id:5, participantId: 2, title: 'five', text: 'fifth goal', range: {from: moment('2018-01-01'), to: moment('2018-01-01')}, deadline: moment('2017-10-31')},
    {id:6, participantId: 3, title: 'six', text: 'sixth goal', range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, deadline: moment('2017-10-31')},
    {id:7, participantId: 4, title: 'seven', text: 'seventh goal', range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, deadline: moment('2017-10-31')}
];

const goals = (state = allGoals, action) => {

    switch (action.type) {
        case ADD_GOAL:

            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    text: action.text,
                    deadline: action.deadline,
                    range: action.range,
                    participantId: action.participantId,
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