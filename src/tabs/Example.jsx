import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MyCustomDiv = styled.div`
	padding: 20px;
	border: 5px solid pink;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
`;

const CustomHeader = styled.div`
    font-size: 18px;
`;

const CustomSubheader = styled.div`
	font-size: 14px;
	background-color: pink;
	width: fit-content;
	animation: rotation 1s infinite ease-in-out;

	@keyframes rotation {
		from {
			transform: rotate(0deg)
		}
		to {
			transform: rotate(360deg)
		}
	}
`;

const Example = () => {
	// number of books as a react state (null is the initial value)
	const [numBooks, setNumBooks] = useState(null);

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
		<MyCustomDiv>
			{error ? (
				// if error is not null, display error message
				<div>ERROR: Something went wrong...</div>
			) : numBooks === null ? (
				// if numBooks is null, display loading message
				<CustomHeader>Loading...</CustomHeader>
			) : (
				<>
				{/* otherwise success. display number of books */}
				<CustomHeader>Number of books:</CustomHeader>
				<CustomSubheader>{numBooks}</CustomSubheader>
				</>
			)}
		</MyCustomDiv>
	);
};

export default Example;
