import React from 'react';
import {render} from '@testing-library/react';
import App from 'containers/App';
import PetDetail from "./containers/PetDetail";
import {Provider} from "react-redux";
import {createBrowserHistory} from "history";
import configureStore from "./store";

import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router-dom'

const history = createBrowserHistory();
const store = configureStore() || {};

test('renders app', () => {
	const app = (
		<Provider store={store}>
			<Router history={history}>
				<Route exact path="/:table?" component={App}/>
				<Route path="/petDetail/:id" component={PetDetail}/>
			</Router>
		</Provider>);

	render(app);
});
