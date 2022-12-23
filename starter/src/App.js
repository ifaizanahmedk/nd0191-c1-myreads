import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./api/BooksAPI";
import BookList from "./components/Book/BookList";
import Search from "./components/Search/Search";

const bookshelf = [
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
	const [books, setBooks] = useState([]);

	useEffect(() => {
		loadAllBooks();
	}, []);

	const updateBookShelf = (book, shelf) => {
		BooksAPI.update(book, shelf);
		book.shelf = shelf;
		setBooks((prevState) =>
			prevState.filter((b) => b.id !== book.id).concat(book)
		);
	};

	const loadAllBooks = async () => {
		const res = await BooksAPI.getAll();
		setBooks(res);
	};

	return (
		<div className="app">
			<Routes>
				<Route
					path="/search"
					element={
						<Search
							myBooks={books}
							updateBookShelf={updateBookShelf}
						/>
					}
				/>
				<Route
					exact
					path="/"
					element={
						<BookList
							books={books}
							bookshelf={bookshelf}
							updateBookShelf={updateBookShelf}
						/>
					}
				/>
				<Route
					path="*"
					element={
						<div>
							<h1 style={{ textAlign: "center" }}>
								404 Not Found!
							</h1>
						</div>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
