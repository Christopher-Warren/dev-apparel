import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  sku: String,
  title: String,
  name: String,
  price: String,
  pprice: Number,
  currency: String,
  description: String,
  category: String,
  tech: String,
  type: String,
  images: [],
  image: String,
});

export default mongoose.models.products ||
  mongoose.model("products", productSchema);
