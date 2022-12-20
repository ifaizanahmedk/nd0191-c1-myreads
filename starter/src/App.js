import "./App.css";
import { useEffect, useState } from "react";
import Bookshelf from "./Bookshelf";
import * as BooksAPI from "./BooksAPI";

const bookshelfs = [
	{
		title: "Want to Read",
		category: "wantToRead",
	},
	{
		title: "Currently Reading",
		category: "currentlyReading",
	},
	{
		title: "Read",
		category: "read",
	},
];

function App() {
	const [showSearchPage, setShowSearchpage] = useState(false);
	const [books, setBooks] = useState([]);

	useEffect(() => {
		refreshAllBooks();
	}, []);

	const updateBook = (book, shelf) => {
		BooksAPI.update(book, shelf);
		book.shelf = shelf;
		setBooks((prevState) =>
			prevState.filter((b) => b.id !== book.id).concat(book)
		);
	};

	const refreshAllBooks = async () => {
		const res = await BooksAPI.getAll();
		setBooks(res);
	};

	return (
		<div className="app">
			{showSearchPage ? (
				<div className="search-books">
					<div className="search-books-bar">
						<a
							className="close-search"
							onClick={() => setShowSearchpage(!showSearchPage)}>
							Close
						</a>
						<div className="search-books-input-wrapper">
							<input
								type="text"
								placeholder="Search by title, author, or ISBN"
							/>
						</div>
					</div>
					<div className="search-books-results">
						<ol className="books-grid"></ol>
					</div>
				</div>
			) : (
				<div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>
					<div className="list-books-content">
						<div>
							{bookshelfs.map((bookshelf) => (
								<Bookshelf
									key={bookshelf.category}
									books={books}
									bookshelf={bookshelf}
									bookShelfSwitcher={updateBook}
								/>
							))}
						</div>
					</div>
					<div className="open-search">
						<a onClick={() => setShowSearchpage(!showSearchPage)}>
							Add a book
						</a>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
