import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getalbumsApi, getProductApi } from "../../network/api";

export default function AllUsers() {
  const [data, setData] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   const GetData = async () => {
  //     const res = await getProductApi();
  //     setData(res);
  //   };
  //   GetData();
  // }, []);
  useEffect(() => {
    const GetData = async () => {
      const res = await getalbumsApi();
      setAlbums(res);
    };
    GetData();
  }, []);

  return (
    <Root>
      <div className="text-3xl font-bold my-2 text-center">AllUsers</div>
      <div className="text-center my-4">
        <input
          placeholder="Enter Change  words"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-red-500 p-2 rounded outline-none"
        />
      </div>
      <div className="text-3xl font-bold my-2 text-center">User Albums</div>
      <div className="flex flex-wrap gap-2 ">
        {albums
          .filter((i) => {
            if (search === "") {
              return i;
            } else if (
              i.title.toLowerCase().includes(search.toLocaleLowerCase())
            ) {
              return i;
            }
          })
          .map((i) => {
            return (
              <div
                key={i.id}
                className="border w-full sm:w-[300px] mx-4 rounded px-2"
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
                  <Link to={`/expense-form/${i.id}`}>
                    <button className="border my-2 rounded px-3  bg-blue-700">
                      Expense sheet
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </Root>
  );
}

const Root = styled.div`
  .title {
    height: 30px;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
