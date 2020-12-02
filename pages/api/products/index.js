// function connect helper
import Mongoose from "../../../utils/Mongoose";
import Products from "../../../models/Product";

// export async function getProducts(id) {
//   await Mongoose();

//   const products = await Products.find({});
//   console.log("AAAAAAAAAA");
//   return products;
// }
/**
 * @param {Date} myDate The date
 * @param {string} myString The string
 */
export async function getProducts(id) {
  await Mongoose();
  let products;
  if (!id) {
    products = await Products.find({}).lean();
  } else {
    products = await Products.findOne({ sku: id }, { _id: 0 }).lean();
  }

  return products;
}

const getAllProducts = async (req, res) => {
  await Mongoose();

  const { method } = req;

  switch (method) {
    case "GET":
      const Items = await Products.find({});
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

export default getAllProducts;
