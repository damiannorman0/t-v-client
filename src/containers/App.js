import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import '../styles/App.css';
import React, {useEffect, useState} from 'react';

import {petsAction} from '../actions/petsAction';
import {filterPetsByName, filterPetsByStatus, isRisk} from '../utils/filter';
import {Filters} from "../components/filters";
import {PetItem} from "../components/petItem";


function App(props) {
	const {pets, petsAction, loading} = props;
	const [nameFilter, setNameFilter] = useState('');
	const [statusFilter, setStatusFilter] = useState(false);

	useEffect(() => {
		!pets.length && petsAction();
	});

	const filteredName = nameFilter.length > 1 ? filterPetsByName(nameFilter, pets) : pets;
	const filterStatus = statusFilter ? filterPetsByStatus(statusFilter, filteredName) : filteredName;
	const petsDisplay = filterStatus.map((item, index) => {
        return (
			<PetItem key={`pet-item-${index}`} {...item} index={index} isRisk={isRisk}/>
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
				<Filters setNameFilter={setNameFilter} setStatusFilter={setStatusFilter} />
				<div className="riskContainer">
					<div className="riskIndicator riskHigh"></div>
					Denotes pet is at risk due to age or weight
				</div>
                <div className="pets" onClick={({nativeEvent: {target: { dataset = {}} = {}} = {}} = {}) => {
					const {id} = dataset;
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
