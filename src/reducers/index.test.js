import rootReducer from './index';
import * as actions from '../actions';
import { users } from '../data/fixtures';

describe('root reducer', () => {

	it('set users', () => {
		expect(rootReducer({}, {type: actions.SET_USERS, users })).toEqual(users);
	});
});
