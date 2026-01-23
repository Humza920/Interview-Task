import {Outlet , Navigate , useRoutes} from "react-router-dom"
import Login from "./src/Components/Forms/Login"
import Signup from "./src/Components/Forms/Signup"
export const Routes = () => {

  const ProtectedRoute = ({children})=>{
    if (!token) {
      <Navigate to={"/login"} replace/>
    }
  }

  const routes = useRoutes([
    {
      element : <Dashboard /> , 
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
