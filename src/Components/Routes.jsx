import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// Import All Pages
import Home from "./../Pages/Home";
import AddCoffe from "./../Pages/AddCoffe";
import CoffeDetails from "./../Pages/CoffeDetails";
import UpdateCoffe from "./../Pages/UpdateCoffe";
import ErrorPage from "../Pages/ErrorPage";
import Signup from "../Pages/Signup";
import Users from "../Pages/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: ()=> fetch("http://localhost:5000/coffes")
      },
      {
        path: "/add-coffe",
        element: <AddCoffe />,
      },
      {
        path: "/coffe-details/:id",
        element: <CoffeDetails />,
        loader:({params})=>fetch(`http://localhost:5000/coffes/${params.id}`)
      },
      {
        path: "/update-coffe/:id",
        element: <UpdateCoffe />,
        loader: ({params})=>fetch(`http://localhost:5000/coffes/${params.id}`)
      },
      {
        path: "/sign-up",
        element: <Signup/>
      },
      {
        path: "/users",
        element: <Users/>,
        loader:()=>fetch("http://localhost:5000/users")
      }
    ],
  },
]);

export default router;