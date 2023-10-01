import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
	rating: { type: Number, required: true },
	text: { type: String },
	customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
	book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;
