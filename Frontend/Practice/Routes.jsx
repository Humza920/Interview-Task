import {Outlet , Navigate , useRoutes} from "react-router-dom"
import Login from "./src/Components/Forms/Login"
import Signup from "./src/Components/Forms/Signup"
import Dashboard from "./src/Pages/Dashboard"
export const Routes = () => {

  const routes = useRoutes([
    {
      path : "/dashboard" , element : <Dashboard />  
    },
    {
      path : "/login" , element : <Login />
    },
    {
      path : "/signup" , element : <Signup />
    }
  ])
  return routes
}
