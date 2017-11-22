import { combineReducers } from 'redux'
import goals from './goals'
import range from './range'
import views from './views'
import filters from './filters'
import authentication from './authentication'

export default combineReducers({ goals, views, filters, range, authentication });