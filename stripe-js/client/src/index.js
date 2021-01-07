import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { FirebaseAppProvider } from "reactfire";

// Asynchronously load Stripe and make it available in the application
export const stripePromise = loadStripe(
  "pk_test_51I6OvTEjROIhSv1mvAXypKVvoJuVxM9cniUTvJthufUOcDTLpBpKm60k8pVH8uZSaz1s380XL1jFrHbAUtMUo2F600pxJiN2O6"
);

export const firebaseConfig = {
  apiKey: "AIzaSyBwrrqhg1twRcXl_x_U8H5sHvkSZFfHAts",
  authDomain: "stripe-js-49b59.firebaseapp.com",
  projectId: "stripe-js-49b59",
  storageBucket: "stripe-js-49b59.appspot.com",
  messagingSenderId: "710997074210",
  appId: "1:710997074210:web:a8f2c9b84667ba8260c57b",
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
