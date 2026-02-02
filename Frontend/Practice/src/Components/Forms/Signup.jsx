import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { signupApi } from "../../service/authapi";
import { useState } from "react";
const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    fullName: "",
    profileImage: "",
  });
  const navigate = useNavigate();

  function handleChange(name, value) {
    setForm({
      ...form,
      [name]: value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData();
    form.append("emailAddress", obj.email);
    form.append("password", obj.password);
    form.append("fullName", obj.fullName);
    form.append("profileImage", obj.profileImage);

    const isSigned = await signupApi(form);
    if (isSigned) {
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
          {profileImage && (
            <img
              src={URL.createObjectURL(profileImage)}
              alt="preview"
              className="w-20 h-20 rounded-full"
            />
          )}

          <input
            type="file"
            onChange={(e) => handleChange("profileImage", e.target.files[0])}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Enter your Name"
            value={fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => handleChange("emailAddress", e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => handleChange("password", e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Signup
          </button>
        </form>

        <Link to={"/login"}>Already have not account</Link>
      </div>
    </div>
  );
};

export default Signup;
