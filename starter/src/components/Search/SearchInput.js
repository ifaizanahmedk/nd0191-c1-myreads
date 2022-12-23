const SearchInput = ({ handleSearchQuery }) => {
	const handleBookSearch = (event) => {
		handleSearchQuery(event.target.value);
	};

	return (
		<div className="search-books-input-wrapper">
			<input
				type="text"
				// value=
				placeholder="Search by title, author, or ISBN"
				onChange={handleBookSearch}
			/>
		</div>
	);
};

export default SearchInput;
