import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const ShowEmp = () => {
  const [empList, setEmpList] = useState([]);

  const fetchEmpList = async () => {
    const response = await axios.get("http://localhost:3000/emp");
    setEmpList(response.data.empList);
  };

  useEffect(() => {
    fetchEmpList();
  }, []);

  return (
    <div className="w-fit max-w-5xl mx-auto grid grid-cols-3 gap-2.5">
      {empList.length > 0 &&
        empList.map((post) => {
          return (
            <div key={post._id} className="flex flex-col justify-center items-center gap-2.5 p-2.5 rounded-xl bg-neutral-300 w-xs text-center text-neutral-500 font-semibold">
              <img src={post.empImage} alt="" className="w-25 aspect-square rounded-full object-center object-cover"/>
              <div>
                <h2>{post.empName}</h2>
                <h2>{post.empAge}</h2>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ShowEmp;
