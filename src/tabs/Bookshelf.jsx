import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

	/**
	console.log(data);
	
	function createData(title, author, cost, purchaserEmail, purchaserName, saleDate) {
		return { title, author, cost, purchaserEmail, purchaserName, saleDate };
	}
	 
	
	const rows = [
		createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
		createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
		createData('Eclair', 262, 16.0, 24, 6.0),
		createData('Cupcake', 305, 3.7, 67, 4.3),
		createData('Gingerbread', 356, 16.0, 49, 3.9),
	];
	*/

	return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>title</TableCell>
						<TableCell align="right">title</TableCell>
            <TableCell align="right">author</TableCell>
            <TableCell align="right">cost</TableCell>
            <TableCell align="right">purchaserEmail</TableCell>
            <TableCell align="right">purchaserName</TableCell>
						<TableCell align="right">saleDate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.author}</TableCell>
              <TableCell align="right">{row.cost}</TableCell>
              <TableCell align="right">{row.purchaserEmail}</TableCell>
							<TableCell align="right">{row.purchaserName}</TableCell>
							<TableCell align="right">{row.saleDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Bookshelf;