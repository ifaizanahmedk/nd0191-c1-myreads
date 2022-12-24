import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Bookshelf from "./Bookshelf";

const BookList = ({ books, bookshelf, updateBookShelf }) => {
	const handleBookShelfChange = (book, shelf) => {
		updateBookShelf(book, shelf);
	};

	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<div className="list-books-content">
				<div>
					{bookshelf.map((bookshelf) => (
						<Bookshelf
							key={bookshelf.category}
							books={books}
							bookshelf={bookshelf}
							bookShelfSwitcher={handleBookShelfChange}
						/>
					))}
				</div>
			</div>
			<div className="open-search">
				<Link to="search">Add a book</Link>
			</div>
		</div>
	);
};

BookList.propTypes = {
	books: PropTypes.array.isRequired,
	bookshelf: PropTypes.array.isRequired,
	updateBookShelf: PropTypes.func.isRequired,
};

export default BookList;
