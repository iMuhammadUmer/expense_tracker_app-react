import React from "react";
import "./App.css";
import { Header } from "./components/Header.js";
import { Balance } from "./components/Balance.js";
import { AccountSummary } from "./components/AccountSummary";
import { TransactionHistory } from "./components/TransactionHistory";
import { AddTransaction } from "./components/AddTransaction";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
