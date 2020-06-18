import { createContext } from "react";

const initialTransactions = {
  transactions: [
    { amount: 100, desc: "Cash" },
    { amount: -40, desc: "Book" },
    { amount: -200, desc: "Camera" },
  ],
};

export const TransactionContext = createContext(initialTransactions);
