import PropTypes from "prop-types";
import BookshelfChanger from "./BookshelfChanger";

const Book = ({ book, bookShelfSwitcher }) => {
	const { title, authors, imageLinks, shelf } = book;

	return (
		<div className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={{
						width: 128,
						height: 188,
						backgroundColor: "#c3c3c3",
						backgroundImage: `url(${
							imageLinks?.thumbnail ||
							imageLinks?.smallThumbnail ||
							""
						})`,
					}}></div>
				<BookshelfChanger
					book={book}
					currentShelf={shelf}
					bookShelfSwitcher={bookShelfSwitcher}
				/>
			</div>
			<div className="book-title">{title || " "}</div>
			<div className="book-authors">{authors?.join(", ") || " "}</div>
		</div>
	);
};

Book.propTypes = {
	book: PropTypes.object.isRequired,
	bookShelfSwitcher: PropTypes.func.isRequired,
};

export default Book;
