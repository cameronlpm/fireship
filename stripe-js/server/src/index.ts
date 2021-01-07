// Environment variables (Stripe API key)
import { config } from "dotenv";

if (process.env.NODE_ENV !== "production") {
  config();
}

// Import Stripe SDK
import Stripe from "stripe";
// Instantiate Stripe client using API key which allows us to make API calls from Node
export const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: "2020-08-27",
});

// Start the API with Express
import { app } from "./api";
const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`API available on http://localhost:${port}`)
);
