import React from "react";
import "./App.css";
import { Header } from "./components/Header.js";
import { Balance } from "./components/Balance.js";
import { AccountSummary } from "./components/AccountSummary";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <AccountSummary />
      </div>
    </div>
  );
}

export default App;
