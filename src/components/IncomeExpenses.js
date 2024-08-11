import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

// To calculate income and expense for the tracker
const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  //create an array for amounts
  const amounts = transactions.map((transaction) => transaction.amount);

  //function to calculate total
  const calculateTotal = (total, item) => {
    return total + parseInt(item);
  };
  //below .filter function filters out data based on given condition(item>0)
  //.reduce functon will call a function to calculate the total
  const income = amounts.filter((item) => item > 0).reduce(calculateTotal);
  const expense = amounts.filter((item) => item < 0).reduce(calculateTotal);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        {/* Math.abs() is used to print the absolute value irrespective of negative or positive */}
        <p className="money minus">${Math.abs(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
