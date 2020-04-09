import React from "react";
import PropTypes from "prop-types";
import styles from "./tiles.module.css";

const Tiles = (props) => {
	const {petsDisplay = [], getDetail} = props;
	return (<div className={styles.pets} onClick={({ target: {dataset = {}} = {} }) => {
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
