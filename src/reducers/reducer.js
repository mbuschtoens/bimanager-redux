import { combineReducers } from 'redux'
import goals from './goals'
import filters from './filters'
import selectedParticipant from './participants'

export default combineReducers({ goals, filters, selectedParticipant });