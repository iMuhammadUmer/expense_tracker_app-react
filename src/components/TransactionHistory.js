import React, { useContext } from "react";
import { initialTransactions } from "../context/GlobalState";
import { Transaction } from "../components/Transaction";

export const TransactionHistory = () => {
  const { transactions } = useContext(initialTransactions);

  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
