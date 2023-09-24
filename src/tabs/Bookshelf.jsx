import React from 'react';
import BasicTable from './BasicTable';
import axios from 'axios';

const Bookshelf = () => {
	let config = {
		method: 'get',
		maxBodyLength: Infinity,
		url: 'http://localhost:5050/getBookSales',
		headers: { }
	};

	axios.request(config)
	.then((response) => {
		let bookArray = response;
		console.log(bookArray);
	})
	.catch((error) => {
		console.log(error);
	});

	return <div>
		<BasicTable></BasicTable>
	</div>;
};

export default Bookshelf;