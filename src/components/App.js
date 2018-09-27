import React, { Component } from 'react';

class App extends Component {
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(json => console.log(json))
	}

	render() {
		return (
			<div>
				<h2>User List</h2>
			</div>
		);
	}
}

export default App;
