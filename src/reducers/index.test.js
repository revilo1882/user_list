import rootReducer from './index';
import * as actions from '../actions';
import { users } from '../data/fixtures';

describe('root reducer', () => {
	it('returns the initial state', () => {
		expect(rootReducer({}, {})).toEqual({ users: [] });
	});

  it('set users', () => {
    expect(rootReducer({}, {type: actions.SET_USERS, users })).toEqual({ users })
  })
});
