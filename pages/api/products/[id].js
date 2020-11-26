import mongoose, { Schema } from "mongoose";

mongoose
  .connect(process.env.MONGODB_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo Connected"));

let Products;

try {
  Products = mongoose.model("products", new Schema({}));
  console.log("Model already exists");
} catch (error) {
  Products = mongoose.model("products");
  console.log(Products, "model created");
}

export default async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      const Items = await Products.findById(id);
      if (Items === null) {
        return res
          .status(200)
          .json({ success: false, error: "No Products Found" });
      } else {
        res.status(200).json({ Items });
      }
      break;
    default:
      res.status(400).json({ success: false });
  }
};
