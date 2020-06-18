import React, { useState } from "react";

export const AddTransaction = () => {
  const [description, setDescription] = useState();
  const [transactionAmount, setTransactionAmount] = useState();

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Enter Transaction Details"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="transactionAmount">Transaction Amount</label>
          <input
            type="number"
            id="transactionAmount"
            placeholder="Enter Transaction Amount"
            value={transactionAmount}
            onChange={(e) => setTransactionAmount(e.target.value)}
            required
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};
