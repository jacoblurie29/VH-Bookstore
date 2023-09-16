import mongoose from "mongoose";

const bookSaleScheme = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  purchaserName: {
    type: String,
    required: true,
  },
  purchaserEmail: {
    type: String,
    required: true,
  },
  saleDate: {
    type: String,
    required: true,
  },
});

const BookSale = mongoose.model("BookSale", bookSaleScheme);

export default BookSale;
