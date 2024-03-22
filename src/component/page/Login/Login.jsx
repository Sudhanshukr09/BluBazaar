import axios from "axios";
import React from "react";
import { useState } from "react";
import LoginBg from '../../../Assets/Back.jpg'
import Layout from "../../Layout/Layout";

const Login = () => {
  const [data, setdata] = useState({ username: "", password: "" });
  const handleData = (e) => {
    setdata(e.target.value);
  };
  const handleuser = async () => {
    await axios
      .post("https://jsonplaceholder.typicode.com/users", data)
      .then((res) => console.log(res));
  };
  return (
    <>
      <Layout>
        <div className="h-[100vh] flex items-center justify-center relative flex-col">
          <img src={LoginBg} className=" h-[100vh] w-full object-cover absolute"/>
          <div className="bg-black absolute h-[100%] opacity-50 w-full">cgfgvgffhjfgjfghftufkfghfufufufg</div>
          <div className="bg-slate-100 p-10 rounded absolute text-center ">
            <h1 className="mb-10 font-bold text-3xl">Login</h1>
            <div className="flex flex-col gap-4 mb-4">
              <input
                value={data.username}
                onChange={handleData}
                name="username"
                type="text"
                placeholder="Username"
                className="border-2 pl-2 focus:outline-none"
                autoComplete="No"
              />
              <input
                value={data.password}
                onChange={handleData}
                name="password"
                type="password"
                placeholder="Password"
                className="border-2 pl-2 focus:outline-none"
              />
            </div>
            <button
              className="bg-blue-500 text-white mt-5 font-semibold w-full py-1 rounded"
              onClick={handleuser}
            >
              Sign up
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
