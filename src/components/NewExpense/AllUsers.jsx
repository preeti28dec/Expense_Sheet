import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  deletesProductApi,
  getalbumsApi,
  getProductApi,
  patchProductApi,
  postProductApi,
} from "../../network/api";

export default function AllUsers() {
  // const router=Navigation()
  const [data, setData] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [datas, setDatas] = useState([]);
  const [updateData, setUpdateData] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const GetData = async () => {
      const res = await getProductApi();
      setData(res);
    };
    GetData();
  }, []);
  useEffect(() => {
    const GetData = async () => {
      const res = await getalbumsApi();
      setAlbums(res);
    };
    GetData();
  }, []);

  const patchData = async () => {
    const res = await patchProductApi(
      { title: title, price: 4444 },
      updateData
    );
    setDatas(res);
  };
  const deleteData = async () => {
    const res = await deletesProductApi(updateData);
    setDatas(res);
  };

  return (
    <Root>
      <div className="text-3xl font-bold my-2 text-center">AllUsers</div>
      <div className="text-center my-4">
        <input
          placeholder="Enter Change  words"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-red-500 p-2 rounded outline-none"
        />
      </div>
      {/* <div className="flex flex-wrap gap-2">
        {data.map((i) => {
          return (
            <div
              key={i.id}
              className="border w-[250px] rounded px-2"
              onClick={() => setUpdateData(i.id)}
            >
              <div className="">{i.id}</div>
            </div>
          );
        })}
      </div> */}
      <div className="text-3xl font-bold my-2 text-center">User Albums</div>
      <div className="flex flex-wrap gap-2 ">
        {albums.map((i) => {
          return (
            <div
              key={i.id}
              className="border w-full sm:w-[300px] mx-4 rounded px-2"
              onClick={() => setUpdateData(i.id)}
            >
              <div className="flex gap-2">
              <div className="text-gray-300">{i.id}</div>
              <div className="title">Title :{i.title}</div>
              </div>
              <img
                src={i.thumbnailUrl}
                alt="loding images"
                className="w-full object-cover"
              />
              <div className="">
                <Link to="/expense-form">
                  <button className="border my-2 rounded px-3  bg-blue-700">
                    Expense sheet
                  </button>
                </Link>
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
              </div>
            </div>
          );
        })}
      </div>
    </Root>
  );
}

const Root = styled.div`
  .title{
  height: 30px;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  }
`;
