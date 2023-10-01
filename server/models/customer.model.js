import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, unique: true, required: true },
	address: { type: String },
	orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BookSale' }],
});

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;
