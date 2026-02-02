import React, { useState } from "react";
import { loginApi } from "../../service/authapi";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [obj, setObj] = useState({
    emailAddress: "",
    password: "",
  });
  
function handleChange(name , value) {
 setObj({
  ...obj ,
  [name] : value
 })
}  
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const isLogged = await loginApi(obj);
    if (isLogged) {
      console.log("run");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={obj.email}
            onChange={(e)=>{handleChange("emailAddress" , e.target.value)}}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={obj.password}
            onChange={(e)=>{handleChange("password" , e.target.value)}}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <Link to={"/signup"}>Create an account</Link>
      </div>
    </div>
  );
};

export default Login;
