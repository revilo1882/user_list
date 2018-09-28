# User List

## Task
Fetch data from the Users endpoint https://jsonplaceholder.typicode.com/, store the information in Redux and use React to populate a list of users using the Redux store.


## Motivation

I Have previously built apps in React but never using Redux, one of my goals was to test all files using Jest and Enzyme.


## Installation

Clone the repository then in the command line run:

```bash
$ cd user_list
$ npm install
$ npm start
```

To run the test and check the coverage run the below commands:

```bash
$ npm test
$ npm test -- --coverage
```

## Approach

I used the create-react-app to package to build a project and added the redux and enzyme packages to the project folder.  I then deleted and rebuilt the src folder so I could write each file from scratch for my own learning purposes.  Next I fetched the data in a componentDidMount hook and logged the results to the console and view the data on the api.  For the purpose of this exercise I decided that it was only necessary to list the names of all the users on the app.  In order to prevent the app from fetching the data more than once by adding the if statement to the componentDidMount function in the App class.  I decided not to use a TDD approach on this project as my goal was to completely test a Redux app for the first time so I built the tests after the app was fully functional.


## Further Work

With a bit more time and in order to understand the flow of data in Redux a bit better I would like to change each item in the list to a link which would then display more information about the user selected.
