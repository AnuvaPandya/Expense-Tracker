import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmt, setEnteredAmt] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //  managing one state instead of three
  // const [userInput, setUserInput] = useState({
  //   enteredTitle = "",
  //   enteredAmt = "",
  //   enteredDate
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //   setUserInput({
    //     // ... helps to have all the values in the setUserInput
    //     // object and update only the one with changing value
    //     ...userInput,
    //     enteredTitle : event.target.value,
    //   })
  };

  const amtChangeHandler = (event) => {
    setEnteredAmt(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmt : event.target.value,
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate : event.target.value,
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amt: enteredAmt,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmt("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmt}
            onChange={amtChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="01-01-2019"
            max="31-12-2025"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
