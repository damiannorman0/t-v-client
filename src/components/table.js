import ReactTable from "react-table";
import PropTypes from "prop-types";
import React from "react";

const Table = (props) => {
	const {petsDisplay = [], getDetail, isRisk} = props;
	return (<div>
		<ReactTable
			data={petsDisplay}
			defaultPageSize={10}
			className="-striped -highlight"
			getTrProps={(state, rowInfo) => {
				if (rowInfo && rowInfo.row) {
					const {weight, age, id} = rowInfo.row._original.props;
					const backgroundColor = isRisk({weight, age}) ? 'lightcoral': 'lightcyan';

					return {
						style: {
							backgroundColor
						},
						onClick: (e) => {
							getDetail(`${id}`);
						}
					}
				} else {
					return {}
				}
			}}

			columns={[
				{
					Header: "ID",
					id: "id",
					accessor: d => {
						return d.props.internalID
					}
				},
				{
					Header: "Name",
					id: "name",
					accessor: d => {
						return d.props.name
					}
				}
			]}
		/>
	</div>)
};

Table.propTypes = {
	petsDisplay: PropTypes.array.isRequired
};

Table.defaultProps = {
	petsDisplay: []
};

export default Table;
