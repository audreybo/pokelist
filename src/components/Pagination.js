import React from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { fetchPokemons } from '../actions';
import '../css/Pagination.scss';

class Pagination extends React.Component {

	handlePageClick = ({ selected }) => {
		const { fetchPokemons } = this.props;
		let offset = Math.ceil(selected * 20);
		fetchPokemons(offset);
	};
	
	render() {
		return (
			<ReactPaginate
				previousLabel={'<'}
				nextLabel={'>'}
				breakLabel={'...'}
				containerClassName={'pagination-container'}
				subContainerClassName={'pagination-list'}
				previousClassName={'pagination-circle'}
				nextClassName={'pagination-circle'}
				breakClassName={'pagination-circle'}
				pageClassName={'pagination-circle'}
				activeClassName={'active'}
				marginPagesDisplayed={2}
				pageRangeDisplayed={1}
				pageCount={40}
				onPageChange={this.handlePageClick}
			/>
		);
	}
}

export default connect(null, { fetchPokemons })(Pagination);