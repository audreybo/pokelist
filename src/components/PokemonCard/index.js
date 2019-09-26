import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import '../../css/Pokemon.scss';
import Header from './Header';
import Stats from './Stats';
import DataRow from './DataRow';
import Favorites from './Favorites';

const PokemonCard = ({ selectedPokemon }) => {
	if (!selectedPokemon) {
		return <div className="no-selection">Please select a Pokemon</div>;
	}

	const { height, weight, id } = selectedPokemon;

	return (
		<div className="pokemon-container">
			<Header />
			<div className="content">
				<DataRow
					name='Pokedex n°'
					value={id}
				/>
				<DataRow
					name='Height'
					value={`${_.divide(height, 10)}m`}
				/>
				<DataRow
					name='Weight'
					value={`${_.divide(weight, 10)}kg`}
				/>
				<Stats />
			</div>
			<Favorites />
		</div>
	);
};

const mapStateToProps = state => {
	const { selectedPokemon } = state.pokemonsManager;
	return { selectedPokemon };
}

export default connect(mapStateToProps)(PokemonCard);