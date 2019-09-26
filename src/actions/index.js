import _ from 'lodash';
import axios from 'axios';

const getTypes = types => {
	const parseTypes = types.map(type => _.capitalize(type.type.name));
	return _.join(parseTypes, ' - ');
};

const getStats = stats => {
	return stats.map(mainStat => {
		const newKey = _.chain(mainStat.stat.name)
		.lowerCase()
		.capitalize()
		.value();
		return [newKey, mainStat.base_stat];
	});
};

const fetchPokemons = (offset = 0) => async dispatch => {
	const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
	
	dispatch({
		type: 'FETCH_POKEMONS',
		pokemons: response.data.results
	});
};

const fetchPokemonData = url => async dispatch => {
	const response = await axios.get(url);

	const { name, height, weight, types, sprites, stats, id } = response.data
	const pokemonData = {
		id,
		name: _.capitalize(name),
		height,
		weight,
		img: sprites.front_default,
		types: getTypes(types),
		stats: getStats(stats)
	};

	dispatch({
		type: 'FETCH_POKEMON_DATA',
		pokemon: pokemonData
	});
};

const addToFavorites = (name, id) => dispatch => {
	dispatch({
		type: 'ADD_TO_FAVORITES',
		pokemon: {
			name,
			url: `https://pokeapi.co/api/v2/pokemon/${id}`
		}
	});
};

const removeFromFavorites = name => (dispatch, getState) => {
	const { favoritePokemons } = getState().pokemonsManager;
	const filteredPokemons = favoritePokemons.filter(pokemon => pokemon.name !== name);

	dispatch({
		type: 'REMOVE_FROM_FAVORITES',
		pokemons: filteredPokemons
	});
};

export { fetchPokemons, fetchPokemonData, addToFavorites, removeFromFavorites };