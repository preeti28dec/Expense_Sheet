import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPostApi } from "../../network/api";
export default function GetPosts() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const GetData = async () => {
      const res = await getPostApi();
      setData(res);
    };
    GetData();
  }, []);
  return (
    <div>
       <div className="text-3xl font-bold my-2 text-center">Users Posts</div>
      <div className="text-center my-4">
        <input
          placeholder="Enter Change  words"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-red-500 p-2 rounded outline-none"
        />
      </div>
      <div className="flex flex-wrap gap-2 ">
        {data
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
                </div>
                
              </div>
            );
          })}
      </div>
    </div>
  );
}
