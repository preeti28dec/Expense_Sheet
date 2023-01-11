import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserData } from "../../network/api";

export default function AllUsers() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const GetData = async () => {
      const res = await getUserData();
      setData(res);
    };
    GetData();
  }, []);
  return (
    <div>
      <div className="text-3xl font-bold my-2 text-center">AllUsers</div>
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
                className="border w-full sm:w-[30%] mx-4 rounded px-2"
              >
                <div className="">
                  <div className="text-right ">{i.id}</div>
                  <div className="text-gray-300">
                    Name: {i.name} {i.username}
                  </div>
                  <div>Email: {i.email}</div>
                  <div>Website: {i.website}</div>
                  <div>Phone: {i.phone}</div>
                  <div>company name: {i.company.name}</div>
                </div>
                <hr />
                <div className="flex gap-2 flex-wrap">
                  Address :{i.address.city} {i.address.street}
                  <div>{i.address.suite}</div>
                </div>
                <div>PinCode: {i.address.zipcode}</div>

                <div className="">
                  <Link to={`/expense-form/${i.id}`}>
                    <button className="border my-2 rounded px-1 mx-1 text-sm  bg-blue-700">
                      Expense sheet
                    </button>
                  </Link>
                  <Link to={`/users/${i.id}/albums`}>
                    <button className="border my-2 rounded px-1 mx-1 text-sm  bg-blue-700">
                      Albums
                    </button>
                  </Link>
                  <Link to={`/posts/${i.id}/comments`}>
                    <button className="border my-2 rounded px-1 mx-1 text-sm  bg-blue-700">
                      Comments
                    </button>
                  </Link>
                  <Link to={`/users/${i.id}/todos`}>
                    <button className="border my-2 rounded px-1 mx-1 text-sm  bg-blue-700">
                      Todos List
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
