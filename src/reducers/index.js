import { combineReducers } from 'redux';

const INITIAL_STATE = {
	pokemons: [],
	favoritePokemons: [],
	selectedPokemon: null
};

const pokemonListReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'FETCH_POKEMONS':
			return {...state, pokemons: action.pokemons};
		case 'FETCH_POKEMON_DATA':
			return { ...state, selectedPokemon: action.pokemon };
		case 'ADD_TO_FAVORITES':
			return { ...state, favoritePokemons: [...state.favoritePokemons, action.pokemon] };
		case 'REMOVE_FROM_FAVORITES':
			return { ...state, favoritePokemons: action.pokemons };
		default:
			return state;
	}
};

export default combineReducers({
	pokemonsManager: pokemonListReducer,
});