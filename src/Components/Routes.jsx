import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// Import All Pages
import Home from "./../Pages/Home";
import AddCoffe from "./../Pages/AddCoffe";
import CoffeDetails from "./../Pages/CoffeDetails";
import UpdateCoffe from "./../Pages/UpdateCoffe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-coffe",
        element: <AddCoffe />,
      },
      {
        path: "/coffe-details",
        element: <CoffeDetails />,
      },
      {
        path: "/update-coffe",
        element: <UpdateCoffe />,
      },
    ],
  },
]);

export default router;