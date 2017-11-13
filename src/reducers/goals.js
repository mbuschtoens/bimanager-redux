import undo from 'redux-undo'
import moment from 'moment'
import { ADD_GOAL, TOGGLE_GOAL, REMOVE_GOAL } from '../actions/types'

const allGoals = [
    {id:1, participant: 1, title: 'First goal', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.', range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, deadline: moment('2017-10-31')},
    {id:2, participant: 1, title: 'Goal two', text: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', range: {from: moment('2017-02-01'), to: moment('2018-04-30')}, deadline: moment('2017-10-31')},
    {id:3, participant: 1, title: 'The third goal', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.', range: {from: moment('2017-09-01'), to: moment('2018-08-31')}, deadline: moment('2017-10-31')},
    {id:4, participant: 2, title: 'No. 4 of the goals', text: 'At vero eos et accusam et justo duo dolores et ea rebum.', range: {from: moment('2017-05-31'), to: moment('2017-10-31')}, deadline: moment('2017-10-10')},
    {id:5, participant: 2, title: 'Fifth goal in a row', text: 'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', range: {from: moment('2018-01-01'), to: moment('2018-01-01')}, deadline: moment('2017-10-31')},
    {id:6, participant: 3, title: 'Goal: 6', text: 'Lorem ipsum dolor sit amet', range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, deadline: moment('2017-10-31')},
    {id:7, participant: 4, title: 'Seventh goal', text: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero.', range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, deadline: moment('2017-10-31')}
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
                    participant: action.participant,
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