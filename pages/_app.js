import "../style/index.css";
import TopNavbar from "../components/layout/TopNavbar";

import { loadStripe } from "@stripe/stripe-js";
import { CartProvider } from "use-shopping-cart";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <CartProvider
        mode="checkout-session"
        stripe={stripePromise}
        currency="USD"
        allowedCountries={["US"]}
        billingAddressCollection={true}
      >
        <TopNavbar {...pageProps} />
        <Component {...pageProps}></Component>
      </CartProvider>
    </div>
  );
}
