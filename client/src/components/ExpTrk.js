import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "reactstrap";
import { AddTransaction } from "./expenseTracker/AddTransaction";
import { Balance } from "./expenseTracker/Balance";
import { Header } from "./expenseTracker/Header";
import { IncomeExpense } from "./expenseTracker/IncomeExpense";
import { TransactionList } from "./expenseTracker/transactions/TransactionList";
import "./expenseTracker/expTrk.css";
import { useDispatch } from "react-redux";
import { getTransactions } from "../actions/transactionActions";

export const ExpTrk = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dispatch(getTransactions())
    setLoading(false)
  }, [dispatch]);
  return loading ? (
    <div>
      <Spinner color="dark" /> <h4>Loading</h4>
    </div>
  ) : (
    <div>
      <Container>
        <Header />
      </Container>
      <Row>
        <Col>
          <div>
              <Balance />
              <div >

            <IncomeExpense />
            <AddTransaction />
              </div>
          </div>
        </Col>
        <Col>
          <div color="secondary">
            <TransactionList />
          </div>
        </Col>
      </Row>
    </div>
  );
};
