import React, { useEffect, useState } from "react";
import { fetchTransactions } from "./api/transactionApi";
import DataEntry from "./DataEntry";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      const data = await fetchTransactions();
      setTransactions(data);
    };

    getTransactions();
  }, []);

  return (
    <div>
      <h1>Transaction Dashboard</h1>
      <DataEntry />
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.amount} {transaction.currency} at{" "}
            {new Date(transaction.timestamp).toLocaleTimeString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
