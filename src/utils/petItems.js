import React from "react";
import PetItem from "components/petItem/petItem";
import {isRisk} from 'utils/filter';


export const getDisplay = (data) => {
	return data.map((item, index) => {
		return (
			<PetItem key={`pet-item-${index}`} {...item} index={index} isRisk={isRisk}/>
		);
	});
};

