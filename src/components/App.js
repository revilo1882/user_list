import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUsers } from '../actions';

class App extends Component {
	componentDidMount() {
		if (this.props.users.length === 0) {
			fetch('https://jsonplaceholder.typicode.com/users')
				.then(response => response.json())
				.then(json => this.props.setUsers(json));
		}
	}

	render() {
		return (
			<div>
				<h2>User List</h2>
				{
					this.props.users.map(user => {
						return (
							<div key={user.id}>{user.name}</div>
						);
					})
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { users: state };
}

export default connect(mapStateToProps, { setUsers })(App);
