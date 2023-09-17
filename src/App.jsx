import React from 'react';
import './App.css';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Example from './tabs/Example';
import BookSales from './tabs/BookSales';
import MonthlySales from './tabs/MonthlySales';
import AddBook from './tabs/AddBook';
import Bookshelf from './tabs/Bookshelf';
import Calendar from './tabs/Calendar';

const App = () => {
	return (
		<div className="appHome">
			<Tabs>
				<TabList>
					<Tab>Example</Tab>
					<Tab>Book Sales</Tab>
					<Tab>Monthly Sales</Tab>
					<Tab>Add Book</Tab>
					<Tab>Bookshelf</Tab>
					<Tab>Calendar</Tab>
				</TabList>

				<TabPanel>
					<Example />
				</TabPanel>
				<TabPanel>
					<BookSales />
				</TabPanel>
				<TabPanel>
					<MonthlySales />
				</TabPanel>
				<TabPanel>
					<AddBook />
				</TabPanel>
				<TabPanel>
					<Bookshelf />
				</TabPanel>
				<TabPanel>
					<Calendar />
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default App;
