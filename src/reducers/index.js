import { combineReducers } from 'redux';
import { SET_USERS } from '../actions';

function users(state = [], action) {
	switch(action.type) {
	case SET_USERS:
		return action.users;
	default:
		return state;
	}
}

export default combineReducers({ users });
