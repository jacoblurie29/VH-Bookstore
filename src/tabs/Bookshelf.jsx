import React, { useEffect, useState } from 'react';
import BasicTable from './BasicTable';
import axios from 'axios';

const Bookshelf = () => {

	const [data, setData] = useState();

	useEffect(()=> {
		let config = {
			method: 'get',
			maxBodyLength: Infinity,
			url: 'http://localhost:5050/getBookSales',
			headers: { }
		};
	
		axios.request(config)
		.then((response) => {
			setData(response);
		})
	
		.catch((error) => {
			console.log(error);
		});
	}, [])

	console.log(data);
	

	return <div>
		<BasicTable></BasicTable>
	</div>;
};

export default Bookshelf;