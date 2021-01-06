import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Asynchronously load Stripe and make it available in the application
export const stripePromise = loadStripe(
  "pk_test_51I6OvTEjROIhSv1mvAXypKVvoJuVxM9cniUTvJthufUOcDTLpBpKm60k8pVH8uZSaz1s380XL1jFrHbAUtMUo2F600pxJiN2O6"
);

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
