import PropTypes from "prop-types";
import Book from "./Book";

const Bookshelf = ({ books, bookshelf, bookShelfSwitcher }) => {
	const { title } = bookshelf;

	const filteredBooks = books.filter(
		(filteredBooks) => bookshelf.category === filteredBooks.shelf
	);

	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{title}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{filteredBooks.map((book) => (
						<li key={book.id}>
							<Book
								book={book}
								bookShelfSwitcher={bookShelfSwitcher}
							/>
						</li>
					))}
				</ol>
			</div>
		</div>
	);
};

Bookshelf.propTypes = {
	books: PropTypes.array.isRequired,
	bookshelf: PropTypes.object.isRequired,
	bookShelfSwitcher: PropTypes.func.isRequired,
};

export default Bookshelf;
