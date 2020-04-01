import React from "react";
import PropTypes from "prop-types";

const Tiles = (props) => {
	const {petsDisplay = [], getDetail} = props;
	return (<div className="pets" onClick={({ target: {dataset = {}} = {} }) => {
		const {id} = dataset;
		getDetail(id);
	}}>
		{petsDisplay}
	</div>)
};

Tiles.propTypes = {
	petsDisplay: PropTypes.array.isRequired
};

Tiles.defaultProps = {
	petsDisplay: []
};

export default Tiles;
