import React, { useState } from "react";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [sheet, setSheet] = useState([]);
  const submitHandler = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setSheet((s) => [
      ...s,
      {
        Title: enteredTitle,
        Amount: enteredAmount,
        Date_: enteredDate,
      },
    ]);
    localStorage.setItem('userData',JSON.stringify(sheet))
  };
  console.log(sheet.length);
  const handleDelete = (s) => {
    setSheet(sheet.filter((el) => el !== s));
  };

  return (
    <div className="new-expense">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            placeholder="Enter Item Name"
            onChange={(e) => setEnteredTitle(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            placeholder="Enter Item Amount"
            min="0.01"
            step="0.01"
            onChange={(e) => setEnteredAmount(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={(e) => setEnteredDate(e.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={submitHandler}>
          Add Expense
        </button>
      </div>
      <div>
        {sheet.map((i, ind) => {
          return (
            <>
              <div key={ind} className="">
                {i.Title}
                {i.Amount}
                {i.Date_}
              </div>
              <button
                onClick={() => {
                  handleDelete(i);
                }}
              >
                delete
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ExpenseForm;
