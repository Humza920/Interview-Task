import { Navigate,useRoutes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Components/Forms/Login";
import Signup from "./Components/Forms/Signup";
import { useEffect, useState } from "react";
import { checkAuthApi } from "./service/authapi";

export function Routes() {

  const PrivateRoute = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false);

    useEffect(() => {
      const checkAuth = async () => {
        try {
          const userData = await checkAuthApi();
          console.log(userData);
          if (userData) {
            console.log("user");
            setUser(userData);
          }
        } catch (error) {
          console.log(error.message);
          setUser(false)
        } finally {
          setLoading(false);
        }
      };
      checkAuth();
    }, []);
console.log(user);

    return (
      <>
        {loading ? <p>Loading</p> : user ? children : <Navigate to={"login"} />}
      </>
    );
  };

  const routes = useRoutes([
    {
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
      path: "/",
    },
    {
      element: <Login />,
      path: "/login",
    },
    {
      element: <Signup />,
      path: "/signup",
    },
  ]);
  return routes;
}
