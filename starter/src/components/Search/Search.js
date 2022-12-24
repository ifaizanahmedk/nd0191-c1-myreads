import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import { search as getSearchedBooks } from "../../api/BooksAPI";
import debounce from "../../helpers/debounce";

const Search = ({ myBooks, updateBookShelf }) => {
	const [bookResults, setBookResults] = useState([]);

	const handleSearchAPI = async (query) => {
		await getSearchedBooks(query).then((searchedBooks) =>
			searchedBooks?.length > 0
				? setBookResults(searchedBooks)
				: setBookResults([])
		);
	};

	const handleSearchQuery = debounce(handleSearchAPI);

	return (
		<div className="search-books">
			<div className="search-books-bar">
				<Link to="/" className="close-search">
					Close
				</Link>
				<SearchInput handleSearchQuery={handleSearchQuery} />
			</div>
			<SearchResults
				myBooks={myBooks}
				bookResults={bookResults}
				updateBookShelf={updateBookShelf}
			/>
		</div>
	);
};

Search.propTypes = {
	updateBookShelf: PropTypes.func.isRequired,
};

export default Search;
