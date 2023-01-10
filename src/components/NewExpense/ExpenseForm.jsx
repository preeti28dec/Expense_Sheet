import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { postProductApi } from "../../network/api";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [postData, setPostData] = useState([]);
  const [sheet, setSheet] = useState([]);

  const PostData = async () => {
    const res = await postProductApi({
      id: 102,
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    });
    setPostData(res);
  };
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
    localStorage.setItem("userData", JSON.stringify(sheet));
  };
  console.log(sheet.length);
  const handleDelete = (s) => {
    setSheet(sheet.filter((el) => el !== s));
  };
  console.log(postData, "user postData");
  return (
    <Root>
      <div className="new-expense bg-[#a892ee] p-4 my-8 mx-auto">
        <div className="flex flex-wrap gap-4 text-left mb-4">
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
        <div className="text-right my-4">
          <button
            type="submit"
            className=" rounded p-2 bg-[#40005d]"
            onClick={() => {
              submitHandler();
              PostData();
            }}
          >
            Add Expense
          </button>
        </div>
        <hr />
        <div>
          <table>
            <tr>
              <th className="border p-2">Title</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Date</th>
            </tr>
            {sheet.map((i, ind) => {
              return (
                <>
                  <tr key={ind}>
                    <td className="border p-2">{i.Title}</td>
                    <td className="border p-2">{i.Amount}</td>
                    <td className="border p-2">{i.Date_}</td>
                    <button
                      className="mx-2  rounded p-2 bg-[#40005d]"
                      onClick={() => {
                        handleDelete(i);
                      }}
                    >
                      delete
                    </button>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </Root>
  );
};

export default ExpenseForm;
const Root = styled.div`
  .new-expense__control label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }

  .new-expense__control input {
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 100%;
    color: black;
  }
  .new-expense {
    width: 51%;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  }
`;
