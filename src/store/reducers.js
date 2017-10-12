import {comments} from './comments.js';
import {users} from './users.js';
import {combineReducers} from 'redux';

export const reducers = combineReducers({
	comments,
	users
});