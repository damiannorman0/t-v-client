import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route} from 'react-router-dom'


import configureStore from 'store';
import App from 'containers/App';
import PetDetail from 'containers/PetDetail';
import * as serviceWorker from 'serviceWorker';
import {createBrowserHistory} from "history";

const history = createBrowserHistory();
const store = configureStore() || {};


ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router history={history}>
				<Route exact path="/:table?" component={App}/>
				<Route path="/petDetail/:id" component={PetDetail}/>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
