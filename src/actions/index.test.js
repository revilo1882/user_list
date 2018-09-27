import * as actions from './index';
import { users } from '../data/fixtures';

describe('actions', () => {
	it('creates an action to set users', () => {
		const expectedAction = {
			type: actions.SET_USERS,
			users
		};

		expect(actions.setUsers(users)).toEqual(expectedAction);
	});
});
