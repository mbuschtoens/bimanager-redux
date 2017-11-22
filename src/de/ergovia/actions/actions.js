import moment from 'moment'
import {
    ACTIVE_FILTER,
    ADD_GOAL,
    EDIT_GOAL_COMPLETED_CHANGED,
    EDIT_GOAL_RANGE_FROM_CHANGED,
    EDIT_GOAL_RANGE_TO_CHANGED,
    EDIT_GOAL_TEXT_CHANGED,
    EDIT_GOAL_TITLE_CHANGED,
    GET_GOALS,
    REMOVE_GOAL,
    SHOW_CREATE_FORM,
    SHOW_EDIT_FORM,
    SHOW_GOAL_LIST,
    SHOW_PARTICIPANT_LIST,
    CHANGE_DATE_RANGE_START,
    CHANGE_DATE_RANGE_END
} from './types'

const fmt = 'YYYY-MM-DD';

export const activateFilter = (filter) => ({
    type: ACTIVE_FILTER,
    filter
});

export const changeDateRangeStart = (start) => ({
    type: CHANGE_DATE_RANGE_START,
    start
});

export const changeDateRangeEnd = (end) => ({
    type: CHANGE_DATE_RANGE_END,
    end
});

export const addGoal = (participant) => ({
    type: ADD_GOAL,
    id: 'created',
    rangeFrom: moment().format(fmt),
    rangeTo: moment().format(fmt),
    completed: false,
    archive: false,
    participant
});

export const showParticipantList = () => ({
    type: SHOW_PARTICIPANT_LIST
});

export const showGoalList = (participant) => ({
    type: SHOW_GOAL_LIST,
    participant
});

export const showCreateForm = (participant) => ({
    type: SHOW_CREATE_FORM,
    id: 'created',
    participant
});

export const showEditForm = (id, participant) => ({
    type: SHOW_EDIT_FORM,
    id, participant
});

export const editGoalTitleChanged = (id, title) => ({
    type: EDIT_GOAL_TITLE_CHANGED,
    id, title
});

export const editGoalTextChanged = (id, text) => ({
    type: EDIT_GOAL_TEXT_CHANGED,
    id, text
});

export const editGoalRangeFromChanged = (id, rangeFrom) => ({
    type: EDIT_GOAL_RANGE_FROM_CHANGED,
    id, rangeFrom
});

export const editGoalRangeToChanged = (id, rangeTo) => ({
    type: EDIT_GOAL_RANGE_TO_CHANGED,
    id, rangeTo
});

export const editGoalCompletedChanged = (id, completed) => ({
    type: EDIT_GOAL_COMPLETED_CHANGED,
    id, completed
});

export const removeGoal = (id) => ({
    type: REMOVE_GOAL,
    id
});

export const getGoals = (goals) => ({
    type: GET_GOALS,
    goals
});