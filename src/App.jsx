import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Common/Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Common/Footer";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
