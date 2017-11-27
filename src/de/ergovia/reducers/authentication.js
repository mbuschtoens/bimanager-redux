import { LOGIN_REQUESTED, LOGIN_SUCCEEDED, LOGOUT } from '../actions/types'

const user = (state = { type: LOGOUT, data: null, requesting: false}, action) => {

    switch (action.type) {

        case LOGIN_REQUESTED:
            return {
                type: action.type,
                data: null,
                jwt: null,
                requesting: action.requesting
            };

        case LOGIN_SUCCEEDED:
            localStorage.setItem("token", action.jwt.token);
            return {
                type: action.type,
                data: action.user,
                jwt: action.jwt,
                requesting: action.requesting
            };

        case LOGOUT:
            localStorage.removeItem("token");
            return {
                type: action.type,
                data: null,
                jwt: null,
                requesting: action.requesting
            };

        default:
            return state;

    }

};

export default user