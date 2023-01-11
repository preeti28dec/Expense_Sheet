import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  deletesPostApi,
  getUserTodos,
  patchPostApi,
  postPostApi,
  putPostApi,
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
  const { id } = useParams();

  console.log(id, "fgdfgdf");

  const PostData = async () => {
    const res = await postPostApi({
      id: Math.random().toString(),
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
      userId: 1,
    });
    setSheet((s) => [
      ...s,
      {
        Title: enteredTitle,
        Amount: enteredAmount,
        Date_: enteredDate,
        userId: 1,
      },
    ]);
    localStorage.setItem("userData", JSON.stringify(res));
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  const putMethode = async () => {
    const res = await putPostApi(
      {
        id: 1,
        title: "put data",
        body: "check put api",
        userId: 1,
      },
      1
    );
    setDatas(res);
  };

  const handleDelete = (s) => {
    setSheet(sheet.filter((el) => el !== s));
  };
  const deleteData = async (s) => {
    const res = await deletesPostApi(updateData);
    // setDatas(res);
    setSheet(res.filter((el) => el !== s));
  };
  const patchData = async () => {
    const res = await patchPostApi(
      {
        id: 1,
        title: "patchdata",
        body: "check api",
        userId: 1,
      },
      1
    );
    setDatas(res);
  };

  return (
    <Root>
      <div className="text-3xl font-bold my-2 text-center">Expense Sheet</div>
      <div className="text-center text-red-500 my-4 p-2 rounded">
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 text-black border-[#ccc] rounded-md"
          placeholder="Enter Change words"
          value={title}
        />
      </div>

      <div className=" rounded-xl  w-[95%] sm:w-[50%] bg-[#a892ee] p-4 my-8  mx-auto">
        <div className="flex flex-wrap gap-4 text-left mb-4">
          <div className="new-expense__control">
            <label className="font-bold mb-2 block">Title</label>
            <input
              type="text"
              value={enteredTitle}
              className="p-2 text-black border-[#ccc] rounded-md w-full"
              placeholder="Enter Item Name"
              onChange={(e) => setEnteredTitle(e.target.value)}
            />
          </div>
          <div className="new-expense__control">
            <label className="font-bold mb-2 block">Amount</label>
            <input
              type="number"
              value={enteredAmount}
              className="p-2 text-black border-[#ccc] rounded-md w-full"
              placeholder="Enter Item Amount"
              min="0.01"
              step="0.01"
              onChange={(e) => setEnteredAmount(e.target.value)}
            />
          </div>
          <div className="new-expense__control ">
            <label className="font-bold mb-2 block ">Date</label>
            <input
              type="date"
              value={enteredDate}
              className="p-2 text-black border-[#ccc] rounded-md w-full"
              onChange={(e) => setEnteredDate(e.target.value)}
            />
          </div>
        </div>
        <div className="text-right my-4">
          <button
            type="submit"
            className=" rounded p-2 bg-[#40005d]"
            onClick={PostData}
          >
            Add Expense
          </button>
        </div>
        <hr />
        <div className="my-4 border">
          <div className="flex justify-between flex-wrap">
            <div className=" p-1 ">Title</div>
            <div className=" p-1 ">Amount</div>
            <div className=" p-1 ">Date</div>
          </div>
          <hr className="my-2" />
          {sheet.map((i, ind) => {
            return (
              <>
                <div key={ind} onClick={() => setUpdateData(ind + 1)}>
                  <div className="flex flex-wrap justify-between ">
                    <div className=" text-sm p-1">{i.Title}</div>
                    <div className=" text-sm p-1">{i.Amount}</div>
                    <div className=" text-sm p-1">{i.Date_}</div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <div>
                      <button
                        className="mx-2  rounded p-1 text-sm bg-[#40005d] hover:bg-[#762a99]"
                        onClick={() => {
                          handleDelete(i);
                        }}
                        // onClick={deleteData}
                      >
                        delete
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={patchData}
                        className=" p-1 text-sm mx-2 rounded px-3  bg-[#40005d]  hover:bg-[#762a99]"
                      >
                        update
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={putMethode}
                        className=" p-1 text-sm mx-2 rounded px-3  bg-[#40005d] hover:bg-[#762a99]"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                  <hr className="my-1"/>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </Root>
  );
};

export default ExpenseForm;
const Root = styled.div``;
