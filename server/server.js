import express from 'express';
import connectToMongoDB from './mongodb.config.js';
import { seedData } from './seedData/seedData.js';
import BookSale from './models/bookSale.model.js';

const app = express();

// Middleware
app.use(express.json());

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
app.get('/getBookSales', async (req, res) => {
	try {
		const books = await BookSale.find({});
		res.status(200).json(books);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.post('/addBookSale', async (req, res) => {
	try {
		const { title, author, cost, genre, purchaserName, purchaserEmail, saleDate } = req.body;
		const book = new BookSale({
			title,
			author,
			cost,
			genre,
			purchaserName,
			purchaserEmail,
			saleDate,
		});

		await book.save();

		res.status(201).json(book);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.put('/updateBookSale', async (req, res) => {
	try {
		const { title, author, cost, genre, purchaserName, purchaserEmail, saleDate } = req.body;

		const _id = req.query.id;

		const newBook = await BookSale.findOneAndUpdate(
			{ _id },
			{
				title: title,
				author: author,
				cost: cost,
				genre: genre,
				purchaserName: purchaserName,
				purchaserEmai: purchaserEmail,
				saleDate: saleDate,
			},
			{ new: true }
		);

		res.status(200).json(newBook);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.delete('/deleteBookSale', async (req, res) => {
	try {
		// delete the book
		const _id = req.query.id;

		// delete by id or name?
		await BookSale.findOneAndRemove({ _id });
		res.status(200).json({ message: 'Book deleted' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`🚀 [SERVER]: Server is running on port ${PORT}`);
});
