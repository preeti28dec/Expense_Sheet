import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getalbumsApi } from "../../../network/api";

export default function GetAlbums() {
  const [albums, setAlbums] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const GetData = async () => {
      const res = await getalbumsApi();
      setAlbums(res);
    };
    GetData();
  }, []);
  return (
    <Root>
      <div className="text-3xl font-bold my-2 text-center">User Albums Photos</div>
      <div className="text-center my-4">
        <input
          placeholder="Enter Change  words"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-red-500 p-2 rounded outline-none"
        />
      </div>
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
                <Link to={`/albums/${i.userId}/photos`}>
                  <button className="border my-2 rounded px-1 mx-1 text-sm  bg-blue-700">
                    Photos
                  </button>
                </Link>
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
