import React from 'react';
//import { action } from '@storybook/addon-actions';

import PetItem from '../components/petItem/petItem';
import {isRisk} from 'utils/filter';


export default {
	component: PetItem,
	title: 'PetItem'
};

const props = {
	id: '1',
	internalID: 1,
	name: 'Test Name',
	age: '1',
	weight: '1',
};

const atRiskProps = {
	id: '1',
	internalID: 1,
	name: 'Heavy',
	age: '27',
	weight: '40',
	isRisk
};

export const Default = () => <PetItem { ...props } />;
export const AtRisk = () => <PetItem { ...atRiskProps } />;

