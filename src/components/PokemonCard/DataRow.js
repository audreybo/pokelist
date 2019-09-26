import React from 'react';
import '../../css/Pokemon.scss';

const DataRow = ({ name, value}) => {
	return (
		<div className="data-row" key={name}>
			<div className="data-row-name">{name}</div>
			<div>{value}</div>
		</div>
	);
};

export default DataRow;