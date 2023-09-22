import React, { useState, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BookSales = () => {
	// TODO:
	// display a bar chart
	// chart is total month sale in dollars

	// number of books as a react state (null is the initial value)
	const [Books, setBooks] = useState(null);

	// error as a react state (null is the initial value)
	const [error, setError] = useState(null);

	// array of costs seperated by month as a react state(0 is the initial value)
	const [costArray, setCostArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

	const [salesChart, setSalesChart] = useState(null);

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
				console.log(data[2].saleDate);
				setBooks(data);
				for (let i = 0; i < 21; i++) {
					const a = data[i].saleDate;
					const bookDate = new Date(a);
					costArray[bookDate.getMonth()] += data[i].cost;
				}
				console.log(costArray);
				const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
					saleData = labels.map((month, index) => ({
						name: month,
						data: costArray[index],
					}));
				console.log(saleData);
				setSalesChart(saleData);
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
			) : Books === null ? (
				// if numBooks is null, display loading message
				<div>Loading...</div>
			) : (
				// otherwise success. display number of books

				//<ResponsiveContainer width="99%" height="99%">
				<BarChart
					width={1000}
					height={1000}
					data={salesChart}
					margin={{
						top: 30,
						right: 30,
						left: 300,
						bottom: 300,
					}}>
					<CartesianGrid />
					<XAxis dataKey="name" interval={0} />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="data" fill="#8884d3" />
				</BarChart>
				//</ResponsiveContainer>

				// Books.map((Book, index) => {
				// 	return <div key={index}>{Book.title}</div>;
				// })
			)}
		</div>
	);
};

export default BookSales;
