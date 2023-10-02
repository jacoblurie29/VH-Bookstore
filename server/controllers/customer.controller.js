import Customer from '../models/customer.model.js';

export const getCustomer = async (req, res) => {
	try {
        const customer = await Customer.find({});
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find({});
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addCustomer = async (req, res) => {
	try {
		const { name, email, address, orders } = req.body;
		const customer = new Customer({
			name,
            email,
            address,
            orders,
		});

		await customer.save();

		res.status(201).json(customer);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const updateCustomer = async (req, res) => {
	try {
		const { name, email, address, orders } = req.body;

		const _id = req.query.id;

		const newCustomer = await Customer.findOneAndUpdate(
			{ _id },
			{
				name,
                email,
                address,
                orders,
			},
			{ new: true }
		);

		res.status(200).json(newCustomer);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const deleteCustomer = async (req, res) => {
    try {
        const _id = req.query.id;

        await Customer.findOneAndDelete({ _id });
        res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
