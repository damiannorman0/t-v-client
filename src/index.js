import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from 'store';
import App from 'containers/App';
import PetDetail from 'containers/PetDetail';
import * as serviceWorker from 'serviceWorker';
import {createBrowserHistory} from "history";
import {Router, Route} from 'react-router-dom'

const history = createBrowserHistory();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={configureStore()}>
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
