import React from "react";
import PropTypes from "prop-types";

export const PetItem = (props) => {
	const {internalID, name, id, age, weight, isRisk} = props;
	const riskStyle = isRisk({age, weight})? 'riskHigh' : '';
	return (
		<div className={`pet-item ${riskStyle}`} data-id={id}>
			<div className='pet-item-content'>{internalID}</div>
			<div className='pet-item-content'>{name}</div>
		</div>
	);
};

PetItem.propTypes = {
	index:PropTypes.number,
	internalID: PropTypes.number,
	name:  PropTypes.string,
	id: PropTypes.string,
	age: PropTypes.string,
	weight: PropTypes.string,
	isRisk: PropTypes.func,
};

PetItem.defaultProps = {
	index: -1,
	internalID: -1,
	name: '',
	id: '',
	age: '',
	weight: '',
	isRisk: (e = {}) => {}
};
