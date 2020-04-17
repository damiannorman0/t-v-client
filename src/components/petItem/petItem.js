import React from "react";
import PropTypes from "prop-types";
import {petItem, petItemContent, riskHigh} from "components/petItem/petItem.module.css";

const PetItem = (props) => {
	const {internalID, name, id, age, weight, isRisk} = props;
	const riskStyle = isRisk({age, weight}) && riskHigh;
	return (
		<div className={`${petItem} ${riskStyle}`} data-id={id}>
			<div className={petItemContent}>{internalID}</div>
			<div className={petItemContent}>{name}</div>
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


export default PetItem;
