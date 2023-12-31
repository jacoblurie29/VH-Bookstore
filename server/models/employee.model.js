import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, unique: true, required: true },
	position: { type: String, required: true },
	startDate: { type: Date, default: Date.now },
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
