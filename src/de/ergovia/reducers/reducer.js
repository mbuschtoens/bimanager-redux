import { combineReducers } from 'redux'
import goals from './goals'
import editGoal from './editGoal'
import filters from './filters'
import selectedParticipant from './participants'

export default combineReducers({ goals, editGoal, filters, selectedParticipant });