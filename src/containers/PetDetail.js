import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import '../styles/global.css';
import React, {useEffect} from 'react';
import {
	useParams
} from "react-router-dom";


import {petDetailAction} from '../actions/petDetailAction';

const PetDetail = (props) => {
	const {petDetail, petDetailAction, loading, history} = props;
	const { id } = useParams();
	const {internalID, name, weight, age} = petDetail;

	useEffect(() => {
		petDetailAction(id);
	}, [id, petDetailAction]);

	const petDisplay = petDetail && petDetail.id ? (
		<div key={`pet-detail-${petDetail.name}`} className='pet-detail'>
			<button className="back" onClick={() => {
				history.goBack();
			}}>
				Back to Pets
			</button>

			<h3>{name}</h3>
			<p>ID: {internalID}</p>
			<p>Weight: {weight}</p>
			<p>Age: {age}</p>

			<img src={logo} alt={`"${name}"`}/>
		</div>
	) : <div className="no-pets">Pet not found</div>;

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
				<div className="pet-detail-container">
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
		loading: state.pets.loading,
		validEmpty: state.pets.validEmpty
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
