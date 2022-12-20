import PropTypes from "prop-types";

const BookShelfChanger = ({ book, currentShelf, bookShelfSwitcher }) => {
	const handleBookSwitch = (event) => {
		const shelf = event.target.value;
		bookShelfSwitcher(book, shelf);
	};

	return (
		<div className="book-shelf-changer">
			<select value={currentShelf} onChange={handleBookSwitch}>
				<option value="none" disabled>
					Move to...
				</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
			</select>
		</div>
	);
};

BookShelfChanger.propTypes = {
	book: PropTypes.object.isRequired,
	currentShelf: PropTypes.string.isRequired,
	bookShelfSwitcher: PropTypes.func.isRequired,
};

export default BookShelfChanger;
