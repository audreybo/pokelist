import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPokemons, fetchPokemonData} from '../actions'
import Pagination from './Pagination';
import '../css/PokemonList.scss';

class PokemonList extends React.Component {
	componentDidMount() {
		const { fetchPokemons } = this.props;
		fetchPokemons();
	}

	componentDidUpdate(prevProps) {
		const { fetchPokemons, pathIsRoot } = this.props;

		if (!prevProps.pathIsRoot && pathIsRoot) {
			fetchPokemons();
		}
	}

	renderPokemonTile() {
		const { pokemons, fetchPokemonData } = this.props;

		return pokemons.map(pokemon => {
			const { name, url } = pokemon;

			return (
				<div key={pokemon.name} className="four wide column">
					<div className="tile" onClick={() => fetchPokemonData(url)}>
						<span className="pokemon">
							{_.capitalize(name)}
						</span>
					</div>
				</div>
			);
		});
	}

	render() {
		const { pathIsRoot } = this.props;

		return (
			<div className="ui grid stackable">
				{this.renderPokemonTile()}
				{pathIsRoot &&
					<Pagination />
				}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const { pokemons, favoritePokemons } = state.pokemonsManager;
	const { path } = ownProps.match;
	const pathIsRoot = path === '/';
	const pokemonsToMap = pathIsRoot ? pokemons : favoritePokemons;
	return { pokemons: pokemonsToMap, pathIsRoot };
}

export default connect(mapStateToProps, { fetchPokemons, fetchPokemonData })(PokemonList);