import React from "react";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";
import { NWC } from "../../utils/format";

export const IncomeExpense = () => {
  const transactions = useSelector((state) => state.transactions);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0);
  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, item) => (acc += item), 0);

  return !income ? (
    <></>
  ) : (
    <Container className=" IEAT shadow p-3 mb-5 bg-white rounded d-flex justify-content-around w-50">
      <div>
        <h4>Income</h4>
        <p className="text-success">NGN {NWC(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="text-danger">-NGN {NWC(Math.abs(expense))}</p>
      </div>
    </Container>
  );
};
