import PropTypes from "prop-types";

const BookshelfChanger = ({ book, currentShelf, bookShelfSwitcher }) => {
	const handleBookSwitch = (event) => {
		const shelf = event.target.value;
		bookShelfSwitcher(book, shelf);
	};

	return (
		<div className="book-shelf-changer">
			<select value={currentShelf || "none"} onChange={handleBookSwitch}>
				<option disabled>Move to...</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
			</select>
		</div>
	);
};

BookshelfChanger.propTypes = {
	book: PropTypes.object.isRequired,
	bookShelfSwitcher: PropTypes.func.isRequired,
};

export default BookshelfChanger;
