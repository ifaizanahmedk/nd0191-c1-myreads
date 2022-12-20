import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";

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
						backgroundImage: `url(${
							imageLinks.thumbnail || imageLinks.smallThumbnail
						})`,
					}}></div>
				<BookShelfChanger
					book={book}
					currentShelf={shelf}
					bookShelfSwitcher={bookShelfSwitcher}
				/>
			</div>
			<div className="book-title">{title ? title : " "}</div>
			<div className="book-authors">
				{authors ? authors.join(", ") : " "}
			</div>
		</div>
	);
};

Book.propTypes = {
	book: PropTypes.object.isRequired,
	bookShelfSwitcher: PropTypes.func.isRequired,
};

export default Book;
