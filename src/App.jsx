import './App.css';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function App() {
	return (
		<div className="appHome">
			<Tabs>
				<TabList>
					<Tab>Home</Tab>
					<Tab>About</Tab>
					<Tab>Profile</Tab>
				</TabList>

				<TabPanel>
					<h2>Any content 1</h2>
				</TabPanel>
				<TabPanel>
					<h2>Any content 2</h2>
				</TabPanel>
				<TabPanel>
					<h2>Any content 3</h2>
				</TabPanel>
			</Tabs>
		</div>
	);
}

export default App;
