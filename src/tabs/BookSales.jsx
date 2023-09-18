import React, { useState, useEffect } from 'react';
const BookSales = () => {
	// TODO:
	// number of books as a react state (null is the initial value)
	const [numBooks, setNumBooks] = useState(null);
	const [saleBooks, setSaleBooks] = useState(null);
	const [costBooks, setCostBooks] = useState([]);
	const [sum, setSum] = useState(null);
	const [genre, setGenre] = useState('All genre');

	// error as a react state (null is the initial value)
	const [error, setError] = useState(null);

	// async function to fetch data from the server
	const fetchData = async () => {
		// fetch from api
		const res = await fetch(`http://localhost:${process.env.VITE_PORT}/getBookSales`, {
			method: 'GET',
		});

		// convert response to json
		const data = await res.json();

		// return data
		return data;
	};

	// when the component mounts, fetch data
	useEffect(() => {
		console.log('hello');
		// call fetchData (which returns a promise)
		fetchData()
			// we use .then to handle the promise
			.then(data => {
				// set the number of books
				console.log(data);
				setNumBooks(data.length);

				// create an array that save the costs
				const temp = [];
				// for loop to save the data into the array
				for (let i = 0; i < data.length; ++i) {
					if (data[i].genre === genre) {
						console.log(data[i]);
						temp.push(data[i].cost);
					}
					if (genre === 'All genre') {
						temp.push(data[i].cost);
					}
				}
				// call setArray
				setCostBooks(temp);

				//sum the costs up
				let tempVar = 0;
				for (let i = 0; i < temp.length; ++i) {
					tempVar = tempVar + temp[i];
				}
				// call setSum
				setSum(tempVar);
			})
			// we use .catch to handle errors
			.catch(err => {
				console.error(err);
				setError(err);
			});
	}, [genre]);

	return (
		<div>
			<label>
				Picak a genres:
				<select value={genre} onChange={e => setGenre(e.target.value)}>
					<option value="All genre">All genre</option>
					<option value="Fantasy">Fantasy</option>
					<option value="Fiction">Fiction</option>
					<option value="Dystopian">Dystopian</option>
					<option value="Romance">Romance</option>
					<option value="Classic">Classic</option>
					<option value="Adventure">Adventure</option>
				</select>
			</label>
			<div>Total sales of books: {sum}</div>
			<div>Genre: {genre}</div>
		</div>
	);
};

export default BookSales;
