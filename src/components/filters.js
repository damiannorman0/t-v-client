import React from "react";

export const Filters = (props) => {
	const {setNameFilter, setStatusFilter} = props;
	return (
		<div className="filters">
			<input type='text' placeholder="Filter by name" onChange={({nativeEvent = {}} = {}) => {
				const {
					target: {
						value
					}
				} = nativeEvent;

				setNameFilter(value);
			}}/>
			<label htmlFor='riskCB'>Filter by risk</label>
			<input id='riskCB' type='checkbox' placeholder="Filter by name" onChange={({nativeEvent = {}} = {}) => {
				const {
					target: {
						checked
					}
				} = nativeEvent;

				setStatusFilter(checked);
			}}>
			</input>
		</div>
	);
};
