import React, { useState } from "react";
import styled from "styled-components";
import {
  deletesProductApi,
  patchProductApi,
  postProductApi,
} from "../../network/api";
import { useParams } from "react-router-dom";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [sheet, setSheet] = useState([]);
  const [updateData, setUpdateData] = useState(0);
  const [title, setTitle] = useState("");
  const [datas, setDatas] = useState([]);
  const {id} = useParams();
  
console.log(id,"fgdfgdf");
  const PostData = async () => {
    const res = await postProductApi({
      id:Math.random().toString(),
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    });
    setSheet((s) => [
      ...s,
      {
        Title: enteredTitle,
        Amount: enteredAmount,
        Date_: enteredDate,
      },
    ]);
    localStorage.setItem("userData", JSON.stringify(sheet));
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  const handleDelete = (s) => {
    setSheet(sheet.filter((el) => el !== s));
  };

  const patchData = async () => {
    const res = await patchProductApi(
      { title: title, price: 4444 },
      updateData
    );
    setDatas(res);
  };
  const deleteData = async (s) => {
    const res = await deletesProductApi(updateData);
    // setDatas(res);
    setSheet(res.filter((el) => el !== s));
  };

  console.log(updateData,"1111");
  return (
    <Root>
   <div className="text-center text-red-500 my-4 p-2 rounded"> <input onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Change words" value={title}/></div>
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
            onClick={
              PostData
            }
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
                  <tr key={ind}  onClick={() => setUpdateData(ind+1)}>
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
                    <button
                      onClick={patchData}
                      className="border m-2 rounded px-3  bg-green-600"
                    >
                      upadte data
                    </button>
                    <button
                      onClick={deleteData}
                      className="border my-2 rounded px-3  bg-red-600"
                    >
                      Delete
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
