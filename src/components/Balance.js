import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);

  const calculateBalance = (total, num) => {
    return total + parseInt(num);
  };
  const balance = amount.reduce(calculateBalance);

  return (
    <>
      <h4>Your Balance:</h4>
      <h1>${balance}</h1>
    </>
  );
};

export default Balance;
