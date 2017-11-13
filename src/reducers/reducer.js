import { combineReducers } from 'redux'
import goals from './goals'
import filters from './filters'

export default combineReducers({ goals, filters });