import { combineReducers } from 'redux'
import goals from './goals'
import range from './range'
import views from './views'
import filters from './filters'

export default combineReducers({ goals, views, filters, range });