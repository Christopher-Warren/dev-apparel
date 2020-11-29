// function connect helper
import Mongoose from "../../../../utils/Mongoose";
import Products from "../../../../models/Product";

export default async (req, res) => {
  await Mongoose();

  const {
    method,
    query: { category },
  } = req;

  switch (method) {
    case "GET":
      const Items = await Products.find({ category });
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
