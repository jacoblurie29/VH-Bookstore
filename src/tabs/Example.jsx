import React, { useState, useEffect } from 'react';

const Example = () => {
	// number of books as a react state (null is the initial value)
	const [numBooks, setNumBooks] = useState(null);

	// error as a react state (null is the initial value)
	const [error, setError] = useState(null);

	// async function to fetch data from the server
	const fetchData = async () => {
		// fetch from api
		const res = await fetch(`http://localhost:${process.env.PORT}/getBookSales`);

		// convert response to json
		const data = await res.json();

		// return data
		return data;
	};

	// when the component mounts, fetch data
	useEffect(() => {
		// call fetchData (which returns a promise)
		fetchData()
			// we use .then to handle the promise
			.then(data => {
				// set the number of books
				setNumBooks(data.length);
			})
			// we use .catch to handle errors
			.catch(err => {
				console.error(err);
				setError(err);
			});
	}, []);

	return (
		<div>
			{error ? (
				// if error is not null, display error message
				<div>ERROR: Something went wrong...</div>
			) : numBooks === null ? (
				// if numBooks is null, display loading message
				<div>Loading...</div>
			) : (
				// otherwise success. display number of books
				<div>Number of books: {numBooks}</div>
			)}
		</div>
	);
};

export default Example;
