import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
	title: { type: String, required: true },
	author: { type: String, required: true },
	genre: { type: String, required: true },
	ISBN: { type: String, unique: true },
	price: { type: Number, required: true },
	stock: { type: Number, required: true },
	reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
