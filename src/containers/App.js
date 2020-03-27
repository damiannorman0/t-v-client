import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import '../styles/App.css';
import React, {useEffect} from 'react';


import {petsAction} from '../actions/petsAction';

function App(props) {
	const {pets, petsAction, loading} = props;
	debugger

	useEffect(() => {
		!pets.length && petsAction();
	});

	const petsDisplay = pets.map(({id, name, imageURL}, index) => {
        return (
            <div key={`pet-item-${index}`} className='pet-item' data-id={id}>
				<div className='pet-item-content'>{name}</div>
			</div>
        );
    });

	const loadingClass = loading? 'loader-show' : '';

	return (
		<div className="App">
			<div id="loader-indicator" className={loadingClass} role="alert" aria-busy="true"></div>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo"/>
				<h1>Welcome to TeleVet</h1>
			</header>
            <main>
				<h2>Available Pets:</h2>
                <div className="pets" onClick={(e) => {
					const {id} = e.nativeEvent.target.dataset;
					const {history} = props;
					history.push(`/petDetail/${id}`);
				}}>
                    {petsDisplay}
                </div>
            </main>
			<footer className="App-footer">
				<div className="content">
					<div>contact</div>
					<div>FAQ</div>
				</div>
			</footer>
		</div>
	);
}

const mapStateToProps = (state, ownProps) => {
	return {
		pets: state.pets.pets,
		loading: state.pets.loading
	};
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			petsAction
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(App);