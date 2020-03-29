import React from "react";
import {isRisk} from "../utils/filter";

export const PetItem = (props) => {
	const {index, internalID, name, id, age, weight} = props;
	const riskStyle = isRisk({age, weight})? 'riskHigh' : '';
	return (
		<div key={`pet-item-${index}`} className={`pet-item ${riskStyle}`} data-id={id}>
			<div className='pet-item-content'>{internalID}</div>
			<div className='pet-item-content'>{name}</div>
		</div>
	);
};
