import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { addToFavorites, removeFromFavorites } from '../../actions';

const Favorites = ({ id, name, addToFavorites, removeFromFavorites, isFavorite }) => {
	const handleClick = isFavorite => {
		if (!isFavorite) {
			addToFavorites(name, id);
		} else {
			removeFromFavorites(name);
		}
	};

	return (
		<div className="favorites">
			<div className="right floated star">
				<i className={`star icon large ${isFavorite ? 'yellow' : ''}`} onClick={() => handleClick(isFavorite)}/>
				<span>Add to favorites</span>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	const { selectedPokemon, favoritePokemons } = state.pokemonsManager;
	const { id, name } = selectedPokemon;
	const isFavorite = _.find(favoritePokemons, ['name', name]);
	return { id, name, isFavorite };
}


export default connect(mapStateToProps, { addToFavorites, removeFromFavorites })(Favorites);