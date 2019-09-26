import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import history from '../history';
import PokemonList from './PokemonList';
import PokemonCard from './PokemonCard';
import '../css/PokemonList.scss';

const App = () => {
	return (
		<div className="ui container grid">
			<div className="column eleven wide">
				<Router history={history}>
					<>
						<div className="ui secondary pointing menu">
							<Link to="/" className="item">Pokelist</Link>
							<Link to="/favorites" className="item">Favorites</Link>
						</div>

						<Switch>
							<Route path="/" exact component={PokemonList} />
							<Route path="/favorites" exact component={PokemonList} />
						</Switch>
					</>
				</Router>
			</div>
			<div className="column five wide">
				<PokemonCard />
			</div>
		</div>
	);
};

export default App;