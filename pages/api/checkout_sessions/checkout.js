import Stripe from "stripe";
import mongoose from "mongoose";
import Mongoose from "../../../utils/Mongoose";

import { validateCartItems } from "use-shopping-cart/src/serverUtil";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2020-03-02",
});

const Products = mongoose.model("products");

export default async (req, res) => {
  await Mongoose();

  const cartItems = req.body;
  const parseKeys = Object.keys(cartItems);
  const inventory = await Products.find({ _id: { $in: parseKeys } });
  const line_items = validateCartItems(inventory, cartItems);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    success_url: "http://www.google.com",
    cancel_url: "http://www.google.com",
  });

  res.json({ id: session.id });
};
