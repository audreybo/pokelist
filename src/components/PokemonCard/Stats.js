import React from 'react';
import { connect } from 'react-redux';
import '../../css/Pokemon.scss';
import DataRow from './DataRow';

const Stats = ({ stats }) => {
	return stats.map(stat => {
		return (
			<DataRow
				key={stat[0]}
				name={stat[0]}
				value={stat[1]}
			/>
		);
	});
};

const mapStateToProps = state => {
	const { selectedPokemon } = state.pokemonsManager;
	const { stats } = selectedPokemon;
	return { stats };
}

export default connect(mapStateToProps)(Stats);
