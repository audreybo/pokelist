import React from 'react';
import { connect } from 'react-redux';
import '../../css/Pokemon.scss';

const Header = ({ name, types, img }) => {
	return (
		<div className="header">
			<div className="header-row">
				<div className="presentation">
					<div className="name">{name}</div>
					<div className="types">{types}</div>
				</div>
				<img className="image" alt={name} src={img}/>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	const { selectedPokemon } = state.pokemonsManager;
	const { name, types, img } = selectedPokemon;
	return { name, types, img };
}

export default connect(mapStateToProps)(Header);
