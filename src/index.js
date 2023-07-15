import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contextFolder/AuthContext";
import { FeedListProvider } from "./contextFolder/FeedListContext";
import { ErrorProvider } from "./contextFolder/ErrorContext";

// Call make Server
makeServer();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <FeedListProvider>
          <ErrorProvider>
            <App />
          </ErrorProvider>
        </FeedListProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
