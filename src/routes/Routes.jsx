import { createBrowserRouter } from "react-router";
import Roots from "../lauout/Roots";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots/>,
    children:[
        {
            path:"/",
            element: <Home/>
        },
        {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <SignUp />
      }
    ]
  },
]);

export default router;