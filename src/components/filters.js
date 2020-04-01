import React from "react";
import PropTypes from "prop-types";

export const Filters = (props) => {
	const {setNameFilter, setStatusFilter} = props;
	return (
		<div className="filters">
			<input type='text' placeholder="Filter by name" onChange={( {target} = {} ) => {
				const {
					value
				} = target;

				setNameFilter(value);
			}}/>
			<label htmlFor='riskCB'>Filter by risk</label>
			<input id='riskCB' type='checkbox' placeholder="Filter by name" onChange={({target} = {} ) => {
				const {
					checked
				} = target;

				setStatusFilter(checked);
			}}>
			</input>
		</div>
	);
};

Filters.propTypes = {
	setNameFilter:PropTypes.func,
	setStatusFilter: PropTypes.func
};

Filters.defaultProps = {
	setNameFilter: (e = {}) => {},
	setStatusFilter: (e = {}) => {}
};

