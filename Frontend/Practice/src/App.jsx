// import { BrowserRouter } from "react-router-dom";
// import { Routes } from "../Routes";

// const App = () => {
//   return (
//     <>
//       <Toaster position="top-right" />
//       <BrowserRouter>
//       <Routes />
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;

import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Routes } from "../Routes";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    const userData = getUser();
    console.log("user ==>", userData);

    if (userData) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
