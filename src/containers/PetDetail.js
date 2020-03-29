import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import '../styles/App.css';
import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';


import {petDetailAction} from '../actions/petDetailAction';

function PetDetail(props) {
	const {petDetail, petDetailAction, loading} = props;
	const {id} = props.match.params;
	const {internalID, name, id:petID, weight, age} = petDetail;

	useEffect(() => {
		(id !== petID && !loading) && petDetailAction(id);
	});

	const petDisplay = petDetail.id && (
		<div key={`pet-detail-${petDetail.name}`} className='pet-detail'>
			<NavLink
				to={'/'}
				key={`back`} className='back'>
				&lt; Back
			</NavLink>


			<h3>{name}</h3>
			<p>ID: {internalID}</p>
			<p>Weight: {weight}</p>
			<p>Age: {age}</p>

			<img src={logo} alt={`"${name}"`}/>
		</div>
	);

	const loadingClass = loading? 'loader-show' : '';

	return (
		<div className="App">
			<div id="loader-indicator" className={loadingClass} role="alert" aria-busy="true"></div>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo"/>
				<h1>Welcome to TeleVet</h1>
			</header>
			<main>
				<h2>Pet Information:</h2>
				<div className="pets">
					{petDisplay}
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
		petDetail: state.pets.petDetail,
		loading: state.pets.loading
	};
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			petDetailAction
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(PetDetail);
