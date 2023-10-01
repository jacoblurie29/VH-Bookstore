import { BookSale } from '../models/bookSale.model.js';

/**
 * @description Get all book sales
 * @route GET /getBookSales
 * @returns {object[]} 200 - An array of book sales
 * @returns {Error} 500 - An error message
 */
export const getBookSales = async (req, res) => {
	try {
		const books = await BookSale.find({});
		res.status(200).json(books);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

/**
 * @description Add a book sale
 * @route POST /addBookSale
 * @param {string} title - The title of the book
 * @param {string} author - The author of the book
 * @param {number} cost - The cost of the book
 * @param {string} genre - The genre of the book
 * @param {string} purchaserName - The name of the purchaser
 * @param {string} purchaserEmail - The email of the purchaser
 * @param {string} saleDate - The date of the sale
 * @returns {object} 201 - The book sale that was added
 * @returns {Error} 500 - An error message
 */
export const addBookSale = async (req, res) => {
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
};

/**
 * @description Update a book sale
 * @route PUT /updateBookSale
 * @param {string} title - The title of the book
 * @param {string} author - The author of the book
 * @param {number} cost - The cost of the book
 * @param {string} genre - The genre of the book
 * @param {string} purchaserName - The name of the purchaser
 * @param {string} purchaserEmail - The email of the purchaser
 * @param {string} saleDate - The date of the sale
 * @returns {object} 200 - The book sale that was updated
 * @returns {Error} 500 - An error message
 */
export const updateBookSale = async (req, res) => {
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
};

/**
 * @description Delete a book sale
 * @route DELETE /deleteBookSale
 * @param {string} id - The id of the book sale
 * @returns {object} 200 - A message that the book was deleted
 * @returns {Error} 500 - An error message
 */
export const deleteBookSale = async (req, res) => {
	try {
		// delete the book
		const _id = req.query.id;

		// delete by id or name?
		await BookSale.findOneAndRemove({ _id });
		res.status(200).json({ message: 'Book deleted' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
