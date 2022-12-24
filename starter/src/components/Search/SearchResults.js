import Book from "../Book/Book";

const SearchResults = ({ myBooks, bookResults, updateBookShelf }) => {
	const filteredBooks = bookResults.map((book) => {
		myBooks.map((b) => {
			if (b.id === book.id) {
				book.shelf = b.shelf;
			}
			return b;
		});
		return book;
	});

	return (
		<div className="search-books-results">
			<ol className="books-grid">
				{filteredBooks?.length > 0
					? filteredBooks.map((book) => (
							<li key={book.id}>
								<Book
									book={book}
									currentShelf={
										book.shelf ? book.shelf : "none"
									}
									bookShelfSwitcher={updateBookShelf}
								/>
							</li>
					  ))
					: "No Results Found"}
			</ol>
		</div>
	);
};

export default SearchResults;
