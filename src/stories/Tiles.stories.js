import React from 'react';
//import { action } from '@storybook/addon-actions';

import Tiles from 'components/tiles/tiles';
import {getDisplay} from  'utils/petItems';


export default {
	component: Tiles,
	title: 'Tiles'
};

const pets = [{
		"id" : "5e8e2c1866b7aa0b86fcf04d",
		"internalID" : 1,
		"name" : "Fuzzy",
		"weight" : "14.2",
		"age" : "03.4"
}, {
	"id" : "5e8e2c1866b7aa0b86fcf04e",
	"internalID" : 2,
	"name" : "Fuzzy2",
	"weight" : "37.2",
	"age" : "03.4"
}];

const getDetail = (id = '') => {
	console.log(`/petDetail/${id}`);
};

const petsDisplay = getDisplay(pets);


export const Default = () => <Tiles petsDisplay={petsDisplay} getDetail={getDetail} />;

