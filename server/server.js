import express from 'express';
import cors from 'cors';
import connectToMongoDB from './mongodb.config.js';
import { seedData } from './seedData/seedData.js';
import BookSale from './models/bookSale.model.js';
import { addBookSale, deleteBookSale, getBookSales, updateBookSale } from './controllers/bookSale.controller.js';
import { getAllCustomers, addCustomer, deleteCustomer, getCustomer, updateCustomer } from './controllers/customer.controller.js';

const app = express();

// Middleware
app.use(express.json());

// Enable CORS for your React app's domain
const corsOptions = {
	origin: 'http://localhost:5173', // Update with your React app's URL
	optionsSuccessStatus: 200, // Some legacy browsers (IE11) choke on 204
};

app.use(cors(corsOptions));

const seedTheData = async () => {
	// Connect to MongoDB
	await connectToMongoDB();

	const bookSales = await BookSale.find({});
	if (bookSales.length === 0) {
		await BookSale.insertMany(seedData);
		console.log('🌱 [MONGODB]: Seeded the database');
	}
};

await seedTheData();

// Routes
app.get('/', (req, res) => {
	res.send('Hello World');
})

app.get('/getBookSales', getBookSales);
app.post('/addBookSale', addBookSale);
app.put('/updateBookSale', updateBookSale);
app.delete('/deleteBookSale', deleteBookSale);

app.get('/getCustomer', getCustomer);
app.get('/getAllCustomers', getAllCustomers);
app.post('/addCustomer', addCustomer);
app.put('/updateCustomer', updateCustomer);
app.delete('/deleteCustomer', deleteCustomer);

// Start server
const PORT = process.env.VITE_PORT || 5050;
app.listen(PORT, () => {
	console.log(`🚀 [SERVER]: Server is running on port ${PORT}`);
});
