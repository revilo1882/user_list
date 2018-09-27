import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { users } from '../data/fixtures';

const props = { users };

describe('App', () => {
	const app = shallow(<App {...props} />);

	it('renders the title', () => {
		expect(app.find('h2').text()).toEqual('User List');
	});

	it('creates the correct number of users', () => {
		expect(app.find('li').length).toEqual(users.length);
	});
});
