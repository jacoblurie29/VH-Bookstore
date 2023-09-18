import React, { useState } from 'react';

const AddBook = () => {
	// TODO:

	const [titleError, setTitleError] = useState(null);
	const [authorError, setAuthorError] = useState(null);
	const [costError, setCostError] = useState(null);
	const [pnameError, setPnameError] = useState(null);
	const [pemailError, setPemailError] = useState(null);

	const fetchData = async data => {
		console.log(data);
		// fetch from api
		const res = await fetch(`http://localhost:${process.env.VITE_PORT}/addBookSale`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify(data),
		});

		// convert response to json
		const returnedData = await res.json();

		// return data
		return returnedData;
	};

	const addBook = bookData => {
		event.preventDefault();

		const title = bookData.target[0].value;
		if (title.length < 2) {
			setTitleError (" Title Length must be longer than 2 characters");
		}
		else {
			setTitleError(null)
		}

		const author = bookData.target[1].value;
		if (author.length < 2) {
			setAuthorError (" Author Length must be longer than 2 characters");
		}
		else {
			setAuthorError(null)
		}

		const cost = bookData.target[2].value;
		if (cost <= 10) {
			setCostError (" Act cheap, look broke.");
		}
		else {
			setCostError(null)
		}

		const genre = bookData.target[3].value;

		const purchaserName = bookData.target[4].value;
		if (purchaserName.length < 2) {
			setPnameError (" Purchaser Name must be longer than 2 characters");
		}
		else {
			setPnameError(null)
		}

		const purchaserEmail = bookData.target[5].value;
		if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(purchaserEmail)) {
			setPemailError (" Purchaser Name must be a valid email addy.");
		}
		else {
			setPemailError(null)
		}
	// 

		const ogSaleDate = bookData.target[6].value;
		// converts date to an ISO String
		let darr = ogSaleDate.split('-');
		var dobj = new Date(parseInt(darr[0]), parseInt(darr[1]) - 1, parseInt(darr[2]));
		const saleDate = dobj.toISOString();

		const bigData = {
			title,
			author,
			cost,
			genre,
			purchaserName,
			purchaserEmail,
			saleDate,
		};

		fetchData(bigData)
			.then(newData => {
				// set the number of books
				console.log(newData);
			})
			// we use .catch to handle errors
			.catch(err => {
				console.error(err);
			});

		// add this data to the database
	};
	return (
		<form onSubmit={addBook}>
			<h1>Add a book</h1>
			<label htmlFor="title">Title: </label>
			<input type="text" name="title" id="title" required />
			{
				titleError && 
				<span> 
					{
						titleError
					}
				</span>
			}
			<br />
			<label htmlFor="author">Author: </label>
			<input type="text" name="author" id="author" required />
			{
				authorError && 
				<span> 
					{
						authorError
					}
				</span>
			}
			<br />
			<label htmlFor="cost">Cost: </label>
			<input type="number" name="cost" id="cost" required />
			{
				costError && 
				<span> 
					{
						costError
					}
				</span>
			}
			<br />
			<label htmlFor="genre">Genre: </label>
			<select defaultValue="Uncategorized" name="genrePick" id="genrePick">
				<option value="uncategorized">Uncategorized</option>
				<option value="nonfiction">Nonfiction</option>
				<option value="fiction">Fiction</option>
			</select>
			<br />
			<label htmlFor="purchaserName">Purchaser's Name </label>
			<input type="text" name="purchaserName" id="purchaserName" required />
			{
				pnameError && 
				<span> 
					{
						pnameError
					}
				</span>
			}
			<br />
			<label htmlFor="purchaserEmail">Purchaser's Email </label>
			<input type="text" name="purchaserEmail" id="purchaserEmail" required />
			{
				pemailError && 
				<span> 
					{
						pemailError
					}
				</span>
			}
			<br />
			<label htmlFor="saleDate">Sale Date: </label>
			<input type="date" name="saleDate" id="saleDate" required />
			<br />
			<input type="submit" value="Add Book" />
		</form>
	);
};

export default AddBook;
