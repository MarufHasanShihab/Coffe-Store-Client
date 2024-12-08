import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Common/Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default App;
