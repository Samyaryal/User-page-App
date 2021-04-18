import React from 'react';
import "./App.css";
import UserPage from './UserPage';
import UserList from './UserList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<React.Fragment>
			<Router>
				<Switch>
					<Route path='/users/:id' > <UserPage /> </Route>
					<Route path='/' > <UserList /> </Route>
				</Switch>
			</Router>

		</React.Fragment>
	);
};

export default App;
